import Link from "next/link";

import { formatDate, getBlogPosts } from "app/blog/utils";
import { ArrowRight } from "lucide-react";
import { Metadata as NextMetadata } from "next";
import type { Metadata } from "app/blog/utils";

function getTop3LatestPosts() {
  return getBlogPosts().slice(0, 3);
}

export function LatestThreeBlogPosts() {
  const topThreePosts = getTop3LatestPosts();

  return (
    <section className="grid-parent">
      <p className="text-2xl sm:text-xl grid-child-left font-mondwest">The garden</p>
      <div className="grid-child-center">
        {topThreePosts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
        <Link className="flex gap-2 items-center text-xl group font-mondwest" href={"/blog"}>
          See more
          <div className="flex items-center">
            <ArrowRight className="w-4 h-4 opacity-70 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export function ListAllBlogPosts() {
  const posts = getBlogPosts();
  const years = Array.from(new Set(posts.map((post) => new Date(post.metadata.publishedAt).getFullYear())));
  return years.map((year) => {
    return (
      <section key={year} className="grid-parent">
        <p className="text-2xl sm:text-xl grid-child-left font-mondwest">{year}</p>
        <div className="grid-child-center">
          {posts
            .filter((post) => new Date(post.metadata.publishedAt).getFullYear() === year)
            .map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
        </div>
      </section>
    );
  });
}

type BlogPostProps = {
  post: {
    metadata: Metadata;
    slug: string;
    content: string;
  };
};

function BlogPost({ post }: BlogPostProps) {
  return (
    <Link
      key={post.slug}
      className="flex flex-col mb-5 border-b duration-200 border-stone-300 group"
      href={`/blog/${post.slug ?? ""}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col space-x-0 w-full md:flex-row md:space-x-2">
          {post.metadata.title && <h3 className="!text-stone-900">{post.metadata.title}</h3>}
        </div>
        <div className="flex items-center">
          <ArrowRight className="w-4 h-4 opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
        </div>
      </div>
      <p className="max-w-prose !tracking-wide opacity-70 group-hover:opacity-90 font-mondwest">
        {post.metadata.publishedAt && formatDate(post.metadata.publishedAt, false)}
      </p>
    </Link>
  );
}
