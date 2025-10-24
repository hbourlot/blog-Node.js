import { findPostBySlugCached } from "@/lib/post/queries";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";
import PostDate from "@/components/PostDate";
import { SafeMarkDown } from "@/components/SafeMarkDown";

type PostSlugPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;

	const post = await findPostBySlugCached(slug);
	return {
		title: post.title,
		description: post.excerpt,
	};
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
	const { slug } = await params;

	const post = await findPostBySlugCached(slug);

	return (
		<>
			<div className="">
				<header className="group mb-6">
					<Image
						src={post.coverImageUrl}
						width={1280}
						height={720}
						alt={post.title}
						className="rounded-lg mb-4"
					/>
					<PostHeading href={`/post/${post.slug}`}>
						{post.title}
					</PostHeading>
				</header>

				<div className="flex gap-3 pb-6 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-300 dark:border-slate-600 mb-8">
					<span className="flex items-center gap-2">
						<svg
							className="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="font-medium">{post.author}</span>
					</span>
					<span className="text-slate-400 dark:text-slate-500">
						•
					</span>
					<PostDate dateTime={post.createdAt} />
				</div>

				<article className="prose prose-slate dark:prose-invert max-w-none">
					<SafeMarkDown markdown={post.content} />
				</article>
			</div>
		</>
	);
}
