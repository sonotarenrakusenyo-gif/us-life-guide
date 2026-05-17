import type { Scene } from "@/types/vocabulary";
import { scene1Vocabulary } from "./scene1";

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
    available: false,
    items: [],
  },
  {
    id: 3,
    title: "移動と到着",
    subtitle: "Uber・空港から家・鍵の確認",
    emoji: "🚗",
    available: false,
    items: [],
  },
  {
    id: 4,
    title: "夫婦の新生活",
    subtitle: "朝の挨拶・見送り・水回り・ゴミ",
    emoji: "🏠",
    available: false,
    items: [],
  },
  {
    id: 5,
    title: "コミカレ初動",
    subtitle: "入学登録・学生証・キャンパス",
    emoji: "🎓",
    available: false,
    items: [],
  },
  {
    id: 6,
    title: "コミカレでの社交",
    subtitle: "挨拶・インスタ・ランチの誘い",
    emoji: "💬",
    available: false,
    items: [],
  },
  {
    id: 7,
    title: "ショッピング",
    subtitle: "スーパー・レジ・試着・返品",
    emoji: "🛒",
    available: false,
    items: [],
  },
  {
    id: 8,
    title: "美容と自分磨き",
    subtitle: "ネイル・美容院・マッサージの予約",
    emoji: "💅",
    available: false,
    items: [],
  },
  {
    id: 9,
    title: "旦那さんの関係",
    subtitle: "友人との会合・自己紹介・日本の話",
    emoji: "🤝",
    available: false,
    items: [],
  },
  {
    id: 10,
    title: "生活のトラブル",
    subtitle: "忘れ物・道迷い・体調不良",
    emoji: "🆘",
    available: false,
    items: [],
  },
];

export const TOTAL_TARGET_WORDS = 500;
export const WORDS_PER_SCENE = 50;
