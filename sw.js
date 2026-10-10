/* =========================================================
   TurkmenPedia — service worker
   Caches the app shell so the site keeps working offline /
   on a flaky connection, and works fine at any subpath (e.g.
   GitHub Pages project sites) because every URL below is
   resolved relative to this file's own location.
   ========================================================= */

const CACHE_VERSION = 'turkmenpedia-v6';

// Everything the app needs to run with no network, including the 1.2 MB
// extended dictionary (loaded lazily by the page, cached here up front).
const APP_SHELL = [
  './',
  'index.html',
  'css/style.css',
  'js/icons.js',
  'js/data.js',
  'js/data-extra.js',
  'js/data-new.js',
  'js/genealogy.js',
  'js/names.js',
  'js/dictionary.js',
  'js/dictionary-extended-fa.js',
  'js/sections.js',
  'js/app.js',
  'manifest.json',
  'fonts/Vazirmatn-Regular.woff2',
  'fonts/Vazirmatn-Medium.woff2',
  'fonts/Vazirmatn-SemiBold.woff2',
  'fonts/Vazirmatn-Bold.woff2',
  'fonts/Vazirmatn-ExtraBold.woff2',
  'fonts/Vazirmatn-Black.woff2',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-192.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // One missing file must never abort the whole install (addAll would).
    await Promise.allSettled(APP_SHELL.map((p) => cache.add(new URL(p, self.registration.scope).toString())));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Pages: network first so updates arrive, cache when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match(new URL('index.html', self.registration.scope).toString())))
    );
    return;
  }

  // Assets: serve from cache instantly, refresh in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
