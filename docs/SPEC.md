# Project Specification: Jenson Choi — Personal Website & Arcade

## 1. Project Overview

Build a modern, responsive personal website for **Jenson Choi** using **HTML, CSS, and TypeScript**.

The website should serve as both:

1. A personal homepage introducing Jenson, his professional background, interests, and social media profiles.
2. A mini arcade showcasing browser-based games that Jenson has built through vibe coding and AI-assisted development.

The overall experience should feel **minimalist, modern, friendly, and playful**.

Avoid making the website feel like a corporate résumé or traditional developer portfolio. It should feel like a personal corner of the internet where visitors can learn about Jenson and explore his games.

### Primary objectives

- Introduce Jenson through a profile picture and short biography.
- Provide easy access to his social media profiles.
- Showcase his collection of browser-based games in an attractive arcade section.
- Allow visitors to launch and play games easily.
- Make adding future games straightforward.
- Deliver a polished experience on desktop, tablet, and mobile.
- Keep the architecture simple, lightweight, and maintainable.

---

## 2. Technology Stack

Use the following technologies:

**Required:**
- HTML5
- CSS3
- TypeScript
- Vite

**Optional:**
- Lucide icons or another lightweight icon library
- Google Fonts
- Small CSS animations

Do not use React, Vue, Angular, Next.js, or another heavyweight frontend framework.

Prefer vanilla TypeScript and modern CSS.

Avoid unnecessary dependencies.

### Development requirements

- Use strict TypeScript configuration.
- Use ES modules.
- Write semantic, accessible HTML.
- Implement responsive layouts using CSS Grid and Flexbox.
- Use CSS custom properties for colors, spacing, and typography.
- Organize the project into reusable components and modules.
- Ensure compatibility with modern Chrome, Firefox, Safari, and Edge.
- Provide working development and production build commands.

---

## 3. Visual Design Direction

### Overall aesthetic

Use a hybrid visual style:

**Personal introduction:** Minimalist, clean, sophisticated.

**Arcade:** Playful, colorful, subtly inspired by retro video games.

The transition between these sections should feel intentional and cohesive.

### Design principles

- Generous whitespace
- Strong typography
- Simple visual hierarchy
- Rounded corners
- Soft shadows
- Subtle hover effects
- Smooth transitions
- Restrained use of accent colors
- High readability
- Consistent spacing

Avoid overly complicated animations, excessive gradients, glassmorphism, or flashy effects that distract from the content.

### Color palette

Support both light and dark themes.

**Light theme (default):**
- Background: `#FAFAF9`
- Primary text: `#18181B`
- Secondary text: `#71717A`
- Card background: `#FFFFFF`
- Border: `#E4E4E7`
- Accent: `#6366F1`

**Dark theme:**
- Background: `#111113`
- Primary text: `#F4F4F5`
- Secondary text: `#A1A1AA`
- Card background: `#1C1C20`
- Border: `#333338`
- Accent: `#818CF8`

These colors are starting points and may be refined for visual quality and contrast.

### Typography

Use a modern sans-serif font such as Inter, Geist, or a comparable alternative.

Typography should feel clean and contemporary.

Suggested hierarchy:

- Name: Large, bold heading
- Section headings: Medium-large and semibold
- Biography: Comfortable reading size, approximately 16–18px
- Card titles: Semibold
- Supporting descriptions: Smaller, muted text

Use a monospaced or pixel-inspired font sparingly for the arcade heading or decorative elements.

Do not use pixel fonts for long paragraphs.

---

## 4. Website Structure

Build a single-page website with the following structure:

1. Header / Navigation
2. Hero / About Me
3. Social Media Links
4. Arcade
5. Footer

The page should flow naturally from top to bottom.

On desktop, keep the main content within a centered container with a maximum width of approximately 1000–1100px.

Use generous vertical spacing between sections.

---

## 5. Header and Navigation

Implement a minimal sticky or static navigation header.

### Left side

Display:

**Jenson Choi**

This acts as a home link that scrolls to the top of the page.

### Right side

Include:

