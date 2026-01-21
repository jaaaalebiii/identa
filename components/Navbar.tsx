"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        <a
  href="#top"
  className="flex items-center gap-2 text-lg font-semibold"
>
  <Image
  src="/brand/logo-new.png"
  alt="Identa logo"
  width={36}
  height={36}
  className="invert"
  priority
/>

  <span className="text-slate-100">
    Iden<span className="text-amber-400">ta</span>
  </span>
</a>


        {/* CENTER: LINKS */}
        <div className="hidden md:flex gap-6 text-sm">
  {[
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="
        relative px-1 py-1 text-slate-300 transition-colors duration-200
        hover:text-slate-50
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-amber-400
        after:transition-all after:duration-300
        hover:after:w-full
        hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.35)]
      "
          >
        {item.label}
          </a>
            ))}
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
