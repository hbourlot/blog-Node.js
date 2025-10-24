"use client";
import ErrorMessage from "@/components/ErrorMessage";
import React, { useEffect } from "react";

export default function RootErrorPage({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<>
			<ErrorMessage
				pageTitle="Error"
				contentTitle="500 ⚠️"
				content={
					<div className="flex flex-row items-center justify-center gap-2">
						<p className="text-sm md:text-xl">
							Something went wrong. Please
						</p>
						<button
							onClick={reset}
							className="text-sm md:text-xl text-blue-500 hover:text-blue-700 hover:underline font-semibold"
						>
							try again
						</button>
					</div>
				}
			/>
		</>
	);
}
