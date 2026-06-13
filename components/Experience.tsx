"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import CurtainReveal from "./CurtainReveal";

const education = {
  degree: "B.Tech – Artificial Intelligence & Data Science",
  college: "Lakireddy Bali Reddy College of Engineering, Mylavaram",
  cgpa: "8.1",
  graduation: "Expected May 2027",
};

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
          Experience &amp; Education
        </motion.p>
        <CurtainReveal delay={0.1}>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
          >
            My journey as a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              builder &amp; founder
            </span>
          </h2>
        </CurtainReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Voxinta card */}
          <motion.article
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20 mb-2">
                  Startup
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-black border border-white/10">
                    <Image
                      src="/companylogo.jpeg"
                      alt="Voxinta logo"
                      fill
                      sizes="32px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">Co-Founder &amp; CEO</h3>
                    <p className="text-purple-400 font-semibold text-sm">Voxinta</p>
                  </div>
                </div>
              </div>
              <time className="text-sm text-gray-500 font-medium shrink-0">2024 – Present</time>
            </div>

            <ul className="space-y-3">
              {[
                "Building AI voice agents, chatbots, and RAG knowledge bots for businesses across India",
                "Leading product development, client acquisition, and company strategy",
                "Serving clients across Vijayawada and Hyderabad markets",
                "Building toward a full AI platform company",
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                  <span className="text-purple-500 mt-1 shrink-0" aria-hidden="true">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Education card */}
          <motion.article
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20 mb-2">
                  Education
                </span>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-purple-400 font-semibold text-sm mt-0.5">{education.college}</p>
              </div>
              <time className="text-sm text-gray-500 font-medium shrink-0">{education.graduation}</time>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="text-purple-500 mt-1 shrink-0" aria-hidden="true">▸</span>
                CGPA: <span className="text-white font-semibold ml-1">{education.cgpa}</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="text-purple-500 mt-1 shrink-0" aria-hidden="true">▸</span>
                Specialisation in Artificial Intelligence &amp; Data Science
              </li>
              <li className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                <span className="text-purple-500 mt-1 shrink-0" aria-hidden="true">▸</span>
                Active NCC cadet — Senior Under Officer (SUO), highest student rank in battalion
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
