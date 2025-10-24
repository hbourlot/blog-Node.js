import { Divide } from "lucide-react";
import React from "react";
import ReactMarkDown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkDownProps = {
	markdown: string;
};

export function SafeMarkDown({ markdown }: SafeMarkDownProps) {
	return (
		<div className="prose prose-slate dark:prose-invert w-full max-w-none prose-headings:text-slate-900 dark:prose-headings:text-slate-200 prose-p:text-slate-900 dark:prose-p:text-slate-200 prose-li:text-slate-900 dark:prose-li:text-slate-200 prose-strong:text-slate-900 dark:prose-strong:text-slate-200 prose-a:text-blue-500 prose-a:hover:text-blue-800 prose-a:no-underline prose-a:hover:underline prose-img:mx-auto md:prose-lg">
			<ReactMarkDown
				rehypePlugins={[rehypeSanitize]}
				remarkPlugins={[remarkGfm]}
				components={{
					table: ({ node, ...props }) => (
						<div className="overflow-x-auto -mx-5 px-5 my-6">
							<table
								{...props}
								className="w-full min-w-[600px]"
							/>
						</div>
					),
				}}
			>
				{markdown}
			</ReactMarkDown>
		</div>
	);
}
