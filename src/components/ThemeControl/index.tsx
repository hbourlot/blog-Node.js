"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ButtonIconType = Record<"light" | "dark", React.ReactElement>;

const ButtonIcon: ButtonIconType = {
	light: (
		<Sun
			className={`absolute inset-0 m-auto transition-all duration-300`}
			size={18}
		/>
	),
	dark: (
		<Moon
			className={`absolute inset-0 m-auto transition-all duration-300`}
			size={18}
		/>
	),
};

export function ThemeControl() {
	const [isDark, setIsDark] = useState<boolean>(() => {
		if (typeof window === "undefined") return false;

		const stored = localStorage.getItem("theme");

		if (stored) return stored === "dark";

		return document.documentElement.classList.contains("dark");
	});

	const mode = isDark ? "dark" : "light";

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return (
		<>
			<div className="absolute top-4 right-4 z-50">
				<button
					aria-pressed={isDark}
					aria-label={
						isDark
							? "Switch to light theme"
							: "Switch to dark theme"
					}
					onClick={() => setIsDark((v) => !v)}
					className={`inline-flex items-center shadow-lg transition-all duration-300 rounded-lg w-10 h-10 justify-center border-2 border-slate-500 hover:brightness-75 ${
						isDark
							? "bg-gradient-to-br from-slate-200 to-slate-600 text-slate-800"
							: "bg-gradient-to-br from-slate-600 to-slate-400 text-white"
					}`}>
					<span className="relative w-6 h-6">{ButtonIcon[mode]}</span>
				</button>
			</div>
		</>
	);
}
