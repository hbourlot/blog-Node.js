import React from "react";
import { PostCoverImage } from "../PostCoverImage";
import { Heading } from "../Heading";

export function PostFeatured() {
	return (
		<>
			<section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
				<PostCoverImage
					linkProps={{ href: "/post/test" }}
					imageProps={{
						width: 1200,
						height: 720,
						alt: "alt of image",
						src: "/images/bryen_0.png",
						priority: true,
					}}
				/>
				<div className="flex flex-col gap-4 sm:justify-center">
					<time
						className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-300 shadow-lg hover:brightness-105 transition transition-discrete dark:bg-slate-500 px-3 py-1 text-sm font-medium"
						dateTime="2025-10-18">
						18/10/2025 15:09
					</time>
					<Heading size="h2">
						Lorem ispum dolor sit amet consectetur
					</Heading>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Optio reiciendis repellendus porro enim, placeat
						quibusdam ea atque culpa corrupti laudantium fugit
						mollitia id voluptatibus quaerat!
					</p>
				</div>
			</section>
		</>
	);
}
