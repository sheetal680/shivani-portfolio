"use client";

import { motion, useReducedMotion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    value: "5+",
    label: "Hackathons Participated",
    description:
      "Competed in national and regional hackathons, winning recognition for AI and ML solutions.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: "🤖",
    value: "7+",
    label: "AI Projects Built",
    description:
      "Shipped production-grade AI projects spanning NLP, computer vision, and ML pipelines.",
    color: "from-purple-500/20 to-violet-500/10",
    border: "hover:border-purple-500/40",
  },
  {
    icon: "🚀",
    value: "2+",
    label: "SaaS Products Developed",
    description:
      "Designed, built, and launched SaaS products from concept to paying users independently.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/40",
  },
  {
    icon: "👑",
    value: "1",
    label: "Technical Leadership",
    description:
      "Founded and leads Voxinta as CEO, driving technical vision, product roadmap, and team growth.",
    color: "from-emerald-500/20 to-green-500/10",
    border: "hover:border-emerald-500/40",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${item.border} hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
              <div className="relative z-10">
                <div className="text-3xl mb-4" role="img" aria-label={item.label}>
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
                <p className="text-sm font-semibold text-purple-400 mb-3">{item.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
