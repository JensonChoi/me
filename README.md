# Jenson Choi — Personal Website & Arcade

A small, responsive personal homepage built with vanilla TypeScript, Vite, and CSS. No backend, framework, or runtime dependencies.

## Development

Use Node.js 22.12+ (or a newer supported release).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Other commands:

```sh
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize

- **Name, greeting, biography, portrait:** edit `src/data/profile.ts`. Biography entries become separate paragraphs.
- **Profile photo:** the page uses `public/images/profile-small.jpg`; replace that image or change `profile.image`. Paths are relative to `public/`, without a leading slash. A failed image displays JC.
- **Social accounts:** fill the `socialLinks` entries in the same module with full HTTPS URLs. Empty or invalid entries are hidden. `email` accepts a bare email address; `resume` accepts an HTTPS URL or root-relative file path. The four supplied accounts are configured. Brand links show local SVG icons with accessible labels and tooltips.
- **Games:** edit `src/data/games.ts`. Add an object with a unique `id`, title, description, thumbnail, and tags. Add `playUrl` and optionally `githubUrl`; the grid updates automatically. Set `available: false` for Coming Soon. A missing or invalid play URL also disables launch. The three initial deployments were confirmed by Jenson.
- **Screenshots:** put PNG, JPG, or WebP files in `public/images/` and reference them in game data. Use an approximately 16:9 screenshot. Only optimized JPEG images are retained to reduce repository and transfer size. Missing images show a titled placeholder.
- **Themes and layout:** edit CSS variables and responsive rules in `src/styles/global.css`. First visit follows system theme; explicit choices persist under `jenson-theme` in localStorage. Clear that key to restore system-following behavior.
- **SEO:** edit metadata in `index.html` when changing identity/copy. Replace `public/images/social-preview.jpg` with your preferred share image. Once the production URL is known, use absolute image URLs for social metadata and add a canonical URL. No production domain is assumed.

External game and source links open a new tab. Future same-origin game paths such as `/arcade/banqi/` are supported. The site does not check deployment availability at runtime.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. Add `.github/workflows/pages.yml` with the following workflow. Replace `YOUR_REPOSITORY` with the repository name. For a `username.github.io` repository or custom domain, use `/` as the build base instead.

```yaml
name: Deploy website
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build -- --base=/YOUR_REPOSITORY/
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

Vite applies the base path to application assets; data-driven image URLs use `import.meta.env.BASE_URL`. Production hosting is not configured by the local build. After publishing, check the live links and consider adding a domain-specific sitemap and robots.txt.

## Verification checklist

- Run typecheck and production build.
- Inspect 375, 430, 768, 1024, and 1440px layouts in both themes.
- Navigate by keyboard; verify skip link, focus rings, theme toggle, and anchor links.
- Reload after changing theme; check system preference with storage cleared.
- Enable reduced motion and verify animations and smooth scrolling are disabled.
- Temporarily use a missing image and empty game URL; confirm graceful fallbacks.
- Add a fourth game object and confirm automatic grid layout.
- Check current Chrome, Firefox, Safari, and Edge before publishing.
