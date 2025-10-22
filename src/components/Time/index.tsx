import React from "react";
import { formatDateTime, formatRelativeDate } from "@/utils/format-datetime";

type TimeProps = {
  createdAt: string;
  updatedAt?: string;
  className?: string;
  showRelative?: boolean;
};

export default function Time({ createdAt, updatedAt, className = "", showRelative = true }: TimeProps) {
  const absolute = formatDateTime(createdAt);
  const relative = formatRelativeDate(updatedAt ?? createdAt);

  return (
    <time
      className={className}
      dateTime={new Date(createdAt).toISOString()}
      title={absolute}
    >
      <span className="sr-only">Published:</span>
      <span className="font-medium">{absolute}</span>
      {showRelative && (
        <span className="text-slate-600 dark:text-slate-300 ml-2 text-sm">· {relative}</span>
      )}
    </time>
  );
}
