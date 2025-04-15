import Link from "next/link";

const navItems = {
  "/": {
    name: "About",
  },
  "/blog": {
    name: "Garden",
  },
};

export function Navbar() {
  return (
    <div className="pt-2 text-xl tracking-wide grid-parent font-mondwest">
      <div className="col-span-6" />
      <div className="flex col-span-6 gap-4 justify-end">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link key={path} href={path} className="">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
