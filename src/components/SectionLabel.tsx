interface Props { children: React.ReactNode; }

export default function SectionLabel({ children }: Props) {
  return (
    <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <span style={{ display: "block", width: 24, height: 1, background: "var(--accent)" }} />
      {children}
    </div>
  );
}
