"use client";

import Input from "./Input";

interface Props {
  phone: string;
  loading: boolean;
  setPhone: (value: string) => void;
  handleNext: (e: React.FormEvent) => void;
}

export default function SignupCard({
  phone,
  loading,
  setPhone,
  handleNext,
}: Props) {
  return (
    <div className="rounded-[32px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl p-8 lg:p-10">

      <h2 className="text-3xl font-bold text-slate-900">

        Create your account

      </h2>

      <p className="mt-3 text-slate-500">

        Enter your phone number to begin your internship application.

      </p>

      <form
        onSubmit={handleNext}
        className="space-y-6 mt-8"
      >

        <Input
          label="Phone Number"
          placeholder="03XXXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-blue-600 hover:bg-blue-700 transition py-4 text-white font-bold"
        >
          {loading ? "Please wait..." : "Continue"}
        </button>

      </form>

      <p className="mt-8 text-center text-sm text-slate-500">

        By continuing you agree to our Terms & Privacy Policy.

      </p>

    </div>
  );
}