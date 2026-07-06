"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { FiPhone, FiMail, FiMapPin} from "react-icons/fi";

const VEHICLE_LINKS = [
  { label: "All Inventory", href: "/inventory" },
  { label: "Hypercars", href: "/inventory?category=Hypercar" },
  { label: "Super Sports", href: "/inventory?category=Super+Sports" },
  { label: "Grand Tourers", href: "/inventory?category=Grand+Tourer" },
  { label: "Track GT", href: "/inventory?category=Track+GT" },
];

const COMPANY_LINKS = [
  { label: "About Apex", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Test Drive", href: "/booking" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
  { Icon: FaXTwitter, href: "#", label: "Twitter" },
];

const s = {
  root: { background: "#080808", borderTop: "1px solid rgba(255,255,255,.05)" },
  inner: { maxWidth: 1400, margin: "0 auto", padding: "5rem 3rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "3rem",
  },
  colHead: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 500,
    letterSpacing: ".3em",
    textTransform: "uppercase",
    fontSize: ".68rem",
    color: "#c9a84c",
    marginBottom: "1.5rem",
  },
  link: {
    display: "block",
    color: "rgba(255,255,255,.38)",
    fontSize: ".85rem",
    fontWeight: 300,
    textDecoration: "none",
    marginBottom: ".75rem",
    transition: "color .3s",
  },
  muted: {
    color: "rgba(255,255,255,.38)",
    fontSize: ".85rem",
    fontWeight: 300,
    marginBottom: ".5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: ".75rem",
  },
  bar: {
    borderTop: "1px solid rgba(255,255,255,.05)",
    padding: "1.5rem 3rem",
    maxWidth: 1400,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  small: {
    color: "rgba(255,255,255,.22)",
    fontSize: ".72rem",
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: ".2em",
    textTransform: "uppercase",
  },
};

export default function Footer() {
  return (
    <footer style={s.root}>
      <div style={s.inner}>
        <div style={s.grid}>
          {/* Brand */}
          <div>
            <span
              className="section-label"
              style={{ display: "block", marginBottom: 4 }}
            >
              Est. 2006
            </span>
            <span
              className="font-display"
              style={{
                fontSize: "1.3rem",
                color: "#fff",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              APEX MOTORS
            </span>
            <p
              style={{
                color: "rgba(255,255,255,.35)",
                fontSize: ".82rem",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: 220,
                marginBottom: "1.5rem",
              }}
            >
              The world&apos;s most exclusive luxury sports car dealership,
              curating extraordinary automotive experiences since 2006.
            </p>
            <div style={{ display: "flex", gap: ".75rem" }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,.35)",
                    transition: "all .3s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#c9a84c";
                    e.currentTarget.style.color = "#c9a84c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,.35)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Vehicles */}
          <div>
            <p style={s.colHead}>Vehicles</p>
            {VEHICLE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={s.link}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p style={s.colHead}>Company</p>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={s.link}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={s.colHead}>Contact</p>
            <div style={s.muted}>
              <FiMapPin
                size={13}
                style={{ color: "#c9a84c", marginTop: 2, flexShrink: 0 }}
              />
              <span>
                9200 Wilshire Blvd
                <br />
                Beverly Hills, CA 90210
              </span>
            </div>
            <div style={s.muted}>
              <FiPhone size={13} style={{ color: "#c9a84c", flexShrink: 0 }} />
              <a
                href="tel:+13105550192"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +1 (310) 555-0192
              </a>
            </div>
            <div style={s.muted}>
              <FiMail size={13} style={{ color: "#c9a84c", flexShrink: 0 }} />
              <a
                href="mailto:concierge@apexmotors.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                concierge@apexmotors.com
              </a>
            </div>
            <div style={{ ...s.muted, marginTop: "1rem", display: "block" }}>
              <p style={s.colHead}>Hours</p>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".82rem" }}>
                Mon–Sat: 9 AM – 7 PM
              </p>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: ".82rem" }}>
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={s.bar}>
        <span style={s.small}>
          © {new Date().getFullYear()} Apex Motors. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
            <Link
              key={t}
              href="#"
              style={{
                ...s.small,
                textDecoration: "none",
                transition: "color .3s",
              }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
