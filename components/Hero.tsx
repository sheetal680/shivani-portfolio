"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextScramble from "./TextScramble";
import MagneticButton from "./MagneticButton";

const roles = [
  "AI Engineer",
  "Data Scientist",
  "AI Automation Developer",
  "Full Stack Developer",
  "Entrepreneur",
];

const WHATSAPP_HIRE =
  "https://wa.me/918977241245?text=Hi%20Shivani!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";

function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1800
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const delay = isDeleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next.length === current.length) {
          pauseRef.current = setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const typedText = useTypewriter(roles);
  const [scrambleTrigger, setScrambleTrigger] = useState(0);

  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={prefersReduced ? {} : { scale: [1, 1.15, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-purple-700 blur-[120px]"
        />
        <motion.div
          animate={prefersReduced ? {} : { scale: [1.1, 1, 1.1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600 blur-[120px]"
        />
        <motion.div
          animate={prefersReduced ? {} : { scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-600 blur-[100px]"
        />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Available for opportunities
            </motion.p>

            {/* Name with TextScramble — re-triggers on hover */}
            <motion.h1
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onMouseEnter={() => setScrambleTrigger((n) => n + 1)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4 cursor-default select-none"
              style={{ perspective: "600px" }}
            >
              <TextScramble
                text="Shivani"
                delay={300}
                trigger={scrambleTrigger}
                className="text-white"
              />{" "}
              <TextScramble
                text="Sheetal Palivela"
                delay={600}
                trigger={scrambleTrigger}
                className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              />
            </motion.h1>

            {/* Typewriter role with glitch */}
            <div className="h-10 mb-4 flex items-center">
              <p
                className="glitch text-lg sm:text-xl text-purple-400 font-semibold"
                data-text={typedText}
                aria-label={`Role: ${typedText}`}
              >
                {typedText}
                <span className="animate-pulse text-purple-300 ml-0.5" aria-hidden="true">|</span>
              </p>
            </div>

            <motion.p
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building AI voice agents, chatbots, and intelligent automation solutions for real businesses.
            </motion.p>

            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={WHATSAPP_HIRE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  Contact Me
                </a>
              </MagneticButton>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {["Python", "AI/ML", "LLMs", "Next.js 15", "Voxinta"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.07 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Logo circle */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={prefersReduced ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-900/20 blur-xl"
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-900/40 bg-[#0a0a0a] flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <Image
                    src="/companylogo.jpeg"
                    alt="Voxinta"
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    className="object-contain p-4"
                  />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-4 flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
                <div className="relative w-7 h-7 rounded-lg overflow-hidden shrink-0">
                  <Image src="/companylogo.jpeg" alt="Voxinta logo" fill sizes="28px" className="object-cover" />
                </div>
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
