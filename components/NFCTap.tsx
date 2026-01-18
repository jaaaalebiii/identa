"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NFCTapScroll() {
  return (
    <section
      id="nfc"
      className="relative w-full bg-[#0B0F1A] py-32"
    >
      {/* Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
          One Tap. One Card.
        </h2>
        <p className="mt-4 md:text-2xl text-gray-400">
          A simple tap connects students to everything on campus.
        </p>
      </div>

      {/* Animation Stage */}
      <div className="relative mx-auto h-[300px] max-w-4xl">

        {/* NFC READER — FIXED POSITION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl"
        >
             {/* Glow layer */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.6 }}
    className="absolute inset-0 -z-10 rounded-full bg-amber-400/40 blur-3xl"
  />
          <Image
            src="/nfc/reader.png"
            alt="NFC Reader"
            width={300}
            height={180}
            priority
            className="drop-shadow-2xl"
          />
        </motion.div>
        

        {/* HAND + CARD — MOVES IN AND TAPS */}
        <motion.div
          initial={{ x: 260, y: -40, opacity: 0 }}
          whileInView={{
            x: -100,
            y: 65,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.3,
          }}
          
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2"
        >
          <Image
            src="/nfc/hand.png"
            alt="NFC Card Tap"
            width={380}
            height={240}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