- About
- Arcade
- Theme toggle

Navigation links should smoothly scroll to their corresponding sections.

Use subtle hover effects and an active or focus state.

### Mobile behavior

Keep navigation lightweight and accessible.

Avoid an unnecessarily complicated hamburger menu if the links can comfortably fit.

The header should remain visually clean on smaller screens.

---

## 6. Hero / About Me Section

This is the first major section visitors see.

### Desktop layout

Use a two-column layout:

**Left column:**
- Profile picture

**Right column:**
- Greeting
- Name
- Short biography
- Social media links

The columns should be vertically aligned.

### Mobile layout

Stack the elements vertically:

1. Profile picture
2. Name and introduction
3. Biography
4. Social links

Keep the content centered or left-aligned consistently.

### Profile picture

Use a circular or softly rounded profile picture.

Requirements:

- Approximately 180–220px on desktop
- Smaller on mobile
- Use `object-fit: cover`
- Include descriptive alt text
- Add a subtle border or shadow
- Preserve the image's aspect ratio
- Do not distort the photograph

Use an image from `/public/images/profile.png`. Feel free to crop it.

If the file is missing, display a tasteful placeholder containing Jenson's initials, `JC`, rather than a broken image.

### Greeting

Display a friendly heading such as:

**Hey, I'm Jenson! 👋**

Make the greeting prominent without being excessively large.

### Biography

Use the following exact text as the initial biography:

"Hey, I'm Jenson! 👋

I'm a software engineer and UCLA Computer Science graduate with a background in distributed systems and machine learning infrastructure.

I enjoy experimenting with new technologies, especially AI, and building things for fun. Lately, I've been exploring vibe coding and creating browser-based games.

Outside of coding, you'll probably find me hiking, hitting the gym, or bouldering.

Feel free to check out my projects below, or connect with me on social media!"

The greeting should appear as a heading rather than being duplicated inside a paragraph.

Display the remaining biography as readable paragraphs.

Avoid dense text blocks.

### Optional hero button

Include a subtle call-to-action:

**Explore My Arcade**

Clicking it should smoothly scroll to the arcade section.

Do not add unnecessary promotional or marketing language.

---

## 7. Social Media Links

Display a compact row of social media icons beneath the biography.

Include the following platforms:

- LinkedIn
- GitHub
- Threads
- X (formerly Twitter)

### Design requirements

- Use recognizable platform icons.
- Keep icon sizes consistent.
- Use clean spacing.
- Provide subtle hover effects.
- Show a tooltip or accessible label identifying each platform.
- Ensure keyboard accessibility.
- Use actual SVG icons or a reliable icon library.

Icons should initially use a neutral color and transition to an accent or platform-appropriate color on hover.

### URL configuration

Do not invent profile URLs.

Create a centralized configuration file containing placeholders for:

- https://www.linkedin.com/in/jenson-choi-aa4a3619a/
- https://github.com/JensonChoi
- https://www.threads.com/@jensonchoi?igshid=NTc4MTIwNjQ2YQ==
- https://x.com/choi24708?s=11

Only render links when valid URLs have been configured.

Render svg icons instead of the full link on the page.

Use `target="_blank"` and `rel="noopener noreferrer"` for external links.

Make it easy to edit these links later.

### Optional additional links

Support an email link and résumé link in the configuration, but do not display them unless configured.

---

## 8. Arcade Section

This is the main showcase feature of the website.

The arcade should feel more playful than the introduction while remaining consistent with the overall design.

### Section heading

Use:

**🎮 Jenson's Arcade**

### Section subtitle

Use:

"A collection of games I've been building for fun with a little help from AI. Pick one and give it a try!"

Keep the tone casual and approachable.

### Layout

Display games as a responsive card grid.

**Desktop:**
- Prefer three columns when space permits.

**Tablet:**
- Two columns.

**Mobile:**
- One column.

Each card should have a consistent appearance.

### Arcade game cards

Every card must contain:

1. Game thumbnail
2. Game title
3. Short description
4. Optional technology tags
5. Play button
6. Optional source code link

### Card design

