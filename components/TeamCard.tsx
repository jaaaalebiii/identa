"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};

export default function TeamCard({
  name,
  role,
  description,
  image,
  linkedin,
  instagram,
  github,
}: TeamCardProps) {
  return (
    <div className="group perspective">
      <motion.div
        className="relative h-80 w-64 rounded-2xl transition-transform duration-700 preserve-3d group-hover:rotate-y-180"
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-gray-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-[#161C2E] border border-gray-800 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-blue-400">{role}</p>
            <p className="mt-3 text-sm text-gray-400">{description}</p>
          </div>

          <div className="flex gap-4 text-gray-400">
            {linkedin && (
              <a href={linkedin} target="_blank">
                <FaLinkedin className="hover:text-white transition" />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank">
                <FaInstagram className="hover:text-white transition" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank">
                <FaGithub className="hover:text-white transition" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
