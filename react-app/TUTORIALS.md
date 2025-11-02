# Biomni React Tutorials Implementation

This React application provides an interactive web interface for viewing Biomni tutorial notebooks.

## Overview

All notebooks from the `/workspace/tutorials/` directory have been converted to React components:

1. **Biomni 101** (`/biomni-101`) - Basic concepts and first steps with Biomni
2. **101 Biomni** (`/101-biomni`) - Extended tutorial with advanced examples  
3. **Cloning Example** (`/cloning`) - Molecular cloning workflow example

## Features

- ? Full markdown rendering with GitHub Flavored Markdown support
- ? Syntax-highlighted Python code cells
- ? Output display for executed code (streams, results, errors)
- ? Image output support (PNG/JPEG)
- ? Error handling and display
- ? Responsive design
- ? Navigation between tutorials
- ? Loading states

## Architecture

### Components

- **App.tsx** - Main application with React Router setup
- **NotebookViewer.tsx** - Container component for displaying notebooks
- **NotebookCell.tsx** - Individual cell renderer (markdown, code, outputs)

### Data Flow

1. Notebooks are stored as JSON files in `public/tutorials/`
2. Notebooks are loaded via `fetch()` when a route is accessed
3. Notebook data is parsed and passed to `NotebookViewer`
4. Each cell is rendered by `NotebookCell` based on its type

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## File Structure

```
react-app/
??? src/
?   ??? App.tsx                 # Main app with routing
?   ??? main.tsx                # Entry point
?   ??? index.css               # Global styles
?   ??? components/
?       ??? NotebookViewer.tsx  # Notebook container
?       ??? NotebookCell.tsx    # Cell renderer
??? public/
?   ??? tutorials/              # Notebook JSON files
?       ??? biomni_101.ipynb
?       ??? 101_biomni.ipynb
?       ??? cloning.ipynb
??? package.json
??? vite.config.ts
??? tsconfig.json
```

## Technical Details

### Notebook Cell Types Supported

- **Markdown cells**: Rendered with `react-markdown` and `remark-gfm`
- **Code cells**: Syntax highlighted with `react-syntax-highlighter`
- **Output cells**: Supports multiple output types:
  - Stream outputs (stdout/stderr)
  - Execute results (text/plain, text/html)
  - Image outputs (image/png, image/jpeg)
  - Error outputs with tracebacks

### Output Truncation

Long outputs are automatically truncated to 10,000 characters to prevent performance issues. A truncation message is displayed when content is cut off.

### Styling

- Modern, clean design with color-coded cell types
- Markdown cells: Blue border
- Code cells: Green border  
- Output cells: Orange border
- Responsive layout with max-width container

## Future Enhancements

Potential improvements:
- Code execution in the browser (via Pyodide or similar)
- Copy-to-clipboard for code cells
- Collapsible cells
- Search functionality
- Print-friendly view
- Dark mode toggle
