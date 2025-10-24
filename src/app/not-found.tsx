import ErrorMessage from "@/components/ErrorMessage";
import React from "react";

export default function NotFoundPage() {
	return (
		<>
			<ErrorMessage
				pageTitle="Page not Found"
				contentTitle="404 ⚠️"
				content="Error 404 - The page you are trying to access does not exist."
			/>
	</>);
}
