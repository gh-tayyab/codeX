import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import { Plus_Jakarta_Sans } from "next/font/google";
export const metadata: Metadata = {
  title: "Data Science Internship",
  description: "Professional Hiring Portal"
};


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}