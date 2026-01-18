"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is Identa?",
    a: "Identa is a SaaS-based smart campus platform that uses NFC identity to manage attendance, payments, library access, and campus services through a single tap.",
  },
  {
    q: "Does Identa require special hardware?",
    a: "No proprietary hardware is required. Identa works with standard NFC-enabled student ID cards and USB NFC readers.",
  },
  {
    q: "Is student data secure?",
    a: "Yes. All data is encrypted and securely stored using modern security practices.",
  },
  {
    q: "Can Identa work across different campuses?",
    a: "Absolutely. Identa is designed as a multi-tenant SaaS platform, allowing multiple institutions to operate independently.",
  },
  {
    q: "What campus services are supported?",
    a: "Attendance, canteen payments, library management, access control, and wallet-based transactions — all from one card.",
  },
  {
    q: "When will Identa be available?",
    a: "Identa is currently in active development. Early access and demos will be rolled out soon.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur"
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{item.q}</span>
              <span className="text-xl">{active === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-zinc-300"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
