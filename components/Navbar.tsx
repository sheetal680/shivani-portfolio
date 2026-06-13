"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP_HIRE =
  "https://wa.me/918977241245?text=Hi%20Shivani!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#top"
            className="flex items-center gap-2 font-bold text-white tracking-tight focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            aria-label="Shivani Sheetal Palivela, home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-purple-500/40 transition-shadow duration-200 shrink-0">
              S
            </span>
            <span className="text-sm font-semibold text-gray-200 hover:text-white transition-colors">
              Shivani Sheetal Palivela
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <MagneticButton className="hidden md:block">
              <a
                href={WHATSAPP_HIRE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-400 relative overflow-hidden group"
              >
                <span className="relative z-10">Hire Me</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </a>
            </MagneticButton>

            {/* Hamburger — mobile only */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span
                className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — slides from right */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={prefersReduced ? { opacity: 0 } : { x: "100%" }}
              animate={prefersReduced ? { opacity: 1 } : { x: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#111113] border-l border-white/10 z-50 md:hidden flex flex-col shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Menu</span>
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={prefersReduced ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center w-full px-4 py-4 text-xl font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Hire Me at bottom */}
              <div className="p-5 border-t border-white/5">
                <a
                  href={WHATSAPP_HIRE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
