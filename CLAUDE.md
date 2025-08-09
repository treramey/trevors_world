# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality
- Biome is used for linting, formatting, and import organization
- Run `npx biome check` to check all files
- Run `npx biome check --write` to automatically fix issues
- Configuration in `biome.json` with 120 character line width and 2-space indentation

## Project Architecture

This is a Next.js 15 portfolio blog built with:
- **App Router** - All routes in `/app` directory
- **React 19** with TypeScript 5.9
- **Tailwind CSS v4** - Global styles in `app/global.css`
- **Biome** - Linting, formatting, and import organization
- **pnpm** - Package management (pinned to 10.14.0)

### Key Structure
- `/app` - Next.js app router pages and components
  - `/blog` - Blog functionality with MDX support
  - `/components` - Shared UI components
  - `/hooks` - Custom React hooks (useSound)
- `/components/ui` - Shadcn/ui components (button)
- `/lib` - Utility functions
- `/public` - Static assets including custom fonts and sounds

### Blog System
- MDX files stored in `app/blog/posts/`
- Frontmatter parsing with metadata (title, publishedAt, summary, image)
- Blog utilities in `app/blog/utils.ts` handle file reading and date formatting
- RSS feed generated at `/rss`
- Dynamic OG image generation at `/og`

### Custom Features
- **Sound effects** - Howler.js integration with mouse click sounds
- **Custom fonts** - NBArchitekt, Mondwest, and NeueKit locally hosted
- **CRT aesthetic** - Background gradients and scan line overlays
- **Retro styling** - Custom cursor and pointer images in `/public`

### SEO & Analytics
- Vercel Analytics and Speed Insights integrated
- Sitemap generation in `app/sitemap.ts`
- Robots.txt in `app/robots.ts`
- Optimized metadata and Open Graph tags

## Development Notes

- TypeScript strict mode enabled
- ESLint ignored during builds (using Biome instead)
- Image optimization configured for common device sizes
- Experimental package imports optimization for framer-motion
- Package manager locked to pnpm@10.14.0 with corepack