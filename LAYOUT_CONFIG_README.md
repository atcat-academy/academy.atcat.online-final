# Layout Configuration System

This template includes a flexible layout configuration system that allows you to dynamically select which components to use for different sections of your site.

## Features

- **Dynamic Component Selection**: Choose which header, footer, and logo components to display
- **"None" Option**: Disable any section by selecting "None"
- **Persistent Configuration**: Settings are saved to Convex database
- **Easy to Extend**: Simple to add new component variations

## Usage

### Accessing the Configuration Page

Visit `/layoutConfig` to access the configuration interface where you can:
- Select which header component to use
- Select which footer component to use
- Select which logo component to use
- Disable any section by choosing "None"

### Adding New Components

1. **Create your component** in the appropriate folder:
   - Headers: `components/headers/`
   - Footers: `components/footers/`
   - Logos: `components/logos/`

2. **Register the component** in `lib/layout-config.ts`:

```typescript
// Import your new component
import HeaderCustom from '@/components/headers/header-custom'

// Add it to the LAYOUT_COMPONENTS object
export const LAYOUT_COMPONENTS: LayoutComponentConfig = {
  header: [
    { value: 'none', label: 'None' },
    { value: 'header-hamed', label: 'Header Hamed', component: HeaderHamed },
    { value: 'header-custom', label: 'Header Custom', component: HeaderCustom }, // Add here
  ],
  // ... rest of config
}
```

3. **That's it!** Your new component will automatically appear in the configuration UI.

## File Structure

```
lib/
  └── layout-config.ts          # Component registry and configuration
components/
  ├── layouts/
  │   └── dynamic-layout.tsx    # Dynamic layout wrapper
  ├── headers/
  │   └── header-hamed.tsx      # Example header
  ├── footers/
  │   └── footer-hamed.tsx      # Example footer
  └── logos/
      └── logo-hamed.tsx        # Example logo
app/
  ├── (site)/
  │   └── layout.tsx            # Uses DynamicLayout
  └── layoutConfig/
      └── page.tsx              # Configuration UI
convex/
  ├── schema.ts                 # Database schema (includes layoutConfig table)
  └── layoutConfig.ts           # Convex queries and mutations
```

## How It Works

1. **Configuration Storage**: Selected component choices are stored in Convex database
2. **Dynamic Loading**: The `DynamicLayout` component reads the configuration and loads the appropriate components
3. **Fallback**: If no configuration is saved, default components are used
4. **Real-time Updates**: Changes are applied immediately after saving

## Default Configuration

```json
{
  "header": "header-hamed",
  "footer": "footer-hamed",
  "logo": "logo-hamed"
}
```

## Component Interface

All components should follow these guidelines:

- **Headers**: Should be self-contained header components with navigation
- **Footers**: Should be self-contained footer components
- **Logos**: Should be small, reusable logo/branding components

Components don't receive any props by default, but you can extend the system to pass props if needed.

## Extending the System

### Adding New Section Types

To add a new section type (e.g., "sidebar"), update:

1. `lib/layout-config.ts`:
   - Add to `LayoutComponentConfig` interface
   - Add to `LAYOUT_COMPONENTS` object
   - Add to `DEFAULT_LAYOUT_CONFIG`

2. `convex/schema.ts`:
   - Add field to `layoutConfig` table

3. `convex/layoutConfig.ts`:
   - Add to mutation args

4. `components/layouts/dynamic-layout.tsx`:
   - Add logic to render the new section

## Tips

- Keep component names descriptive and consistent
- Use the "None" option to create minimalist layouts
- Test different combinations to find what works best for your site
- Components are loaded on-demand, so there's no performance penalty for having many options

