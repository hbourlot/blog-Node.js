import React from "react";
import { PostHeading } from "../PostHeading";
import PostDate from "../PostDate";

type PostSummaryProps = {
	postHeading: "h1" | "h2";
	postLink: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	excerpt: string;
};

export function PostSummary({
	postHeading,
	postLink,
	createdAt,
	title,
	excerpt,
}: PostSummaryProps) {
	return (
		<>
			<div className="flex flex-col gap-4 sm:justify-center">
				<PostDate dateTime={createdAt} />
				<PostHeading
					size={postHeading}
					href={postLink}>
					{title}
				</PostHeading>
				<p>{excerpt}</p>
			</div>
		</>
	);
}
