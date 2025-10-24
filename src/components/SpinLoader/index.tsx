import React from "react";

type SpinLoaderProps = React.HTMLAttributes<HTMLDivElement>;

export function SpinLoader({ className = "", ...divProps }: SpinLoaderProps) {
	// Centers spinner vertically in the content area (between header and footer)
	const classes = `flex items-center justify-center min-h-[60vh] ${className}`;

	return (
		<div
			className={classes}
			{...divProps}>
			<div className="w-12 h-12 border-4 border-slate-300 border-t-slate-700 dark:border-slate-600 dark:border-t-white rounded-full animate-spin"></div>
		</div>
	);
}
