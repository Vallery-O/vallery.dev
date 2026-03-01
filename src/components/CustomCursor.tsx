"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + "px";
        cursorRef.current.style.top = e.clientY - 5 + "px";
      }
    };

    const animRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 18 + "px";
        ringRef.current.style.top = ring.current.y - 18 + "px";
      }
      requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2.5)";
      if (ringRef.current) { ringRef.current.style.transform = "scale(1.5)"; ringRef.current.style.opacity = "0.8"; }
    };
    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (ringRef.current) { ringRef.current.style.transform = "scale(1)"; ringRef.current.style.opacity = "0.5"; }
    };

    document.addEventListener("mousemove", onMove);
    animRing();

    const addHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addHover();
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed", width: 10, height: 10,
          background: "var(--accent)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9999,
          transition: "transform 0.15s ease",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", width: 36, height: 36,
          border: "1px solid var(--accent)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9998,
          transition: "transform 0.4s ease, opacity 0.3s",
          opacity: 0.5, mixBlendMode: "screen",
        }}
      />
    </>
  );
}
