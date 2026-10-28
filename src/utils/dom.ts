export function element<K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}
export function validUrl(value: string | undefined): value is string {
  if (!value) return false;
  if (/^\/(?!\/)/.test(value)) return true;
  try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; }
}
export function link(label: string, href: string, className = '', external = false): HTMLAnchorElement {
  const node = element('a', className, label);
  node.href = href;
  if (external) { node.target = '_blank'; node.rel = 'noopener noreferrer'; }
  return node;
}
export function asset(path: string): string { return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`; }
export function picture(path: string, alt: string, fallback: string, className: string, lazy = true): HTMLElement {
  const wrapper = element('div', className);
  const placeholder = element('span', 'image-fallback', fallback);
  placeholder.setAttribute('role', 'img'); placeholder.setAttribute('aria-label', alt);
  const img = element('img'); img.alt = alt;
  img.loading = lazy ? 'lazy' : 'eager'; img.decoding = 'async';
  img.addEventListener('error', () => img.remove(), { once: true });
  img.addEventListener('load', () => placeholder.remove(), { once: true });
  img.src = asset(path);
  wrapper.append(placeholder, img);
  return wrapper;
}
