import React from "react";

type SpinLoaderProps = React.HTMLAttributes<HTMLDivElement>;

export function SpinLoader({ className = "", ...divProps }: SpinLoaderProps) {
	const classes = `flex items-center justify-center h-20 ${className}`;

	return (
		<>
			<div
				className={classes}
				{...divProps}>
				<div className="w-10 h-10 border-5 border-t-transparent border-black rounded-full animate-spin"></div>
			</div>
		</>
	);
}
