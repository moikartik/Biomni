# Biomni Notebooks React App

A modern, interactive React application for viewing and exploring Biomni tutorial notebooks. This application provides a clean, user-friendly interface to browse through Jupyter notebooks with syntax highlighting, markdown rendering, and output visualization.

## Features

- ?? **Interactive Notebook Viewer**: View Jupyter notebooks with full cell rendering
- ?? **Syntax Highlighting**: Beautiful code highlighting for Python and other languages
- ?? **Markdown Support**: Rich markdown rendering with GitHub Flavored Markdown
- ?? **Output Visualization**: Display cell outputs including text, HTML, images, and errors
- ?? **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- ?? **Easy Navigation**: Sidebar navigation between different tutorial notebooks
- ?? **Modern UI**: Clean, professional interface with smooth animations

## Available Notebooks

1. **Biomni 101** - Introduction to Biomni and basic usage
2. **101 Biomni Tutorial** - Comprehensive tutorial with advanced examples
3. **CRISPR Cloning Example** - Practical example of cloning CRISPR sgRNA

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd biomni-notebooks-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
biomni-notebooks-react/
??? src/
?   ??? components/          # React components
?   ?   ??? CodeCell.jsx     # Code cell renderer
?   ?   ??? MarkdownCell.jsx # Markdown cell renderer
?   ?   ??? OutputCell.jsx   # Output cell renderer
?   ?   ??? NotebookViewer.jsx # Main notebook viewer
?   ?   ??? Sidebar.jsx      # Navigation sidebar
?   ??? App.jsx              # Main application component
?   ??? main.jsx             # Application entry point
?   ??? index.css            # Global styles
??? notebooks/               # Jupyter notebook files
?   ??? biomni_101.ipynb
?   ??? 101_biomni.ipynb
?   ??? examples/
?       ??? cloning.ipynb
??? package.json             # Project dependencies
??? vite.config.js           # Vite configuration
??? README.md                # This file
```

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Markdown**: Markdown rendering with GFM support
- **React Syntax Highlighter**: Code syntax highlighting
- **CSS3**: Modern styling with flexbox and grid

## Key Components

### NotebookViewer
Main component that renders notebook cells in sequence, handling different cell types (code, markdown, raw).

### CodeCell
Renders code cells with:
- Syntax highlighting
- Execution count display
- Collapsible output sections

### MarkdownCell
Renders markdown cells with:
- GitHub Flavored Markdown support
- Custom styling for headers, lists, tables, and code blocks
- HTML rendering support

### OutputCell
Handles various output types:
- Stream output (stdout/stderr)
- Execute results
- Display data (text, HTML, images)
- Error tracebacks

### Sidebar
Provides navigation between notebooks with:
- Active notebook highlighting
- Responsive mobile design
- Smooth transitions

## Customization

### Adding New Notebooks

1. Place your `.ipynb` file in the `notebooks/` directory
2. Import it in `src/App.jsx`:
```javascript
import myNotebook from '../notebooks/my_notebook.json'
```
3. Add it to the `notebooks` array:
```javascript
{
  id: 'my_notebook',
  name: 'My Notebook Title',
  path: 'path/to/my_notebook',
  data: myNotebook
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: `src/components/*.css`
- Modify CSS variables in `src/index.css` for theme customization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Running Linter

```bash
npm run lint
```

### Code Style

The project follows ESLint recommended rules with React-specific configurations. See `.eslintrc.cjs` for details.

## License

This project is part of the Biomni ecosystem. See the main Biomni repository for license information.

## Contributing

Contributions are welcome! Please follow the contribution guidelines in the main Biomni repository.

## Troubleshooting

### Issue: Notebooks not loading
- Ensure notebook files are properly placed in the `notebooks/` directory
- Check that the file paths in `App.jsx` match your notebook locations

### Issue: Styling issues
- Clear browser cache
- Try rebuilding the application: `npm run build`

### Issue: Port already in use
- Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001, // Use a different port
  host: true
}
```

## Support

For issues related to the Biomni framework itself, please refer to the main Biomni repository documentation.

---

Built with ?? for the Biomni community
