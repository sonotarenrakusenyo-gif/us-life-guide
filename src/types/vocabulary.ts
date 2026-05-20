export type RelatedWord = {
  word: string;
  pron: string;
  mean: string;
};

export type Idiom = {
  phrase: string;
  mean: string;
};

export type Grammar = {
  /** 文法の名前（例: "現在進行形"） */
  form: string;
  /** どういう文法で、いつ使うかの説明 */
  explanation: string;
  /** この例文でその文法が使われている理由 */
  why: string;
};

export type VocabularyItem = {
  word: string;
  word_pron: string;
  mean: string;
  sentence: string;
  sentence_pron: string;
  sentence_jp: string;
  synonyms?: RelatedWord[];
  antonyms?: RelatedWord[];
  idioms?: Idiom[];
  grammar?: Grammar;
};

export type Scene = {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  available: boolean;
  items: VocabularyItem[];
};
