"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/Button";
import { galleryImages } from "@/data/cars";
import { FaXmark, FaMagnifyingGlassPlus } from "react-icons/fa6";

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      {/* Header */}
      <section
        style={{
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "4rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,.04) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,#c9a84c,transparent)",
          }}
        />
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 3rem",
            position: "relative",
          }}
        >
          <SectionLabel>Visual Collection</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem,7vw,5rem)",
              color: "#fff",
              margin: ".5rem 0 1rem",
              lineHeight: 1,
            }}
          >
            The{" "}
            <span
              className="text-gold-gradient"
              style={{ fontStyle: "italic" }}
            >
              Gallery
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,.38)",
              fontWeight: 300,
              maxWidth: 480,
            }}
          >
            A curated visual journey through the world&apos;s most extraordinary
            performance automobiles.
          </motion.p>
        </div>
      </section>

      {/* Masonry grid */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gridAutoRows: 220,
              gap: 10,
            }}
          >
            {galleryImages.map((img, i) => {
              const colSpan = img.span.includes("col-span-2") ? 2 : 1;
              const rowSpan = img.span.includes("row-span-2") ? 2 : 1;
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  onClick={() => setSelected(img)}
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "#111",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform .7s ease",
                    }}
                    sizes="(max-width:768px)50vw,25vw"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  {/* Overlay */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(13,13,13,.75) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity .4s",
                    }}
                  />
                  <div
                    className="gallery-icon"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity .4s",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        border: "1px solid #c9a84c",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaMagnifyingGlassPlus
                        size={16}
                        style={{ color: "#c9a84c" }}
                      />
                    </div>
                  </div>
                  <div
                    className="gallery-label"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1rem",
                      transform: "translateY(100%)",
                      transition: "transform .4s",
                    }}
                  >
                    <p
                      className="font-condensed"
                      style={{
                        color: "#fff",
                        fontSize: ".65rem",
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: "rgba(5,5,5,.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: 40,
                height: 40,
                border: "1px solid rgba(255,255,255,.2)",
                background: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                zIndex: 1,
                transition: "border-color .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c9a84c";
                e.currentTarget.style.color = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,.2)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <FaXmark size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 1100,
                aspectRatio: "16/9",
              }}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </motion.div>
            <p
              className="font-condensed"
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,.4)",
                fontSize: ".68rem",
                letterSpacing: ".25em",
                textTransform: "uppercase",
              }}
            >
              {selected.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-overlay, .gallery-icon, .gallery-label { pointer-events: none; }
        div:hover > .gallery-overlay { opacity: 1 !important; }
        div:hover > .gallery-icon { opacity: 1 !important; }
        div:hover > .gallery-label { transform: translateY(0) !important; }
        @media(max-width:768px){
          .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}
