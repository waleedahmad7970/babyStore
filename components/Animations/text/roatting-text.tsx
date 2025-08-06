"use client";

import { useEffect, useState } from "react";

interface Rotating3DTextProps {
  texts: string[];
  rotationInterval?: number; // milliseconds
  mainClassName?: string;
}

export default function Rotating3DText({
  texts,
  rotationInterval = 2000,
  mainClassName = "",
}: Rotating3DTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <div
      className={`flex items-center justify-center overflow-hidden perspective-[1000px] ${mainClassName}`}
    >
      <span key={index} className="animate-flip inline-block text-center">
        {texts[index]}
      </span>
    </div>
  );
}
