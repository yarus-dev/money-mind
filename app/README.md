# Web Application (front-end)

## Directory Structure

`├──`[`components`](./components) — UI elements<br>
`├──`[`core`](./core) — Core modules, React hooks, customized theme, etc.<br>
`├──`[`icons`](./icons) — Custom icon React components<br>
`├──`[`public`](./public) — Static assets such as robots.txt, index.html etc.<br>
`├──`[`routes`](./routes) — Application routes and page (screen) components<br>
`├──`[`global.d.ts`](./global.d.ts) — Global TypeScript declarations<br>
`├──`[`index.html`](./index.html) — HTML page containing application entry point<br>
`├──`[`index.tsx`](./index.tsx) — Single-page application (SPA) entry point<br>
`├──`[`package.json`](./package.json) — Workspace settings and NPM dependencies<br>
`├──`[`tsconfig.ts`](./tsconfig.json) — TypeScript configuration<br>
`└──`[`vite.config.ts`](./vite.config.ts) — JavaScript bundler configuration ([docs](https://vitejs.dev/config/))<br>

## Usage

- `start [--force]` — Launch the app in development mode
- `build` — Build the app for production
- `preview` — Preview the production build
- `test` — Run unit tests
- `coverage` — Run unit tests with enabled coverage report
- `deploy [--env #0]` — Deploy the app to Cloudflare (CDN)

## References

- https://react.dev/ — React.js documentation
- https://vitejs.dev/ — Front-end tooling (bundler)