"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

type ButtonIconType = Record<"light" | "dark", React.ReactElement>;

const ButtonIcon: ButtonIconType = {
	light: (
		<SunIcon
			className={`absolute inset-0 m-auto transition-all duration-300`}
			size={18}
		/>
	),
	dark: (
		<MoonIcon
			className={`absolute inset-0 m-auto transition-all duration-300`}
			size={18}
		/>
	),
};

export function ThemeControl() {
	const [isDark, setIsDark] = useState<boolean>(false);
	const [mounted, setMounted] = useState(false);

	// Hydration-safe: detect theme only on client after mount
	useEffect(() => {
		const stored = localStorage.getItem("theme");
		if (stored) {
			setIsDark(stored === "dark");
		} else {
			setIsDark(document.documentElement.classList.contains("dark"));
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark, mounted]);

	// Don't render until mounted to avoid hydration mismatch
	if (!mounted) {
		return (
			<div className="absolute top-4 right-4 z-50">
				<div className="inline-flex items-center rounded-lg w-10 h-10" />
			</div>
		);
	}

	const mode = isDark ? "dark" : "light";

	return (
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
	);
}
