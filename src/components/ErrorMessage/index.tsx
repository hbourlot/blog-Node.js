"use client";

import React from "react";
import Link from "next/link";

type ErrorMessageProps = {
	pageTitle: string;
	contentTitle: string;
	content: React.ReactNode;
};

export default function ErrorMessage({
	pageTitle,
	contentTitle,
	content,
}: ErrorMessageProps) {
	return (
		<>
			<title>{pageTitle}</title>
			<div className="flex items-center justify-center min-h-[60vh] px-4">
				<div className="w-full max-w-2xl">
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-slate-100 rounded-2xl shadow-2xl border border-slate-700/50 p-12 text-center backdrop-blur-sm">
						<div className="mb-6">
							<h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r  mb-2 animate-bounce">
								{contentTitle}
							</h1>
						</div>

						<div className="mb-8">
							<p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-md mx-auto">
								{content}
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link
								href="/"
								className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Back to Home
							</Link>
							<button
								onClick={() => window.history.back()}
								className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 19l-7-7m0 0l7-7m-7 7h18"
									/>
								</svg>
								Go Back
							</button>
						</div>
					</div>

					<div className="mt-8 text-center text-slate-500 text-sm">
						<p>Lost? Don't worry, it happens to the best of us.</p>
					</div>
				</div>
			</div>
		</>
	);
}
