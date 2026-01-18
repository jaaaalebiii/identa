"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl bg-black/60 backdrop-blur border border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* LEFT: LOGO */}
        <a href="#top" className="text-lg font-semibold">
          Iden<span className="text-amber-400">ta</span>
        </a>

        {/* CENTER: LINKS */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* RIGHT: CTA */}
        <a
          href="#contact"
          className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-black hover:bg-amber-500 transition"
        >
          Request Demo
        </a>
      </div>
    </motion.nav>
  );
}
