# Panmoni

Panmoni is a Web3 product studio building practical, permissionless, open-source products to facilitate access to prosperity for everyone, everywhere.

## Getting Started

This is the static website for Panmoni, built with:
- [Vite](https://vitejs.dev/) for development server and build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Phosphor Icons](https://phosphoricons.com/) for icons
- [Biome](https://biomejs.dev/) for formatting and linting

### Development

```bash
pnpm install
pnpm run dev
```

### Build for Production

```bash
pnpm run build
pnpm run serve  # preview built site
```

### Code Quality

```bash
pnpm run format   # format code with Biome
pnpm run lint     # lint code for errors
pnpm run check    # check formatting and linting
```

## Deployment to Cloudflare Pages

This site uses pnpm and Vite. Update your Cloudflare Pages project settings:

1. **Build command**: `pnpm run build`
2. **Build output directory**: `dist`
3. **Node version**: 18 (or later)

Cloudflare Pages will automatically detect the `packageManager` field in `package.json` and use pnpm.

The build produces `index.html` and `404.html` in the `dist` directory. Static files in the `public/` directory (like `_redirects` and `_headers`) are copied to the root of `dist`.

## License

© 2017-2026 George Donnelly. All rights reserved.
