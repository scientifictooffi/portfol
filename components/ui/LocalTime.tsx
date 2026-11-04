"use client";

import { useEffect, useState } from "react";

/** Current time in Leicester, updated every minute. A small "I'm a real person here" touch. */
export function LocalTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="num text-sm text-text-faint" suppressHydrationWarning>
      {time ? `Leicester · ${time} GMT` : "Leicester"}
    </span>
  );
}
