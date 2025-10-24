import React from "react";

export type SpinnerProps = {
	size?: number; // px
	className?: string;
	label?: string;
};

// Simple, accessible spinner using Tailwind borders and currentColor
export default function Spinner({
	size = 32,
	className = "",
	label = "Loading",
}: SpinnerProps) {
	const s = `${size}px`;
	return (
		<span
			role="status"
			aria-live="polite"
			aria-label={label}
			className={`inline-block align-middle ${className}`}
			style={{ width: s, height: s }}>
			<span
				aria-hidden="true"
				className="block h-full w-full animate-spin rounded-full border-4 border-slate-300/60 border-t-slate-600 dark:border-slate-600/40 dark:border-t-white"
			/>
		</span>
	);
}
