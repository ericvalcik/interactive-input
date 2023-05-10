"use client";

import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [change, setChange] = useState(false);

  const darken = useCallback((color: string): string => {
    if (color === "#222222") return color;
    let r = parseInt(color.slice(1, 3), 16);
    r = r > 44 ? r - 10 : 34;
    return `#${r.toString(16)}${r.toString(16)}${r.toString(16)}`;
  }, []);

  useEffect(() => {
    let r = document.querySelector<HTMLElement>(":root");
    let color = "#ffffff";
    const interval = setInterval(() => {
      if (!r) return;
      r.style.setProperty("--input-bg-color", color);
      color = darken(color);
    }, 20);
    return () => clearInterval(interval);
  }, [change, darken]);

  return (
    <main>
      <div id="b">
        <input type="text" onChange={() => setChange(!change)} />
      </div>
    </main>
  );
}
