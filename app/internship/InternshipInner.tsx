"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import {
  Brain,
  Briefcase,
  Clock3,
  MapPin,
  BadgeCheck,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function InternshipInner() {

  // ✅ Hooks hamesha component ke andar
  const router = useRouter();
  const searchParams = useSearchParams();

  const phone = searchParams.get("phone") || "";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          firstName,
          lastName,
          email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Application submitted successfully.");

        setFirstName("");
        setLastName("");
        setEmail("");

        router.refresh();
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    // 
    <main className="min-h-screen bg-slate-50">
      

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            <Brain size={18} />
            Data Science Internship
          </div>

          <h2 className="text-5xl font-black mt-6 leading-tight">
            Launch your career with our
            <span className="text-blue-600">
              {" "}
              Data Science Internship Program
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Work alongside experienced Data Scientists, Machine Learning
            Engineers and AI researchers. Gain practical industry experience by
            solving real-world business problems.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="bg-white rounded-2xl shadow p-6">
              <Clock3 className="text-blue-600" />

              <h3 className="font-bold mt-3">Duration</h3>

              <p className="text-gray-500">3 Months</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <Briefcase className="text-blue-600" />

              <h3 className="font-bold mt-3">Internship Type</h3>

              <p className="text-gray-500">Remote</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <MapPin className="text-blue-600" />

              <h3 className="font-bold mt-3">Location</h3>

              <p className="text-gray-500">Worldwide</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <TrendingUp className="text-blue-600" />

              <h3 className="font-bold mt-3">Growth</h3>

              <p className="text-gray-500">High Learning Opportunity</p>
            </div>
          </div>
        </div>

        {/* Application */}

        <div>
        <form
  onSubmit={handleSubmit}
  className="bg-white rounded-3xl shadow-xl p-8"
>
            <h3 className="text-3xl font-bold">Apply Now</h3>

            <p className="text-gray-500 mt-2">
              Complete your internship application.
            </p>

            <div className="mt-6">
              <label className="font-semibold">Phone Number</label>

              <input
                value={phone}
                disabled
                className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
              />
            </div>

            <div className="mt-5">
              <label className="font-semibold">First Name</label>

              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div className="mt-5">
              <label className="font-semibold">Last Name</label>

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div className="mt-5">
              <label className="font-semibold">Email Address</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <button
  type="submit"
  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex justify-center items-center gap-2 font-semibold"
>
  Submit Application
  <ArrowRight size={18} />
</button>
        </form>
          </div>
          </section>
       

      {/* Benefits */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center">Why Join Us?</h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-2xl shadow p-8">
            <BadgeCheck className="text-blue-600" />

            <h3 className="font-bold mt-4">Real Industry Projects</h3>

            <p className="text-gray-500 mt-3">
              Work on production-level AI & Data Science projects used by real
              businesses.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <Users className="text-blue-600" />

            <h3 className="font-bold mt-4">Mentorship</h3>

            <p className="text-gray-500 mt-3">
              Learn directly from experienced engineers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8">
            <TrendingUp className="text-blue-600" />

            <h3 className="font-bold mt-4">Career Growth</h3>

            <p className="text-gray-500 mt-3">
              Build a portfolio that improves your chances of landing full-time
              opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
