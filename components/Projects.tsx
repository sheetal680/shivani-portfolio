"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "AI Mental Health Companion",
    description:
      "An empathetic AI chatbot with real-time emotion detection that provides personalized mental wellness support, coping strategies, and mood tracking using NLP and sentiment analysis.",
    tags: ["Python", "NLP", "Sentiment Analysis", "React", "Flask"],
    icon: "🧠",
    color: "from-purple-500/20 to-pink-500/10",
    border: "hover:border-purple-500/50",
  },
  {
    title: "AI Document Protection Suite",
    description:
      "Advanced fraud detection and document security platform using computer vision and ML to verify document authenticity, detect tampering, and flag anomalies in real time.",
    tags: ["Python", "OpenCV", "ML", "FastAPI", "React"],
    icon: "🔐",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/50",
  },
  {
    title: "AI YouTube Comment Analyzer",
    description:
      "Intelligent platform for analyzing YouTube comments at scale — trend detection, sentiment distribution, toxicity scoring, and actionable creator insights via automated pipelines.",
    tags: ["Python", "YouTube API", "NLP", "Next.js", "MongoDB"],
    icon: "📊",
    color: "from-red-500/20 to-orange-500/10",
    border: "hover:border-red-500/50",
  },
  {
    title: "Neighborhood Help Exchange",
    description:
      "Community-driven platform connecting neighbors for skill exchange, resource sharing, and local support networks — with geolocation-based matching and trust scoring.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Maps API"],
    icon: "🏘️",
    color: "from-emerald-500/20 to-green-500/10",
    border: "hover:border-emerald-500/50",
  },
  {
    title: "Job Portal System",
    description:
      "Full-stack recruitment platform with AI-powered resume matching, employer dashboards, applicant tracking, job recommendations, and automated interview scheduling.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Node.js", "AI Matching"],
    icon: "💼",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "hover:border-yellow-500/50",
  },
  {
    title: "Company Finance Tracker",
    description:
      "Comprehensive finance management platform with real-time expense tracking, revenue analytics, budgeting tools, automated reports, and forecasting dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js", "REST API"],
    icon: "💰",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "hover:border-teal-500/50",
  },
  {
    title: "Spam Email Detection",
    description:
      "High-accuracy ML email classifier using TF-IDF vectorization and ensemble models (Naive Bayes, SVM, Random Forest) achieving 98%+ precision on spam detection benchmarks.",
    tags: ["Python", "Scikit-learn", "NLP", "TF-IDF", "ML Pipeline"],
    icon: "📧",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "hover:border-indigo-500/50",
  },
];

export default function Projects() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="projects-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4 max-w-2xl"
        >
          Things I&apos;ve{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            built
          </span>
        </motion.h2>
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base mb-16 max-w-xl"
        >
          7 projects spanning AI, full-stack development, and SaaS — each solving a real problem.
        </motion.p>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
              className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${project.border} hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 flex flex-col`}
            >
              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="text-3xl mb-4" role="img" aria-label={project.title}>
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
