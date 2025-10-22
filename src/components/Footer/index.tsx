import Link from "next/link";
import React from "react";
import { SmoothAnchor } from "../SmoothAnchor";

export function Footer() {
	return (
		<>
			<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-slate-200 border-t border-gray-200 shadow-sm flex flex-col items-center justify-center gap-3 md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
				<span className="text-sm text-gray-500 sm:text-center sm:items-center dark:text-gray-400">
					Copyright &copy; {new Date().getFullYear()} -
					{/* <Link
						href="/"
						className="hover:underline hover:brightness-75 ">
						{" "}
						The Blog
					</Link> */}
					<SmoothAnchor href="/">Pomodoro</SmoothAnchor>
				</span>
				<ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a
							href="#"
							className="hover:underline me-4 md:me-6">
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:underline me-4 md:me-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:underline me-4 md:me-6">
							Licensing
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
