import React from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPostCached } from "@/lib/post/queries";

export default async function PostsList() {
	const posts = await findAllPublishedPostCached();

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 mb-20">
				{posts.slice(1).map((post) => {
					const postLink = `/post/${post.slug}`;
					return (
						<div
							className="flex flex-col group items-center gap-4"
							key={post.id}>
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
								postHeading="h2"
								postLink={postLink}
								createdAt={post.createdAt}
								updatedAt={post.updatedAt}
								excerpt={post.excerpt}
								title={post.title}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}
