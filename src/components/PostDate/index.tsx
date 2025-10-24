import { formatDateTime } from "@/utils";
import React from "react";

type PostDateProps = {
	dateTime: string;
	className?: string;
};

export default function PostDate({ dateTime, className = "" }: PostDateProps) {
	return (
		<time
			className={`inline-flex items-center gap-1 ${className}`}
			dateTime={dateTime}
			title={formatDateTime(dateTime)}>
			<svg
				className="w-4 h-4"
				fill="currentColor"
				viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clipRule="evenodd"
				/>
			</svg>
			{formatDateTime(dateTime)}
		</time>
	);
}
