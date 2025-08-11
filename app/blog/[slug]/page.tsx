import { formatDate, getBlogPosts } from "app/blog/utils";
import { CustomMDX } from "app/components/mdx";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return null;
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  const ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function splitTitle(title: string): { mainTitle: string; subtitle?: string } {
  const i = title.indexOf(":");
  if (i === -1) {
    return { mainTitle: title.trim() };
  }
  const mainTitle = title.slice(0, i).trim();
  const subtitle = title.slice(i + 1).trim();
  return { mainTitle: mainTitle || title.trim(), subtitle: subtitle || undefined };
}

export default async function Blog(props) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="grid-parent">
        <div className="grid-child-center">
          <TitleSection title={post.metadata.title} subtitle={post.metadata.subtitle} publishedAt={post.metadata.publishedAt} />
        </div>
      </section>
      <section className="grid-parent prose">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "My Portfolio",
              },
            }),
          }}
        />
        <p className="text-lg sm:text-xl grid-child-left font-mondwest text-muted-foreground">{formatDate(post.metadata.publishedAt)}</p>
        <div className="grid-child-center">
          <article>
            <CustomMDX source={post.content} />
          </article>
        </div>
      </section>
    </>
  );
}

function TitleSection({ title, subtitle: subtitleFromMeta, publishedAt }) {
  if (!title) {
    return null;
  }

  if (!publishedAt) {
    return null;
  }

  const { mainTitle, subtitle: subtitleFromTitle } = splitTitle(title);
  const subtitle = subtitleFromMeta ?? subtitleFromTitle;

  return (
    // {/* <div className="mb-20 text-slate-800"> */}
    // {/*   <h1 className="mb-0 text-5xl sm:text-7xl font-mondwest">{title}</h1> */}
    // {/*   <h2 className="mt-0.5 text-base font-normal opacity-50 font-nb-architect-neue">{formatDate(publishedAt)}</h2> */}
    // {/* </div> */}
    <div className="grid-child-center">
      <div className="flex justify-center items-center h-36 sm:h-[25rem]">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-7xl sm:text-8xl font-mondwest text-balance text-center text-foreground">{mainTitle}</h1>
          {subtitle && (
            <p className="text-base sm:text-lg font-nb-architect text-muted-foreground text-center max-w-prose">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
