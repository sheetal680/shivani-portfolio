"use client";

import { motion, useReducedMotion } from "framer-motion";

const GITHUB_BASE = "https://github.com/sheetal680/";

const projects = [
  {
    title: "DecisionPilot AI",
    repo: "decisionpilot",
    description:
      "Explainable Business Decision Support System using hybrid Rule-Based + LLM reasoning. Analyzes business CSV data, ranks options, simulates What-If scenarios, and generates confidence-scored recommendations. Presented at AICTE Pre-Summit Hackathon.",
    tags: ["Python", "Streamlit", "LLM", "Rule-Based AI"],
    icon: "🧭",
    color: "from-purple-500/20 to-violet-500/10",
    border: "hover:border-purple-500/50",
  },
  {
    title: "AI Customer Support Bot",
    repo: "ai-customer-support-bot",
    description:
      "Sell-ready AI customer support chatbot using Groq LLaMA-3 with local embeddings-based FAQ retrieval, session memory, safety guardrails, and adjustable business tone. Supports custom FAQ upload (txt/pdf).",
    tags: ["Python", "Groq LLaMA-3", "RAG", "Streamlit"],
    icon: "🤖",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-500/50",
  },
  {
    title: "AI Resume Analyzer",
    repo: "ai-resume-analyzer",
    description:
      "ATS resume analyzer with PDF parsing, NLP keyword extraction, and ATS compatibility scoring. Surfaces strengths, weaknesses, and top 5 recommendations. Includes JD match scoring and visual skill gap chart. Tested across 50+ resumes.",
    tags: ["Python", "NLP", "Scikit-learn", "Matplotlib", "Streamlit"],
    icon: "📄",
    color: "from-emerald-500/20 to-green-500/10",
    border: "hover:border-emerald-500/50",
  },
  {
    title: "Music Emotion Recommender",
    repo: "music-emotion-recommender",
    description:
      "Music Recommendation System using Facial Emotion Recognition. Detects user emotion via camera and recommends matching music in real time.",
    tags: ["Python", "Deep Learning", "OpenCV", "Emotion Recognition"],
    icon: "🎵",
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/50",
  },
  {
    title: "AI YouTube Sentiment Analysis",
    repo: "ai-youtube-sentiment-analysis",
    description:
      "AI-powered sentiment analysis tool to analyze YouTube and social media comments. Provides audience insights, sentiment distribution, and visual analytics using machine learning.",
    tags: ["Python", "NLP", "YouTube API", "Machine Learning"],
    icon: "📊",
    color: "from-red-500/20 to-orange-500/10",
    border: "hover:border-red-500/50",
  },
  {
    title: "AI Product Review Classifier",
    repo: "ai-product-review-classifier",
    description:
      "AI-powered classifier that analyzes customer reviews and classifies them as Positive or Negative using NLP and ML. Built with TF-IDF and Logistic Regression.",
    tags: ["Python", "TF-IDF", "Logistic Regression", "NLP"],
    icon: "⭐",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "hover:border-amber-500/50",
  },
  {
    title: "AI Email Spam Classifier",
    repo: "ai-email-spam-classifier",
    description:
      "ML-based AI system that classifies emails as Spam or Not Spam using TF-IDF and Logistic Regression with confidence scoring and a Streamlit web interface for real-world use.",
    tags: ["Python", "Scikit-learn", "TF-IDF", "Streamlit"],
    icon: "📧",
    color: "from-indigo-500/20 to-purple-500/10",
    border: "hover:border-indigo-500/50",
  },
  {
    title: "AI Blog Outline Generator",
    repo: "ai-blog-outline-generator",
    description:
      "AI-powered blog outline generator using LLaMA 3.1 to create SEO-friendly content structures with tone and audience control.",
    tags: ["Python", "LLaMA 3.1", "LLM", "Streamlit"],
    icon: "✍️",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "hover:border-teal-500/50",
  },
  {
    title: "AI Text Summarizer",
    repo: "ai-text-summarizer-streamlit",
    description:
      "AI-powered text summarizer built with Streamlit. Converts long articles, notes, and research text into clean, concise summaries with adjustable length. Includes offline and API-based summarization modes.",
    tags: ["Python", "NLP", "Streamlit", "LLM"],
    icon: "📝",
    color: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-500/50",
  },
  {
    title: "AI Lead Chatbot",
    repo: "ai-lead-chatbot",
    description:
      "AI-powered lead generation chatbot that qualifies website visitors, captures lead information, and routes prospects automatically.",
    tags: ["JavaScript", "Chatbot", "AI", "Lead Generation"],
    icon: "💬",
    color: "from-sky-500/20 to-blue-500/10",
    border: "hover:border-sky-500/50",
  },
  {
    title: "AI RAG Chatbot SaaS",
    repo: "ai-rag-chatbot-saas",
    description:
      "SaaS-ready Retrieval Augmented Generation chatbot. Upload documents and get an intelligent Q&A bot that answers from your own knowledge base.",
    tags: ["Python", "RAG", "LLM", "Vector Search"],
    icon: "🗄️",
    color: "from-fuchsia-500/20 to-pink-500/10",
    border: "hover:border-fuchsia-500/50",
  },
  {
    title: "Voice Agent",
    repo: "voice-agent",
    description:
      "AI-powered voice agent for business automation. Handles voice interactions, processes speech, and responds intelligently to user queries.",
    tags: ["Python", "Voice AI", "Speech Processing", "LLM"],
    icon: "🎙️",
    color: "from-green-500/20 to-emerald-500/10",
    border: "hover:border-green-500/50",
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
          12 projects spanning AI automation, LLMs, NLP, and full-stack development — each solving a real problem.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={prefersReduced ? {} : { y: -8, scale: 1.02 }}
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
                <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={GITHUB_BASE + project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors duration-200 group/link focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                  <motion.span
                    animate={prefersReduced ? {} : undefined}
                    className="inline-block group-hover/link:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
