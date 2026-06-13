"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "7+", label: "AI Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Tech Skills" },
  { value: "1", label: "Startup Founded" },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 as const },
          transition: { duration: 0.6, delay },
        };

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p {...fadeUp(0)} className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
          About Me
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
        >
          Building the future with{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            AI &amp; code
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div {...fadeUp(0.1)} className="relative mx-auto max-w-sm w-full">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-900/10 blur-lg"
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-purple-900/30">
              <Image
                src="/images/profes.jpeg"
                alt="Portrait of Shivani Sheetal Palivela"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[50%_35%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent"
              />
            </div>

            {/* College badge */}
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl border border-white/10 bg-[#111113]/90 backdrop-blur-sm shadow-xl">
              <p className="text-xs font-semibold text-purple-400">Education</p>
              <p className="text-sm font-medium text-white mt-0.5">B.Tech AI &amp; DS</p>
              <p className="text-xs text-gray-400">LBRCE</p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div {...fadeUp(0.2)} className="space-y-5 text-gray-400 text-base leading-relaxed mb-10">
              <p>
                I&apos;m Shivani Sheetal Palivela, an AI Engineer, Data Scientist, and entrepreneur
                on a mission to build intelligent products that solve real-world problems. My
                founder journey began with a simple conviction: AI should be accessible to every
                business, not just tech giants.
              </p>
              <p>
                As Co-Founder &amp; CEO of{" "}
                <span className="text-purple-400 font-semibold">Voxinta</span>, I build AI voice
                agents, RAG knowledge bots, and intelligent business automation. I combine deep
                technical expertise in Python, ML, and full-stack development with a product
                mindset to ship solutions that actually work.
              </p>
              <p>
                My vision is to lead a portfolio of AI-powered companies that democratize
                technology — making every business smarter, faster, and more human through
                thoughtfully engineered AI.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
