# Setup Guide for Biomni Notebooks React App

This guide will help you set up and run the Biomni Notebooks React application.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Convert notebooks to JSON format (if needed)
node scripts/convert-notebooks.js

# 3. Start the development server
npm run dev
```

## Detailed Setup Instructions

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit https://nodejs.org/
2. Download and install the LTS version (v16 or higher)
3. Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Project Dependencies

Navigate to the project directory and install dependencies:

```bash
cd biomni-notebooks-react
npm install
```

This will install:
- React and React DOM
- Vite (build tool)
- React Markdown (for rendering markdown cells)
- React Syntax Highlighter (for code highlighting)
- Other development dependencies

### Step 3: Prepare Notebook Data

The application expects notebook data to be available as JSON. You have two options:

#### Option A: Use Vite's JSON Import (Recommended)

Vite can directly import JSON files. Update `src/App.jsx` to import notebooks directly:

```javascript
import biomni101 from '../notebooks/biomni_101.ipynb?raw'
import notebook101 from '../notebooks/101_biomni.ipynb?raw'
import cloningNotebook from '../notebooks/examples/cloning.ipynb?raw'

// Then parse them
const notebooks = [
  {
    id: 'biomni_101',
    name: 'Biomni 101',
    path: 'biomni_101',
    data: JSON.parse(biomni101)
  },
  // ... more notebooks
]
```

#### Option B: Convert Notebooks to JSON

Run the conversion script:

```bash
node scripts/convert-notebooks.js
```

This will create JSON files in `src/data/` directory.

### Step 4: Start the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000` (or another port if 3000 is in use).

### Step 5: View in Browser

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:3000`).

## Building for Production

To create a production-optimized build:

```bash
npm run build
```

This creates a `dist/` directory with optimized files.

To preview the production build:

```bash
npm run preview
```

## Troubleshooting

### Problem: "Cannot find module" errors

**Solution**: Make sure you've run `npm install`

### Problem: Notebooks not displaying

**Solution**: 
1. Check that notebook files exist in `notebooks/` directory
2. Verify the import paths in `src/App.jsx`
3. Ensure notebooks are valid JSON (use a JSON validator)

### Problem: Port already in use

**Solution**: 
1. Edit `vite.config.js` to change the port:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change this number
    host: true
  }
})
```

### Problem: Styling issues

**Solution**:
1. Clear browser cache
2. Hard reload (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors

### Problem: Hot Module Replacement (HMR) not working

**Solution**:
1. Restart the dev server
2. Check that your editor isn't causing file permission issues
3. Try deleting `node_modules` and running `npm install` again

## Development Tips

### Hot Reload

Vite provides instant hot module replacement. Changes to your code will be reflected immediately in the browser without a full page reload.

### Browser DevTools

Use React DevTools extension for debugging:
- Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

### Code Formatting

Consider adding Prettier for consistent code formatting:

```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### ESLint

The project includes ESLint configuration. To run linting:

```bash
npm run lint
```

## Project Customization

### Adding New Notebooks

1. Place `.ipynb` file in `notebooks/` directory
2. Import in `src/App.jsx`
3. Add to notebooks array

Example:
```javascript
import newNotebook from '../notebooks/new_notebook.ipynb?raw'

const notebooks = [
  // ... existing notebooks
  {
    id: 'new_notebook',
    name: 'New Notebook Title',
    path: 'new_notebook',
    data: JSON.parse(newNotebook)
  }
]
```

### Customizing Styles

#### Global Theme

Edit `src/index.css` CSS variables:

```css
:root {
  --primary-color: #2563eb;  /* Change primary color */
  --bg-color: #f8fafc;        /* Change background */
  /* ... other variables */
}
```

#### Component Styles

Each component has its own CSS file:
- `src/components/CodeCell.css`
- `src/components/MarkdownCell.css`
- `src/components/OutputCell.css`
- etc.

### Adding Features

Common features to add:

1. **Search Functionality**: Add a search bar to find content in notebooks
2. **Cell Execution**: Integrate with a backend to execute code cells
3. **Export**: Add ability to export notebooks as PDF or HTML
4. **Themes**: Implement dark/light theme toggle
5. **Favorites**: Allow users to bookmark favorite notebooks

## Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=http://localhost:8000
VITE_APP_TITLE=Biomni Notebooks
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/biomni-notebooks-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

## Support

For issues or questions:
1. Check this setup guide
2. Review the main README.md
3. Check the Biomni repository documentation

---

Happy coding! ??
