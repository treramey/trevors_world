import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<>
			<section className="grid-parent">
				<div className="grid-child-center">
					<div className="flex justify-center items-center h-48 text-stone-800 sm:h-[25rem]">
						<h1 className="text-7xl sm:text-8xl font-mondwest">Trevor</h1>
					</div>
					<p className="text-pretty">
						Hello! I'm Trevor — a software designer building tools for the web.
					</p>
					<p>
						{`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
					</p>
				</div>
			</section>
			<BlogPosts />
		</>
	);
}
