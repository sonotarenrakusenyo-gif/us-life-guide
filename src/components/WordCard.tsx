"use client";

import type { VocabularyItem } from "@/types/vocabulary";
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

  return (
    <article className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm shadow-sky-100/60 backdrop-blur-sm">
      <div className="mb-3">
        <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

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
        <div className="mt-2">
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
        <p className="mt-1.5 text-sm text-slate-500">{item.sentence_jp}</p>
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
    </article>
  );
}
