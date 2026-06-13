"use client";

import { motion, useReducedMotion } from "framer-motion";
import CurtainReveal from "./CurtainReveal";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C", icon: "⚙️" },
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "Machine Learning", icon: "🤖" },
      { name: "NLP", icon: "💬" },
      { name: "LLMs", icon: "🧠" },
      { name: "EDA", icon: "🔍" },
      { name: "RAG", icon: "📚" },
      { name: "Prompt Engineering", icon: "✨" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Scikit-learn", icon: "📐" },
      { name: "Matplotlib", icon: "📊" },
      { name: "Groq API", icon: "⚡" },
      { name: "LangChain", icon: "🔗" },
    ],
  },
  {
    category: "Web & Deployment",
    skills: [
      { name: "Streamlit", icon: "🌊" },
      { name: "REST APIs", icon: "🔌" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "🟡" },
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Streamlit Cloud", icon: "☁️" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💙" },
      { name: "Jupyter Notebook", icon: "📓" },
      { name: "Google Colab", icon: "🔬" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
];

export default function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-32 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Technical Skills
        </motion.p>
        <CurtainReveal delay={0.1}>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
          >
            Tools I work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              with
            </span>
          </h2>
        </CurtainReveal>

        <div className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {cat.category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.li
                    key={skill.name}
                    initial={prefersReduced ? {} : { opacity: 0, scale: 0.85, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ci * 0.08 + si * 0.04 }}
                    whileHover={prefersReduced ? {} : { y: -3, scale: 1.08 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-white transition-all duration-200 cursor-default"
                  >
                    <span role="img" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
