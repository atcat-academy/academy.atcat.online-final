# Layout Configuration System - Architecture Diagram

## System Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                         │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     /layoutConfig Page UI                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Header     │  │   Footer     │  │    Logo      │          │
│  │   Selector   │  │   Selector   │  │   Selector   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│              [Save Configuration Button]                        │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│              Convex Mutation (layoutConfig.update)              │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Convex Database                             │
│                    (layoutConfig table)                          │
│                                                                  │
│  {                                                               │
│    header: "header-minimal",                                     │
│    footer: "footer-hamed",                                       │
│    logo: "logo-minimal"                                          │
│  }                                                               │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│               Convex Query (layoutConfig.get)                    │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DynamicLayout Component                     │
│                                                                  │
│  Reads configuration and dynamically loads:                      │
│  • HeaderComponent (or null if "none")                           │
│  • FooterComponent (or null if "none")                           │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Rendered Page                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              Selected Header Component                     │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │                   Page Content                             │  │
│  │                                                            │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              Selected Footer Component                     │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Component Registry (lib/layout-config.ts)

```
LAYOUT_COMPONENTS
├── header
│   ├── none (null)
│   ├── header-hamed (HeaderHamed component)
│   └── header-minimal (HeaderMinimal component)
├── footer
│   ├── none (null)
│   ├── footer-hamed (FooterHamed component)
│   └── footer-minimal (FooterMinimal component)
└── logo
    ├── none (null)
    ├── logo-hamed (LogoHamed component)
    └── logo-minimal (LogoMinimal component)
```

## File Structure

```
shadcn-convex-clerk-n16-template/
├── app/
│   ├── (site)/
│   │   └── layout.tsx              ← Uses DynamicLayout
│   ├── layoutConfig/
│   │   └── page.tsx                ← Configuration UI
│   └── ...
├── components/
│   ├── headers/
│   │   ├── header-hamed.tsx        ← Component option
│   │   └── header-minimal.tsx      ← Component option
│   ├── footers/
│   │   ├── footer-hamed.tsx        ← Component option
│   │   └── footer-minimal.tsx      ← Component option
│   ├── logos/
│   │   ├── logo-hamed.tsx          ← Component option
│   │   └── logo-minimal.tsx        ← Component option
│   └── layouts/
│       └── dynamic-layout.tsx      ← Dynamic loader
├── lib/
│   └── layout-config.ts            ← Component registry
├── convex/
│   ├── schema.ts                   ← Database schema
│   └── layoutConfig.ts             ← Queries/Mutations
└── docs/
    ├── LAYOUT_CONFIG_README.md     ← Full documentation
    ├── IMPLEMENTATION_SUMMARY.md   ← What was built
    ├── QUICK_START.md              ← Getting started
    └── ARCHITECTURE.md             ← This file
```

## Data Flow

### Save Configuration
1. User selects components in `/layoutConfig` UI
2. Clicks "Save Configuration"
3. `useMutation(api.layoutConfig.update)` is called
4. Data is saved to Convex database
5. Success message displayed

### Load Configuration
1. User visits any page using `(site)` layout
2. `DynamicLayout` component is rendered
3. `useQuery(api.layoutConfig.get)` fetches configuration
4. `getComponent()` helper retrieves component references
5. Selected components are rendered
6. If "none" selected, section is skipped

## Key Design Decisions

### Why Convex for Storage?
- Already integrated in the project
- Real-time updates
- Type-safe queries
- No additional setup needed

### Why Dynamic Import?
- Components are loaded based on configuration
- No bundle bloat
- Easy to add/remove components

### Why Centralized Registry?
- Single source of truth
- Easy to add new components
- Type-safe component selection

### Why "None" Option?
- Provides maximum flexibility
- Allows minimalist layouts
- No need to create empty components

## Extension Points

### Add New Section Type (e.g., Sidebar)
1. Add to `LayoutComponentConfig` interface
2. Add to `LAYOUT_COMPONENTS` object
3. Add to database schema
4. Add to `DynamicLayout` render logic

### Add Component Props
1. Extend `ComponentOption` interface
2. Add props field to component definitions
3. Pass props in `DynamicLayout` when rendering

### Add Preview Feature
1. Create preview component
2. Render selected component in preview area
3. Add to configuration UI

### Add Per-Page Configuration
1. Extend schema to include page/route field
2. Update queries to filter by current route
3. Update UI to select pages

## Performance Considerations

- ✅ Components only loaded when selected
- ✅ No unnecessary re-renders
- ✅ Convex caching optimizes queries
- ✅ Static configuration reduces database calls
- ✅ Type checking at compile time

## Security Considerations

- ✅ No user input in component selection (predefined options)
- ✅ Type-safe component loading
- ✅ No dynamic imports from user-provided paths
- ✅ Configuration stored in database, not cookies/localStorage

## Future Improvements

- [ ] Add visual previews/thumbnails
- [ ] Add component variant props (e.g., colors, sizes)
- [ ] Add animation transitions between component changes
- [ ] Add configuration versioning/history
- [ ] Add A/B testing integration
- [ ] Add role-based access control
- [ ] Add multi-site/tenant support

