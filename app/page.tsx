import { LatestThreeBlogPosts } from "app/components/posts";
import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from "./components/code-block";
import { RetroCard } from "./components/retroCard";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <section className="grid-parent">
        <div className="grid-child-center">
          <div className="flex justify-center items-center h-36 !text-slate-800 sm:h-[25rem]">
            <h1 className="text-7xl sm:text-8xl font-mondwest">Trevor</h1>
          </div>
          <p className="text-pretty">Hello! I'm Trevor — a software developer building tools for the web.</p>
          <p>
            I'm currently a full stack software engineer at&nbsp;
            <span className="blue-link">
              <Link href="https://silvervinesoftware.com/">Silvervine Software</Link>
            </span>
            , where I work on lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p>
            Beyond Silvervine, I'm occasionally building things with friends at&nbsp;
            <span className="blue-link">
              <Link href="https://www.fluencyforge.com/">Fluency Forge</Link>
            </span>
            &nbsp;and always making something. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Some of the technologies I've been having fun with. </p>
          <div className="flex justify-center my-12 space-x-2">
            <Image loading="lazy" width={64} height={64} alt="Csharp pixel logo" src="/csharp_pixel.png" />
            <Image loading="lazy" width={64} height={64} alt="React pixel logo" src="/react_pixel.png" />
            <Image loading="lazy" width={64} height={64} alt="Tailwind pixel logo" src="/tailwind_pixel.png" />
            <Image loading="lazy" width={64} height={64} alt="Typescript pixel logo" src="/typescript_pixel.png" />
            <Image loading="lazy" width={64} height={64} alt="Next pixel logo" src="/nextjs_pixel.png" />
            {/* <Image loading="lazy" width={64} height={64} alt="Tanstack pixel logo" src="/tanstack_pixel.png" /> */}
          </div>
          <p>Here's what I've been up to nowadays.</p>
          <RetroCard className="mb-6">
            <CodeBlock
              code={`let location = 'Frisco, TX'\nlet hobbies = [\n  'Building',\n  'Designing',\n  'Traveling',\n]`}
            />
          </RetroCard>
        </div>
      </section>
      <LatestThreeBlogPosts />
    </>
  );
}
