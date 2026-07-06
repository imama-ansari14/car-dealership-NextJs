"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Desktop / Mobile header bar ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background .5s ease, padding .5s ease, border-color .5s ease",
          background: scrolled ? "rgba(13,13,13,.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,.05)"
            : "1px solid transparent",
          padding: scrolled ? "1rem 0" : "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <span
              className="section-label"
              style={{ fontSize: ".6rem", marginBottom: 2 }}
            >
              Established 2006
            </span>
            <span
              className="font-display"
              style={{
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: ".05em",
                transition: "color .3s",
              }}
            >
              APEX MOTORS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover-underline font-condensed"
                style={{
                  fontSize: ".78rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color:
                    pathname === href ? "#c9a84c" : "rgba(255,255,255,.65)",
                  textDecoration: "none",
                  transition: "color .3s",
                }}
              >
                {label}
              </Link>
            ))}
            <Link href="/booking">
              <span
                className="btn-gold"
                style={{
                  padding: ".6rem 1.5rem",
                  fontSize: ".72rem",
                  letterSpacing: ".12em",
                  borderRadius: 0,
                }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>
                  Book Test Drive
                </span>
              </span>
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              padding: 4,
              display: "none",
            }}
          >
            {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(13,13,13,.98)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* top bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <span
                className="font-display"
                style={{ fontSize: "1.3rem", color: "#fff" }}
              >
                APEX MOTORS
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,.6)",
                }}
              >
                <FaXmark size={24} />
              </button>
            </div>
            {/* links */}
            <nav
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 2rem",
                gap: ".5rem",
              }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={href}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      padding: ".9rem 0",
                      borderBottom: "1px solid rgba(255,255,255,.05)",
                      color:
                        pathname === href ? "#c9a84c" : "rgba(255,255,255,.75)",
                      fontSize: "2rem",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 + 0.1 }}
                style={{ marginTop: "2rem" }}
              >
                <Link href="/booking">
                  <span
                    className="btn-gold"
                    style={{
                      padding: ".9rem 2rem",
                      fontSize: ".8rem",
                      letterSpacing: ".12em",
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      Book Test Drive
                    </span>
                  </span>
                </Link>
              </motion.div>
            </nav>
            <div
              className="font-condensed"
              style={{
                padding: "2rem",
                fontSize: ".7rem",
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
              }}
            >
              +1 (310) 555-0192 · Beverly Hills, CA
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
