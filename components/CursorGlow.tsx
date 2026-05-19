"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-[250px] h-[250px] rounded-full bg-yellow-500/10 blur-[120px]"
      style={{
        left: position.x - 125,
        top: position.y - 125,
      }}
    />
  );
}