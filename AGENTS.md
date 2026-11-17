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
