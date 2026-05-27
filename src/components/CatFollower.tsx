import { useEffect, useRef, useState } from "react";

const CAT_URL =
  "https://cdn.poehali.dev/projects/1351dd47-e3a2-4248-b7d6-5353387b8c05/files/419d2ef6-f0c5-4b79-bba3-260d22b11737.jpg";

export default function CatFollower() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const [jumping, setJumping] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const currentPos = useRef({ x: 200, y: 200 });
  const targetPos = useRef({ x: 200, y: 200 });
  const jumpTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX;
      const ny = e.clientY;
      setFlipped(nx < targetPos.current.x);
      targetPos.current = { x: nx, y: ny };

      if (jumpTimeout.current) clearTimeout(jumpTimeout.current);
      jumpTimeout.current = setTimeout(() => {
        setJumping(true);
        setTimeout(() => setJumping(false), 400);
      }, 100);
    };

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      currentPos.current = {
        x: currentPos.current.x + (targetPos.current.x - currentPos.current.x) * 0.08,
        y: currentPos.current.y + (targetPos.current.y - currentPos.current.y) * 0.08,
      };
      setPos({ ...currentPos.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (jumpTimeout.current) clearTimeout(jumpTimeout.current);
    };
  }, []);

  return (
    <img
      src={CAT_URL}
      alt="кот"
      style={{
        position: "fixed",
        left: pos.x - 40,
        top: pos.y - 80,
        width: 80,
        height: 80,
        objectFit: "contain",
        pointerEvents: "none",
        zIndex: 9999,
        transform: `${flipped ? "scaleX(-1)" : "scaleX(1)"} ${jumping ? "translateY(-18px)" : "translateY(0)"}`,
        transition: "transform 0.15s ease",
        mixBlendMode: "multiply",
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
      }}
    />
  );
}