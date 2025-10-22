import { format, formatDistanceToNow } from "date-fns";
import { enUS, pt } from "date-fns/locale";
import React from "react";

export function formatDateTime(rawDate: string): string {
	const date = new Date(rawDate);

	return format(date, "MM-dd-yyyy HH':'mm", {
		locale: pt,
	}).toString();
}

export function formatRelativeDate(rawDate: string): string {
	const date = new Date(rawDate);

	return formatDistanceToNow(date, {
		locale: enUS,
		addSuffix: true,
	}).toString();
}