- Rounded corners, approximately 12–16px
- Light background or slightly elevated surface
- Subtle border
- Minimal shadow
- Consistent padding
- Responsive thumbnail
- Clear typography

On hover:

- Slight upward movement
- Slightly stronger shadow or border
- Smooth transition

Avoid aggressive scaling or excessive movement.

### Game thumbnails

Use a consistent aspect ratio, preferably 16:9.

Thumbnails should show screenshots of the games.

Support JPG, PNG, and WebP.

Use lazy loading for offscreen images.

If a thumbnail is missing, display an attractive placeholder with a gamepad icon and the game's title.

Do not generate or download unrelated stock images as substitutes for the actual games.

---

## 9. Initial Arcade Games

Create three initial game entries, corresponding to projects Jenson has been working on.

These should be configurable placeholders until their actual deployment URLs and screenshots are provided.

### Game 1: Pixelbound Adventure

**Description:**
"A retro-inspired 8-bit platformer featuring multiple worlds, hidden secrets, and classic side-scrolling gameplay."

**Tags:**
- TypeScript
- HTML5 Canvas
- Platformer

**Image:**
`public/images/pixelbound-adventure-small.jpg`

**Play URL:**
https://jensonchoi.github.io/pixelbound-adventure/

**GitHub URL:**
https://github.com/JensonChoi/pixelbound-adventure

### Game 2: Cyberpunk Tower Defense

**Description:**
"Defend a futuristic city by strategically placing towers and surviving waves of enemies."

**Tags:**
- TypeScript
- Strategy
- Tower Defense

**Image:**
`public/images/neon_defense.png`

**Play URL:**
https://jensonchoi.github.io/neon-defense/

**GitHub URL:**
https://github.com/JensonChoi/neon-defense

### Game 3: 3D Banqi

**Description:**
"A modern, browser-based take on Chinese dark chess with interactive 3D visuals."

**Tags:**
- TypeScript
- Three.js
- Board Game

**Image:**
`public/images/banqi.png`

**Play URL:**
https://jensonchoi.github.io/banqi/

**GitHub URL:**
https://github.com/JensonChoi/banqi

### Important

Do not assume these games are already deployed.

If a game has no valid play URL, display an elegant disabled state such as:

"Coming Soon"

Do not create nonfunctional links.

Do not attempt to recreate these games inside this project. The purpose of this website is to showcase and launch existing standalone games.

---

## 10. Extensible Game Data Architecture

A major requirement is that Jenson can add additional games easily.

Do not hardcode game cards directly into HTML.

Instead, define a TypeScript interface.

Example:

```ts
interface ArcadeGame {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  playUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
}
```

Create a centralized module such as:

`src/data/games.ts`

Export a collection of game objects.

Render the arcade grid dynamically based on this collection.

Adding a new game should require only:

1. Adding a new object to the games array.
2. Providing the thumbnail.
3. Setting the deployment URL.

The arcade layout must update automatically.

### Future extensibility

Keep the architecture compatible with possible future enhancements, including:

- Game categories
- Featured games
- Sorting
- Filtering
- Search
- Game detail pages

Do not implement all these features now unless needed.

Prioritize simplicity.

---

## 11. Game Launch Behavior

When a visitor selects an available game, clicking **Play Now** should open the game's deployment URL.

Prefer opening games in a new browser tab, so the visitor can return to the arcade easily.

Use a clear visual distinction between the primary Play button and any secondary GitHub source link.

### Future support

Structure the game configuration so that games can later be hosted under routes such as:

- `/arcade/platformer/`
- `/arcade/tower-defense/`
- `/arcade/banqi/`

For now, an external deployment URL is sufficient.

Do not implement a complicated iframe game player or SPA routing system unless necessary.

---

## 12. Light and Dark Mode

Implement a theme toggle in the top-right navigation.

### Requirements

- Default to the user's system color scheme on the first visit.
- Allow manual switching between light and dark modes.
- Store the user's explicit preference in `localStorage`.
- Restore the preference on subsequent visits.
- Avoid an initial flash of the wrong theme.
- Use CSS variables rather than duplicating styles.

