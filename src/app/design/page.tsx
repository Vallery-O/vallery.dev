"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import { caseStudies, CaseStudy } from "@/lib/caseStudies";
import Image from "next/image";

function CaseStudyModal({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
  return (
    <AnimatePresence>
      <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "stretch" }}>
        {/* Blur backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: "fixed", inset: 0, background: "rgba(8,11,15,0.88)", backdropFilter: "blur(14px)", zIndex: 2001 }}
        />

        {/* Full-height panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative", zIndex: 2002,
            width: "min(1400px, 95vw)", margin: "40px auto",
            background: "var(--bg2)", border: "1px solid rgba(0,212,255,0.15)",
            borderRadius: 24, overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}
        >
          {/* Close bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.5rem", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", color: "var(--text)" }}>{cs.title}</span>
            <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-muted)", cursor: "none" }}>✕</button>
          </div>

          {/* Framer iframe */}
          <iframe
            src={cs.framerUrl}
            style={{ width: "100%", flex: 1, minHeight: "80vh", border: "none" }}
            title={cs.title}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function DesignPage() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <>
      {/* Modal */}
      {selected && <CaseStudyModal cs={selected} onClose={() => setSelected(null)} />}

      {/* Header */}
      <div style={{ paddingTop: 120, paddingBottom: "3rem", maxWidth: 1100, margin: "0 auto", padding: "120px 3rem 3rem" }}>
        <SectionLabel>Design</SectionLabel>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text)", marginBottom: "1rem" }}>
          UX/UI Case Studies
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", maxWidth: 500, lineHeight: 1.7 }}>
          Research-grounded, systems-thinking design. Select a case study to read the full story.
        </p>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 3rem 6rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {caseStudies.map((cs, i) => (
          <RevealOnScroll key={cs.id} delay={i * 0.1}>
            <div
              onClick={() => setSelected(cs)}
              data-hover
              style={{ position: "relative", borderRadius: 20, overflow: "hidden", cursor: "none", border: "1px solid var(--border)", background: "var(--surface)", transition: "border-color 0.4s, box-shadow 0.4s, transform 0.4s" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(0,212,255,0.3)"; el.style.boxShadow = "0 30px 80px rgba(0,0,0,0.5)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.boxShadow = "none"; el.style.transform = "none"; }}
            >
              {/* Cover */}
              <div style={{ width: "100%", height: 340, position: "relative", overflow: "hidden" }}>
              <Image
              src={cs.image}
              alt={cs.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
               />

               <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
               </div>
              {/* Overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2.5rem 2rem", background: "linear-gradient(to top, rgba(8,11,15,0.98) 0%, rgba(8,11,15,0.6) 60%, transparent 100%)" }}>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.6rem" }}>{cs.meta}</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.5rem" }}>{cs.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: 600, lineHeight: 1.6, marginBottom: "1rem" }}>{cs.excerpt}</p>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", display: "flex", alignItems: "center", gap: "0.4rem", fontWeight: 500 }}>
                  Read Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </>
  );
}
