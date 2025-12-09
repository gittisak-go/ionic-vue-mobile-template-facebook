<!--
This file is intended to help AI coding agents get productive quickly in
this repository. Keep entries factual and tied to what is discoverable in
the codebase. Do not add aspirational rules.
-->

# Copilot Instructions — ionic-vue-mobile-template-facebook

Purpose: short, actionable notes for an AI coding agent working in this repo.

- Quick start
  - Install: `npm install`
  - Dev server (browser): `npm run dev` (uses Vite)
  - Build: `npm run build` (then use Capacitor commands for native)
  - E2E tests: `npm run test:e2e` (Cypress headless)
  - Unit tests: `npm run test:unit` (Vitest)
  - Lint: `npm run lint` (ESLint)

- Project purpose & stack
  - Ionic Vue mobile template inspired by Facebook mobile UI.
  - Frameworks: Vue 3, Ionic Vue, Vuex (state), Vue Router, Vite.
  - Native packaging: Capacitor (CLI + runtime plugins listed in `package.json`).

- High-level architecture (where to look)
  - App bootstrap: `src/main.js` — registers `IonicVue`, `router`, and `store`.
  - Routing: `src/router/index.js` — currently a single route mapping `/` → `src/views/Timeline.vue`.
  - Global state: `src/store/index.js` — Vuex store with seeded `posts` and `stories` and getters `posts` / `stories`.
  - Pages: `src/views/Timeline.vue` — uses Ionic components, reads store via `this.$store.getters.posts`.
  - Components: `src/components/*` — `Posts.vue`, `StatusInput.vue`, `Stories.vue`, `Reactions.vue`. Use these as patterns for UI + Ion components.
  - Styling: `src/theme/variables.css` and Ionic CSS imports in `src/main.js`.

- Important patterns & code examples
  - Ionic + Vue: components import Ionic subcomponents, then register them in `components` (see `Timeline.vue`).
  - Mixed Composition + Options APIs: `Timeline.vue` uses a `setup()` block to return icons/menu and also `computed` in the Options API to access `$store`. Keep this mixed pattern when editing the same file.
    - Example: icons are returned from `setup()` and `posts` accessed via `computed` that calls `this.$store.getters.posts`.
  - Vuex getters are simple named functions: use `this.$store.getters.posts` or within setup via `useStore()` if adding Composition-style code.
  - Asset paths are referenced as relative strings, e.g. `assets/images/...` inside store seed data.

- Build / native integration notes
  - Capacitor flow is documented in `README.md`: run `npm run build`, then `npx cap add ios|android`, `npx cap copy`, `npx cap open <platform>`.
  - Capacitor plugins are declared in `package.json` (e.g., `@capacitor/app`, `@capacitor/haptics`, etc.). Use native plugin docs when modifying native-capable features.

- Tests & CI hints
  - Unit tests run via Vitest: `npm run test:unit`. Look for `tests/unit` and `@vue/test-utils` usage.
  - E2E uses Cypress: `npm run test:e2e` runs headless Cypress; local interactive debugging can be done via `npx cypress open`.

- Conventions & small gotchas to watch for
  - Single-route app: adding pages requires updating `src/router/index.js` and importing components.
  - Keep Ionic CSS imports in `src/main.js` to avoid styling regressions.
  - The repo mixes `script setup` style (e.g., `App.vue`) and normal SFC `export default` components — follow the style used in the target file when editing.
  - There is a stray `5;` at the end of `src/router/index.js` that looks accidental. Verify and remove if editing that file.

- Where to change behavior
  - To change seeded posts/stories, edit `src/store/index.js`.
  - To add UI controls/screens, create a component under `src/components` and register a route in `src/router/index.js`.
  - To change icons or Ionic usage, look at `ionicons/icons` imports in `Timeline.vue`.

- Commit & PR guidance for AI agents
  - Keep changes minimal and focused to a single concern per PR.
  - Run `npm run lint` and `npm run test:unit` locally after code changes.

If anything here is unclear or you want more detail about a specific area (routing, store, native flow, or tests), ask and I'll expand the section with concrete file references or code snippets.
