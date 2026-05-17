"use client";

import { useCallback, useEffect, useRef } from "react";

export function useSpeech() {
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!synthRef.current) return;

    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.pitch = 1;

    const voices = synthRef.current.getVoices();
    const enVoice =
      voices.find((v) => v.lang.startsWith("en-US") && !v.localService) ??
      voices.find((v) => v.lang.startsWith("en-US")) ??
      voices.find((v) => v.lang.startsWith("en"));

    if (enVoice) utterance.voice = enVoice;

    synthRef.current.speak(utterance);
  }, []);

  return { speak, supported: typeof window !== "undefined" && "speechSynthesis" in window };
}
