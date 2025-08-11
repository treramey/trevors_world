import { ListAllBlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <section className="grid-parent">
        <div className="grid-child-center">
          <div className="flex justify-center items-center h-36 sm:h-[25rem]">
            <h1 className="text-7xl sm:text-8xl font-mondwest text-foreground">The Garden</h1>
          </div>
        </div>
      </section>
      <ListAllBlogPosts />
    </>
  );
}
