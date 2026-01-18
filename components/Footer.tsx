import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-6 py-12 bg-[var(--bg-section)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h3 className="text-xl font-semibold">
            Iden<span className="text-amber-400">ta</span>
          </h3>
          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-sm">
            A smart campus SaaS platform built to simplify identity,
            access, and payments using NFC.
          </p>
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            © 2026 Identa. Built by students.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm text-[var(--text-muted)]">
            Connect with us
          </p>
          <div className="flex gap-4 text-xl text-[var(--text-muted)]">
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
