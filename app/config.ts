export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-blog-starter.vercel.app",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Trevor's world",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "This is my portfolio.",
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Trevor Ramey",
  },
  rss: {
    title: process.env.NEXT_PUBLIC_RSS_TITLE || "Trevor's Portfolio",
    description: process.env.NEXT_PUBLIC_RSS_DESCRIPTION || "Trevor's portfolio RSS feed",
  },
  og: {
    defaultTitle: process.env.NEXT_PUBLIC_OG_TITLE || "Next.js Portfolio Starter",
  },
} as const;

export const baseUrl = siteConfig.url;
