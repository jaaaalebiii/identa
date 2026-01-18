"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import NFCTap from "../components/NFCTap";
import FAQ from "../components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    
    <main className="pt-32 min-h-screen bg-[#0B0F1A] text-white overflow-hidden">
      <Navbar />
      <div className="pointer-events-none absolute top-[-200px] left-[-200px] h-[400px] w-[400px] rounded-full bg-amber-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />

      
      <section
  id="top"
  className="relative min-h-screen flex items-center justify-center px-6"
>
  <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center text-3xl font-semibold"
        >
  <div className="w-full max-w-5xl text-center">

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
      One Tap. One ID.
      <br />
      <span className="text-amber-400 text-gradient md:text-7xl lg:text-8xl">One Campus.</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
      Identa is a SaaS platform that unifies campus payments,
      attendance, and library access using secure NFC identity.
    </p>

    <div className="flex justify-center gap-4">
  <button className="bg-amber-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-400 transition">
    Request Demo
  </button>

  <button className="border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
    Coming Soon
  </button>
</div>



  </div>
  </motion.h2>
</section>


      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center text-3xl font-semibold"
        >
          Everything your campus needs — in one pass
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            ["NFC Identity", "One secure ID across all campus services"],
            ["Cashless Payments", "Fast canteen payments with live balance"],
            ["Smart Attendance", "Tap-based attendance without roll calls"],
            ["Library Automation", "Issue & return books with a single tap"],
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-800 bg-[#111827] p-6 hover:border-amber-400/50 transition"
            >
              <h3 className="mb-2 text-xl font-medium">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      
      {/* <section className="bg-[#0F172A] px-6 py-32"> */}
        <section id="how">
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-3xl font-semibold"
        >
          How Identa works
        </motion.h2> */}
      <NFCTap />

        <section id="about" className="px-8 py-10 max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-semibold mb-6">About Iden<span className="text-amber-400">ta</span></h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                      Identa is a SaaS-based smart campus platform designed to simplify
                      everyday campus operations using secure NFC identity. Our mission
                      is to remove manual friction, reduce operational complexity, and
                      create a seamless digital experience for students and institutions.
                  </p>
        </section>

        <div className="px-6 pt-32 pb-48 mx-auto grid max-w-4xl gap-12 md:grid-cols-3 text-center">
          {[
            ["Tap", "Student taps their NFC ID card"],
            ["Sync", "Identa verifies identity in real time"],
            ["Done", "Payment or access completed instantly"],
          ].map(([title, desc], i) => (
            <motion.div

              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="mb-2 text-xl font-semibold text-amber-400">
                {title}
              </h3>
              <p className="text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="team" className="px-6 py-32 bg-[#0F172A]">
                  <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-20">
                    Meet the Team
                  </h2>

                  <div className="flex flex-wrap justify-center gap-10">
                    <TeamCard
                      name="Jalaj Maheshwari"
                      role="Product Engineer"
                      description="Building the product vision, frontend experience, and overall system architecture."
                      image="/team/jalajnew.jpg"
                      linkedin="https://www.linkedin.com/in/jalaj-maheshwari-82802130a/"
                      github="https://github.com/jaaaalebiii"
                      instagram="https://www.instagram.com/jaaaalebiii/?next=https%3A%2F%2Fwww.instagram.com%2Freels%2FDSUSiCfjN48%2F%3F__coig_login%3D1"
                    />

                    <TeamCard
                      name="Harman Jassal"
                      role="Backend Engineer"
                      description="Designing scalable APIs, handling authentication, and managing the core backend systems."
                      image="/team/harman.jpeg"
                      linkedin="https://www.linkedin.com/in/harman-jassal-866502311/"
                      github="https://github.com/Harmann60"
                      instagram=""
                    />

                    <TeamCard
                      name="Gauri Gautam"
                      role="Product Designer & Documentation Lead"
                      description="Crafting the visual identity, writing documentation, and shaping Identa branding."
                      image="/team/gaurinew.jpeg"
                      linkedin="https://www.linkedin.com/in/gauri-gautam-3962242bb/"
                      github="https://github.com/GauriiGautam"
                      instagram="https://www.instagram.com/gauriiii.203/"
                    />
                  </div>
        </section>
      <FAQ />
      <EmailCapture />
      <Footer />
      {/* CTA */}

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 Identa · Built for smart campuses
      </footer>
    </main>
  );
}
