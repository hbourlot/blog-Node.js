import React from "react";
import Link from "next/link";

type HeadingSize = "h1" | "h2" | "h3" | "h4";

type PostHeadingProps = {
	size?: HeadingSize;
	children: React.ReactNode;
	href?: string;
};

const sizeMap: Record<
	HeadingSize,
	{ Tag: React.ElementType; classes: string }
> = {
	h1: { Tag: "h1", classes: "text-4xl font-extrabold" },
	h2: { Tag: "h2", classes: "text-2xl font-extrabold" },
	h3: { Tag: "h3", classes: "text-2xl font-semibold " },
	h4: { Tag: "h4", classes: "text-xl font-semibold" },
};

export function Heading({
	size = "h2",
	children,
	href = "#",
}: PostHeadingProps) {
	const { Tag, classes } = sizeMap[size];

	return (
		<div>
			<Tag className={`${classes} leading-tight dark:hover:text-slate-300 hover:text-slate-600`}>
				<Link href={href}>{children}</Link>
			</Tag>
		</div>
	);
}
