import React from "react";
import FullScreenLoader from "@/components/FullScreenLoader";

export default function Loading() {
  // Shown while navigating to /post/[slug]
  return <FullScreenLoader message="Loading post..." />;
}
