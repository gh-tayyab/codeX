"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center">

            <Code2 className="text-white" size={24} />

          </div>

          <div>

            <h1 className="font-black text-2xl text-slate-900">
              CodeX
            </h1>

            <p className="text-xs text-gray-500">
              Careers Portal
            </p>

          </div>

        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-10">

          <Link
            href="#"
            className="font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="#"
            className="font-medium hover:text-blue-600 transition"
          >
            Careers
          </Link>

          <Link
            href="#"
            className="font-medium hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            href="#"
            className="font-medium hover:text-blue-600 transition"
          >
            Contact
          </Link>

        </div>

        <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition">

          Login

        </button>

      </div>
    </nav>
  );
}