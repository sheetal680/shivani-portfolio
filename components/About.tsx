"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Image from "next/image";
import CurtainReveal from "./CurtainReveal";

const statData = [
  { value: 10, suffix: "+", label: "AI Projects Shipped", delay: 0 },
  { value: 1,  suffix: "+", label: "Year of Experience",  delay: 0.15 },
  { value: 15, suffix: "+", label: "Tech Skills",         delay: 0.30 },
  { value: 1,  suffix: "",  label: "Startup Founded",     delay: 0.45 },
];

function StatCard({
  value, suffix, label, delay,
}: {
  value: number; suffix: string; label: string; delay: number;
}) {
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) { setCount(value); setDone(true); return; }
    const duration = 2000;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(value);
        setDone(true);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, prefersReduced]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={prefersReduced ? {} : { y: -4, scale: 1.02 }}
      className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
    >
      <motion.p
        className="text-2xl font-bold text-white tabular-nums"
        animate={done && !prefersReduced ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {count}{suffix}
      </motion.p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

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
        <CurtainReveal delay={0.1}>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-16 max-w-2xl"
          >
            Building the future with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              AI &amp; code
            </span>
          </h2>
        </CurtainReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div {...fadeUp(0.1)} className="relative mx-auto max-w-sm w-full">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-900/10 blur-lg"
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-purple-900/30">
              <Image
                src="/profess.jpeg"
                alt="Portrait of Shivani Sheetal Palivela"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[50%_25%]"
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
              <p className="text-xs text-gray-400">LBRCE · CGPA 8.2</p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div {...fadeUp(0.2)} className="space-y-5 text-gray-400 text-base leading-relaxed mb-10">
              <p>
                I&apos;m Shivani Sheetal Palivela — an AI Engineer, Data Scientist,
                and entrepreneur building intelligent products that solve real-world
                problems. My conviction: AI should be accessible to every business,
                not just tech giants.
              </p>
              <p>
                As Co-Founder &amp; CEO of{" "}
                <span className="text-purple-400 font-semibold">Voxinta</span>, I
                independently design and deploy AI-powered tools, chatbots, and
                automation systems using Python, LLMs, and NLP — handling everything
                from ideation to live production. I&apos;ve shipped 10+ tools that
                reduce manual effort by up to 90% per workflow.
              </p>
              <p>
                My vision is to lead AI-powered companies that make every business
                smarter, faster, and more human through thoughtfully engineered AI.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {statData.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
