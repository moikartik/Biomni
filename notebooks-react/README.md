# Biomni React Notebook Viewer

This package hosts a lightweight React implementation of the Biomni tutorial notebooks. The application ships as a static Vite build and renders `.ipynb` files client-side without requiring any backend or Python runtime.

## Features

- Notebook manifest with friendly summaries and routing between tutorials
- Streaming loader that fetches the original `.ipynb` JSON from `public/notebooks`
- Markdown rendering (with GitHub-flavoured Markdown support) and inline code cells
- Human-readable formatting for stdout/stderr, HTML tables, and image outputs

## Getting Started

```bash
cd notebooks-react
npm install          # only required on first setup
npm run dev
```

By default the dev server runs at <http://localhost:5173>. Hot module reloading is enabled.

## Building for Production

```bash
npm run build
```

The static assets are emitted under `notebooks-react/dist`. Serve that directory with any static host (e.g. `npm run preview`, `npx serve dist`, or your existing infrastructure).

## Notebook Sources

The viewer expects raw notebook files inside `public/notebooks`. The following notebooks are bundled from the parent repository:

- `biomni_101.ipynb`
- `101_biomni.ipynb`
- `examples_cloning.ipynb`

To add more notebooks, copy the `.ipynb` file into `public/notebooks`, then register metadata in `src/data/notebookManifest.js`.

## Tech Stack

- Vite + React 18
- `react-router-dom` for routing
- `react-markdown` + `remark-gfm` for Markdown rendering

No server-side rendering or APIs are required; everything executes in the browser.
