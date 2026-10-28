"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export function CopyButton({ value, label = "скопировать" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {}
  }

  return (
    <button type="button" onClick={copy} aria-label={`${label}: ${value}`} className="btn-secondary">
      {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
      <span aria-live="polite">{copied ? "скопировано" : label}</span>
    </button>
  );
}
