# Biomni React Tutorials

React implementation of Biomni tutorial notebooks.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

## Structure

- `src/App.tsx` - Main app component with routing
- `src/components/NotebookViewer.tsx` - Component to display notebooks
- `src/components/NotebookCell.tsx` - Component to render individual notebook cells
- `public/tutorials/` - Notebook files (JSON format)

## Features

- Display markdown cells with proper formatting
- Syntax-highlighted code cells
- Output display for code execution results
- Navigation between different tutorials
- Responsive design
