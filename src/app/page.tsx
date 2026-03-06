"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";
import Image from "next/image";
import { projects } from "@/lib/projects";

const WORD = "</Hello..>";

export default function HomePage() {
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordRef.current) return;
    wordRef.current.innerHTML = "";
    WORD.split("").forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.cssText = `
        display:inline-block;opacity:0;transform:translateY(30px);
        animation:letterReveal 0.5s cubic-bezier(0.25,0.46,0.45,0.94) ${0.9 + i * 0.08}s forwards;
      `;
      wordRef.current!.appendChild(span);
    });
  }, []);

  return (
    <>
      <style>{`
      @keyframes letterReveal { to { opacity:1; transform:translateY(0); } }
      @keyframes circleScale { to { transform:scale(1); opacity:1; } }
      @keyframes circlePulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,0);}50%{box-shadow:0 0 60px 10px rgba(0,212,255,0.08);} }
      @keyframes ringRotate { to { transform:rotate(360deg); } }
      @keyframes scrollLine { 0%,100%{opacity:.3;transform:scaleY(.6);transform-origin:top;}50%{opacity:1;transform:scaleY(1);} }
      
      /* Hero word responsive */
      @media (max-width: 900px) {
      .hero-word { font-size: 8rem !important; }
      .hero-circle-wrap { width: 340px !important; height: 340px !important; }
      }
      @media (max-width: 600px) {
      .hero-word { font-size: 5rem !important; }
      .hero-circle-wrap { width: 260px !important; height: 260px !important; }
      }
      
      /* Projects grid */
      @media (max-width: 768px) {
      .projects-grid { grid-template-columns: 1fr !important; }
      .projects-section { padding: 4rem 1.5rem !important; }
      }
      
      /* About snapshot */
      @media (max-width: 768px) {
      .about-snap-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      .about-snap-inner { padding: 0 1.5rem !important; }
      .about-mini-grid { grid-template-columns: 1fr 1fr !important; }
      }
      
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(0,212,255,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Circle */}
          <div className="hero-circle-wrap" style={{ position: "relative", width: 560, height: 560, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
            {/* Outer dashed ring */}
            <div style={{ position: "absolute", width: "calc(100% + 50px)", height: "calc(100% + 50px)", borderRadius: "50%", border: "1px dashed rgba(0,212,255,0.15)", animation: "circleScale 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s forwards, ringRotate 25s linear 1.5s infinite", transform: "scale(0)", opacity: 0 }} />
            {/* Filled circle */}
            <div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, rgba(0,212,255,0.18), rgba(0,212,255,0.04) 60%, transparent 100%)", border: "1px solid rgba(0,212,255,0.25)", animation: "circleScale 1s cubic-bezier(0.16,1,0.3,1) forwards, circlePulse 4s ease-in-out 1.5s infinite", transform: "scale(0)", opacity: 0 }} />
            {/* Word */}
            <div className="hero-word" ref={wordRef} style={{ position: "relative", zIndex: 2, fontFamily: "var(--font-playfair)", fontSize: "14rem", fontWeight: 900, fontStyle: "italic", letterSpacing: "-0.04em", color: "var(--accent)", display: "flex", lineHeight: 1 }} />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            style={{ fontFamily: "var(--font-dm)", fontSize: "1rem", fontWeight: 300, color: "var(--text-muted)", letterSpacing: "0.02em", maxWidth: 400, lineHeight: 1.7 }}
          >
            I&apos;m Vallery Otieno <br/> I build scalable web systems and design<br />human-centered digital experiences.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--accent), transparent)", animation: "scrollLine 1.5s ease-in-out 2.5s infinite" }} />
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section  className="projects-section" style={{ padding: "7rem 3rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Engineering</SectionLabel>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text)", marginBottom: "3.5rem" }}>
          Selected Projects
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.1}>
              <div
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease", cursor: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.3)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: "100%", height: 180, position: "relative", overflow: "hidden" }}>
                  <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,212,255,0.08), transparent 60%)" }} />
                  </div>

                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
                    {p.tags.map((t) => <Tag key={t} label={t} variant="accent" />)}
                    {p.neutralTags.map((t) => <Tag key={t} label={t} variant="neutral" />)}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>{p.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.2rem" }}>{p.description}</p>
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", color: "var(--accent)", textDecoration: "none", cursor: "none" }}>
                    View on GitHub
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <div className="about-snapshot" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "6rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <RevealOnScroll>
            <SectionLabel>About me</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text)", marginBottom: "1.25rem" }}>
              Engineer.<br />Designer.<br />Problem solver.
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "1rem" }}>
              I&apos;m <strong style={{ color: "var(--text)", fontWeight: 500 }}>Vallery</strong> — a software engineer and UX/UI designer who builds <strong style={{ color: "var(--text)", fontWeight: 500 }}>scalable systems</strong> and crafts <strong style={{ color: "var(--text)", fontWeight: 500 }}>human-centered interfaces</strong> that actually work for real people.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>
              Currently focused on AI-powered products,not just as a trend but the intersection of engineering rigor with design thinking.
            </p>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", border: "1px solid rgba(0,212,255,0.4)", color: "var(--accent)", background: "transparent", cursor: "none", transition: "all 0.2s" }}>
              Learn more →
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "💻", title: "Engineering", desc: "Python, TypeScript, Node.js, AWS —  code and scalable architecture." },
                { icon: "🎨", title: "Design", desc: "UX research, Figma prototyping, and accessible interface design." },
                { icon: "🤖", title: "AI ", desc: "Integrating AI tooling into practical design workflows." },
                { icon: "📐", title: "Systems", desc: "Architecture decisions that scale — from prototype to production." },
              ].map((card) => (
                <div key={card.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem", transition: "border-color 0.3s", cursor: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.25)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"; }}
                >
                  <div style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>{card.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>{card.title}</h4>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </>
  );
}
