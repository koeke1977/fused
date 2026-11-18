# Fused — Non-negotiable development rules

These rules apply to every file, feature, refactor, generated change and AI-assisted contribution. They are not optional.

## 1. Strict separation of technologies

- HTML markup belongs in `.astro` component/page files or dedicated `.html` files where genuinely required.
- CSS belongs only in dedicated `.css` files.
- JavaScript/TypeScript logic belongs only in dedicated `.js` or `.ts` files.
- Never put CSS in HTML/Astro style blocks, inline style attributes, JavaScript strings, or component files.
- Never put JavaScript/TypeScript in HTML/Astro script blocks, inline event attributes, or CSS.
- Never use inline CSS or inline JavaScript in markup.
- Astro frontmatter is limited to component data wiring/imports; reusable business logic belongs in dedicated TypeScript modules.
- HTML attributes and semantic markup are naturally part of HTML; this rule prohibits mixing executable code and styling into markup.

## 2. Small files and single responsibility

- Every file has one clear responsibility.
- Prefer small, focused components and modules over large files.
- Split a file when it starts handling multiple concerns or becomes difficult to scan.
- Do not create giant page components, monolithic stylesheets, utility dumping grounds, or catch-all modules.
- Shared functionality must live in clearly named, focused modules.
- Avoid premature abstraction: extract shared code when there is a real repeated responsibility.

## 3. Predictable structure

- Keep the repository structure logical and documented.
- Pages compose components; components present focused UI; services/modules handle data and logic; stylesheets handle styling only.
- Keep CMS schemas separate from frontend components and data access.
- Keep environment-specific configuration out of application logic.
- Use descriptive, consistent file and folder names.

## 4. Maintainability and quality

- Use TypeScript for application logic and define explicit types for content models and function boundaries.
- No hardcoded project content in page templates; portfolio content comes from the CMS.
- No secrets, tokens, private keys, or credentials in source control.
- Use accessible semantic HTML and responsive layouts.
- Prefer simple solutions that are easy to understand and maintain.
- Remove dead code and unused dependencies.
- Update documentation when architecture, setup, deployment, or content models change.

## 5. Required workflow

Before implementing a feature:
1. Inspect the existing structure and relevant files.
2. Identify the smallest set of files that should own the change.
3. Preserve the separation rules above.
4. Implement only the requested scope.
5. Run the relevant checks/build and fix errors.
6. Summarize changed files and verification results.

Before adding a dependency, explain why it is needed and prefer native platform capabilities where practical.

## 6. AI contribution rule

Any AI assistant (including Claude and ChatGPT) must read and follow this file before changing code. If a request conflicts with these rules, explain the conflict and propose a compliant implementation rather than silently breaking the rules.

## 7. Fixed Fused quality standard

This quality standard applies to every new feature, page, component, content change, refactor and deployment. Treat it as a release requirement, not optional polish.

### Visual consistency and responsive behaviour
- Preserve one coherent Fused design system across every page: logo usage, dark/black brand surfaces, white typography, orange accents, spacing, typography, buttons, cards, navigation and footer.
- Every page must work from small mobile screens through tablets, laptops and wide desktop screens.
- Prevent horizontal overflow, clipped content, broken text wrapping, overlapping controls and distorted images.
- Use responsive layouts and fluid sizing; do not optimize only for the developer's current screen.
- Keep image aspect ratios intentional and provide suitable alt text.

### Browser compatibility
- Support current stable versions of Chrome, Edge, Firefox and Safari, including iOS Safari and Android Chrome.
- Prefer broadly supported web platform features. Check compatibility before relying on newer CSS or browser APIs.
- Add fallbacks when a required feature is not supported consistently.
- Do not claim cross-browser verification unless the relevant browsers/devices have actually been tested.

### Accessibility
- Use semantic HTML, logical heading order, labelled controls and meaningful link text.
- Ensure keyboard navigation and clearly visible focus states.
- Maintain readable contrast, including orange text and interactive states on dark backgrounds.
- Respect reduced-motion preferences and avoid motion that obstructs use.
- Do not rely on colour alone to communicate meaning.

### Performance
- Keep the site lightweight; avoid unnecessary client-side JavaScript and dependencies.
- Optimize images for dimensions, format and file size; lazy-load below-the-fold imagery where appropriate.
- Avoid layout shifts and unnecessarily large assets.
- Prefer native browser capabilities and static rendering where practical.

### SEO and production readiness
- Every public page must have a unique, meaningful title and meta description.
- Public production pages must be indexable unless explicitly requested otherwise; never leave accidental noindex/nofollow directives in production.
- Include appropriate canonical URLs, favicon/app icons, social sharing metadata and sitemap/robots configuration when the site is prepared for public launch.
- Use descriptive URLs, meaningful image alt text and structured content.
- Verify links, contact actions, page routes and error states before release.

### Verification and release gate
- Run the project's type/content checks and production build after relevant changes.
- Test key pages at representative mobile, tablet and desktop widths.
- Run automated browser/visual checks when configured; investigate regressions rather than masking them.
- Verify the deployed site after publication.
- Record what was actually checked. Distinguish automated build success from real browser/device testing.
- Do not mark a feature or release complete while known critical accessibility, responsive, routing, SEO or build issues remain.
