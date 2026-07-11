"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function OTPPage() {
  const router = useRouter();
  const params = useSearchParams();

  const phone = params.get("phone") || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyOTP(e: React.FormEvent) {
    e.preventDefault();

    if (!otp) {
      alert("Enter OTP");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        otp,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      router.push("/internship");
    } else {
      alert("Verification Failed");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex justify-center items-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <div className="flex justify-center">
          <div className="bg-green-600 rounded-full h-20 w-20 flex items-center justify-center">
            <ShieldCheck className="text-white" size={36} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mt-6">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mt-3">
          You will receive an OTP on your phone number.
          <br />
          Please wait at least <b>1 minute.</b>
        </p>

        <div className="mt-6 text-center text-blue-700 font-semibold">
          {phone}
        </div>

        <form
          onSubmit={verifyOTP}
          className="space-y-6 mt-8"
        >

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 text-white py-3 hover:bg-blue-700 transition"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

        </form>

      </div>

    </main>
  );
}