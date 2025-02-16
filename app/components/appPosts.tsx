import { formatDate, getBlogPosts } from "app/blog/utils";
import { ArrowRight } from "lucide-react";

export function Posts() {
	var posts = getBlogPosts();
	return posts.map((post) => {
		<div className="flex justify-between items-center w-full">
			<div className="flex flex-col space-x-0 w-full md:flex-row md:space-x-2">
				<h3 className="text-neutral-900 dark:text-neutral-100">
					{post.metadata.title}
				</h3>
				<p className="max-w-prose !tracking-wide opacity-60 group-hover:opacity-90 font-mondwest">
					{formatDate(post.metadata.publishedAt, false)}
				</p>
			</div>
			<div className="flex items-center">
				<ArrowRight className="w-4 h-4 opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
			</div>
		</div>;
	});
}
