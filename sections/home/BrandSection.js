"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const BRANDS = ["Ferrari","Lamborghini","Porsche","McLaren","Bugatti","Aston Martin","Pagani","Koenigsegg","Rimac","Zenvo"];

export default function BrandSection() {
  return (
    <>
      {/* Scrolling brand ticker */}
      <section style={{ padding: "2.5rem 0", background: "#080808", borderTop: "1px solid rgba(255,255,255,.05)", borderBottom: "1px solid rgba(255,255,255,.05)", overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", alignItems: "center", gap: "3rem", whiteSpace: "nowrap" }}
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={i} className="font-condensed"
                style={{ fontSize: ".78rem", letterSpacing: ".35em", textTransform: "uppercase", color: "rgba(255,255,255,.18)", padding: "0 1rem", cursor: "default", transition: "color .3s" }}>
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: "relative", padding: "8rem 0", background: "#090909", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,.04) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto", padding: "0 3rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} viewport={{ once: true }}>
            <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>Private Consultation</span>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", lineHeight: 1.25, margin: "0 0 1.25rem" }}>
              Ready to Experience<br />
              <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Automotive Perfection?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,.38)", fontSize: "1rem", fontWeight: 300, maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              Schedule a private viewing or test drive. Our specialists are available seven days a week.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <Link href="/booking" style={{ textDecoration: "none" }}>
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="btn-gold"
                  style={{ padding: "1rem 2.5rem", fontSize: ".8rem", letterSpacing: ".12em", display: "inline-block" }}>
                  <span style={{ position: "relative", zIndex: 1 }}>Book a Test Drive</span>
                </motion.span>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="btn-outline-gold"
                  style={{ padding: "1rem 2.5rem", fontSize: ".8rem", letterSpacing: ".12em", display: "inline-block" }}>
                  Contact Concierge
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
