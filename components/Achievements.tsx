"use client";

import { motion, useReducedMotion } from "framer-motion";

const achievements = [
  {
    icon: "🎖️",
    label: "AICTE Pre-Summit Hackathon",
    description:
      "Presented DecisionPilot AI at Code Crow AI, AICTE Pre-Summit Hackathon, LBRCE — Feb 2026. Demonstrated hybrid AI reasoning system to industry and academia judges.",
    color: "from-purple-500/20 to-violet-500/10",
    border: "hover:border-purple-500/40",
  },
  {
    icon: "⭐",
    label: "Senior Under Officer (SUO) — NCC",
    description:
      "Highest student rank in the battalion. Led and managed an entire unit of cadets overseeing training, discipline, and operations.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: "🥇",
    label: "Best Cadet — Kakinada Group, NCC",
    description:
      "Awarded Best Cadet at Group level for outstanding performance, leadership, and discipline among all cadets across the group.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-500/40",
  },
  {
    icon: "🎯",
    label: "1st Place in Firing — Battalion Level, NCC",
    description:
      "Secured first position in battalion-level firing competition — demonstrating precision, focus, and performance under pressure.",
    color: "from-red-500/20 to-rose-500/10",
    border: "hover:border-red-500/40",
  },
];

export default function Achievements() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="achievements-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
        >
          Milestones &amp;{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            highlights
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={prefersReduced ? {} : { y: -6, scale: 1.02 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${item.border} hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
              <div className="relative z-10">
                <motion.div
                  initial={prefersReduced ? {} : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: i * 0.1 + 0.2,
                  }}
                  className="text-3xl mb-4"
                  role="img"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.div>
                <p className="text-sm font-bold text-white mb-3 leading-snug">{item.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
