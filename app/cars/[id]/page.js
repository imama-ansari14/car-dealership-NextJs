"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cars } from "@/data/cars";
import CarCard from "@/components/ui/CarCard";
import Badge from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/Button";
import { Zap, Gauge, ArrowLeft, ArrowRight, Check, Fuel, Settings2, Timer } from "lucide-react";

function SpecRow({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.1rem 1.25rem", border: "1px solid rgba(255,255,255,.06)", transition: "border-color .3s" }}>
      <div style={{ width: 34, height: 34, border: "1px solid rgba(201,168,76,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {Icon && <Icon size={13} style={{ color: "#c9a84c" }} />}
      </div>
      <div>
        <p className="font-condensed" style={{ color: "rgba(255,255,255,.3)", fontSize: ".62rem", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: ".25rem" }}>{label}</p>
        <p style={{ color: "#f0ede8", fontSize: ".88rem", fontWeight: 400, margin: 0 }}>{value}</p>
      </div>
    </div>
  );
}

export default function CarDetailPage({ params }) {
  // Unwrapping async params safely for Next.js 15 Client Components
  const resolvedParams = React.use(params);
  const id = resolvedParams?.id;
  const car = cars.find(c => c.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!car) return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1.5rem" }}>
      <p className="font-display" style={{ fontSize: "2.5rem", color: "#fff" }}>Vehicle Not Found</p>
      <Link href="/inventory" style={{ textDecoration: "none" }}>
        <span className="btn-gold" style={{ padding: ".85rem 2rem", fontSize: ".78rem", letterSpacing: ".12em", display: "inline-block" }}>
          <span style={{ position: "relative", zIndex: 1 }}>Back to Inventory</span>
        </span>
      </Link>
    </div>
  );

  const related = [...cars.filter(c => c.id !== car.id && c.category === car.category), ...cars.filter(c => c.id !== car.id && c.category !== car.category)].slice(0, 2);

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      {/* Back */}
      <div style={{ paddingTop: "7.5rem", paddingBottom: "1.5rem", maxWidth: 1400, margin: "0 auto", padding: "7.5rem 3rem 1.5rem" }}>
        <Link href="/inventory" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "rgba(255,255,255,.35)", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", transition: "color .3s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.35)"}>
          <ArrowLeft size={12} /> Back to Inventory
        </Link>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem 6rem" }}>
        {/* Hero grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "5rem", alignItems: "start" }}>

          {/* Gallery col */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
            <div style={{ position: "relative", aspectRatio: "4/3", background: "#111", overflow: "hidden", border: "1px solid rgba(255,255,255,.06)", marginBottom: ".75rem" }}>
              <Image src={car.gallery[activeImg]} alt={car.model} fill priority style={{ objectFit: "cover" }} sizes="(max-width:1024px)100vw,50vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 60%,rgba(17,17,17,.4))" }} />
              {car.gallery.length > 1 && (
                <>
                  <button onClick={() => setActiveImg(p => (p - 1 + car.gallery.length) % car.gallery.length)}
                    style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, background: "rgba(255,255,255,.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "border-color .3s" }}>
                    <ArrowLeft size={15} />
                  </button>
                  <button onClick={() => setActiveImg(p => (p + 1) % car.gallery.length)}
                    style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, background: "rgba(255,255,255,.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "border-color .3s" }}>
                    <ArrowRight size={15} />
                  </button>
                </>
              )}
              <div style={{ position: "absolute", top: 14, left: 14 }}><Badge variant="gold">{car.category}</Badge></div>
            </div>
            <div style={{ display: "flex", gap: ".6rem" }}>
              {car.gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  style={{ position: "relative", height: 72, flex: 1, overflow: "hidden", border: `2px solid ${activeImg === i ? "#c9a84c" : "rgba(255,255,255,.1)"}`, cursor: "pointer", background: "#111", transition: "border-color .3s" }}>
                  <Image src={img} alt={`View ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="100px" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info col */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .1 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <p className="font-condensed" style={{ color: "rgba(255,255,255,.35)", fontSize: ".72rem", letterSpacing: ".3em", textTransform: "uppercase", marginBottom: ".5rem" }}>{car.brand} · {car.year}</p>
              <h1 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", margin: "0 0 1.25rem", lineHeight: 1.1 }}>{car.model}</h1>
              <div style={{ height: 1, width: 100, background: "linear-gradient(90deg,#c9a84c,transparent)", marginBottom: "1.25rem" }} />
              <p style={{ color: "rgba(255,255,255,.48)", fontSize: ".9rem", lineHeight: 1.9, fontWeight: 300 }}>{car.description}</p>
            </div>

            {/* Quick stats */}
            <div style={{ display: "flex", gap: "1.5rem", padding: "1.25rem 0", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
              {[{ val: car.horsepower, unit: "HP" }, { val: car.topSpeed.replace(" mph", ""), unit: "Top Speed" }, { val: car.acceleration.split("s")[0] + "s", unit: "0–60 mph" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center", paddingLeft: i > 0 ? "1.5rem" : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                  <p className="font-condensed" style={{ fontSize: "1.5rem", fontWeight: 600, color: "#c9a84c", margin: 0 }}>{s.val}</p>
                  <p className="section-label" style={{ fontSize: ".58rem", marginTop: 3 }}>{s.unit}</p>
                </div>
              ))}
            </div>

            {/* Meta grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem" }}>
              {[{ l: "Color", v: car.color }, { l: "Drivetrain", v: car.drivetrain }, { l: "Mileage", v: car.mileage === 0 ? "Brand New" : car.mileage.toLocaleString() + " mi" }, { l: "Transmission", v: car.transmission.split(" ").slice(0, 2).join(" ") }].map(item => (
                <div key={item.l} style={{ padding: ".9rem 1rem", border: "1px solid rgba(255,255,255,.06)" }}>
                  <p className="font-condensed" style={{ color: "rgba(255,255,255,.28)", fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase", marginBottom: ".3rem" }}>{item.l}</p>
                  <p style={{ color: "#f0ede8", fontSize: ".85rem", margin: 0 }}>{item.v}</p>
                </div>
              ))}
            </div>

            {/* Price + CTAs */}
            <div className="glass-gold" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.25rem" }}>
                <div>
                  <p className="section-label" style={{ fontSize: ".58rem", marginBottom: ".25rem" }}>Listed Price</p>
                  <p className="font-display" style={{ fontSize: "2rem", color: "#c9a84c", margin: 0 }}>${car.price.toLocaleString()}</p>
                </div>
                <Badge variant="green" dot>{car.status === "available" ? "Available" : "Sold"}</Badge>
              </div>
              <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                <Link href="/booking" style={{ flex: 1, textDecoration: "none", minWidth: 130 }}>
                  <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }} className="btn-gold"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: ".85rem 1rem", fontSize: ".72rem", letterSpacing: ".1em" }}>
                    <span style={{ position: "relative", zIndex: 1 }}>Book Test Drive</span>
                  </motion.span>
                </Link>
                <Link href="/contact" style={{ flex: 1, textDecoration: "none", minWidth: 130 }}>
                  <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: .98 }} className="btn-outline-gold"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: ".85rem 1rem", fontSize: ".72rem", letterSpacing: ".1em" }}>
                    Enquire Now
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specs */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }} style={{ marginBottom: "4rem" }}>
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="font-display" style={{ fontSize: "2rem", color: "#fff", margin: ".5rem 0 2rem" }}>Performance Data</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: ".6rem" }}>
            <SpecRow icon={Zap} label="Engine" value={car.engine} />
            <SpecRow icon={Settings2} label="Transmission" value={car.transmission} />
            <SpecRow icon={Gauge} label="Top Speed" value={car.topSpeed} />
            <SpecRow icon={Timer} label="0–60 mph" value={car.acceleration} />
            <SpecRow icon={Zap} label="Horsepower" value={`${car.horsepower} HP`} />
            <SpecRow icon={Fuel} label="Torque" value={car.torque} />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }} style={{ marginBottom: "5rem" }}>
          <SectionLabel>Key Features</SectionLabel>
          <h2 className="font-display" style={{ fontSize: "2rem", color: "#fff", margin: ".5rem 0 2rem" }}>Standard Equipment</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: ".75rem 2rem" }}>
            {car.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: ".75rem" }}>
                <Check size={13} style={{ color: "#c9a84c", marginTop: 3, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".88rem", fontWeight: 300 }}>{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related */}
        {related.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ once: true }}>
            <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", marginBottom: "4rem" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <div>
                <SectionLabel>Similar Vehicles</SectionLabel>
                <h2 className="font-display" style={{ fontSize: "2rem", color: "#fff", margin: ".4rem 0 0" }}>You May Also Like</h2>
              </div>
              <Link href="/inventory" style={{ display: "flex", alignItems: "center", gap: ".5rem", color: "rgba(255,255,255,.35)", textDecoration: "none", fontFamily: "'Barlow Condensed',sans-serif", fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", transition: "color .3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.35)"}>
                All Vehicles <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
              {related.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
            </div>
          </motion.div>
        )}
      </div>
      <style>{`@media(max-width:900px){.detail-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}