Use a sun/moon icon to represent the theme switch.

Both themes should be equally polished.

### Arcade styling

The arcade can incorporate subtle retro-inspired details in either theme.

For example:

- A small pixel-style decorative element
- An accent underline beneath the arcade heading
- A subtle glow on game cards
- A restrained arcade-like heading font

Avoid turning the entire site into a neon arcade interface.

---

## 13. Animations and Interactions

Use tasteful micro-interactions to make the website feel alive.

### Recommended effects

**Page entry:**
- Subtle fade-in or slide-up on initial load.

**Social links:**
- Slight color change.
- Small upward movement.

**Game cards:**
- Gentle lift on hover.
- Smooth border or shadow transition.

**Buttons:**
- Clear hover and pressed states.

**Navigation:**
- Smooth scrolling.

**Theme toggle:**
- Smooth color transitions.

### Accessibility considerations

Respect `prefers-reduced-motion`.

Disable or simplify animations when users request reduced motion.

Avoid continuous background animations or excessive visual effects.

Do not animate essential content in ways that make it difficult to read.

---

## 14. Footer

Create a simple footer at the bottom of the page.

Suggested content:

**© [Current Year] Jenson Choi. Built with curiosity and a little help from AI.**

Generate the current year dynamically.

Include an optional link back to the top of the page.

Keep the footer small, clean, and visually understated.

Do not include unnecessary legal pages, newsletters, or contact forms.

---

## 15. Responsive Design

The entire website must work well across different viewport sizes.

### Desktop

- Centered maximum-width content container
- Two-column hero section
- Three-column arcade grid
- Comfortable whitespace

### Tablet

- Adjust hero spacing
- Two-column arcade grid
- Responsive navigation

### Mobile

- Stack hero content vertically
- Resize profile picture appropriately
- One-column arcade grid
- Maintain readable typography
- Ensure social icons remain easy to tap
- Prevent horizontal overflow
- Use adequate touch target sizes

Test at common viewport widths including:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Avoid fixed widths that cause layout problems.

---

## 16. Accessibility

Follow modern accessibility best practices.

Requirements:

- Semantic HTML landmarks
- Proper heading hierarchy
- Accessible navigation
- Descriptive image alt text
- Keyboard-operable controls
- Visible focus indicators
- Sufficient color contrast
- Accessible icon labels
- Appropriate button elements
- Reduced-motion support

Ensure the site remains usable without a mouse.

Do not rely on hover alone to expose essential functionality.

---

## 17. SEO and Metadata

Implement basic SEO suitable for a personal website.

### Page title

`Jenson Choi | Software Engineer & Game Creator`

### Meta description

"Personal website of Jenson Choi, a software engineer interested in AI, distributed systems, and building browser-based games. Explore Jenson's Arcade."

### Additional metadata

Include:

- Open Graph title
- Open Graph description
- Open Graph image placeholder
- Twitter/X card metadata
- Theme color
- Viewport configuration
- Favicon placeholder

### Other requirements

- Use a descriptive document title.
- Maintain logical heading structure.
- Include a canonical URL only when the production domain is known.
- Do not invent a domain name.
- Make the site indexable by search engines.
- Consider including a sitemap and robots.txt after deployment.

---

## 18. Performance

The website should feel fast and lightweight.

Priorities:

- Minimize JavaScript bundle size.
- Optimize images.
- Lazy-load offscreen thumbnails.
- Avoid layout shifts.
- Use modern image formats.
- Avoid large animation libraries.
- Minimize unnecessary network requests.
- Use browser-native features when possible.

Aim for strong Lighthouse results in:

- Performance
- Accessibility
- Best Practices
- SEO

Do not sacrifice maintainability for minor benchmark improvements.

---

## 19. Project Organization

Use a maintainable folder structure similar to:

