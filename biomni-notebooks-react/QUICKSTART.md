# Quick Start Guide

Get the Biomni Notebooks React app running in just a few steps!

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

## Installation & Running

```bash
# 1. Navigate to the project directory
cd biomni-notebooks-react

# 2. Install dependencies (first time only)
npm install

# 3. Start the development server
npm run dev
```

That's it! The app will open at `http://localhost:3000`

## What You'll See

- **Sidebar**: Navigation panel with all available notebooks
- **Main Area**: Interactive notebook viewer with:
  - Syntax-highlighted code cells
  - Rendered markdown content
  - Cell execution outputs (text, images, HTML, errors)

## Available Notebooks

1. **Biomni 101** - Introduction and basic usage
2. **101 Biomni Tutorial** - Comprehensive tutorial
3. **CRISPR Cloning Example** - Practical cloning example

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Next Steps

- See [README.md](README.md) for detailed documentation
- See [SETUP.md](SETUP.md) for advanced configuration
- Start exploring the notebooks!

## Troubleshooting

**Problem**: Dependencies won't install
```bash
# Solution: Clear npm cache and retry
npm cache clean --force
npm install
```

**Problem**: Port 3000 is in use
```bash
# Solution: The dev server will automatically use the next available port
# Or edit vite.config.js to specify a different port
```

**Problem**: Notebooks not loading
```bash
# Solution: Make sure you're in the correct directory
cd biomni-notebooks-react
npm run dev
```

## Support

For more help, see:
- [README.md](README.md) - Full documentation
- [SETUP.md](SETUP.md) - Detailed setup guide
- Main Biomni repository documentation

---

Happy exploring! ????
