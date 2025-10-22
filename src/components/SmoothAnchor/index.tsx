"use client";
import Link from "next/link";
import React from "react";

type Props = {
	href: string;
	children: React.ReactNode;
};

export function SmoothAnchor({ href, children }: Props) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<Link
				href={href}
				className="cursor-pointer"
				onClick={handleClick}>
				{" "}
				{children}
			</Link>
		</>
	);
}
