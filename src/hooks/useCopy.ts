"use client";

import { useCallback, useState } from "react";

export function useCopy() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
      return true;
    } catch {
      return false;
    }
  }, []);

  return { copy, copiedKey };
}
