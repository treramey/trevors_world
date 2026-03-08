# PROJECT KNOWLEDGE BASE

**Generated:** 2026-03-08  
**Stack:** Next.js 15.4.10, React 19.1.1, TypeScript 5.9.2, Tailwind 4.1.11

## OVERVIEW

Portfolio blog with MDX content, CRT aesthetic, sound effects, and Rosé Pine theming.

## WHERE TO LOOK

| Task           | Location                   | Notes                                            |
| -------------- | -------------------------- | ------------------------------------------------ |
| Add blog post  | `app/blog/posts/*.mdx`     | Frontmatter: title, publishedAt, summary, image? |
| Blog utilities | `app/blog/utils.ts`        | getBlogPosts(), formatDate(), Metadata type      |
| MDX rendering  | `app/components/mdx.tsx`   | CustomMDX with anchor links, code, images        |
| Base URL       | `app/sitemap.ts`           | Exported as `baseUrl`, used everywhere           |
| Sound effects  | `app/hooks/useSound.tsx`   | Howler.js wrapper, lazy-loaded                   |
| OG images      | `app/og/route.tsx`         | Dynamic generation via ImageResponse             |
| RSS feed       | `app/rss/route.ts`         | RSS 2.0 endpoint                                 |
| Fonts          | `app/layout.tsx`           | next/font/local for NBArchitekt, Mondwest        |
| UI button      | `components/ui/button.tsx` | shadcn/ui with CVA variants                      |

## CONVENTIONS

### Code Style

- 2-space indentation, 120 char line width (biome.json)
- Named exports preferred
- `
