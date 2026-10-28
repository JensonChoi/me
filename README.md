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

The pipeline is defined in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). It installs locked dependencies with `npm ci`, runs strict TypeScript checks, and builds the site on every branch push and pull request targeting `main`. Successful pushes to `main` deploy the generated `dist/` artifact to GitHub Pages. You can also run the workflow manually on `main`; other branches only run the build.

To enable deployment:

1. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
2. Merge the workflow into `main` and push. Follow **Actions → Website CI/CD** to monitor the build and deployment.
3. Open the URL reported by the `github-pages` deployment environment. For this repository, the expected URL is <https://jensonchoi.github.io/me/>.

The workflow builds with `--base=/me/`. If the repository is renamed, update that value; use `/` for a `username.github.io` repository or custom domain. Deployment uses GitHub's built-in token and requires no custom secrets. Only the deployment job receives Pages and OIDC write permissions. Deployments are serialized so an active deployment can finish.

To reproduce the CI build locally:

```sh
npm ci
npm run build -- --base=/me/
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
