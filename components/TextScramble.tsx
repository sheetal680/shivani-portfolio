"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: number;
}

export default function TextScramble({ text, className, delay = 0, trigger = 0 }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      let iter = 0;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < iter) return text[idx];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iter += 0.4;
        if (iter >= text.length) {
          clearInterval(intervalRef.current);
          setDisplay(text);
        }
      }, 40);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, delay, trigger]);

  return <span className={className}>{display}</span>;
}
