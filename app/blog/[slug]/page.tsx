import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";

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
          <TitleSection title={post.metadata.title} publishedAt={post.metadata.publishedAt} />
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
        <p className="text-lg sm:text-xl grid-child-left font-mondwest">{formatDate(post.metadata.publishedAt)}</p>
        <div className="grid-child-center">
          <article>
            <CustomMDX source={post.content} />
          </article>
        </div>
      </section>
    </>
  );
}

function TitleSection({ title, publishedAt }) {
  if (!title) {
    return null;
  }

  if (!publishedAt) {
    return null;
  }

  return (
    // {/* <div className="mb-20 text-stone-800"> */}
    // {/*   <h1 className="mb-0 text-5xl sm:text-7xl font-mondwest">{title}</h1> */}
    // {/*   <h2 className="mt-0.5 text-base font-normal opacity-50 font-nb-architect-neue">{formatDate(publishedAt)}</h2> */}
    // {/* </div> */}
    <div className="grid-child-center">
      <div className="flex justify-center items-center h-48 !text-stone-800 sm:h-[25rem]">
        <h1 className="text-4xl sm:text-7xl font-mondwest">{title}</h1>
      </div>
    </div>
  );
}
