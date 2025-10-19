import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
	ROOT_DIR,
	"src",
	"db",
	"seed",
	"posts.json"
);

const SIMULATE_WAIT_TIME_MS = 10;

export class JsonPostRepository implements PostRepository {
	private async simulateWait() {
		if (SIMULATE_WAIT_TIME_MS <= 0) return;

		await new Promise((resolve) =>
			setTimeout(resolve, SIMULATE_WAIT_TIME_MS)
		);
	}

	private async readFromDisk(): Promise<PostModel[]> {
		const jsonContent = await readFile(JSON_POST_FILE_PATH, "utf-8");
		const parsedJson = JSON.parse(jsonContent);
		const { posts } = parsedJson;
		return posts;
	}

	async findAll(): Promise<PostModel[]> {
		await this.simulateWait();
		return this.readFromDisk();
	}

	async findById(id: string): Promise<PostModel> {
		const posts = await this.findAll();
		const post = posts.find((post) => post.id === id);

		if (!post) throw new Error("Post not found");
		return post;
	}
}

export const postRepository: PostRepository = new JsonPostRepository();

// (async () => {
// 	// const posts = await postRepository.findAll();
// 	// posts.forEach((post) => {
// 	// 	console.log(post.author);
// 	// });
// 	const post = await postRepository.findById(
// 		"99f8add4-7684-4c16-a316-616271db199e"
// 	);
// 	console.log(post);
// })();
