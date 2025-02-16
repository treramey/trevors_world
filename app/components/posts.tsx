import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { ArrowRight } from "lucide-react";

function getTop3LatestPosts() {
	return getBlogPosts().slice(0, 3);
}

export function LatestThreeBlogPosts() {
	let topThreePosts = getTop3LatestPosts();

	return (
		<div className="grid-parent">
			<div className="text-2xl sm:text-xl grid-child-left font-mondwest">
				garden
			</div>
			<div className="grid-child-center">
				{topThreePosts.map((post) => (
					<Link
						key={post.slug}
						className="flex flex-col mb-5 border-b duration-200 border-stone-300 group"
						href={`/blog/${post.slug}`}
					>
						<div className="flex justify-between items-center w-full">
							<div className="flex flex-col space-x-0 w-full md:flex-row md:space-x-2">
								<h3 className="!text-stone-900">{post.metadata.title}</h3>
							</div>
							<div className="flex items-center">
								<ArrowRight className="w-4 h-4 opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
							</div>
						</div>
						<p className="max-w-prose !tracking-wide opacity-60 group-hover:opacity-90 font-mondwest">
							{formatDate(post.metadata.publishedAt, false)}
						</p>
					</Link>
				))}
				<Link
					className="flex gap-2 items-center text-xl group font-mondwest"
					href={"/blog"}
				>
					See more
					<div className="flex items-center">
						<ArrowRight className="w-4 h-4 opacity-70 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export function ListAllBlogPosts() {
	const posts = getBlogPosts();
	return posts.map((post) => (
		<Link
			key={post.slug}
			className="flex flex-col gap-5 duration-200 group"
			href={`/blog/${post.slug}`}
		>
			<div className="flex justify-between items-start w-full">
				<div className="flex flex-col space-x-0 w-full md:flex-row md:space-x-2">
					<h3 className="!text-stone-800">{post.metadata.title}</h3>
					<p className="max-w-prose !tracking-wide opacity-60 group-hover:opacity-90 font-mondwest">
						{formatDate(post.metadata.publishedAt, false)}
					</p>
				</div>
				<div className="flex items-center mt-1">
					<ArrowRight className="w-4 h-4 opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
				</div>
			</div>
		</Link>
	));
}
