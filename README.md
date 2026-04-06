# Platform

Core platform layer for Entaprenua storefronts.

## What is this?

This repository contains the protected platform code that powers all Entaprenua storefronts. It provides:

- **UI Components** (`src/components/ui/`) - Platform-rendered components
- **Utilities** (`src/lib/`) - Platform utilities and helpers  
- **Build System** - npm dependencies and build configuration

## How it works

When store owners customize their storefronts via GitHub, the platform layer is merged with their custom code:

```
platform/src/components/ui/*  ← Protected (fetched fresh on each build)
platform/src/lib/*           ← Protected
platform/package*.json        ← Protected
store/src/routes/*            ← User customization (trusted)
store/src/components/*       ← User components
store/public/*               ← User assets
```

This ensures:
- Store owners can fully customize their storefront design and pages
- Platform can push security updates and new features without overwriting user code
- All stores benefit from platform improvements automatically

## For Store Owners

You don't need to understand this repository. Your store's repository contains your custom code only. The platform layer is applied automatically when you push changes.

For customization, edit files in your store's repository:
- `src/routes/` - Page routes
- `src/components/stores/` - Custom components
- `public/` - Static assets

## Versioning

This repository uses semantic versioning with tags:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Store builds pin to specific platform versions via `platform-version.json` in each store's repository.
