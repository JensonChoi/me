export function setupTheme(button: HTMLButtonElement): void {
  const system = matchMedia('(prefers-color-scheme: dark)');
  let explicit = false;
  try { explicit = ['light', 'dark'].includes(localStorage.getItem('jenson-theme') ?? ''); } catch { /* Storage is optional. */ }
  function update(theme: string): void {
    document.documentElement.dataset.theme = theme;
    button.textContent = theme === 'dark' ? '☀' : '☾';
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111113' : '#FAFAF9');
  }
  update(document.documentElement.dataset.theme ?? 'light');
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    explicit = true; update(next);
    try { localStorage.setItem('jenson-theme', next); } catch { /* Keep the selection for this visit. */ }
  });
  system.addEventListener('change', event => { if (!explicit) update(event.matches ? 'dark' : 'light'); });
}
