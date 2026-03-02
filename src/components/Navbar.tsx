"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/design", label: "Design" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 1.5rem", height: 64,
        background: "var(--nav-bg)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}>
        {/* Logo */}
        <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "1.2rem", fontStyle: "italic", color: "var(--text)", textDecoration: "none" }}>
          Vallery<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0 }}
          className="desktop-nav">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{ fontFamily: "var(--font-dm)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: pathname === l.href ? "var(--accent)" : "var(--text-muted)", textDecoration: "none" }}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/files/Vallery-Otieno-R.pdf" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-dm)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}>
              Resume ↗
            </a>
          </li>
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme toggle */}
          <button onClick={toggle} aria-label="Toggle theme"
            style={{ display: "flex", alignItems: "center", gap: "0.3rem", background: "var(--toggle-track)", border: "1px solid var(--border)", borderRadius: 999, padding: "0.28rem 0.5rem", cursor: "pointer", outline: "none" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill={!isLight ? "var(--accent)" : "var(--text-dim)"}>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", transform: isLight ? "translateX(4px)" : "translateX(-4px)", transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}/>
            <svg width="12" height="12" viewBox="0 0 24 24" fill={isLight ? "var(--accent)" : "var(--text-dim)"} stroke={isLight ? "var(--accent)" : "var(--text-dim)"} strokeWidth="0">
              <circle cx="12" cy="12" r="5" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </g>
            </svg>
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}/>
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }}/>
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}/>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div style={{
        position: "fixed", top: 64, left: 0, right: 0, zIndex: 999,
        background: "var(--nav-bg)", backdropFilter: "blur(18px)",
        borderBottom: menuOpen ? "1px solid var(--border)" : "none",
        overflow: "hidden",
        maxHeight: menuOpen ? 400 : 0,
        transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <ul style={{ listStyle: "none", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-dm)", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: pathname === l.href ? "var(--accent)" : "var(--text-muted)", textDecoration: "none" }}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/files/Vallery-Otieno-R.pdf" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-dm)", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}>
              Resume ↗
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}