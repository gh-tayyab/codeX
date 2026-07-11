"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Hero from "@/components/Hero";
import SignupCard from "@/components/SignUpCard";

import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleNext(e: React.FormEvent) {
    e.preventDefault();

    if (!phone) {
      alert("Enter phone number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          phone,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(`/otp?phone=${phone}`);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Server Error");
    }

    setLoading(false);
  }

  return (

    <main className="min-h-screen bg-[#f8fafc]">

    <Hero>
    
    <SignupCard
    phone={phone}
    loading={loading}
    setPhone={setPhone}
    handleNext={handleNext}
    />
    
    </Hero>
    
    </main>

  );
}