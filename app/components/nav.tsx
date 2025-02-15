import Link from "next/link";

const navItems = {
	"/": {
		name: "home",
	},
	"/blog": {
		name: "blog",
	},
};

export function Navbar() {
	return (
		<div className="pt-2 mb-32 text-xl grid-parent font-mondwest">
			<Link href="/" className="col-span-6">
				Trevor Ramey
			</Link>
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
