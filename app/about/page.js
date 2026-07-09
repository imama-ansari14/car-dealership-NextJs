"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/Button";
import { FaAward, FaShieldHalved, FaUsers, FaGlobe, FaXmark } from "react-icons/fa6";

const VALUES = [
  {
    icon: FaAward,
    title: "Uncompromising Excellence",
    desc: "Every vehicle in our collection meets the most rigorous standards of quality, provenance, and mechanical integrity.",
  },
  {
    icon: FaShieldHalved,
    title: "Complete Transparency",
    desc: "Full vehicle history, independent inspections, and complete documentation provided on every acquisition.",
  },
  {
    icon: FaUsers,
    title: "Personal Concierge",
    desc: "A dedicated specialist guides each client from initial enquiry through white-glove delivery and beyond.",
  },
  {
    icon: FaGlobe,
    title: "Global Reach",
    desc: "With clients in 34 countries, we source and deliver extraordinary vehicles to anywhere in the world.",
  },
];

const TEAM = [
  {
    initials: "JH",
    name: "James Harrington",
    title: "Founder & CEO",
    note: "18 years in luxury automotive",
  },
  {
    initials: "SL",
    name: "Sophie Laurent",
    title: "Head of Acquisitions",
    note: "12 years sourcing rare vehicles",
  },
  {
    initials: "RM",
    name: "Rafael Monteiro",
    title: "Chief Technician",
    note: "Ferrari & Lamborghini specialist",
  },
  {
    initials: "NC",
    name: "Naomi Chen",
    title: "Client Relations Director",
    note: "10 years luxury concierge",
  },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "58vh",
          minHeight: 480,
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1920&q=85"
          alt="Apex Motors Showroom"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,.75) 55%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0d0d0d 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "4rem",
            zIndex: 2,
          }}
        >
          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "0 3rem",
              width: "100%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem,6vw,4.5rem)",
                  color: "#fff",
                  margin: ".5rem 0 0",
                  lineHeight: 1,
                }}
              >
                About{" "}
                <span
                  className="text-gold-gradient"
                  style={{ fontStyle: "italic" }}
                >
                  Apex Motors
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "7rem 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionLabel>Est. 2006</SectionLabel>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                  color: "#fff",
                  lineHeight: 1.25,
                  margin: ".5rem 0 1.75rem",
                }}
              >
                Two Decades of{" "}
                <span
                  className="text-gold-gradient"
                  style={{ fontStyle: "italic" }}
                >
                  Automotive Passion
                </span>
              </h2>
              {[
                "Founded in Beverly Hills in 2006, Apex Motors was born from a singular obsession: making the world's most extraordinary automobiles accessible to those who truly appreciate them.",
                "Our founder James Harrington spent fifteen years racing and collecting before establishing Apex Motors with a clear vision — to create a dealership that operates with the passion of a collector and the professionalism of a global institution.",
                "Today, with a team of twenty specialists and clients spanning thirty-four countries, we remain committed to the principle that every vehicle transaction should be as extraordinary as the car itself.",
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "rgba(255,255,255,.48)",
                    fontSize: ".95rem",
                    lineHeight: 1.9,
                    fontWeight: 300,
                    marginBottom: "1.1rem",
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  background: "#111",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800&q=85"
                  alt="Classic luxury car"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(13,13,13,.3), transparent)",
                  }}
                />
              </div>
              <div
                className="glass-gold"
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  padding: "1.5rem 2rem",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "2.5rem",
                    color: "#c9a84c",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  18+
                </p>
                <p
                  className="section-label"
                  style={{ fontSize: ".6rem", marginTop: 4 }}
                >
                  Years of Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: "6rem 0",
          background: "#080808",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,#c9a84c,transparent)",
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
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabel center>Our Values</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                color: "#fff",
                margin: ".5rem 0 0",
              }}
            >
              What Sets Us{" "}
              <span
                className="text-gold-gradient"
                style={{ fontStyle: "italic" }}
              >
                Apart
              </span>
            </motion.h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "1.25rem",
            }}
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: "2.25rem",
                  border: "1px solid rgba(255,255,255,.06)",
                  transition: "border-color .4s,background .4s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,.2)";
                  e.currentTarget.style.background = "rgba(201,168,76,.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.06)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(201,168,76,.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "border-color .3s",
                  }}
                >
                  <v.icon size={18} style={{ color: "#c9a84c" }} />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    color: "#fff",
                    marginBottom: ".75rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontSize: ".85rem",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "7rem 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <SectionLabel center>The Team</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                color: "#fff",
                margin: ".5rem 0 0",
              }}
            >
              Specialists of{" "}
              <span
                className="text-gold-gradient"
                style={{ fontStyle: "italic" }}
              >
                Distinction
              </span>
            </motion.h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "1.25rem",
            }}
          >
            {TEAM.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: "2.25rem",
                  border: "1px solid rgba(255,255,255,.06)",
                  transition: "border-color .4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(201,168,76,.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,.06)")
                }
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: "linear-gradient(135deg,#a07830,#c9a84c)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    className="font-condensed"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0d0d0d",
                      letterSpacing: ".05em",
                    }}
                  >
                    {m.initials}
                  </span>
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    color: "#fff",
                    marginBottom: ".35rem",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  className="section-label"
                  style={{ fontSize: ".6rem", marginBottom: ".75rem" }}
                >
                  {m.title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,.32)",
                    fontSize: ".82rem",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {m.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 0",
          background: "#080808",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
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
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Ready to Begin Your Journey?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.38)",
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              Contact our concierge team for a private consultation.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Link href="/inventory" style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold"
                  style={{
                    padding: "1rem 2.25rem",
                    fontSize: ".8rem",
                    letterSpacing: ".12em",
                    display: "inline-block",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    View Collection
                  </span>
                </motion.span>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline-gold"
                  style={{
                    padding: "1rem 2.25rem",
                    fontSize: ".8rem",
                    letterSpacing: ".12em",
                    display: "inline-block",
                  }}
                >
                  Contact Us
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
