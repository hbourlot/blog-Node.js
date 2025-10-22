import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";
import React from "react";
import { Heading } from "../Heading";
import { PostModel } from "@/models/post/post-model";

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
	updatedAt,
	title,
	excerpt,
}: PostSummaryProps) {
	return (
		<>
			<div className="flex flex-col gap-4 sm:justify-center">
				<time
					className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-300 shadow-lg hover:brightness-105 transition transition-discrete dark:bg-slate-500 px-3 py-1 text-sm font-medium font-stretch-semi-condensed"
					dateTime={createdAt}
					title={formatRelativeDate(updatedAt)}>
					{formatDateTime(createdAt)}
				</time>
				<Heading
					size={postHeading}
					href={postLink}>
					{title}
				</Heading>
				<p>{excerpt}</p>
			</div>
		</>
	);
}
