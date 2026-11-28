// "2026-11-28" -> "28/11/2026", the same on the server and in the browser.
export const articleDate = (iso: string) => iso.split('-').reverse().join('/');

// Every article photo has a 720px copy next to it for phones.
export const smallImage = (src: string) => src.replace(/\.webp$/, '-720.webp');