```text
jenson-website/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile.jpg
│       ├── platformer.webp
│       ├── tower-defense.webp
│       └── banqi.webp
├── src/
│   ├── main.ts
│   ├── components/
│   │   ├── Header.ts
│   │   ├── About.ts
│   │   ├── SocialLinks.ts
│   │   ├── Arcade.ts
│   │   ├── GameCard.ts
│   │   └── Footer.ts
│   ├── data/
│   │   ├── games.ts
│   │   └── socialLinks.ts
│   ├── types/
│   │   └── game.ts
│   ├── utils/
│   │   └── theme.ts
│   └── styles/
│       ├── global.css
│       ├── variables.css
│       └── components.css
└── README.md
```

You may adjust the structure if a simpler arrangement is more appropriate.

Keep modules focused and avoid unnecessary abstraction.

---

## 20. Configuration and Content Management

Make the website easy for Jenson to maintain without requiring significant code changes.

### Editable information

Centralize configuration for:

- Name
- Biography
- Profile image
- Social media URLs
- Game entries
- Game thumbnails
- Game deployment URLs
- Game source URLs

Avoid scattering personal information across multiple files.

Document how to edit these fields in the README.

### Missing assets

If profile images, screenshots, or game URLs are not provided:

- Use graceful placeholders.
- Keep the layout functional.
- Do not invent personal information.
- Do not fabricate social links.
- Do not fabricate playable games.

The site should look polished even with placeholders.

---

## 21. README and Deployment

Create a README containing:

### Local development

Instructions for:

- Installing dependencies
- Starting the development server
- Running the production build
- Previewing the production build

### Customization

Explain how to:

- Replace the profile picture
- Edit the biography
- Update social media URLs
- Add new arcade games
- Add game screenshots
- Set game deployment URLs
- Update the site's color scheme

### Deployment

Provide clear instructions for deploying the Vite site to one of:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Ensure the project can be built as a static website.

Do not require a backend or database.

---

## 22. Implementation Priorities

Follow this implementation order:

**Phase 1 — Foundation**
- Initialize Vite and TypeScript.
- Implement the site structure.
- Create the design system and CSS variables.
- Establish responsive layouts.

**Phase 2 — Personal Introduction**
- Implement navigation.
- Add the profile picture and fallback.
- Render the biography.
- Create social links.

**Phase 3 — Arcade**
- Define the game data model.
- Implement reusable game cards.
- Build the responsive arcade grid.
- Add the three initial game placeholders.
- Support external game deployment links.

**Phase 4 — Polish**
- Implement light/dark mode.
- Add subtle animations.
- Refine responsive behavior.
- Add accessibility improvements.

**Phase 5 — Finalization**
- Add metadata and SEO.
- Optimize assets.
- Verify TypeScript compilation.
- Verify production build.
- Write the README.

---

## 23. Acceptance Criteria

The implementation is complete when:

- The website runs locally using Vite.
- The website builds successfully for production.
- The homepage displays Jenson's profile and biography.
- All configured social media links work correctly.
- Unconfigured social links are hidden.
- The arcade displays the configured game collection.
- Each available game can be launched.
- Unavailable games display an appropriate Coming Soon state.
- Adding a game requires only a data entry and associated assets.
- Both light and dark themes work.
- The theme preference persists.
- The website is fully responsive.
- The website is accessible via keyboard.
- Missing images do not break the layout.
- The README explains customization and deployment.
- There are no TypeScript compilation errors or broken internal links.

---

## 24. Final Design Expectations

The completed website should feel like a thoughtfully designed personal homepage rather than a generic AI-generated template.

It should communicate three things:

1. Jenson is a software engineer with experience in distributed systems and machine learning infrastructure.
2. He enjoys experimenting with AI and building creative software projects.
3. He has interests outside technology, including hiking, working out, and bouldering.

The arcade should be the most memorable part of the site.

Prioritize excellent typography, spacing, responsiveness, and thoughtful micro-interactions over unnecessary complexity.

**Important:** Implement the actual working website, not just a design mockup or project plan. Create all necessary source files and ensure the project runs successfully.

Where details are unspecified, make reasonable design decisions consistent with the goals above. Do not block implementation by asking for optional information.

Build the site with the quality and attention to detail expected of a polished personal website ready for public deployment.