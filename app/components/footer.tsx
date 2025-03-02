import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 grid-parent">
      <p className="grid-child-left font-nb-architect">Dream, Build, Test</p>
      <div className="flex flex-col gap-2 mt-4 text-2xl font-medium sm:text-xl lg:mt-0 grid-child-center font-mondwest">
        <Link
          className="flex items-center opacity-70 transition-all hover:opacity-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://bsky.app/profile/trevors.world"
        >
          BlueSky
        </Link>

        <Link
          className="flex items-center opacity-70 transition-all hover:opacity-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/treramey"
        >
          Github
        </Link>
        <Link
          className="flex items-center opacity-70 transition-all hover:opacity-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/treramey/"
        >
          LinkedIn
        </Link>
        {/* <Link */}
        {/*   className="flex items-center opacity-70 transition-all hover:opacity-100" */}
        {/*   rel="noopener noreferrer" */}
        {/*   target="_blank" */}
        {/*   href="/rss" */}
        {/* > */}
        {/*   RSS */}
        {/* </Link> */}
      </div>
    </footer>
  );
}
