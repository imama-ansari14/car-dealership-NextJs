"use client";
import { motion } from "framer-motion";
import { stats } from "@/data/cars";

export default function StatsSection() {
  return (
    <section style={{ position: "relative", padding: "6rem 0", background: "#080808", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
      {/* Watermark */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "hidden" }}>
        <span className="font-display" style={{ fontSize: "22vw", color: "rgba(255,255,255,.015)", fontWeight: 700, userSelect: "none", whiteSpace: "nowrap" }}>APEX</span>
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.05)" }}>
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: i * .1 }} viewport={{ once: true }}
              style={{ background: "#080808", padding: "3.5rem 2rem", textAlign: "center" }}>
              <p className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", color: "#c9a84c", margin: "0 0 .5rem" }}>{stat.value}</p>
              <p className="section-label" style={{ fontSize: ".62rem" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){section > div:last-child > div{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
