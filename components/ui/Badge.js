"use client";
import { motion } from "framer-motion";

const VARIANTS = {
  gold: { bg: "rgba(201,168,76,.12)", border: "rgba(201,168,76,.35)", text: "#c9a84c" },
  green: { bg: "rgba(52,211,153,.08)", border: "rgba(52,211,153,.3)", text: "#34d399" },
  gray: { bg: "rgba(255,255,255,.05)", border: "rgba(255,255,255,.12)", text: "rgba(255,255,255,.55)" },
  red: { bg: "rgba(239,68,68,.08)", border: "rgba(239,68,68,.3)", text: "#ef4444" },
  white: { bg: "rgba(255,255,255,.06)", border: "rgba(255,255,255,.15)", text: "#f0ede8" },
};

export default function Badge({ variant = "gold", dot = false, animate = false, className = "", children }) {
  const v = VARIANTS[variant] ?? VARIANTS.gold;

  const inner = (
    <span
      className={`font-condensed ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: ".4rem",
        padding: ".25rem .75rem",
        background: v.bg,
        border: `1px solid ${v.border}`,
        color: v.text,
        fontSize: ".68rem",
        fontWeight: 500,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6, height: 6,
            borderRadius: "50%",
            background: v.text,
            flexShrink: 0,
            animation: "badgePulse 2s ease-in-out infinite",
          }}
        />
      )}
      {children}
    </span>
  );

  return (
    <>
      <style>{`
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: .35; }
        }
      `}</style>
      {animate
        ? <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .4 }} style={{ display: "inline-block" }}>{inner}</motion.div>
        : inner
      }
    </>
  );
}
