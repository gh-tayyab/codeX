"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className,
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        {...props}
        className={clsx(
          "w-full rounded-xl border border-gray-300 px-4 py-3",
          "outline-none transition",
          "focus:border-blue-600",
          "focus:ring-4 focus:ring-blue-100",
          className
        )}
      />
    </div>
  );
}