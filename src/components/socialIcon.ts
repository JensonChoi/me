// Local brand SVGs use currentColor so both themes and hover states stay consistent.
const paths: Record<string, string> = {
  linkedin: '<path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.54 1.97 3.54 4.53v5.27Z"/>',
  github: '<path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.33-3.79-1.33-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15A10.7 10.7 0 0 1 12 6.15c.95 0 1.9.13 2.8.38 2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.07c0 .3.21.65.77.54A11.2 11.2 0 0 0 12 .8Z"/>',
  x: '<path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-7.4L5.6 22H2.47l8.15-9.31L.8 2h6.4l4.42 6.75L18.9 2ZM17.8 20h1.73L6.26 3.89H4.4L17.8 20Z"/>',
  threads: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M20 7.2C18.7 3.7 16.1 2 12.1 2 5.8 2 3 5.6 3 12s2.8 10 9.1 10c5.2 0 8.9-2.7 8.9-6.7 0-3.7-3.2-6-7.7-6-3.2 0-5.3 1.6-5.3 3.8 0 2 1.5 3.1 3.5 3.1 2.9 0 4.5-2 4.5-5.1 0-3.4-1.4-5.3-4-5.3-1.6 0-2.9.7-3.7 1.8"/>',
  instagram: '<g fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.5" cy="6.5" r="1"/>',
};
export function socialIcon(platform: string): SVGSVGElement | undefined {
  const content = paths[platform];
  if (!content) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '20');
  svg.setAttribute('height', '20');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.innerHTML = content;
  return svg;
}
