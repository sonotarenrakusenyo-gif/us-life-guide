"use client";

import { useState } from "react";
import type { Grammar, RelatedWord, VocabularyItem } from "@/types/vocabulary";
import { AudioButton } from "./AudioButton";
import { CopyButton } from "./CopyButton";

type WordCardProps = {
  item: VocabularyItem;
  index: number;
  sceneId: number;
  onSpeak: (text: string) => void;
  onCopy: (text: string, key: string) => void;
  copiedKey: string | null;
};

export function WordCard({
  item,
  index,
  sceneId,
  onSpeak,
  onCopy,
  copiedKey,
}: WordCardProps) {
  const wordKey = `s${sceneId}-w${index}`;
  const sentenceKey = `s${sceneId}-s${index}`;
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm shadow-sky-100/60 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
          #{String(index + 1).padStart(2, "0")}
        </span>
        {revealed && (
          <button
            type="button"
            onClick={() => setRevealed(false)}
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-slate-400 transition hover:text-slate-600 active:scale-95"
          >
            隠す
          </button>
        )}
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="flex w-full flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/40 px-4 py-8 text-center transition hover:border-sky-300 hover:bg-sky-50 active:scale-[0.99]"
        >
          <p className="text-lg font-semibold text-slate-700">{item.mean}</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-white shadow-sm">
            👀 タップして単語を表示
          </span>
        </button>
      ) : (
        <>
      <div className="mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-bold tracking-tight text-slate-800">
              {item.word}
            </h3>
            <p className="mt-0.5 text-sm text-sky-600">{item.word_pron}</p>
            <p className="mt-1 text-base text-slate-600">{item.mean}</p>
          </div>
          <AudioButton
            label={`${item.word} を再生`}
            onClick={() => onSpeak(item.word)}
          />
        </div>

        {((item.synonyms && item.synonyms.length > 0) ||
          (item.antonyms && item.antonyms.length > 0)) && (
          <div className="mt-3 flex flex-col gap-2">
            {item.synonyms && item.synonyms.length > 0 && (
              <RelatedWords
                label="類義語"
                words={item.synonyms}
                color="teal"
                onSpeak={onSpeak}
              />
            )}
            {item.antonyms && item.antonyms.length > 0 && (
              <RelatedWords
                label="対義語"
                words={item.antonyms}
                color="rose"
                onSpeak={onSpeak}
              />
            )}
          </div>
        )}

        {item.idioms && item.idioms.length > 0 && (
          <div className="mt-3">
            <p className="mb-1.5 text-[11px] font-bold text-amber-600">熟語</p>
            <div className="flex flex-col gap-1.5">
              {item.idioms.map((idiom) => (
                <div
                  key={idiom.phrase}
                  className="rounded-xl bg-amber-50 px-3 py-1.5 ring-1 ring-amber-200"
                >
                  <span className="text-xs font-semibold text-amber-800">{idiom.phrase}</span>
                  <span className="ml-2 text-[11px] text-amber-700/80">{idiom.mean}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3">
          <CopyButton
            text={item.word}
            copyKey={wordKey}
            copiedKey={copiedKey}
            onCopy={onCopy}
            label="単語"
          />
        </div>
      </div>

      <div className="rounded-xl bg-slate-50/80 p-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
          例文
        </p>
        <p className="mb-2 text-sm text-slate-500">{item.sentence_jp}</p>
        <div className="flex items-start justify-between gap-3">
          <p className="flex-1 text-[15px] leading-relaxed font-medium text-slate-800">
            {item.sentence}
          </p>
          <AudioButton
            label="例文を再生"
            onClick={() => onSpeak(item.sentence)}
            size="sm"
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-sky-700/90">
          {item.sentence_pron}
        </p>

        {item.grammar && <GrammarNote grammar={item.grammar} />}

        <div className="mt-3">
          <CopyButton
            text={item.sentence}
            copyKey={sentenceKey}
            copiedKey={copiedKey}
            onCopy={onCopy}
            label="例文"
          />
        </div>
      </div>
        </>
      )}
    </article>
  );
}

function GrammarNote({ grammar }: { grammar: Grammar }) {
  return (
    <div className="mt-3 rounded-xl bg-emerald-50 px-3 py-2.5 ring-1 ring-emerald-200">
      <div className="mb-1 flex items-center gap-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600">
          文法ポイント
        </span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
          {grammar.form}
        </span>
      </div>
      <p className="text-[12px] leading-relaxed text-emerald-800">{grammar.explanation}</p>
      <p className="mt-1.5 text-[11px] leading-relaxed text-emerald-700/80">
        💡 {grammar.why}
      </p>
    </div>
  );
}

type RelatedWordsProps = {
  label: string;
  words: RelatedWord[];
  color: "teal" | "rose";
  onSpeak: (text: string) => void;
};

function RelatedWords({ label, words, color, onSpeak }: RelatedWordsProps) {
  const labelClass =
    color === "teal"
      ? "text-teal-600"
      : "text-rose-500";

  const chipClass =
    color === "teal"
      ? "bg-teal-50 text-teal-700 ring-teal-200 hover:bg-teal-100"
      : "bg-rose-50 text-rose-700 ring-rose-200 hover:bg-rose-100";

  return (
    <div className="flex flex-wrap items-start gap-x-2 gap-y-1.5">
      <span className={`shrink-0 pt-1 text-[11px] font-bold ${labelClass}`}>
        {label}
      </span>
      {words.map((w) => (
        <button
          key={w.word}
          type="button"
          onClick={() => onSpeak(w.word)}
          className={`inline-flex flex-col items-start rounded-xl px-2.5 py-1 ring-1 transition active:scale-95 ${chipClass}`}
        >
          <span className="text-xs font-semibold leading-tight">{w.word}</span>
          <span className="text-[10px] leading-tight opacity-70">{w.pron}</span>
          {w.mean && (
            <span className="text-[10px] leading-tight opacity-60">{w.mean}</span>
          )}
        </button>
      ))}
    </div>
  );
}
