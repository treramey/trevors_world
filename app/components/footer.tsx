function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Footer() {
	return (
		<footer className="relative z-10 grid-parent">
			<div className="grid-child-left font-nb-architect"></div>
			<ul className="flex flex-col gap-2 mt-4 lg:mt-0 grid-child-center text-neutral-800">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-700"
						rel="noopener noreferrer"
						target="_blank"
						href="/rss"
					>
						<ArrowIcon />
						<p className="!mb-0 ml-2 h-7">rss</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-700"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/vercel/next.js"
					>
						<ArrowIcon />
						<p className="!mb-0 ml-2 h-7">github</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800"
						rel="noopener noreferrer"
						target="_blank"
						href="https://vercel.com/templates/next.js/portfolio-starter-kit"
					>
						<ArrowIcon />
						<p className="!mb-0 ml-2 h-7">view source</p>
					</a>
				</li>
			</ul>
		</footer>
	);
}
