import { postRepository } from "@/repositories/post/json-post-repository";
import { cache } from "react";

export const findAllPublishedPost = cache(
	async () => await postRepository.findAllPublished()
);
