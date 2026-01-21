"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#0F172A] overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Get early access to Iden<span className="text-amber-400">ta</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-400 mb-10"
        >
          We’re launching soon. Join the waitlist to be among the first
          campuses to experience Identa.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We’ll be in touch soon.");
            setEmail("");
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@college.edu"
            className="flex-1 rounded-xl bg-[#020617] border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="rounded-xl bg-amber-400 px-8 py-4 font-medium text-slate-900 hover:bg-amber-500 transition"
          >
            Request Access
          </button>
        </motion.form>
      </div>
    </section>
  );
}
