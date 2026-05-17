"use client";

import { useMemo, useState } from "react";
import { scenes, TOTAL_TARGET_WORDS } from "@/data/scenes";
import { useCopy } from "@/hooks/useCopy";
import { useSpeech } from "@/hooks/useSpeech";
import { SceneTabs } from "./SceneTabs";
import { WordCard } from "./WordCard";

export function StudyApp() {
  const [activeSceneId, setActiveSceneId] = useState(1);
  const { speak } = useSpeech();
  const { copy, copiedKey } = useCopy();

  const activeScene = useMemo(
    () => scenes.find((s) => s.id === activeSceneId) ?? scenes[0],
    [activeSceneId],
  );

  const learnedCount = useMemo(
    () => scenes.filter((s) => s.available).reduce((sum, s) => sum + s.items.length, 0),
    [],
  );

  const handleSceneSelect = (id: number) => {
    const scene = scenes.find((s) => s.id === id);
    if (!scene) return;
    setActiveSceneId(id);
  };

  return (
    <div className="mx-auto flex min-h-full w-full max-w-lg flex-col">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-gradient-to-b from-sky-50/95 to-sky-50/80 px-4 pb-4 pt-6 backdrop-blur-md">
        <p className="text-xs font-semibold tracking-widest text-sky-600 uppercase">
          US Life Guide
        </p>
        <h1 className="mt-1 text-xl font-bold leading-snug text-slate-800">
          移住・生活 完全攻略
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          ストーリーで学ぶ実践英語 — 目標 {TOTAL_TARGET_WORDS} 語
        </p>

        <div className="mt-4">
          <ProgressBar learned={learnedCount} total={TOTAL_TARGET_WORDS} />
        </div>

        <div className="mt-4">
          <SceneTabs
            scenes={scenes}
            activeId={activeSceneId}
            onSelect={handleSceneSelect}
          />
        </div>
      </header>

      <main className="flex-1 px-4 py-5">
        <section className="mb-5 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{activeScene.emoji}</span>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                シーン {activeScene.id}：{activeScene.title}
              </h2>
              <p className="text-sm text-slate-500">{activeScene.subtitle}</p>
            </div>
          </div>
        </section>

        {!activeScene.available || activeScene.items.length === 0 ? (
          <ComingSoon sceneId={activeScene.id} />
        ) : (
          <ul className="flex flex-col gap-4">
            {activeScene.items.map((item, index) => (
              <li key={`${activeScene.id}-${item.word}`}>
                <WordCard
                  item={item}
                  index={index}
                  sceneId={activeScene.id}
                  onSpeak={speak}
                  onCopy={copy}
                  copiedKey={copiedKey}
                />
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="px-4 py-6 text-center text-xs text-slate-400">
        🔊 ボタンでネイティブ発音（Web Speech API）｜📋 タップでコピー
      </footer>
    </div>
  );
}

function ProgressBar({ learned, total }: { learned: number; total: number }) {
  const pct = Math.round((learned / total) * 100);
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs text-slate-500">
        <span>学習進捗</span>
        <span className="font-semibold text-sky-700">
          {learned} / {total} 語（{pct}%）
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sky-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ComingSoon({ sceneId }: { sceneId: number }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 p-8 text-center">
      <p className="text-4xl">🌱</p>
      <p className="mt-3 font-semibold text-slate-700">
        シーン {sceneId} は準備中です
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        シーン1をマスターしたら、次のシーンを追加していきます。
        <br />
        「シーン2をお願い」とメッセージしてください。
      </p>
    </div>
  );
}
