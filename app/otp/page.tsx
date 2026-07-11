"use client";

import { Suspense } from "react";
import OTPContent from "./OTPContent";

export default function OTPPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPContent />
    </Suspense>
  );
}