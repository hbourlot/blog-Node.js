import { SpinLoader, PostFeatured, PostsList } from "@/components/index";
import { Suspense } from "react";

export default async function HomePage() {
	return (
		<>
			<Suspense fallback={<SpinLoader />}>
				<PostFeatured />
				<PostsList />
			</Suspense>
		</>
	);
}
