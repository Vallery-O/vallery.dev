import RevealOnScroll from "@/components/RevealOnScroll";
import SectionLabel from "@/components/SectionLabel";
import Tag from "@/components/Tag";
import Link from "next/link";
import Image from "next/image";

const engineering = ["React", "Django", "Node.js", "Python", "Docker", "RESTAPI", "CI/CD pipeline", "AWS"];
const design = ["Figma", "Framer", "Prototyping", "UX Research", "Usability Testing","AI", "Design Systems"];

const experience = [
  { period: "2025 — Present", role: "Developer & UX freelancer", company: "Freelance · Full-time", desc: "I work with different stakeholders to leverage my programming and design skills to come up with scalable and user centered solutions." },
  { period: "2024 — 2025", role: "STEAM EDUtrainer", company: "Little Einsteins East Africa · Full-time", desc: "Developed STEAM curricula and lesson plans with a team of four, integrating coding, robotics, and hands-on science activities.Led engaging STEAM sessions for children, applying instructional design and leadership skills to spark curiosity and problem-solving." },
  { period: "2023 — 2023", role: "Information Technology Intern", company: "United States International University· Internship", desc: "Supported hardware and software setup across departments to ensure optimalfunctionality.Maintained and supported institutional computer servers, networks, and website,ensuring reliability, security, and uptime." },
  { period: "2019 — 2023", role: "BSc Computer Science", company: "The Catholic University of Eastern Africa· Graduated", desc: "Focus on algorithms, and distributed systems. Final year project: a pharmacy management system." },
];

export const metadata = {
  title: "About — Vallery",
  description: "Software Engineer & UX/UI Designer building scalable systems and human-centered interfaces.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 120, paddingBottom: "4rem", maxWidth: 1100, margin: "0 auto", padding: "120px 3rem 4rem", display: "grid", gridTemplateColumns: "280px 1fr", gap: "5rem", alignItems: "start" }}>

      {/* Sticky photo column */}
      <div style={{ position: "sticky", top: 100 }}>
        <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 16, border: "1px solid var(--border)", overflow: "hidden", position: "relative" }}>
        <Image
        src="/images/avatar.png"
        alt="Vallery"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,212,255,0.08), transparent 60%)" }} />
        </div>
        <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", fontWeight: 700, marginTop: "1rem", color: "var(--text)" }}>Vallery</p>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Software Engineer & UX/UI Designer</p>
        <br />
        <a href="/files/Vallery-Otieno-R.pdf" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.2rem", borderRadius: 8, fontSize: "0.76rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", border: "1px solid rgba(0,212,255,0.4)", color: "var(--accent)", background: "transparent", cursor: "none" }}>
          Download Resume ↓
        </a>
      </div>

      {/* Content */}
      <div>
        <SectionLabel>About</SectionLabel>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: "1.5rem", marginTop: "2rem" }}>
          Building systems.<br />Designing <span style={{ color: "var(--accent)" }}>solutions</span>.
        </h1>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          I&apos;m a software engineer and UX/UI designer who sits at the intersection of <strong style={{ color: "var(--text)", fontWeight: 500 }}>technical precision</strong> and <strong style={{ color: "var(--text)", fontWeight: 500 }}>human empathy</strong>. I believe the best digital products are the ones you don&apos;t have to think about — they just work.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
          My engineering work spans scalable architectures and performance-critical systems. My design work is grounded in user research, systematic thinking, and an eye for the detail that make interfaces feel alive.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "2rem" }}>
          When I&apos;m not writing code or designing in Figma, I&apos;m exploring the rapidly evolving intersection of AI and interface design — and thinking about how the tools we build shape the way people work and communicate.
        </p>

        {/* Skills */}
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Engineering</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {engineering.map((s) => <Tag key={s} label={s} variant="accent" />)}
          </div>
          <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Design</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
            {design.map((s) => <Tag key={s} label={s} variant="accent" />)}
          </div>
        </div>

        {/* Timeline */}
        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>Experience</h3>
        {experience.map((item, i) => (
          <RevealOnScroll key={item.role} delay={i * 0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "1.5rem", paddingBottom: "2rem", borderBottom: i < experience.length - 1 ? "1px solid var(--border)" : "none", marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "var(--text-dim)", paddingTop: "0.2rem" }}>{item.period}</span>
              <div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>{item.role}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--accent)", marginBottom: "0.5rem" }}>{item.company}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            </div>
          </RevealOnScroll>
        ))}

        <div style={{ marginTop: "3rem" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", background: "var(--accent)", color: "#080b0f", cursor: "none" }}>
            Let&apos;s connect →
          </Link>
        </div>
      </div>
    </div>
  );
}
