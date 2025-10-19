import Link from "next/link";
import Image from "next/image";
import React from "react";

type PostCoverImageProps = {
	imageProps: React.ComponentProps<typeof Image>;
	linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
	return (
		<>
			<div>
				<Link
					{...linkProps}
					className={`w-full h-full overflow-hidden rounded-xl isolate sm:aspect-auto aspect-[16/9] ${linkProps.className}`}>
					<Image
						{...imageProps}
						alt={imageProps.alt}
						className={`rounded-2xl group-hover:scale-105 transition duration-700 h-full w-full object-cover object-center ${imageProps.className}`}
					/>
				</Link>
			</div>
		</>
	);
}
