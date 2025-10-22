import React from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPost } from "@/lib/post/queries";

export async function PostFeatured() {
	const posts = await findAllPublishedPost();
	const post = posts[0];

	const postLink = `/post/${post.slug}`;
	return (
		<>
			<section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
				<PostCoverImage
					linkProps={{ href: postLink }}
					imageProps={{
						width: 1200,
						height: 720,
						alt: post.title,
						src: post.coverImageUrl,
						priority: true,
					}}
				/>

				<PostSummary
					postLink={postLink}
					postHeading="h1"
					createdAt={post.createdAt}
					updatedAt={post.updatedAt}
					title={post.title}
					excerpt={post.excerpt}
				/>
			</section>
		</>
	);
}
