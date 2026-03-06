"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

type Status = "idle" | "sending" | "success" | "error";

const socials = [
  { label: "vallerynoh@gmail.com", href: "mailto:vallerynoh@gmail.com", icon: "✉" },
  { label: "GitHub", href: "https://github.com/Vallery-O", icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com/in/vallery-otieno", icon: "in" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Something went wrong.");

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputStyle = {
    background: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 10, padding: "0.85rem 1rem",
    fontFamily: "var(--font-dm)", fontSize: "0.9rem",
    color: "var(--text)", outline: "none", width: "100%",
    transition: "border-color 0.2s",
  };

  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = "rgba(0,212,255,0.4)");
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.target.style.borderColor = "var(--border)");

  return (
    <div style={{ minHeight: "100vh", padding: "120px 3rem 6rem", maxWidth: 700, margin: "0 auto" }}>
      <SectionLabel>Contact</SectionLabel>

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: "1rem" }}
      >
        Let&apos;s build<br />something <span style={{ color: "var(--accent)" }}>great</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
        style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: 480 }}
      >
        Whether you have a project in mind, want to collaborate, or just want to talk about software and design — my inbox is open.
      </motion.p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
            Your Name
          </label>
          <input name="name" type="text" placeholder="Jane Doe" required style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
        </div>

        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
            Email Address
          </label>
          <input name="email" type="email" placeholder="jane@example.com" required style={inputStyle} onFocus={focusIn} onBlur={focusOut} />
        </div>

        {/* Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>
            Message
          </label>
          <textarea name="message" placeholder="Tell me about your project or idea..." required
            style={{ ...inputStyle, resize: "none", minHeight: 140 }}
            onFocus={focusIn} onBlur={focusOut}
          />
        </div>

        {/* Submit */}
        <div>
          <button type="submit" disabled={status === "sending"}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.75rem 1.75rem", borderRadius: 8,
              fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em",
              background: status === "sending" ? "var(--surface2)" : "var(--accent)",
              color: status === "sending" ? "var(--text-muted)" : "#080b0f",
              border: "none", cursor: status === "sending" ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
          >
            {status === "sending" ? "Sending…" : "Send Message →"}
          </button>

          {/* Success */}
          {status === "success" && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: "0.85rem", color: "var(--accent)", marginTop: "0.75rem" }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}

          {/* Error */}
          {status === "error" && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: "0.85rem", color: "#ff6b6b", marginTop: "0.75rem" }}>
              ✕ {error}
            </motion.p>
          )}
        </div>
      </form>

      {/* Social links */}
      <div style={{ marginTop: "3.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
          >
            <span>{s.icon}</span>{s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
