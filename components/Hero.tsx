"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const roles = [
  "AI Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "Entrepreneur",
  "Co-Founder & CEO of Voxinta",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const fade = prefersReduced
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };

  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            {...fade}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Available for opportunities
            </motion.p>

            <motion.h1
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4"
            >
              Shivani{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Sheetal
              </span>{" "}
              Palivela
            </motion.h1>

            {/* Animated role */}
            <div className="h-10 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg sm:text-xl text-purple-400 font-semibold"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Co-Founder &amp; CEO of{" "}
              <span className="text-purple-400 font-semibold">Voxinta</span> — building
              AI voice agents, chatbots, and intelligent business solutions. B.Tech AI &amp;
              Data Science from LBRCE.
            </motion.p>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {["Next.js 15", "Python", "AI/ML", "TypeScript", "Voxinta"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={prefersReduced ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-900/20 blur-xl"
              />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/40">
                <Image
                  src="/images/profes.jpeg"
                  alt="Shivani Sheetal Palivela"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-[50%_35%]"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-4 flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
                <span className="text-xl" role="img" aria-label="Building">🚀</span>
                <div>
                  <p className="text-xs font-semibold text-white">Voxinta</p>
                  <p className="text-xs text-gray-400">AI Company</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
