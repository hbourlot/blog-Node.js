import {
	Container,
	Header,
	SpinLoader,
	ThemeControl,
	PostFeatured,
	PostsList,
} from "@/components/index";
import { Suspense } from "react";

export default async function HomePage() {
	return (
		<>
			<Container>
				<ThemeControl />
				<Header />
				<Suspense fallback={<SpinLoader />}>
					<PostFeatured />
				</Suspense>
				<p className="text-justify"></p>
				<Suspense fallback={<SpinLoader />}>
					<PostsList />
				</Suspense>
			<footer>
					<p className="flex justify-center text-3xl font-bold py-2 ">
						FOOTER
					</p>
				</footer>
			</Container>
		</>
	);
}
