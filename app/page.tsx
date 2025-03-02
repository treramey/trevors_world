import { LatestThreeBlogPosts } from "app/components/posts";
import { RetroCard } from "./components/retroCard";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="grid-parent">
        <div className="grid-child-center">
          <div className="flex justify-center items-center h-48 !text-stone-800 sm:h-[25rem]">
            <h1 className="text-6xl sm:text-7xl font-mondwest">Trevor</h1>
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
            tempor incididunt ut labore et dolore magna aliqua
          </p>
          <RetroCard>
            <div className="flex-1 py-4 pr-4 pl-2 text-white sm:py-5 sm:pr-5 overflow-x-none bg-neutral-900">
              <pre>
                <code>
                  <div>let location = 'Frisco, TX'</div>
                  <div>let hobbies = [</div>
                  <div> 'Building',</div>
                  <div> 'Designing',</div>
                  <div> 'Traveling',</div>
                  <div>]</div>
                </code>
              </pre>
            </div>
          </RetroCard>
        </div>
      </section>
      <LatestThreeBlogPosts />
    </>
  );
}
