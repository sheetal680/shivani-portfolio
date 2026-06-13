"use client";

import { useState, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-32 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                amazing
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I&apos;m open to full-time roles, freelance projects, startup collaborations, and
              interesting conversations about AI and technology.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-lg shrink-0" aria-hidden="true">
                  📧
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <a
                    href="mailto:shivanisheetal682@gmail.com"
                    className="text-sm text-gray-200 hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  >
                    shivanisheetal682@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-lg shrink-0" aria-hidden="true">
                  🌐
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Company</p>
                  <p className="text-sm text-gray-200">Voxinta — AI Voice Agents &amp; Chatbots</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-lg shrink-0" aria-hidden="true">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Location</p>
                  <p className="text-sm text-gray-200">India — Open to remote worldwide</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/in/shivani-sheetal-4520913a8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/sheetal680"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="p-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 text-center">
                <div className="text-4xl mb-4" role="img" aria-label="Thank you">🎉</div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Contact form"
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span aria-hidden="true" className="text-purple-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span aria-hidden="true" className="text-purple-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span aria-hidden="true" className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0d0d0f]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
