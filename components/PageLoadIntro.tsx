"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function PageLoadIntro() {
  const [show, setShow] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const seen = sessionStorage.getItem("intro_seen");
    if (!seen) {
      setShow(true);
      sessionStorage.setItem("intro_seen", "1");
      setTimeout(() => setShow(false), 1000);
    }
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#09090b]"
          aria-hidden="true"
        >
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white text-3xl font-bold shadow-2xl shadow-purple-500/40"
          >
            S
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
