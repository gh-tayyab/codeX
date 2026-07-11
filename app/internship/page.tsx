"use client";

import { Suspense } from "react";
import InternshipInner from "./InternshipInner";

export default function InternshipPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternshipInner />
    </Suspense>
  );
}