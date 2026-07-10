"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

/* ── Primary gold button ── */
export function GoldButton({ children, href, onClick, icon = false, size = "md", className = "", style = {} }) {
  const pad = size === "sm" ? ".55rem 1.25rem" : size === "lg" ? "1rem 2.5rem" : ".75rem 2rem";
  const fz = size === "sm" ? ".7rem" : ".78rem";

  const inner = (
    <motion.span
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: .975 }}
      className={`btn-gold ${className}`}
      style={{ padding: pad, fontSize: fz, letterSpacing: ".1em", display: "inline-flex", alignItems: "center", gap: ".6rem", ...style }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      {icon && <FaArrowRight size={13} style={{ position: "relative", zIndex: 1 }} />}
    </motion.span>
  );

  if (href) return <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link>;
  return <button onClick={onClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>{inner}</button>;
}

/* ── Outline gold button ── */
export function OutlineButton({ children, href, onClick, size = "md", className = "", style = {} }) {
  const pad = size === "sm" ? ".55rem 1.25rem" : size === "lg" ? "1rem 2.5rem" : ".75rem 2rem";
  const fz = size === "sm" ? ".7rem" : ".78rem";

  const inner = (
    <motion.span
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: .975 }}
      className={`btn-outline-gold ${className}`}
      style={{ padding: pad, fontSize: fz, letterSpacing: ".1em", display: "inline-flex", alignItems: "center", gap: ".6rem", ...style }}
    >
      {children}
    </motion.span>
  );

  if (href) return <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link>;
  return <button onClick={onClick} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>{inner}</button>;
}

/* ── Section label with left line ── */
export function SectionLabel({ children, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: center ? 0 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
      style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: center ? "center" : "flex-start", marginBottom: "1rem" }}
    >
      <span style={{ width: 28, height: 1, background: "#c9a84c", flexShrink: 0 }} />
      <span className="section-label">{children}</span>
    </motion.div>
  );
}
