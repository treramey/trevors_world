import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { ArrowRight } from "lucide-react";

export function BlogPosts() {
	let allBlogs = getBlogPosts();

	return (
		<div className="grid-parent">
			<div className="text-2xl sm:text-xl grid-child-left font-mondwest">
				blog
			</div>
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<div key={post.slug} className="grid-child-center">
						<Link
							className="flex flex-col mb-5 border-b duration-200 border-stone-300 group"
							href={`/blog/${post.slug}`}
						>
							<div className="flex justify-between items-center w-full">
								<div className="flex flex-col space-x-0 w-full md:flex-row md:space-x-2">
									<h3 className="text-neutral-900 dark:text-neutral-100">
										{post.metadata.title}
									</h3>
								</div>
								<div className="flex items-center">
									<ArrowRight className="w-4 h-4 opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
								</div>
							</div>
							<p className="max-w-prose !tracking-wide opacity-60 group-hover:opacity-90 font-mondwest">
								{formatDate(post.metadata.publishedAt, false)}
							</p>
						</Link>
					</div>
				))}
		</div>
	);
}
