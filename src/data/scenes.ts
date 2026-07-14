import type { Scene } from "@/types/vocabulary";
import { scene1Vocabulary } from "./scene1";
import { scene2Vocabulary } from "./scene2";
import { scene3Vocabulary } from "./scene3";
import { scene5Vocabulary } from "./scene5";
import { scene6Vocabulary } from "./scene6";
import { sceneCommBasicVocabulary } from "./sceneCommBasic";
import { sceneCommIntVocabulary } from "./sceneCommInt";
import { scene7Vocabulary } from "./scene7";
import { scene8Vocabulary } from "./scene8";

export const scenes: Scene[] = [
  {
    id: 1,
    title: "出国当日",
    subtitle: "家を出る → 成田 → チェックイン → 保安検査 → 搭乗",
    emoji: "✈️",
    available: true,
    items: scene1Vocabulary,
  },
  {
    id: 2,
    title: "機内と入国",
    subtitle: "機内サービス・入国審査・荷物受け取り",
    emoji: "🛂",
    available: true,
    items: scene2Vocabulary,
  },
  {
    id: 3,
    title: "移動と到着",
    subtitle: "Uber・空港から家・鍵の確認",
    emoji: "🚗",
    available: true,
    items: scene3Vocabulary,
  },
  {
    id: 4,
    title: "コミカレ初動",
    subtitle: "入学登録・学生証・キャンパス",
    emoji: "🎓",
    available: true,
    items: scene5Vocabulary,
  },
  {
    id: 5,
    title: "コミカレでの社交",
    subtitle: "挨拶・インスタ・ランチの誘い",
    emoji: "💬",
    available: true,
    items: scene6Vocabulary,
  },
  {
    id: 6,
    title: "コミカレ英会話（初級）",
    subtitle: "授業・休憩・カフェで使える日常フレーズ",
    emoji: "🗣️",
    available: true,
    items: sceneCommBasicVocabulary,
  },
  {
    id: 7,
    title: "コミカレ英会話（中級）",
    subtitle: "議論・発表・グループワークで使う学術語彙",
    emoji: "📚",
    available: true,
    items: sceneCommIntVocabulary,
  },
  {
    id: 8,
    title: "ショッピング",
    subtitle: "スーパー・レジ・試着・返品",
    emoji: "🛒",
    available: true,
    items: scene7Vocabulary,
  },
  {
    id: 9,
    title: "美容と自分磨き",
    subtitle: "ネイル・美容院・マッサージの予約",
    emoji: "💅",
    available: true,
    items: scene8Vocabulary,
  },
];

export const TOTAL_TARGET_WORDS = 450;
export const WORDS_PER_SCENE = 50;
