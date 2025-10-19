import { postRepository } from "@/repositories/post/json-post-repository";
import React from "react";
import { PostCoverImage } from "../PostCoverImage";
import { Heading } from "../Heading";

export default async function PostsList() {
	const posts = await postRepository.findAll();

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
				{posts.map((post) => {
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
							<div className="flex flex-col gap-4 sm:justify-center">
								<time
									className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-300 shadow-lg hover:brightness-105 transition transition-discrete dark:bg-slate-500 px-3 py-1 text-sm font-medium"
									dateTime={post.createdAt}>
									{post.createdAt}
								</time>
								<Heading
									size="h2"
									href={postLink}>
									{post.title}
								</Heading>
								<p>{post.excerpt}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
