# Biomni Notebook Explorer

This React application recreates the content of the Jupyter notebooks that are bundled with the Biomni repository. Each notebook is rendered as a rich, navigable document with syntax-highlighted code cells and Markdown explanations so the tutorials can be browsed without launching Jupyter.

## Quick start

```bash
cd notebooks-react
npm install        # already run once in this branch
npm run dev        # start the Vite dev server on http://localhost:5173
```

To produce an optimized bundle:

```bash
npm run build
```

## Project structure

- `src/data/notebooks.ts` ? Typed metadata and cell content for each converted notebook (`tutorials/biomni_101.ipynb`, `tutorials/101_biomni.ipynb`, `tutorials/examples/cloning.ipynb`). Add more entries here to expose additional notebooks.
- `src/components/` ? Presentation components (`NotebookSidebar`, `NotebookPage`, `NotebookCell`) that render the notebook navigation and content.
- `src/App.tsx` ? Router configuration and top-level layout.

## Features

- One-click navigation between all bundled notebooks via a persistent sidebar.
- Markdown rendered with GitHub-flavored Markdown support (powered by `react-markdown` + `remark-gfm`).
- Syntax-highlighted Python cells using `react-syntax-highlighter`.
- Responsive layout that adapts to narrow viewports.

## Adding more notebooks

1. Convert the target `.ipynb` into Markdown/code snippets or copy the cell content directly.
2. Append a new `Notebook` entry to `src/data/notebooks.ts` with the appropriate metadata and cell array.
3. Restart the dev server (or refresh) to see the new notebook in the sidebar.

This keeps the React implementation fully static: no runtime notebook parsing is required, which makes deployment straightforward.
