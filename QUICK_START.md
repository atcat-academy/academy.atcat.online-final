# Quick Start Guide: Layout Configuration

## Access the Configuration Interface

1. **Start your development servers** (if not already running):
   ```bash
   npm run dev          # Terminal 1 - Next.js
   npx convex dev       # Terminal 2 - Convex
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000/layoutConfig
   ```

3. **Configure your layout**:
   - Select components for Header, Footer, and Logo sections
   - Choose "None" to disable any section
   - Click "Save Configuration"

4. **See the changes**:
   - Navigate back to the home page: `http://localhost:3000/`
   - Your selected components will be displayed

## Quick Access

A "Layout Config" link has been added to the header navigation for easy access.

## Example Configurations

### Minimal Layout
- Header: Header Minimal
- Footer: Footer Minimal
- Logo: Logo Minimal

### Full Featured Layout (Default)
- Header: Header Hamed
- Footer: Footer Hamed
- Logo: Logo Hamed

### Landing Page Layout
- Header: Header Minimal
- Footer: None
- Logo: Logo Minimal

### Content-Focused Layout
- Header: None
- Footer: Footer Minimal
- Logo: None

## Current Components

You currently have 2 variations of each component type:

### Headers
1. **Header Hamed** - Full header with navigation
2. **Header Minimal** - Simple centered header

### Footers
1. **Footer Hamed** - Detailed footer with links
2. **Footer Minimal** - Simple copyright line

### Logos
1. **Logo Hamed** - "Home" text link
2. **Logo Minimal** - Lightning bolt emoji

## Adding Your Own Components

See `LAYOUT_CONFIG_README.md` for detailed instructions on adding new components to the system.

## Troubleshooting

**Configuration not saving?**
- Ensure Convex dev server is running (`npx convex dev`)
- Check browser console for errors
- Verify `.env.local` has correct Convex credentials

**Components not changing?**
- Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that you clicked "Save Configuration"

**Page not loading?**
- Ensure Next.js dev server is running (`npm run dev`)
- Check the terminal for any errors

## Next Steps

1. Try out different component combinations
2. Create your own custom components
3. Register new components in `lib/layout-config.ts`
4. Share configurations with your team

Enjoy your flexible layout system! 🎉

