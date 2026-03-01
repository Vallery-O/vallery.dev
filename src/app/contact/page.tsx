"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const socials = [
  { label: "vallerynoh@gmail.com", href: "mailto:vallerynoh@gmail.com", icon: "✉" },
  { label: "GitHub", href: "https://github.com/Vallery-O", icon: "⌥" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vallery-otieno/", icon: "in" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div style={{ minHeight: "100vh", padding: "120px 3rem 6rem", maxWidth: 700, margin: "0 auto" }}>
      <SectionLabel>Contact</SectionLabel>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: "1rem" }}
      >
        Let&apos;s build<br />something <span style={{ color: "var(--accent)" }}>great</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "3rem", maxWidth: 480 }}
      >
        Whether you have a project in mind, want to collaborate, or just want to talk about software and design — my inbox is open.
      </motion.p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {[
          { label: "Your Name", type: "text", placeholder: "Jane Smith" },
          { label: "Email Address", type: "email", placeholder: "jane@example.com" },
        ].map((field, i) => (
          <motion.div key={field.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              required
              style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "0.85rem 1rem", fontFamily: "var(--font-dm)", fontSize: "0.9rem", color: "var(--text)", outline: "none", transition: "border-color 0.2s" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <label style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 500 }}>Message</label>
          <textarea
            placeholder="Tell me about your project or idea..."
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "0.85rem 1rem", fontFamily: "var(--font-dm)", fontSize: "0.9rem", color: "var(--text)", outline: "none", resize: "none", minHeight: 140, transition: "border-color 0.2s" }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <button
            type="submit"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em", background: "var(--accent)", color: "#080b0f", border: "1px solid var(--accent)", cursor: "none", transition: "all 0.2s" }}
          >
            Send Message →
          </button>
          {sent && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: "0.85rem", color: "var(--accent)", marginTop: "0.75rem" }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
        </motion.div>
      </form>

      {/* Social links */}
      <div style={{ marginTop: "3.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", cursor: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
          >
            <span style={{ fontSize: "0.9rem" }}>{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
