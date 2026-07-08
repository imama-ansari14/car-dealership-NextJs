"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, .65], [1, 0]);

  const STATS = [
    { value: "2,400+", label: "Vehicles Delivered" },
    { value: "18 Yrs", label: "Of Excellence" },
    { value: "34", label: "Countries Served" },
  ];

  return (
    <section ref={ref} style={{ position: "relative", height: "100vh", minHeight: 680, overflow: "hidden", background: "#050505" }}>
      {/* Parallax image */}
      <motion.div style={{ position: "absolute", inset: 0, scale: 1.1, y: imgY }}>
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90"
          alt="Lamborghini Apex Motors"
          fill priority quality={90}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050505 0%, rgba(5,5,5,.65) 55%, transparent 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,   #050505 0%, transparent 50%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,.18)", zIndex: 1 }} />

      {/* Content */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", y: contentY, opacity }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem", width: "100%" }}>
          <div style={{ maxWidth: 750 }}>

            {/* Pre-headline */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .3 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{ width: 40, height: 1, background: "#c9a84c" }} />
              <span className="section-label">The Pinnacle of Automotive Excellence</span>
            </motion.div>

            {/* Headline words */}
            {["Drive", "Legends."].map((word, i) => (
              <div key={word} style={{ overflow: "hidden", marginBottom: ".2rem" }}>
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: .5 + i * .15, ease: [.25, .46, .45, .94] }}
                  className={i === 1 ? "font-display text-gold-gradient" : "font-display"}
                  style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 1, fontWeight: 600, margin: 0, color: i === 0 ? "#fff" : undefined }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}

            {/* Sub */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.0 }}
              style={{ color: "rgba(255,255,255,.48)", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, maxWidth: 480, marginTop: "1.5rem", marginBottom: "2.5rem" }}>
              Curated collection of the world&apos;s most extraordinary performance automobiles. Ferrari, Lamborghini, Porsche, McLaren, Bugatti.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.2 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
              <Link href="/inventory" style={{ textDecoration: "none" }}>
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="btn-gold"
                  style={{ padding: "1rem 2.25rem", fontSize: ".8rem", letterSpacing: ".12em", display: "inline-flex", alignItems: "center", gap: ".75rem" }}>
                  <span style={{ position: "relative", zIndex: 1 }}>Explore Collection</span>
                  <FaArrowRight size={14} style={{ position: "relative", zIndex: 1 }} />
                </motion.span>
              </Link>
              <Link href="/booking" style={{ textDecoration: "none" }}>
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }} className="btn-outline-gold"
                  style={{ padding: "1rem 2.25rem", fontSize: ".8rem", letterSpacing: ".12em", display: "inline-flex", alignItems: "center" }}>
                  Book Test Drive
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0", alignItems: "center" }}>
              {STATS.map((st, i) => (
                <div key={i} style={{ paddingLeft: i > 0 ? "2rem" : 0, marginLeft: i > 0 ? "2rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,.1)" : "none" }}>
                  <p className="font-condensed" style={{ fontSize: "1.25rem", fontWeight: 600, color: "#c9a84c", margin: 0 }}>{st.value}</p>
                  <p className="section-label" style={{ fontSize: ".6rem", marginTop: 2 }}>{st.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span className="section-label" style={{ fontSize: ".58rem" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <FaChevronDown size={15} style={{ color: "#c9a84c" }} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #0d0d0d, transparent)", zIndex: 2 }} />

      <style>{`
        @media (max-width: 768px) {
          section > div { padding: 0 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
