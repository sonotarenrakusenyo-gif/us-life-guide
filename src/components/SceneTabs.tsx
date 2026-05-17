"use client";

import type { Scene } from "@/types/vocabulary";

type SceneTabsProps = {
  scenes: Scene[];
  activeId: number;
  onSelect: (id: number) => void;
};

export function SceneTabs({ scenes, activeId, onSelect }: SceneTabsProps) {
  return (
    <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 pb-1">
      <div className="flex min-w-max gap-2" role="tablist" aria-label="ストーリーシーン">
        {scenes.map((scene) => {
          const isActive = scene.id === activeId;
          const locked = !scene.available;

          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => onSelect(scene.id)}
              className={`flex shrink-0 flex-col items-start rounded-2xl px-3.5 py-2.5 text-left transition ${
                isActive
                  ? "bg-white text-sky-800 shadow-md shadow-sky-100 ring-2 ring-sky-300"
                  : locked
                    ? "bg-white/40 text-slate-400"
                    : "bg-white/70 text-slate-600 hover:bg-white"
              }`}
            >
              <span className="text-lg leading-none">{scene.emoji}</span>
              <span className="mt-1 text-xs font-bold">
                {scene.id}. {scene.title}
              </span>
              {locked && (
                <span className="mt-0.5 text-[10px] text-slate-400">準備中</span>
              )}
              {scene.available && (
                <span className="mt-0.5 text-[10px] font-medium text-emerald-600">
                  {scene.items.length}語
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
