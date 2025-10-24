import { postRepository } from "@/repositories/post/json-post-repository";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublishedPostCached = cache(
	async () => await postRepository.findAllPublished()
);

export const findPostBySlugCached = cache(async (slug: string) => {
	const post = await postRepository.findBySlug(slug).catch(() => null);

	if (!post) notFound();

	return post;
});

export const findPostByIdCached = cache(
	async (id: string) => await postRepository.findBySlug(id)
);
