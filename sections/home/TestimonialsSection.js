"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/Button";
import { testimonials } from "@/data/cars";
import { FaStar } from "react-icons/fa6";

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "8rem 0", background: "#0d0d0d", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <SectionLabel center>Client Testimonials</SectionLabel>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
            className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", margin: 0 }}>
            Voices of <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Distinction</span>
          </motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: i * .15 }} viewport={{ once: true }}
              className="glass" style={{ padding: "2.5rem", borderColor: "rgba(255,255,255,.05)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: "1.25rem" }}>
                {Array.from({ length: t.rating }).map((_, j) => <FaStar key={j} size={12} style={{ fill: "#c9a84c", color: "#c9a84c" }} />)}
              </div>
              <span className="font-display" style={{ fontSize: "3.5rem", color: "rgba(201,168,76,.18)", lineHeight: .8, marginBottom: ".5rem" }}>&ldquo;</span>
              <p style={{ color: "rgba(255,255,255,.52)", fontSize: ".9rem", fontStyle: "italic", lineHeight: 1.8, fontWeight: 300, flex: 1, marginBottom: "1.75rem" }}>{t.content}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,.06)" }}>
                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#a07830,#c9a84c)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="font-condensed" style={{ fontSize: ".65rem", fontWeight: 700, color: "#0d0d0d", letterSpacing: ".1em" }}>{t.avatar}</span>
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: ".88rem", fontWeight: 500, margin: 0 }}>{t.name}</p>
                  <p className="font-condensed" style={{ color: "rgba(255,255,255,.3)", fontSize: ".65rem", letterSpacing: ".15em", margin: 0 }}>{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
