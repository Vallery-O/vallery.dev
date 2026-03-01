interface Props { label: string; variant?: "accent" | "neutral"; }

export default function Tag({ label, variant = "accent" }: Props) {
  const isAccent = variant === "accent";
  return (
    <span style={{
      fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
      color: isAccent ? "var(--accent)" : "var(--text-muted)",
      background: isAccent ? "var(--accent-dim)" : "rgba(255,255,255,0.04)",
      border: `1px solid ${isAccent ? "rgba(0,212,255,0.2)" : "var(--border)"}`,
      padding: "0.2rem 0.6rem", borderRadius: 999,
    }}>
      {label}
    </span>
  );
}
