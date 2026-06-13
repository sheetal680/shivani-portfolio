"use client";

import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    role: "Co-Founder & CEO",
    company: "Voxinta",
    period: "2024 — Present",
    type: "Startup",
    description:
      "Founded and leading Voxinta, an AI company specializing in voice agents, chatbots, RAG knowledge bots, and business websites. Building and shipping AI-powered products that help businesses automate and scale.",
    highlights: [
      "Built AI voice agent platform from zero",
      "Developed RAG-powered knowledge bots",
      "Leading product, engineering, and growth",
    ],
    accent: "bg-purple-500",
  },
  {
    role: "Freelance AI Developer",
    company: "Independent",
    period: "2023 — Present",
    type: "Freelance",
    description:
      "Delivered end-to-end AI and ML solutions for clients including NLP pipelines, computer vision systems, predictive analytics dashboards, and full-stack web applications.",
    highlights: [
      "Built custom ML models for clients",
      "Delivered full-stack AI-integrated apps",
      "Python, TensorFlow, Next.js, MongoDB",
    ],
    accent: "bg-blue-500",
  },
  {
    role: "SaaS Builder",
    company: "Side Projects",
    period: "2022 — Present",
    type: "Builder",
    description:
      "Independently designed and built multiple SaaS products addressing real gaps in productivity, healthcare, and business operations. Focused on user-first design and AI-augmented features.",
    highlights: [
      "Shipped 7+ AI-powered projects",
      "React, Next.js, Node.js, Supabase, Firebase",
      "End-to-end from idea to deployment",
    ],
    accent: "bg-emerald-500",
  },
];

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="experience-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
        >
          My journey as a{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            builder &amp; founder
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent hidden md:block"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.role}
                initial={prefersReduced ? {} : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
                className="md:pl-16 relative group"
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full ${exp.accent} border-2 border-[#09090b] hidden md:block shadow-lg group-hover:scale-125 transition-transform`}
                />

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <time className="text-sm text-gray-500 font-medium shrink-0">{exp.period}</time>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
