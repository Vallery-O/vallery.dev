import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/design", label: "Design" },
  { href: "/contact", label: "Contact" },
];

const techs = ["Node.js", "Next.js", "TypeScript"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "4rem 3rem 2.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem", marginBottom: "3rem" }}>
        
        <div>
          <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Vallery.</h3>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
            Software Engineer & UX/UI Designer focused on modern, accessible, human-centered digital products.
          </p>
          <a
            href="/files/Vallery-Otieno-R.pdf"
            target="_blank"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none", border: "1px solid rgba(0,212,255,0.25)", padding: "0.5rem 1rem", borderRadius: 6, transition: "all 0.2s", cursor: "none" }}
          >
            Download Resume ↓
          </a>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none" }}>
            {quickLinks.map((l) => (
              <li key={l.href} style={{ marginBottom: "0.6rem" }}>
                <Link href={l.href} style={{ fontSize: "0.82rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", cursor: "none" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-playfair)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1rem" }}>Technologies</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {techs.map((t) => (
              <span key={t} style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", padding: "0.2rem 0.6rem", borderRadius: 999 }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "0.72rem", color: "var(--text-dim)" }}>© 2026 Vallery · Built with Next.js & Tailwind</p>
        <p style={{ fontSize: "0.72rem", color: "var(--text-dim)" }}>vallerynoh@gmail.com</p>
      </div>
    </footer>
  );
}
