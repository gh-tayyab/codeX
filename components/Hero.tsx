"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Sparkles, ShieldCheck } from "lucide-react";

interface HeroProps {
  children: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/40 blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">

              <Sparkles size={16} />

              Applications Open • Data Science Internship

            </div>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">

              Build your future with

              <span className="text-blue-600"> CodeX.</span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

              Join a professional internship program where you'll work on
              Machine Learning, Artificial Intelligence, Data Analytics and
              real production-level projects alongside experienced engineers.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-xl bg-white shadow-sm px-4 py-3">

                <BrainCircuit className="text-blue-600" size={20} />

                <span className="font-medium">
                  AI & ML Projects
                </span>

              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white shadow-sm px-4 py-3">

                <ShieldCheck className="text-green-600" size={20} />

                <span className="font-medium">
                  Industry Mentorship
                </span>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-10">

              <div>

                <h2 className="text-4xl font-black text-blue-600">
                  500+
                </h2>

                <p className="text-slate-500">
                  Students Trained
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-blue-600">
                  25+
                </h2>

                <p className="text-slate-500">
                  Mentors
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-blue-600">
                  12
                </h2>

                <p className="text-slate-500">
                  Countries
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            {children}

          </motion.div>

        </div>

      </div>

    </section>
  );
}