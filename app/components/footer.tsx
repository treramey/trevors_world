import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 grid-parent">
      <div className="relative grid-child-left flex w-full justify-between lg:justify-start gap-2 lg:pl-6">
        <svg
          height={22}
          width={22}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="12 12 70 70"
          x="0px"
          y="0px"
        >
          <path d="M50,25A25,25,0,1,0,75,50,25,25,0,0,0,50,25ZM62.83,67.58A17.87,17.87,0,0,1,38.36,44.65a12.66,12.66,0,1,1,23.31,9.87A7.45,7.45,0,0,1,48,48.71a1.61,1.61,0,1,0-3-1.25,10.68,10.68,0,0,0,5.67,14,10.69,10.69,0,0,0,14-5.67A15.89,15.89,0,1,0,35.38,43.4,21.12,21.12,0,0,0,46.6,71c.6.25,1.21.48,1.83.67a21.78,21.78,0,1,1,14.4-4.13Z" />
        </svg>
        <p className="font-nb-architect">Dream, Build, Ship</p>
      </div>
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
