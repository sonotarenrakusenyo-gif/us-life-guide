export type RelatedWord = {
  word: string;
  pron: string;
  mean: string;
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
};

export type Scene = {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  available: boolean;
  items: VocabularyItem[];
};
