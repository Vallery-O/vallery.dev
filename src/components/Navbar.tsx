"use client";
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

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 3rem", height: 70,
        background: "var(--nav-bg)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "1.2rem",
          fontStyle: "italic", color: "var(--text)", textDecoration: "none",
          letterSpacing: "-0.01em", cursor: "none",
        }}
      >
        Vallery<span style={{ color: "var(--accent)" }}>.</span>
      </Link>

      <ul style={{ display: "flex", alignItems: "center", gap: "2.5rem", listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                fontFamily: "var(--font-dm)", fontSize: "0.75rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: pathname === l.href ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none", transition: "color 0.2s", cursor: "none",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <a href="/files/Vallery-Otieno-R.pdf" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-dm)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s", cursor: "none" }}>
            Resume ↗
          </a>
        </li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <a href="mailto:vallerynoh@gmail.com"
          style={{ fontSize: "0.72rem", color: "var(--text-dim)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s", cursor: "none" }}>
          vallerynoh@gmail.com
        </a>

        {/* Theme toggle pill */}
        <button
          onClick={toggle}
          title={isLight ? "Switch to dark" : "Switch to light"}
          aria-label="Toggle theme"
          style={{
            display: "flex", alignItems: "center", gap: "0.3rem",
            background: "var(--toggle-track)", border: "1px solid var(--border)",
            borderRadius: 999, padding: "0.28rem 0.5rem",
            cursor: "none", outline: "none",
          }}
        >
          {/* Moon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill={!isLight ? "var(--accent)" : "var(--text-dim)"} style={{ transition: "fill 0.3s" }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          {/* Dot */}
          <div style={{
            width: 14, height: 14, borderRadius: "50%",
            background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)",
            transform: isLight ? "translateX(4px)" : "translateX(-4px)",
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}/>
          {/* Sun */}
          <svg width="12" height="12" viewBox="0 0 24 24" style={{ transition: "fill 0.3s" }}
            fill={isLight ? "var(--accent)" : "var(--text-dim)"} stroke={isLight ? "var(--accent)" : "var(--text-dim)"} strokeWidth="0">
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </g>
          </svg>
        </button>
      </div>
    </nav>
  );
}
