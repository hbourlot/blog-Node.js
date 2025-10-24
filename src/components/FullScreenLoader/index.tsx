"use client";

import React from "react";
import Spinner from "@/components/Spinner";

export type FullScreenLoaderProps = {
  message?: string;
  show?: boolean;
  backdropClassName?: string;
};

export default function FullScreenLoader({
  message = "Loading...",
  show = true,
  backdropClassName = "bg-white/70 dark:bg-black/40 backdrop-blur-sm",
}: FullScreenLoaderProps) {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 ${backdropClassName} grid place-items-center`}
      role="dialog"
      aria-modal="true"
      aria-label={message}
    >
      <div className="flex flex-col items-center gap-3">
        <Spinner size={40} />
        <span className="text-sm text-slate-700 dark:text-slate-200">{message}</span>
      </div>
    </div>
  );
}
