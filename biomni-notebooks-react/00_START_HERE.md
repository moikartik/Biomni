# ?? START HERE - Biomni Notebooks React App

Welcome to your brand new React implementation of Biomni notebooks!

## ? Quick Start (30 seconds)

```bash
cd /workspace/biomni-notebooks-react
npm install
npm run dev
```

Open your browser to `http://localhost:3000` and you're done! ??

## ?? What You Get

A beautiful, modern web application that displays all your Biomni tutorial notebooks:

- **Biomni 101** - Introduction to Biomni
- **101 Biomni Tutorial** - Comprehensive examples
- **CRISPR Cloning Example** - Practical walkthrough

## ? Features

- ?? **Beautiful UI** - Modern, clean design
- ?? **Responsive** - Works on all devices
- ?? **Syntax Highlighting** - Colorful code display
- ?? **Markdown Support** - Rich text formatting
- ??? **Image Display** - See notebook outputs
- ?? **Easy Navigation** - Switch between notebooks instantly

## ?? Documentation Guide

### New Users (Start Here!)
1. **This File** - You're reading it! Quick overview
2. **QUICKSTART.md** - 5-minute getting started guide
3. **README.md** - Complete user documentation

### Setup & Configuration
4. **SETUP.md** - Detailed setup instructions
5. **INSTALLATION_TEST.md** - Verify your installation

### Developers
6. **PROJECT_SUMMARY.md** - Technical overview
7. **BIOMNI_REACT_APP_COMPLETE.md** (in parent folder) - Full implementation details

## ?? First Time Setup

### 1. Prerequisites
- Node.js v16 or higher ([Download](https://nodejs.org))
- npm (comes with Node.js)

### 2. Install Dependencies
```bash
cd /workspace/biomni-notebooks-react
npm install
```

Wait for installation to complete (1-2 minutes on first run)

### 3. Start the App
```bash
npm run dev
```

You'll see output like:
```
  VITE v5.0.8  ready in 300 ms

  ?  Local:   http://localhost:3000/
  ?  Network: use --host to expose
```

### 4. Open in Browser
Click the `http://localhost:3000` link or open it manually in your browser.

## ?? What You'll See

### Main Interface
```
???????????????????????????????????????????????
? ?  Biomni Interactive Notebooks    [Current]?  ? Header
???????????????????????????????????????????????
?           ?                                 ?
? Tutorials ?  # Welcome to Biomni            ?
?           ?                                 ?
? ?? Biomni ?  This is a tutorial notebook... ?
?   101     ?                                 ?
?           ?  ```python                      ?  ? Notebook
? ?? 101    ?  import biomni                  ?     Content
?   Biomni  ?  ```                            ?
?           ?                                 ?
? ?? CRISPR ?  [Output displayed here]        ?
?   Cloning ?                                 ?
?           ?                                 ?
?   ?       ?                                 ?
? Sidebar   ?            ?                    ?
?           ?      Main Content               ?
???????????????????????????????????????????????
```

## ?? Common Tasks

### View Different Notebooks
Click any notebook in the sidebar to switch to it.

### Show/Hide Sidebar
Click the `?` button in the header.

### Collapse Output
Click the `?` button on code cells to hide their output.

### Mobile View
On small screens, the sidebar becomes an overlay. Tap `?` to show/hide it.

## ??? Available Commands

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## ?? Project Structure

```
biomni-notebooks-react/
??? src/                    # Application source code
?   ??? components/         # React components
?   ??? App.jsx            # Main app
?   ??? main.jsx           # Entry point
??? notebooks/             # Your Jupyter notebooks
??? public/                # Static assets
??? [documentation].md     # Various docs
```

## ? Troubleshooting

### Can't install dependencies?
```bash
npm cache clean --force
npm install
```

### Port 3000 already in use?
The app will automatically use the next available port (3001, 3002, etc.)

### Notebooks not showing?
1. Check that notebook files exist in `notebooks/` folder
2. Check browser console (F12) for errors
3. Try refreshing the page (Ctrl+R)

### Need more help?
- See [INSTALLATION_TEST.md](INSTALLATION_TEST.md) for detailed diagnostics
- Check [SETUP.md](SETUP.md) for configuration options
- Review [README.md](README.md) for full documentation

## ?? Ready to Deploy?

Once you've tested locally, you can deploy to:
- **Netlify** (easiest) - Drag & drop the `dist` folder
- **Vercel** - One command: `vercel`
- **GitHub Pages** - Free static hosting
- **Your own server** - Just copy the `dist` folder

See [README.md](README.md) for deployment details.

## ?? Learning Path

### For Users
1. Start the app (above)
2. Explore the notebooks
3. Try switching between them
4. Resize the window to see responsive design

### For Developers
1. Read [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
2. Examine the source code in `src/`
3. Try customizing the theme in `src/index.css`
4. Add your own notebook (see [SETUP.md](SETUP.md))

## ? Verification Checklist

Before you start exploring:

- [ ] Node.js installed (run `node --version`)
- [ ] In the correct directory (`biomni-notebooks-react`)
- [ ] Dependencies installed (`npm install` completed)
- [ ] Development server running (`npm run dev`)
- [ ] Browser open to localhost:3000
- [ ] You can see the notebook interface

## ?? You're All Set!

Everything is ready to go. The application is:

? Fully functional  
? Production-ready  
? Well-documented  
? Easy to customize  
? Ready to deploy  

## ?? Need Help?

1. **Quick Questions**: Check [QUICKSTART.md](QUICKSTART.md)
2. **Setup Issues**: See [INSTALLATION_TEST.md](INSTALLATION_TEST.md)
3. **Customization**: Read [SETUP.md](SETUP.md)
4. **Technical Details**: Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## ?? Next Steps

Now that you're set up:

1. **Explore** the notebooks
2. **Customize** the styling if desired
3. **Add** your own notebooks
4. **Deploy** to share with others
5. **Enjoy** your new notebook viewer!

---

**Version**: 1.0.0  
**Status**: Production Ready ?  
**Last Updated**: November 2, 2025  

Built with ?? using React + Vite

**Happy Exploring!** ????
