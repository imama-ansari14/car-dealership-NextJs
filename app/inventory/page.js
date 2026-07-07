"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarCard from "@/components/ui/CarCard";
import { SectionLabel } from "@/components/ui/Button";
import { cars, categories } from "@/data/cars";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let list = [...cars];
    if (activeCategory !== "All") list = list.filter(c => c.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c => c.brand.toLowerCase().includes(q) || c.model.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "hp-desc") list.sort((a, b) => b.horsepower - a.horsepower);
    return list;
  }, [activeCategory, search, sortBy]);

  const catBtnStyle = (active) => ({
    fontFamily: "'Barlow Condensed',sans-serif",
    fontSize: ".72rem", letterSpacing: ".2em", textTransform: "uppercase",
    padding: ".5rem 1.1rem",
    border: `1px solid ${active ? "#c9a84c" : "rgba(255,255,255,.1)"}`,
    background: active ? "rgba(201,168,76,.06)" : "transparent",
    color: active ? "#c9a84c" : "rgba(255,255,255,.4)",
    cursor: "pointer", transition: "all .3s",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      
      {/* HERO SECTION */}
      <div style={{ position: "relative", paddingTop: "10rem", paddingBottom: "4rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem", position: "relative" }}>
          <SectionLabel>Our Collection</SectionLabel>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}
            className="font-display" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", color: "#fff", margin: ".5rem 0 1rem", lineHeight: 1 }}>
            Vehicle <span className="text-gold-gradient" style={{ fontStyle: "italic" }}>Inventory</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}
            style={{ color: "rgba(255,255,255,.38)", fontWeight: 300, maxWidth: 500 }}>
            {cars.length} extraordinary vehicles available for immediate delivery or private order.
          </motion.p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(13,13,13,.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.05)", padding: "1.1rem 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", flex: 1 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={catBtnStyle(activeCategory === cat)}>{cat}</button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <div style={{ position: "relative" }}>
              <FaMagnifyingGlass size={13} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,.3)" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search model, brand..." className="input-luxury"
                style={{ paddingLeft: "2.25rem", paddingRight: search ? "2rem" : "1rem", paddingTop: ".6rem", paddingBottom: ".6rem", fontSize: ".82rem", width: 220 }} />
              {search && (
                <button onClick={() => setSearch("")} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,.3)" }}>
                  <FaXmark size={12} />
                </button>
              )}
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="input-luxury"
              style={{ padding: ".6rem 1rem", fontSize: ".78rem", fontFamily: "'Barlow Condensed',sans-serif", cursor: "pointer", width: "auto" }}>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low–High</option>
              <option value="price-desc">Price: High–Low</option>
              <option value="hp-desc">Horsepower</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "3rem 3rem 6rem" }}>
        <p style={{ color: "rgba(255,255,255,.28)", fontSize: ".78rem", fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: ".15em", marginBottom: "2rem" }}>
          Showing <span style={{ color: "#c9a84c" }}>{filtered.length}</span> vehicle{filtered.length !== 1 ? "s" : ""}
        </p>
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div key={activeCategory + search + sortBy} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
              {filtered.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "6rem 0" }}>
              <p className="font-display" style={{ fontSize: "2rem", color: "rgba(255,255,255,.15)", marginBottom: "1rem" }}>No vehicles found</p>
              <p style={{ color: "rgba(255,255,255,.3)", fontSize: ".9rem" }}>Try adjusting your search or filters</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
