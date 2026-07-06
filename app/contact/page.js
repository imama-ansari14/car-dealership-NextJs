"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/Button";
import {
  FaPhone,
  FaEnvelope,
  FaMapPin,
  FaRegClock,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa6";

const INFO = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (310) 555-0192",
    href: "tel:+13105550192",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "concierge@apexmotors.com",
    href: "mailto:concierge@apexmotors.com",
  },
  {
    icon: FaMapPin,
    label: "Address",
    value: "9200 Wilshire Blvd, Beverly Hills, CA 90210",
    href: null,
  },
  {
    icon: FaRegClock,
    label: "Hours",
    value: "Mon–Sat 9AM–7PM · Sun by Appt",
    href: null,
  },
];

const SUBJECTS = [
  "Vehicle Purchase Enquiry",
  "Book a Test Drive",
  "Vehicle Valuation",
  "Consignment",
  "Other",
];

const inp = {
  padding: ".8rem 1rem",
  fontSize: ".88rem",
  borderRadius: 0,
  width: "100%",
  display: "block",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      {/* Header */}
      <section
        style={{
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "4rem",
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
          <SectionLabel>Get in Touch</SectionLabel>
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
            Contact{" "}
            <span
              className="text-gold-gradient"
              style={{ fontStyle: "italic" }}
            >
              Concierge
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
            Our specialists are available to assist with enquiries, private
            viewings, and acquisitions.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: "4rem 0 7rem" }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
          }}
        >
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "1.6rem",
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              Our Details
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {INFO.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      border: "1px solid rgba(201,168,76,.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={13} style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <p
                      className="section-label"
                      style={{ fontSize: ".58rem", marginBottom: ".3rem" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "rgba(255,255,255,.6)",
                          fontSize: ".88rem",
                          fontWeight: 300,
                          textDecoration: "none",
                          transition: "color .3s",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: "rgba(255,255,255,.6)",
                          fontSize: ".88rem",
                          fontWeight: 300,
                          margin: 0,
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                height: 1,
                background: "linear-gradient(90deg,#c9a84c,transparent)",
                marginBottom: "1.75rem",
              }}
            />
            <div className="glass-gold" style={{ padding: "1.5rem" }}>
              <p
                className="section-label"
                style={{ fontSize: ".58rem", marginBottom: ".75rem" }}
              >
                Private Showroom
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,.45)",
                  fontSize: ".85rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                We offer exclusive after-hours viewings for serious enquiries.
                Contact us to arrange a private appointment.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  minHeight: 520,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(201,168,76,.18)",
                  background: "rgba(201,168,76,.03)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      border: "2px solid #c9a84c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.75rem",
                    }}
                  >
                    <FaCheck size={24} style={{ color: "#c9a84c" }} />
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      marginBottom: ".75rem",
                    }}
                  >
                    Message Received
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,.45)",
                      fontWeight: 300,
                      maxWidth: 320,
                      margin: "0 auto",
                    }}
                  >
                    Thank you for contacting Apex Motors. A specialist will
                    respond within 2 business hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    {
                      k: "name",
                      label: "Full Name",
                      type: "text",
                      ph: "James Harrington",
                    },
                    {
                      k: "email",
                      label: "Email Address",
                      type: "email",
                      ph: "james@example.com",
                    },
                  ].map((f) => (
                    <div key={f.k}>
                      <label
                        className="section-label"
                        style={{
                          display: "block",
                          fontSize: ".58rem",
                          marginBottom: ".5rem",
                        }}
                      >
                        {f.label} *
                      </label>
                      <input
                        type={f.type}
                        value={form[f.k]}
                        onChange={set(f.k)}
                        required
                        placeholder={f.ph}
                        className="input-luxury"
                        style={inp}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <label
                      className="section-label"
                      style={{
                        display: "block",
                        fontSize: ".58rem",
                        marginBottom: ".5rem",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+1 (310) 555-0000"
                      className="input-luxury"
                      style={inp}
                    />
                  </div>
                  <div>
                    <label
                      className="section-label"
                      style={{
                        display: "block",
                        fontSize: ".58rem",
                        marginBottom: ".5rem",
                      }}
                    >
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={set("subject")}
                      className="input-luxury"
                      style={{ ...inp, cursor: "pointer" }}
                    >
                      <option value="">Select a topic</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    className="section-label"
                    style={{
                      display: "block",
                      fontSize: ".58rem",
                      marginBottom: ".5rem",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    required
                    rows={6}
                    placeholder="Please describe your enquiry in detail, including any specific vehicles of interest..."
                    className="input-luxury"
                    style={{ ...inp, resize: "none" }}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="btn-gold"
                  style={{
                    padding: "1rem 2rem",
                    fontSize: ".78rem",
                    letterSpacing: ".12em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".75rem",
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "none",
                  }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <FaPaperPlane size={13} style={{ position: "relative", zIndex: 1 }} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <style>{`@media(max-width:900px){section > div[style*="grid-template-columns:1fr 2fr"]{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
