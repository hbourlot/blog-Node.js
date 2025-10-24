"use client";

import React from "react";
import { formatRelativeDate } from "@/utils/format-datetime";

type RelativeTimeProps = {
	date: string;
	className?: string;
	prefix?: string;
};

export default function RelativeTime({
	date,
	className = "",
	prefix = "· ",
}: RelativeTimeProps) {
	// This component renders only on the client, avoiding SSR/CSR time drift.
	const text = formatRelativeDate(date);
	return (
		<span className={className}>
			{prefix}
			{text}
		</span>
	);
}
