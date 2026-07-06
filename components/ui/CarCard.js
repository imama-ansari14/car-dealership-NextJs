"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBolt, FaGauge, FaArrowRight } from "react-icons/fa6";
import Badge from "./Badge";

export default function CarCard({ car, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6, delay: index * .1, ease: [.25,.46,.45,.94] }}
      viewport={{ once: true, margin: "-40px" }}
      className="card-luxury"
      style={{ background: "#111", border: "1px solid rgba(255,255,255,.05)", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#0a0a0a", flexShrink: 0 }}>
        <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: .6, ease: [.25,.46,.45,.94] }} style={{ height: "100%", position: "relative" }}>
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
          />
        </motion.div>
        {/* gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, transparent 60%)" }} />
        {/* badges */}
        <div style={{ position: "absolute", top: 14, left: 14 }}>
          <Badge variant="gold">{car.category}</Badge>
        </div>
        {car.status === "available" && (
          <div style={{ position: "absolute", top: 14, right: 14 }}>
            <Badge variant="green" dot>Available</Badge>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "1.4rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <p className="font-condensed" style={{ color: "rgba(255,255,255,.35)", fontSize: ".68rem", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: ".3rem" }}>
          {car.brand} · {car.year}
        </p>
        <h3 className="font-display" style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "1rem", transition: "color .3s" }}>
          {car.model}
        </h3>

        {/* Spec row */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: ".9rem 0", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)", marginBottom: "1.2rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: ".4rem", color: "rgba(255,255,255,.45)", fontSize: ".72rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: ".08em" }}>
            <FaBolt size={11} style={{ color: "#c9a84c" }} />{car.horsepower} HP
          </span>
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,.1)" }} />
          <span style={{ display: "flex", alignItems: "center", gap: ".4rem", color: "rgba(255,255,255,.45)", fontSize: ".72rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: ".08em" }}>
            <FaGauge size={11} style={{ color: "#c9a84c" }} />{car.topSpeed}
          </span>
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,.1)" }} />
          <span style={{ color: "rgba(255,255,255,.45)", fontSize: ".72rem", fontFamily: "'Barlow Condensed', sans-serif" }}>{car.acceleration}</span>
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p className="font-condensed" style={{ color: "rgba(255,255,255,.25)", fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: 2 }}>Starting at</p>
            <p className="font-condensed" style={{ color: "#c9a84c", fontSize: "1.05rem", fontWeight: 500, letterSpacing: ".05em" }}>
              ${car.price.toLocaleString()}
            </p>
          </div>
          <Link href={`/cars/${car.id}`}
            style={{ display: "flex", alignItems: "center", gap: ".4rem", fontSize: ".68rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", textDecoration: "none", transition: "color .3s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}
          >
            View <FaArrowRight size={11} />
          </Link>
        </div>
      </div>

      {/* Bottom gold line on hover */}
      <style>{`
        .card-luxury:hover .gold-line { width: 100% !important; }
      `}</style>
      <div className="gold-line" style={{ position: "absolute", bottom: 0, left: 0, height: 1, width: 0, background: "#c9a84c", transition: "width .5s ease" }} />
    </motion.div>
  );
}
