# Repository Guidelines

## Project Structure & Module Organization

This is a static personal homepage and arcade built with Vite, vanilla TypeScript, and CSS. `src/main.ts` assembles the page; `src/components/` contains reusable DOM renderers. Keep biography, social URLs, and game entries in `src/data/`. Shared DOM helpers and theme behavior belong in `src/utils/`; responsive layouts and theme variables live in `src/styles/global.css`.

`index.html` provides metadata and early theme initialization. `public/` contains the favicon and images, stored as optimized JPEGs. `dist/` is generated build output. Consult `SPEC.md` for product requirements and `README.md` for customization and deployment instructions. There is currently no test directory.

## Build, Test, and Development Commands

Use Node.js 22.12+ and install dependencies with `npm ci` when the lockfile is present.

- `npm run dev`: start the local Vite development server.
- `npm run typecheck`: run strict TypeScript checks without emitting files.
- `npm run build`: typecheck and generate the production site in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run build -- --base=/REPOSITORY/`: build for a GitHub Pages subdirectory.

## Coding Style & Naming Conventions

Use two-space indentation, single-quoted TypeScript strings, semicolons, and ES modules. Follow existing naming: camelCase functions and variables, PascalCase interfaces, and descriptive module filenames. Keep modules focused; avoid frontend frameworks and unnecessary dependencies. No formatter or linter is configured.

Use semantic elements, accessible labels, and visible focus states. Prefer `textContent` for configurable content; reserve SVG markup insertion for trusted local constants. Use CSS custom properties and respect reduced-motion preferences.

## Testing Guidelines

No automated test framework, coverage threshold, or test naming convention is established. Run typecheck and build for code changes. Check affected interactions in the browser, including theme persistence, keyboard navigation, missing-image fallbacks, and unavailable games. For layout changes, inspect 375, 430, 768, 1024, and 1440px widths in both themes. Report unverified scenarios explicitly.

## Commit & Pull Request Guidelines

The repository has no commits yet, so no historical commit convention exists. Use concise imperative subjects, such as `Add arcade game entry`. Keep changes focused.

Pull requests should describe the change, verification performed, and relevant issue references. Include screenshots for visual changes. Avoid invented personal URLs, and exclude dependencies, generated builds, and credentials from commits.
