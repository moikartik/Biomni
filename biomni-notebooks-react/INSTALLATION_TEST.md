# Installation Test Guide

This guide helps you verify that the Biomni Notebooks React application is properly installed and working.

## Pre-Installation Checklist

? Node.js installed (v16+)  
? npm installed  
? Terminal/command prompt access  

## Installation Steps

### Step 1: Navigate to Project
```bash
cd /workspace/biomni-notebooks-react
```

### Step 2: Install Dependencies
```bash
npm install
```

**Expected output:**
- No errors
- All packages installed successfully
- `node_modules` directory created

### Step 3: Verify Installation
```bash
# Check if node_modules exists
ls -la node_modules | head -5

# Verify key dependencies
npm list react react-dom vite
```

### Step 4: Start Development Server
```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in XXX ms

  ?  Local:   http://localhost:3000/
  ?  Network: http://192.168.x.x:3000/
```

## Verification Checklist

### Visual Verification

When you open `http://localhost:3000`, you should see:

? **Header**
- "Biomni Interactive Notebooks" title
- Sidebar toggle button (?)
- Current notebook name displayed

? **Sidebar** (left side)
- "Tutorials" heading
- Three notebook entries:
  - ?? Biomni 101
  - ?? 101 Biomni Tutorial
  - ?? CRISPR Cloning Example

? **Main Content Area**
- Notebook cells displayed
- Code cells with syntax highlighting
- Markdown cells properly rendered
- Output cells showing results

### Functional Verification

Test these interactions:

1. **Sidebar Toggle**
   - Click the ? button
   - Sidebar should hide/show
   - Content area should adjust width

2. **Notebook Navigation**
   - Click different notebooks in sidebar
   - Content should change immediately
   - Active notebook should be highlighted

3. **Code Cell Outputs**
   - Find a code cell with output
   - Click the ? button to collapse
   - Click ? to expand again

4. **Responsive Design**
   - Resize browser window
   - On mobile size, sidebar becomes overlay
   - Layout remains usable

5. **Scroll Behavior**
   - Scroll through notebook
   - All content should be readable
   - No layout breaking

## Common Issues & Solutions

### Issue: `npm install` fails

**Symptoms**: Error messages during installation

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Symptoms**: Error message about port being in use

**Solutions**:
```bash
# Option 1: Kill process using port 3000
# On Linux/Mac:
lsof -ti:3000 | xargs kill -9

# Option 2: Use different port
# Edit vite.config.js and change port to 3001
```

### Issue: Notebooks not loading

**Symptoms**: Error in browser console, notebooks don't display

**Solutions**:
1. Check browser console (F12) for errors
2. Verify notebooks exist:
```bash
ls -la notebooks/*.ipynb
ls -la notebooks/examples/*.ipynb
```
3. Clear browser cache and reload

### Issue: Blank screen

**Symptoms**: White/blank page, no content

**Solutions**:
1. Check browser console (F12) for JavaScript errors
2. Verify React is working:
```bash
npm list react react-dom
```
3. Rebuild:
```bash
npm run build
npm run preview
```

### Issue: Styling issues

**Symptoms**: Layout broken, no colors, text overlap

**Solutions**:
1. Hard reload: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Check if CSS files are present:
```bash
find src -name "*.css"
```

## Performance Verification

### Load Time Test
1. Open browser DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check:
   - Page load time: Should be < 3 seconds
   - Total resources: Should be < 2 MB
   - No 404 errors

### Memory Test
1. Open browser DevTools (F12)
2. Go to Performance/Memory tab
3. Take heap snapshot
4. Navigate between notebooks
5. Check: Memory usage should be reasonable (< 100 MB)

## Browser Compatibility Test

Test in multiple browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) - if on Mac
- [ ] Edge (latest)

Each should:
- Display correctly
- Navigate smoothly
- Handle interactions properly

## Mobile Test

If possible, test on mobile device:

1. Access app from mobile browser
2. Check:
   - [ ] Sidebar becomes overlay
   - [ ] Touch interactions work
   - [ ] Text is readable
   - [ ] Code cells are scrollable
   - [ ] Images display correctly

## Build Test

Test production build:

```bash
# Build
npm run build

# Should complete without errors
# Check dist folder was created
ls -la dist

# Preview build
npm run preview

# Visit preview URL and verify everything works
```

## Final Verification

If all checks pass:

? Installation successful  
? Development server runs  
? All notebooks load  
? Navigation works  
? Interactions function  
? Responsive design works  
? Production build succeeds  

## Report Results

### Success ?
If everything works, you're ready to use the application!

### Failure ?
If issues persist:
1. Review error messages carefully
2. Check Node.js and npm versions
3. Ensure all files are present
4. Try reinstalling from scratch
5. Check the main README.md for additional help

## Quick Diagnostic Script

Run this to get diagnostic info:

```bash
echo "=== Biomni React App Diagnostics ==="
echo ""
echo "Node version:"
node --version
echo ""
echo "npm version:"
npm --version
echo ""
echo "Project files:"
ls -la
echo ""
echo "Notebooks:"
ls -la notebooks/
echo ""
echo "Dependencies installed:"
[ -d "node_modules" ] && echo "? node_modules exists" || echo "? node_modules missing"
echo ""
echo "Package.json exists:"
[ -f "package.json" ] && echo "? package.json found" || echo "? package.json missing"
```

---

## Next Steps After Successful Installation

1. Read the [README.md](README.md) for full documentation
2. Explore the notebooks
3. Try customizing the theme (see SETUP.md)
4. Consider deploying (see README.md deployment section)

**Installation Complete!** ??
