"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import CarCard from "@/components/ui/CarCard";
import { SectionLabel } from "@/components/ui/Button";
import { cars } from "@/data/cars";
import { FaArrowRight } from "react-icons/fa6";

export default function FeaturedCars() {
  const featured = cars.filter(c => c.featured).slice(0, 3);
  return (
    <section style={{ padding: "8rem 0", background: "#0d0d0d", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", gap: "2rem" }}>
          <div>
            <SectionLabel>Featured Collection</SectionLabel>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}
              className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", lineHeight: 1.2, margin: 0 }}>
              Extraordinary Machines,<br />
              <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Awaiting Their Owner</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .3 }} viewport={{ once: true }}>
            <Link href="/inventory" style={{ display: "flex", alignItems: "center", gap: ".5rem", color: "rgba(255,255,255,.4)", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase", transition: "color .3s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}>
              View All Vehicles <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {featured.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
        </div>
      </div>
    </section>
  );
}
