/* =========================================================
   TurkmenPedia — custom SVG icon set (all hand-coded, stroke-based,
   currentColor so they inherit theme + hover colours). No icon
   font / external icon library is used anywhere in the project.
   ========================================================= */
const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 6.5H20.5M3.5 12H20.5M3.5 17.5H14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 5L19 19M19 5L5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.3" stroke="currentColor" stroke-width="1.8"/><path d="M15.2 15.2L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,

  globe: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.3" stroke="currentColor" stroke-width="1.6"/><path d="M3.7 12H20.3M12 3.7C14.5 6.4 15.8 9.1 15.8 12C15.8 14.9 14.5 17.6 12 20.3C9.5 17.6 8.2 14.9 8.2 12C8.2 9.1 9.5 6.4 12 3.7Z" stroke="currentColor" stroke-width="1.5"/></svg>`,

  chevronDown: `<svg viewBox="0 0 24 24" fill="none"><path d="M5.5 9L12 15.5L18.5 9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  chevronSide: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 5.5L15.5 12L9 18.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  arrowUp: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 19V6M12 6L6 12M12 6L18 12" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  sun: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5V5M12 19V21.5M4.2 4.2L6 6M18 18L19.8 19.8M2.5 12H5M19 12H21.5M4.2 19.8L6 18M18 6L19.8 4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,

  moon: `<svg viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4C8 6 8 9.8 10.5 12.3C13 14.8 17 14.8 20 14.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,

  home: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 11L12 4L20 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9.5V19H18V9.5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M10 19V14H14V19" stroke="currentColor" stroke-width="1.7"/></svg>`,

  scroll: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4H16C17.1 4 18 4.9 18 6V17C18 17 18 19 20 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6 4C4.9 4 4 4.9 4 6V17C4 18.1 4.9 19 6 19H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 8H14M8 11.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  swords: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20L11 13M20 4L13 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M4 4L9 6L11 8M20 20L15 18L13 16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>`,

  shirt: `<svg viewBox="0 0 24 24" fill="none"><path d="M8 4L4 7.5L6.5 10.5L8 9.3V20H16V9.3L17.5 10.5L20 7.5L16 4C16 5.7 14.2 7 12 7C9.8 7 8 5.7 8 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,

  bowl: `<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 11H20.5C20.5 15.6 16.7 19 12 19C7.3 19 3.5 15.6 3.5 11Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 11C9 9.5 10 8.3 12 8.3C14 8.3 15 9.5 15 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M12 4.5V6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,

  letters: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 19L8.5 6L13 19M5.5 14.5H11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 10.3C15.2 9.7 16.1 9.4 17 9.4C18.7 9.4 20 10.6 20 12.6V19M20 15.5C20 17.4 18.6 19 17 19C15.7 19 14.8 18.1 14.8 17C14.8 15.8 15.9 15 17.3 15C18.3 15 19.3 15.3 20 15.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 19C3.5 15.7 6 13.5 9 13.5C12 13.5 14.5 15.7 14.5 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M15.5 6.5C17 6.7 18 7.9 18 9.3C18 10.7 17 11.9 15.6 12.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16.5 13.7C18.8 14.2 20.5 16.1 20.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  feather: `<svg viewBox="0 0 24 24" fill="none"><path d="M20 4C13 4 6 9 5 20C13 19.4 18 15 19.5 8.5M8.5 16.5L18.5 6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 16C10.4 14.5 10.2 12.9 10.4 11.3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,

  link: `<svg viewBox="0 0 24 24" fill="none"><path d="M9.5 14.5L14.5 9.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M11 7.5L12.6 5.9C14 4.5 16.3 4.5 17.7 5.9C19.1 7.3 19.1 9.6 17.7 11L16.1 12.6M13 16.5L11.4 18.1C10 19.5 7.7 19.5 6.3 18.1C4.9 16.7 4.9 14.4 6.3 13L7.9 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  horse: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 20L6 14.5C4.5 13.5 4 11.8 5 10L7.5 6C8.3 4.8 9.7 4 11.2 4C13.6 4 15.4 5.8 16.6 8L18 10.5L20 11L18.7 13L17.5 12.7L16.5 15L17 20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="14.2" cy="7.6" r="0.9" fill="currentColor"/></svg>`,

  gem: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4H18L21 9L12 20L3 9L6 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 9H21M9 4L12 9L15 4M12 9L12 20" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,

  yurt: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 19H21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M5 19C5 12.5 7.5 8 12 8C16.5 8 19 12.5 19 19" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10.5 19V15.5H13.5V19" stroke="currentColor" stroke-width="1.4"/><path d="M12 8V4M9.5 5.2H14.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,

  compass: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.3" stroke="currentColor" stroke-width="1.6"/><path d="M14.7 9.3L13 13L9.3 14.7L11 11L14.7 9.3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="currentColor"/></svg>`,

  quote: `<svg viewBox="0 0 24 24" fill="none"><path d="M8.5 6.5C6 7 4.5 9 4.5 12C4.5 14 5.7 15.3 7.3 15.3C8.7 15.3 9.8 14.2 9.8 12.9C9.8 11.6 8.9 10.6 7.6 10.6C7.4 10.6 7.2 10.6 7 10.7C7.3 9 8.3 7.7 9.7 7.1L8.5 6.5Z" fill="currentColor"/><path d="M17 6.5C14.5 7 13 9 13 12C13 14 14.2 15.3 15.8 15.3C17.2 15.3 18.3 14.2 18.3 12.9C18.3 11.6 17.4 10.6 16.1 10.6C15.9 10.6 15.7 10.6 15.5 10.7C15.8 9 16.8 7.7 18.2 7.1L17 6.5Z" fill="currentColor"/></svg>`,

  flag: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 20V4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M6 5C9 3.5 11 6 14 4.5C16 3.5 18 4 18 4V13C18 13 16 12.5 14 13.5C11 15 9 12.5 6 14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5L19 6.3V11C19 15.4 16 18.9 12 20.5C8 18.9 5 15.4 5 11V6.3L12 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 11.5L11 13.5L15.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  book: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 6.3C10.6 5 8.5 4.5 4 4.5V17.5C8.5 17.5 10.6 18 12 19.3C13.4 18 15.5 17.5 20 17.5V4.5C15.5 4.5 13.4 5 12 6.3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 6.3V19.3" stroke="currentColor" stroke-width="1.4"/></svg>`,

  external: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6H6C4.9 6 4 6.9 4 8V18C4 19.1 4.9 20 6 20H16C17.1 20 18 19.1 18 18V15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 4H20V11M20 4L11 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  info: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.3" stroke="currentColor" stroke-width="1.6"/><path d="M12 11V16.5M12 8V8.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,

  landmark: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20H20M5 20V10.5M9 20V10.5M15 20V10.5M19 20V10.5M3 10.5L12 4L21 10.5H3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,

  music: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 17.5C9 18.9 7.8 20 6.5 20C5.2 20 4 18.9 4 17.5C4 16.1 5.2 15 6.5 15C7.2 15 7.7 15.2 8.1 15.5M9 17.5V6.5L18 4.5V15.5M9 17.5C9 16.4 9.6 15.6 10.5 15.3M18 15.5C18 16.9 16.8 18 15.5 18C14.2 18 13 16.9 13 15.5C13 14.1 14.2 13 15.5 13C16.2 13 16.7 13.2 17.1 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  flame: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C12 6 9 7.5 9 11C9 13.2 10.5 14.5 12 14.5C13.5 14.5 15 13.2 15 11C15 9.8 14.3 9 14.3 9C14.3 9 14.6 11 13 12C13.6 10 12 8.5 12 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 15C7 18.3 9.2 20.5 12 20.5C14.8 20.5 17 18.3 17 15C17 13.7 16.6 12.7 16.1 11.9C16.4 13 15.9 14.5 15 15C15.3 13 14 11.8 14 11.8C14.4 13.6 12.6 14.3 12.6 16C12.6 17 13.3 17.4 13.3 17.4C12.2 17.6 11 16.7 11 15.2C11 14.2 11.6 13.6 11.4 12.5C10 13.5 9.5 15 9.8 16.2C8.7 15.3 8.3 13.6 9 12C7.8 12.9 7 14 7 15Z" fill="currentColor" opacity=".18"/></svg>`,

  gear: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 15.3C13.8 15.3 15.3 13.8 15.3 12C15.3 10.2 13.8 8.7 12 8.7C10.2 8.7 8.7 10.2 8.7 12C8.7 13.8 10.2 15.3 12 15.3Z" stroke="currentColor" stroke-width="1.5"/><path d="M19.4 13.5C19.5 13 19.6 12.5 19.6 12C19.6 11.5 19.5 11 19.4 10.5L21.1 9.2C21.3 9 21.3 8.8 21.2 8.6L19.6 5.9C19.5 5.7 19.3 5.6 19 5.7L17 6.5C16.6 6.2 16.1 5.9 15.6 5.7L15.3 3.6C15.3 3.4 15.1 3.2 14.8 3.2H9.6C9.4 3.2 9.2 3.4 9.1 3.6L8.8 5.7C8.3 5.9 7.9 6.2 7.4 6.5L5.4 5.7C5.2 5.6 4.9 5.7 4.8 5.9L3.2 8.6C3.1 8.8 3.1 9 3.3 9.2L5 10.5C5 11 4.9 11.5 4.9 12C4.9 12.5 5 13 5 13.5L3.3 14.8C3.1 15 3.1 15.2 3.2 15.4L4.8 18.1C4.9 18.3 5.2 18.4 5.4 18.3L7.4 17.5C7.9 17.8 8.3 18.1 8.8 18.3L9.1 20.4C9.2 20.6 9.4 20.8 9.6 20.8H14.8C15.1 20.8 15.3 20.6 15.3 20.4L15.6 18.3C16.1 18.1 16.6 17.8 17 17.5L19 18.3C19.3 18.4 19.5 18.3 19.6 18.1L21.2 15.4C21.3 15.2 21.3 15 21.1 14.8L19.4 13.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,

  translate: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6H12M8 4V6M9.5 6C9.2 9 7.5 11.3 5 12.8M6.5 9C7.3 10.5 8.6 11.6 10 12.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 20L16.5 12L20 20M14 17.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  contrast: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.3" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.7V20.3C16 20.3 19 16.6 19 12C19 7.4 16 3.7 12 3.7Z" fill="currentColor"/></svg>`,

  textSize: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 18L8 6L12 18M5.3 14H10.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 18V9.5H19M16.5 9.5V18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  copy: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M15 9V6C15 4.9 14.1 4 13 4H6C4.9 4 4 4.9 4 6V13C4 14.1 4.9 15 6 15H9" stroke="currentColor" stroke-width="1.5"/></svg>`,

  shuffle: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6H7.5L15 17.5H20M15 6H20M4 17.5H7.5L9.5 14.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 3.5L20.5 6L17.5 8.5M17.5 15L20.5 17.5L17.5 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,


  download: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 4V15M12 15L8 11M12 15L16 11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 16V18C4.5 19.1 5.4 20 6.5 20H17.5C18.6 20 19.5 19.1 19.5 18V16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none"><path d="M4.5 12.5L9.5 17.5L19.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  x: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,

  trophy: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 4H17V9C17 12 14.8 14 12 14C9.2 14 7 12 7 9V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 5.5H4.5C4.5 8 5.5 9.5 7.5 9.8M17 5.5H19.5C19.5 8 18.5 9.5 16.5 9.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M12 14V17.5M9 20H15M9.5 20C9.5 18.5 10 17.5 12 17.5C14 17.5 14.5 18.5 14.5 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  grid: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.3" stroke="currentColor" stroke-width="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.3" stroke="currentColor" stroke-width="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.3" stroke="currentColor" stroke-width="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.3" stroke="currentColor" stroke-width="1.5"/></svg>`,

  tag: `<svg viewBox="0 0 24 24" fill="none"><path d="M3.5 12.2V4.5H11.2L20 13.3L13.3 20L3.5 12.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8.5" r="1.4" fill="currentColor"/></svg>`,

  star: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.6L14.5 9.2L20.5 9.8L16 13.9L17.3 19.8L12 16.8L6.7 19.8L8 13.9L3.5 9.8L9.5 9.2L12 3.6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,

  cloud: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 18.2H17.2C19.3 18.2 20.8 16.7 20.8 14.8C20.8 13 19.4 11.6 17.7 11.5C17.4 8.9 15.3 7 12.7 7C10.5 7 8.7 8.4 8.1 10.4C6 10.6 4.4 12.2 4.4 14.3C4.4 16.4 5.5 18.2 7 18.2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,

  mountain: `<svg viewBox="0 0 24 24" fill="none"><path d="M2.8 19L9.4 7.4L13.2 13.8L15.4 10.6L21.2 19H2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7.4 11.2L9.4 12.8L11.4 11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  waves: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 8.5C5 6.6 7 6.6 9 8.5C11 10.4 13 10.4 15 8.5C17 6.6 19 6.6 21 8.5M3 13.5C5 11.6 7 11.6 9 13.5C11 15.4 13 15.4 15 13.5C17 11.6 19 11.6 21 13.5M3 18.5C5 16.6 7 16.6 9 18.5C11 20.4 13 20.4 15 18.5C17 16.6 19 16.6 21 18.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,

  bow: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 3.5C14.5 5 19 10 20.5 18M6 3.5C9 8 9 14.5 5.5 20.5M5.5 20.5C12 19.5 17 21 20.5 18M3 21.5L18.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  arrow: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20L19.5 4.5M19.5 4.5H13.8M19.5 4.5V10.2M4 20L3.4 15.6M4 20L8.4 19.4M7.6 12.4L11.6 16.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 5.5 14.8 5.5 10C5.5 6.4 8.4 3.5 12 3.5C15.6 3.5 18.5 6.4 18.5 10C18.5 14.8 12 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" stroke-width="1.6"/></svg>`,

  calendar: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.8" y="5.4" width="16.4" height="14.8" rx="2.6" stroke="currentColor" stroke-width="1.6"/><path d="M3.8 10H20.2M8 3.5V7M16 3.5V7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="8.6" cy="14" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="15.4" cy="14" r="1" fill="currentColor"/></svg>`,

  share: `<svg viewBox="0 0 24 24" fill="none"><circle cx="6.5" cy="12" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="6.2" r="2.4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="17.8" r="2.4" stroke="currentColor" stroke-width="1.6"/><path d="M8.6 10.8L15.4 7.4M8.6 13.2L15.4 16.6" stroke="currentColor" stroke-width="1.6"/></svg>`,

  image: `<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4.5" width="17" height="15" rx="2.6" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="10" r="1.8" stroke="currentColor" stroke-width="1.5"/><path d="M4 17L9.4 12.6L13 15.6L15.6 13.4L20 17.4" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`,

  mask: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6.5C7 5 17 5 20 6.5C20 13 17.5 18.5 12 19.5C6.5 18.5 4 13 4 6.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 10.4C9 9.6 10 9.6 10.8 10.4M13.2 10.4C14 9.6 15 9.6 16 10.4M9.2 14.4C10.8 15.9 13.2 15.9 14.8 14.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.3" stroke="currentColor" stroke-width="1.6"/><path d="M12 7.5V12L15 13.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  warpeace: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2.6L13.8 6.4V14.2H10.2V6.4L12 2.6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.4 15.2H15.6M12 15.2V18.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="19.7" r="0.9" fill="currentColor"/><path d="M6.6 20.2C3.4 17.6 2.8 11.8 5.4 7.2M17.4 20.2C20.6 17.6 21.2 11.8 18.6 7.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 16.4L2.4 17.2M3.3 12.8L1.6 12.8M4.3 9.2L2.9 8.2M20 16.4L21.6 17.2M20.7 12.8L22.4 12.8M19.7 9.2L21.1 8.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,

  tree: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4.5" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="12" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="12" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="4" cy="19.5" r="1.9" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="19.5" r="1.9" stroke="currentColor" stroke-width="1.4"/><circle cx="15" cy="19.5" r="1.9" stroke="currentColor" stroke-width="1.4"/><circle cx="20" cy="19.5" r="1.9" stroke="currentColor" stroke-width="1.4"/><path d="M12 6.7V9M6 14.2V16M18 14.2V16M6 9L12 9L18 9M4 17.6V16M9 17.6V16M6 16H9M15 17.6V16M20 17.6V16M15 16H20" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
};

function iconMarkup(name){
  return ICONS[name] || ICONS.info;
}

/* Fill every element that declares [data-icon] with the matching svg */
function paintIcons(root){
  (root || document).querySelectorAll('[data-icon]').forEach(el=>{
    const name = el.getAttribute('data-icon');
    if(el.dataset.painted === name) return;
    el.innerHTML = iconMarkup(name);
    el.dataset.painted = name;
  });
}
