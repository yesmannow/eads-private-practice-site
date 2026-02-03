# Favicon Setup

## Overview
Custom favicon for Blazing Star Therapy featuring a stylized Liatris (blazing star) flower design.

## Design Elements
- **Colors**:
  - Purple background (`#7C3AED`) - represents creativity and healing
  - Golden/amber flower (`#FBBF24`) - represents the blazing star flower
  - Green leaves (`#10B981`) - natural, growth-oriented
- **Icon**: Simplified botanical illustration of a Liatris flower

## Files Generated
- `favicon.svg` - Vector source file
- `favicon.ico` - Standard favicon (32x32, placed in `src/app/`)
- `favicon-16x16.png` - Small icon
- `favicon-32x32.png` - Standard icon
- `favicon-48x48.png` - Medium icon
- `favicon-64x64.png` - Large icon
- `favicon-128x128.png` - Retina display
- `favicon-256x256.png` - High resolution
- `apple-touch-icon.png` - iOS home screen icon (180x180)

## Regenerating Favicons
If you need to modify the favicon design:

1. Edit `public/favicon.svg` with your preferred SVG editor or text editor
2. Run the generation script:
   ```bash
   npm run generate:favicon
   ```

This will regenerate all favicon formats from the SVG source.

## Browser Support
The current setup provides comprehensive browser support:
- Modern browsers: Uses SVG for crisp display at any size
- Safari/iOS: Uses Apple touch icon
- Legacy browsers: Falls back to ICO format
- Various pixel densities: Multiple PNG sizes available

## Next.js Integration
The favicon is configured in:
- `src/app/layout.tsx` - Metadata configuration
- `src/app/icon.tsx` - Dynamic favicon generation (Next.js 13+ feature)
- `src/app/favicon.ico` - Static fallback
