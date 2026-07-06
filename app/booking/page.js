"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/Button";
import { cars } from "@/data/cars";
import {
  FaCheck,
  FaChevronRight,
  FaChevronLeft,
  FaRegCalendarDays,
  FaCarSide,
  FaRegUser,
} from "react-icons/fa6";

const STEPS = ["Select Vehicle", "Your Details", "Schedule", "Confirm"];
const TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const inp = {
  padding: ".8rem 1rem",
  fontSize: ".88rem",
  borderRadius: 0,
  width: "100%",
  display: "block",
};

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    car: "",
    name: "",
    email: "",
    phone: "",
    experience: "first",
    date: "",
    time: "",
    notes: "",
  });

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const selectedCar = cars.find((c) => c.id === form.car);

  const confirm = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmit(true);
    setLoading(false);
  };

  const today = new Date().toISOString().split("T")[0];

  /* ── Success screen ── */
  if (submitted)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0d0d0d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: "center", maxWidth: 520 }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              border: "2px solid #c9a84c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2rem",
            }}
          >
            <FaCheck size={30} style={{ color: "#c9a84c" }} />
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "2.5rem", color: "#fff", marginBottom: "1rem" }}
          >
            Booking Confirmed
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.45)",
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            Your test drive has been scheduled. A specialist will confirm your
            appointment within 30 minutes.
          </p>
          {selectedCar && (
            <p
              className="section-label"
              style={{ fontSize: ".65rem", marginBottom: "2.5rem" }}
            >
              {selectedCar.brand} {selectedCar.model} &nbsp;·&nbsp; {form.date}{" "}
              at {form.time}
            </p>
          )}
          <a href="/inventory" style={{ textDecoration: "none" }}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="btn-gold"
              style={{
                padding: "1rem 2.5rem",
                fontSize: ".8rem",
                letterSpacing: ".12em",
                display: "inline-block",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                Explore More Vehicles
              </span>
            </motion.span>
          </a>
        </motion.div>
      </div>
    );

  /* ── Step indicator ── */
  const StepBar = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        marginBottom: "3.5rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          top: 16,
          height: 1,
          background: "rgba(255,255,255,.06)",
          zIndex: 0,
        }}
      />
      {STEPS.map((s, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".5rem",
            flex: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${
                i < step
                  ? "#c9a84c"
                  : i === step
                  ? "#c9a84c"
                  : "rgba(255,255,255,.12)"
              }`,
              background: i < step ? "#c9a84c" : "#0d0d0d",
              color:
                i < step
                  ? "#0d0d0d"
                  : i === step
                  ? "#c9a84c"
                  : "rgba(255,255,255,.25)",
              fontSize: ".72rem",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 600,
              transition: "all .3s",
            }}
          >
            {i < step ? <FaCheck size={13} /> : i + 1}
          </div>
          <span
            className="font-condensed"
            style={{
              fontSize: ".62rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: i === step ? "#c9a84c" : "rgba(255,255,255,.22)",
            }}
          >
            {s}
          </span>
        </div>
      ))}
    </div>
  );

  const GoldBtn = ({ children, onClick, disabled }) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className="btn-gold"
      style={{
        padding: ".9rem 2rem",
        fontSize: ".78rem",
        letterSpacing: ".12em",
        display: "inline-flex",
        alignItems: "center",
        gap: ".6rem",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.button>
  );

  const OutBtn = ({ children, onClick }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="btn-outline-gold"
      style={{
        padding: ".9rem 1.5rem",
        fontSize: ".78rem",
        letterSpacing: ".12em",
        display: "inline-flex",
        alignItems: "center",
        gap: ".5rem",
        cursor: "pointer",
        background: "none",
      }}
    >
      {children}
    </motion.button>
  );

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
              "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,.04) 0%, transparent 70%)",
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
          <SectionLabel>Private Experience</SectionLabel>
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
            Book a{" "}
            <span
              className="text-gold-gradient"
              style={{ fontStyle: "italic" }}
            >
              Test Drive
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: "rgba(255,255,255,.38)",
              fontWeight: 300,
              maxWidth: 440,
            }}
          >
            Experience the world&apos;s finest automobiles firsthand. Our
            specialists handle every detail.
          </motion.p>
        </div>
      </section>

      {/* Booking wizard */}
      <section style={{ padding: "4rem 0 7rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 3rem" }}>
          <StepBar />

          <AnimatePresence mode="wait">
            {/* ── Step 0: Choose car ── */}
            {step === 0 && (
              <motion.div
                key="s0"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.9rem",
                    color: "#fff",
                    marginBottom: ".5rem",
                  }}
                >
                  Choose Your Vehicle
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontWeight: 300,
                    fontSize: ".9rem",
                    marginBottom: "2rem",
                  }}
                >
                  Select the vehicle you&apos;d like to experience on the road.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  {cars.map((car) => (
                    <button
                      key={car.id}
                      onClick={() => set("car", car.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        background: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        border: `1px solid ${
                          form.car === car.id
                            ? "#c9a84c"
                            : "rgba(255,255,255,.08)"
                        }`,
                        background:
                          form.car === car.id
                            ? "rgba(201,168,76,.04)"
                            : "transparent",
                        transition: "all .3s",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: 90,
                          height: 60,
                          flexShrink: 0,
                          overflow: "hidden",
                          background: "#111",
                        }}
                      >
                        <Image
                          src={car.image}
                          alt={car.model}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="90px"
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          className="font-condensed"
                          style={{
                            color: "rgba(255,255,255,.35)",
                            fontSize: ".62rem",
                            letterSpacing: ".2em",
                            textTransform: "uppercase",
                            marginBottom: ".2rem",
                          }}
                        >
                          {car.brand}
                        </p>
                        <p
                          style={{
                            color: "#fff",
                            fontSize: ".95rem",
                            fontWeight: 400,
                            margin: "0 0 .2rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {car.model}
                        </p>
                        <p
                          className="font-condensed"
                          style={{
                            color: "#c9a84c",
                            fontSize: ".78rem",
                            margin: 0,
                          }}
                        >
                          ${car.price.toLocaleString()}
                        </p>
                      </div>
                      {form.car === car.id && (
                        <FaCheck
                          size={14}
                          style={{ color: "#c9a84c", flexShrink: 0 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <GoldBtn onClick={next} disabled={!form.car}>
                  Continue{" "}
                  <FaChevronRight
                    size={14}
                    style={{ position: "relative", zIndex: 1 }}
                  />
                </GoldBtn>
              </motion.div>
            )}

            {/* ── Step 1: Details ── */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.9rem",
                    color: "#fff",
                    marginBottom: ".5rem",
                  }}
                >
                  Your Details
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontWeight: 300,
                    fontSize: ".9rem",
                    marginBottom: "2rem",
                  }}
                >
                  Please provide your contact information so we can reach you.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    {
                      k: "name",
                      label: "Full Name *",
                      type: "text",
                      ph: "James Harrington",
                    },
                    {
                      k: "email",
                      label: "Email Address *",
                      type: "email",
                      ph: "james@example.com",
                    },
                    {
                      k: "phone",
                      label: "Phone Number *",
                      type: "tel",
                      ph: "+1 (310) 555-0000",
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
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.k]}
                        onChange={(e) => set(f.k, e.target.value)}
                        required
                        placeholder={f.ph}
                        className="input-luxury"
                        style={inp}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      className="section-label"
                      style={{
                        display: "block",
                        fontSize: ".58rem",
                        marginBottom: ".5rem",
                      }}
                    >
                      Experience Level
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => set("experience", e.target.value)}
                      className="input-luxury"
                      style={{ ...inp, cursor: "pointer" }}
                    >
                      <option value="first">First time with this brand</option>
                      <option value="familiar">Familiar with the model</option>
                      <option value="owner">Current owner / upgrading</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: "2.5rem" }}>
                  <label
                    className="section-label"
                    style={{
                      display: "block",
                      fontSize: ".58rem",
                      marginBottom: ".5rem",
                    }}
                  >
                    Additional Notes
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    rows={3}
                    placeholder="Any specific requirements, questions, or preferences..."
                    className="input-luxury"
                    style={{ ...inp, resize: "none" }}
                  />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <OutBtn onClick={prev}>
                    <FaChevronLeft size={13} /> Back
                  </OutBtn>
                  <GoldBtn
                    onClick={next}
                    disabled={!form.name || !form.email || !form.phone}
                  >
                    Continue{" "}
                    <FaChevronRight
                      size={14}
                      style={{ position: "relative", zIndex: 1 }}
                    />
                  </GoldBtn>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Schedule ── */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.9rem",
                    color: "#fff",
                    marginBottom: ".5rem",
                  }}
                >
                  Schedule Your Drive
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontWeight: 300,
                    fontSize: ".9rem",
                    marginBottom: "2rem",
                  }}
                >
                  Choose your preferred date and time slot.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2.5rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <div>
                    <label
                      className="section-label"
                      style={{
                        display: "block",
                        fontSize: ".58rem",
                        marginBottom: ".75rem",
                      }}
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      min={today}
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
                        marginBottom: ".75rem",
                      }}
                    >
                      Preferred Time *
                    </label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: ".5rem",
                      }}
                    >
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          onClick={() => set("time", t)}
                          style={{
                            padding: ".55rem .4rem",
                            fontSize: ".68rem",
                            fontFamily: "'Barlow Condensed',sans-serif",
                            letterSpacing: ".08em",
                            cursor: "pointer",
                            background:
                              form.time === t
                                ? "rgba(201,168,76,.06)"
                                : "transparent",
                            border: `1px solid ${
                              form.time === t
                                ? "#c9a84c"
                                : "rgba(255,255,255,.1)"
                            }`,
                            color:
                              form.time === t
                                ? "#c9a84c"
                                : "rgba(255,255,255,.4)",
                            transition: "all .2s",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <OutBtn onClick={prev}>
                    <FaChevronLeft size={13} /> Back
                  </OutBtn>
                  <GoldBtn onClick={next} disabled={!form.date || !form.time}>
                    Review Booking{" "}
                    <FaChevronRight
                      size={14}
                      style={{ position: "relative", zIndex: 1 }}
                    />
                  </GoldBtn>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Confirm ── */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.9rem",
                    color: "#fff",
                    marginBottom: ".5rem",
                  }}
                >
                  Confirm Your Booking
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.38)",
                    fontWeight: 300,
                    fontSize: ".9rem",
                    marginBottom: "2rem",
                  }}
                >
                  Please review your details before confirming.
                </p>

                <div
                  className="glass-gold"
                  style={{ padding: "2rem", marginBottom: "1.5rem" }}
                >
                  {/* Car summary */}
                  {selectedCar && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        paddingBottom: "1.5rem",
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid rgba(201,168,76,.15)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: 100,
                          height: 68,
                          flexShrink: 0,
                          overflow: "hidden",
                          background: "#111",
                        }}
                      >
                        <Image
                          src={selectedCar.image}
                          alt={selectedCar.model}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="100px"
                        />
                      </div>
                      <div>
                        <p
                          className="font-condensed"
                          style={{
                            color: "rgba(255,255,255,.35)",
                            fontSize: ".62rem",
                            letterSpacing: ".2em",
                            textTransform: "uppercase",
                            marginBottom: ".3rem",
                          }}
                        >
                          {selectedCar.brand}
                        </p>
                        <p
                          className="font-display"
                          style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            margin: "0 0 .25rem",
                          }}
                        >
                          {selectedCar.model}
                        </p>
                        <p
                          className="font-condensed"
                          style={{
                            color: "#c9a84c",
                            fontSize: ".85rem",
                            margin: 0,
                          }}
                        >
                          ${selectedCar.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Summary grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    {[
                      { icon: FaRegUser, label: "Name", value: form.name },
                      {
                        icon: FaRegCalendarDays,
                        label: "Date",
                        value: form.date,
                      },
                      { icon:  FaCarSide, label: "Time", value: form.time },
                      { icon: FaRegUser, label: "Email", value: form.email },
                    ].map((item, i) => (
                      <div key={i}>
                        <p
                          className="section-label"
                          style={{ fontSize: ".56rem", marginBottom: ".3rem" }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            color: "rgba(255,255,255,.7)",
                            fontSize: ".88rem",
                            fontWeight: 300,
                            margin: 0,
                            wordBreak: "break-all",
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  style={{
                    color: "rgba(255,255,255,.28)",
                    fontSize: ".8rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  By confirming, you agree to our terms of service. A specialist
                  will contact you within 30 minutes to confirm your appointment
                  details.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <OutBtn onClick={prev}>
                    <FaChevronLeft size={13} /> Back
                  </OutBtn>
                  <GoldBtn onClick={confirm} disabled={loading}>
                    {loading ? "Confirming..." : "Confirm Booking"}{" "}
                    {!loading && (
                      <FaCheck
                        size={13}
                        style={{ position: "relative", zIndex: 1 }}
                      />
                    )}
                  </GoldBtn>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        @media(max-width:640px){
          .booking-car-grid { grid-template-columns: 1fr !important; }
          .booking-schedule-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
