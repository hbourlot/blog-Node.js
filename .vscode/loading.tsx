import React from "react";
import FullScreenLoader from "@/components/FullScreenLoader";

export default function Loading() {
  // Shown automatically by Next.js App Router while this segment loads
  return <FullScreenLoader message="Loading page..." />;
}
