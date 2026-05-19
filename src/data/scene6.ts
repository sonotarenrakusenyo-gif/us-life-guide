import type { VocabularyItem } from "@/types/vocabulary";

/** シーン6：コミカレでの社交（50語） */
export const scene6Vocabulary: VocabularyItem[] = [
  {
    word: "hey",
    word_pron: "ヘイ",
    mean: "ねえ、やあ（カジュアルな挨拶）",
    sentence: "Hey! Is this seat taken? Mind if I sit here?",
    sentence_pron: "ヘイ イズ ディス シート テイクン マインド イフ アイ シット ヒア",
    sentence_jp: "ねえ、この席空いてる？ここ座ってもいい？",
    synonyms: [
      { word: "hi", pron: "ハイ", mean: "やあ" },
      { word: "howdy", pron: "ハウディ", mean: "やあ（南部風）" },
    ],
    antonyms: [
      { word: "goodbye", pron: "グッバイ", mean: "さよなら" },
    ],
  },
  {
    word: "nice to meet you",
    word_pron: "ナイス トゥー ミート ユー",
    mean: "はじめまして",
    sentence: "Nice to meet you — I'm Ruka. I just moved here from Japan.",
    sentence_pron: "ナイス トゥー ミート ユー アイム ルカ アイ ジャスト ムーブド ヒア フロム ジャパン",
    sentence_jp: "はじめまして。ルカです。日本からちょうど引っ越してきました。",
    synonyms: [
      { word: "pleased to meet you", pron: "プリーズド トゥー ミート ユー", mean: "お会いできて嬉しいです" },
      { word: "glad to meet you", pron: "グラッド トゥー ミート ユー", mean: "お会いできて光栄です" },
    ],
    antonyms: [
      { word: "nice to see you again", pron: "ナイス トゥー シー ユー アゲイン", mean: "またお会いできて嬉しいです" },
    ],
  },
  {
    word: "what's your name",
    word_pron: "ワッツ ユア ネーム",
    mean: "お名前は？",
    sentence: "What's your name? I don't think we've met before.",
    sentence_pron: "ワッツ ユア ネーム アイ ドント シンク ウィーヴ メット ビフォー",
    sentence_jp: "お名前は？初めてお会いする気がしますが。",
    synonyms: [
      { word: "may I ask your name", pron: "メイ アイ アスク ユア ネーム", mean: "お名前をお聞きしてもよいですか" },
    ],
    antonyms: [],
  },
  {
    word: "where are you from",
    word_pron: "ウェア アー ユー フロム",
    mean: "どこの出身ですか？",
    sentence: "Where are you from? Your accent sounds familiar.",
    sentence_pron: "ウェア アー ユー フロム ユア アクセント サウンズ ファミリア",
    sentence_jp: "どこの出身ですか？なんかアクセントが聞き覚えある気がして。",
    synonyms: [
      { word: "what's your hometown", pron: "ワッツ ユア ホウムタウン", mean: "出身地は？" },
    ],
    antonyms: [],
  },
  {
    word: "I'm from",
    word_pron: "アイム フロム",
    mean: "〜出身です",
    sentence: "I'm from Tokyo, Japan — this is my first time living outside of Asia.",
    sentence_pron: "アイム フロム トウキョウ ジャパン ディス イズ マイ ファースト タイム リヴィング アウトサイド オブ エイジャ",
    sentence_jp: "東京の出身です。アジアの外で生活するのは初めてです。",
    synonyms: [
      { word: "I come from", pron: "アイ カム フロム", mean: "〜の出身です" },
      { word: "I grew up in", pron: "アイ グルー アップ イン", mean: "〜で育ちました" },
    ],
    antonyms: [],
  },
  {
    word: "classmate",
    word_pron: "クラスメイト",
    mean: "クラスメート",
    sentence: "My classmate Sofia is from Mexico — we bonded over our love of food.",
    sentence_pron: "マイ クラスメイト ソフィア イズ フロム メキシコ ウィー ボンデッド オーバー アワー ラヴ オブ フード",
    sentence_jp: "クラスメートのソフィアはメキシコ出身で、食べ物が好きという共通点で仲良くなりました。",
    synonyms: [
      { word: "fellow student", pron: "フェロウ ステューデント", mean: "同学" },
      { word: "schoolmate", pron: "スクールメイト", mean: "同級生" },
    ],
    antonyms: [
      { word: "teacher", pron: "ティーチャー", mean: "先生" },
    ],
  },
  {
    word: "sit next to",
    word_pron: "シット ネクスト トゥー",
    mean: "〜の隣に座る",
    sentence: "I always try to sit next to someone new so I can practice talking.",
    sentence_pron: "アイ オールウェイズ トライ トゥー シット ネクスト トゥー サムワン ニュー ソー アイ キャン プラクティス トーキング",
    sentence_jp: "会話の練習ができるように、いつも知らない人の隣に座るようにしています。",
    synonyms: [
      { word: "sit beside", pron: "シット ビサイド", mean: "〜の隣に座る" },
    ],
    antonyms: [
      { word: "sit apart from", pron: "シット アパート フロム", mean: "〜から離れて座る" },
    ],
  },
  {
    word: "small talk",
    word_pron: "スモール トーク",
    mean: "雑談、世間話",
    sentence: "Americans are great at small talk — it feels very natural here.",
    sentence_pron: "アメリカンズ アー グレイト アット スモール トーク イット フィールズ ヴェリー ナチュラル ヒア",
    sentence_jp: "アメリカ人は雑談が得意ですね。ここでは自然に感じます。",
    synonyms: [
      { word: "chit-chat", pron: "チットチャット", mean: "雑談" },
      { word: "chat", pron: "チャット", mean: "おしゃべり" },
    ],
    antonyms: [
      { word: "deep conversation", pron: "ディープ コンヴァセーション", mean: "深い会話" },
    ],
  },
  {
    word: "by the way",
    word_pron: "バイ ザ ウェイ",
    mean: "ところで",
    sentence: "By the way, are you in Professor Kim's class too?",
    sentence_pron: "バイ ザ ウェイ アー ユー イン プロフェッサー キムズ クラス トゥー",
    sentence_jp: "ところで、あなたもキム先生のクラス？",
    synonyms: [
      { word: "incidentally", pron: "インシデンタリー", mean: "ちなみに" },
      { word: "speaking of which", pron: "スピーキング オブ ウィッチ", mean: "そういえば" },
    ],
    antonyms: [],
  },
  {
    word: "actually",
    word_pron: "アクチュアリー",
    mean: "実は、実際には",
    sentence: "Actually, I've been living in California for only two weeks!",
    sentence_pron: "アクチュアリー アイヴ ビン リヴィング イン カリフォルニア フォー オウンリー トゥー ウィークス",
    sentence_jp: "実はカリフォルニアにまだ2週間しかいないんです！",
    synonyms: [
      { word: "in fact", pron: "イン ファクト", mean: "実際には" },
      { word: "to be honest", pron: "トゥー ビー オネスト", mean: "正直に言うと" },
    ],
    antonyms: [
      { word: "supposedly", pron: "サポウズドリー", mean: "〜らしい（推測）" },
    ],
  },
  {
    word: "totally",
    word_pron: "トウタリー",
    mean: "まったくそうだね、完全に（同意を表す）",
    sentence: "Totally! The campus is way bigger than I expected.",
    sentence_pron: "トウタリー ザ キャンパス イズ ウェイ ビガー ザン アイ エクスペクティド",
    sentence_jp: "まったく！キャンパムは思ってたより全然広いよね。",
    synonyms: [
      { word: "absolutely", pron: "アブソリュートリー", mean: "完全に" },
      { word: "exactly", pron: "エグザクトリー", mean: "まさに" },
    ],
    antonyms: [
      { word: "not at all", pron: "ナット アット オール", mean: "まったくそうではない" },
    ],
  },
  {
    word: "for real",
    word_pron: "フォー リール",
    mean: "本当に、マジで（同意・驚き）",
    sentence: "For real? You just moved here? That's so brave!",
    sentence_pron: "フォー リール ユー ジャスト ムーブド ヒア ザッツ ソー ブレイヴ",
    sentence_jp: "マジで？引っ越してきたばかりなの？すごく勇気あるね！",
    synonyms: [
      { word: "seriously", pron: "シリアスリー", mean: "本当に？" },
      { word: "no way", pron: "ノー ウェイ", mean: "まさか（驚き）" },
    ],
    antonyms: [
      { word: "just kidding", pron: "ジャスト キッディング", mean: "冗談だよ" },
    ],
  },
  {
    word: "honestly",
    word_pron: "オネストリー",
    mean: "正直なところ",
    sentence: "Honestly, I was really nervous about talking to people at first.",
    sentence_pron: "オネストリー アイ ワズ リアリー ナーバス アバウト トーキング トゥー ピープル アット ファースト",
    sentence_jp: "正直なところ、最初は人に話しかけるのがすごく緊張しました。",
    synonyms: [
      { word: "to be honest", pron: "トゥー ビー オネスト", mean: "正直に言えば" },
      { word: "truthfully", pron: "トルースフリー", mean: "正直に" },
    ],
    antonyms: [
      { word: "supposedly", pron: "サポウズドリー", mean: "〜らしい・建前では" },
    ],
  },
  {
    word: "kind of",
    word_pron: "カインド オブ",
    mean: "ちょっと、なんか〜な感じ",
    sentence: "It's kind of overwhelming being new here, but in a good way.",
    sentence_pron: "イッツ カインド オブ オーヴァーウェルミング ビーイング ニュー ヒア バット イン ア グッド ウェイ",
    sentence_jp: "ここが初めてで少し圧倒される感じもするけど、悪くないです。",
    synonyms: [
      { word: "sort of", pron: "ソート オブ", mean: "ちょっと〜な感じ" },
      { word: "a bit", pron: "ア ビット", mean: "少し" },
    ],
    antonyms: [
      { word: "totally", pron: "トウタリー", mean: "完全に" },
    ],
  },
  {
    word: "hang out",
    word_pron: "ハング アウト",
    mean: "一緒に過ごす、遊ぶ",
    sentence: "Do you want to hang out after class sometime?",
    sentence_pron: "ドゥー ユー ウォント トゥー ハング アウト アフター クラス サムタイム",
    sentence_jp: "いつか授業の後、一緒に過ごさない？",
    synonyms: [
      { word: "chill", pron: "チル", mean: "くつろぐ" },
      { word: "spend time", pron: "スペンド タイム", mean: "時間を過ごす" },
    ],
    antonyms: [
      { word: "stay home", pron: "ステイ ホウム", mean: "家にいる" },
    ],
    idioms: [
      { phrase: "hang out with someone", mean: "〜と一緒に過ごす、つるむ" },
      { phrase: "hang out somewhere", mean: "どこかでゆっくり過ごす" },
    ],
  },
  {
    word: "grab",
    word_pron: "グラブ",
    mean: "（食事・飲み物を）軽く食べる・飲みに行く",
    sentence: "Do you want to grab coffee between classes?",
    sentence_pron: "ドゥー ユー ウォント トゥー グラブ コフィー ビトウィーン クラシズ",
    sentence_jp: "授業の合間にコーヒーでも飲みに行かない？",
    synonyms: [
      { word: "get", pron: "ゲット", mean: "手に入れる・買う" },
      { word: "pick up", pron: "ピック アップ", mean: "買いに行く" },
    ],
    antonyms: [
      { word: "skip", pron: "スキップ", mean: "飛ばす・やめる" },
    ],
    idioms: [
      { phrase: "grab a bite (to eat)", mean: "軽く何か食べる" },
      { phrase: "grab someone's attention", mean: "〜の注意を引く" },
    ],
  },
  {
    word: "grab lunch",
    word_pron: "グラブ ランチ",
    mean: "ランチを食べに行く",
    sentence: "Let's grab lunch together — the Thai place near campus is really good.",
    sentence_pron: "レッツ グラブ ランチ トゥゲザー ザ タイ プレイス ニア キャンパス イズ リアリー グッド",
    sentence_jp: "一緒にランチしようよ。キャンパス近くのタイ料理が本当においしいんだよね。",
    synonyms: [
      { word: "eat lunch", pron: "イート ランチ", mean: "ランチを食べる" },
      { word: "have lunch", pron: "ハヴ ランチ", mean: "ランチをとる" },
    ],
    antonyms: [
      { word: "skip lunch", pron: "スキップ ランチ", mean: "ランチを抜く" },
    ],
  },
  {
    word: "free",
    word_pron: "フリー",
    mean: "暇な、空いている",
    sentence: "Are you free after your last class today?",
    sentence_pron: "アー ユー フリー アフター ユア ラスト クラス トゥデイ",
    sentence_jp: "今日の最後の授業が終わったら、暇？",
    synonyms: [
      { word: "available", pron: "アヴェイラブル", mean: "都合がいい" },
      { word: "not busy", pron: "ナット ビジー", mean: "忙しくない" },
    ],
    antonyms: [
      { word: "busy", pron: "ビジー", mean: "忙しい" },
      { word: "occupied", pron: "オキュパイド", mean: "手が離せない" },
    ],
    idioms: [
      { phrase: "feel free to", mean: "遠慮なく〜する" },
      { phrase: "free of charge", mean: "無料で、タダで" },
    ],
  },
  {
    word: "available",
    word_pron: "アヴェイラブル",
    mean: "都合がいい、時間がある",
    sentence: "I'm available on Tuesday and Thursday afternoons — how about you?",
    sentence_pron: "アイム アヴェイラブル オン チューズデイ アンド サーズデイ アフタヌーンズ ハウ アバウト ユー",
    sentence_jp: "火曜と木曜の午後なら都合がいいんだけど、あなたは？",
    synonyms: [
      { word: "free", pron: "フリー", mean: "空いている" },
      { word: "open", pron: "オープン", mean: "空きがある" },
    ],
    antonyms: [
      { word: "busy", pron: "ビジー", mean: "忙しい" },
      { word: "taken", pron: "テイクン", mean: "予定が入っている" },
    ],
  },
  {
    word: "sounds good",
    word_pron: "サウンズ グッド",
    mean: "いいね、そうしましょう",
    sentence: "Sounds good! Let's meet at the cafeteria at noon.",
    sentence_pron: "サウンズ グッド レッツ ミート アット ザ カフェテリア アット ヌーン",
    sentence_jp: "いいね！お昼にカフェテリアで会いましょう。",
    synonyms: [
      { word: "great", pron: "グレイト", mean: "いいね" },
      { word: "perfect", pron: "パーフェクト", mean: "完璧" },
    ],
    antonyms: [
      { word: "no thanks", pron: "ノー サンクス", mean: "結構です" },
    ],
  },
  {
    word: "let me check",
    word_pron: "レット ミー チェック",
    mean: "確認してみます",
    sentence: "Let me check my schedule — I think I'm free on Friday.",
    sentence_pron: "レット ミー チェック マイ スケジュール アイ シンク アイム フリー オン フライデイ",
    sentence_jp: "スケジュールを確認してみます。金曜は空いてると思います。",
    synonyms: [
      { word: "let me look", pron: "レット ミー ルック", mean: "確認させて" },
      { word: "hold on", pron: "ホウルド オン", mean: "ちょっと待って" },
    ],
    antonyms: [],
  },
  {
    word: "Instagram",
    word_pron: "インスタグラム",
    mean: "インスタグラム",
    sentence: "Are you on Instagram? I'd love to follow you!",
    sentence_pron: "アー ユー オン インスタグラム アイド ラヴ トゥー フォロー ユー",
    sentence_jp: "インスタやってる？フォローしたいな！",
    synonyms: [
      { word: "social media", pron: "ソウシャル メディア", mean: "SNS" },
      { word: "Insta", pron: "インスタ", mean: "インスタ（略称）" },
    ],
    antonyms: [],
  },
  {
    word: "handle",
    word_pron: "ハンドル",
    mean: "SNSのユーザー名",
    sentence: "What's your Instagram handle? I'll follow you right now.",
    sentence_pron: "ワッツ ユア インスタグラム ハンドル アイル フォロー ユー ライト ナウ",
    sentence_jp: "インスタのユーザー名は？今すぐフォローするね。",
    synonyms: [
      { word: "username", pron: "ユーザーネーム", mean: "ユーザー名" },
      { word: "screen name", pron: "スクリーン ネーム", mean: "表示名" },
    ],
    antonyms: [],
  },
  {
    word: "follow",
    word_pron: "フォロー",
    mean: "フォローする",
    sentence: "I followed you — follow me back when you get a chance!",
    sentence_pron: "アイ フォロウド ユー フォロー ミー バック ウェン ユー ゲット ア チャンス",
    sentence_jp: "フォローしたよ。機会があったらフォローバックしてね！",
    synonyms: [
      { word: "add", pron: "アド", mean: "追加する" },
      { word: "subscribe", pron: "サブスクライブ", mean: "購読する" },
    ],
    antonyms: [
      { word: "unfollow", pron: "アンフォロウ", mean: "フォローを外す" },
    ],
    idioms: [
      { phrase: "follow up", mean: "後日確認する、フォローアップする" },
      { phrase: "follow through", mean: "最後までやり遂げる" },
    ],
  },
  {
    word: "follow back",
    word_pron: "フォロー バック",
    mean: "フォローバックする",
    sentence: "She followed me back within five minutes — so sweet!",
    sentence_pron: "シー フォロウド ミー バック ウィズイン ファイブ ミニッツ ソー スウィート",
    sentence_jp: "5分以内にフォローバックしてくれました。優しい！",
    synonyms: [
      { word: "mutual follow", pron: "ミューチュアル フォロウ", mean: "相互フォロー" },
    ],
    antonyms: [
      { word: "not follow back", pron: "ナット フォロウ バック", mean: "フォローバックしない" },
    ],
  },
  {
    word: "DM",
    word_pron: "ディーエム",
    mean: "ダイレクトメッセージ（する）",
    sentence: "DM me when you're on your way and I'll save you a seat.",
    sentence_pron: "ディーエム ミー ウェン ユーア オン ユア ウェイ アンド アイル セイヴ ユー ア シート",
    sentence_jp: "向かってる時にDMして。席取っておくから。",
    synonyms: [
      { word: "direct message", pron: "ダイレクト メッセージ", mean: "ダイレクトメッセージ" },
      { word: "message", pron: "メッセージ", mean: "メッセージ" },
    ],
    antonyms: [
      { word: "post", pron: "ポスト", mean: "投稿する" },
    ],
  },
  {
    word: "account",
    word_pron: "アカウント",
    mean: "アカウント",
    sentence: "My account is private, so you'll have to send a follow request.",
    sentence_pron: "マイ アカウント イズ プライベート ソー ユール ハヴ トゥー センド ア フォロー リクエスト",
    sentence_jp: "アカウントが非公開なので、フォローリクエストを送ってね。",
    synonyms: [
      { word: "profile", pron: "プロファイル", mean: "プロフィール" },
      { word: "page", pron: "ペイジ", mean: "ページ" },
    ],
    antonyms: [],
  },
  {
    word: "exchange",
    word_pron: "エクスチェンジ",
    mean: "交換する",
    sentence: "We exchanged numbers so we could text about homework.",
    sentence_pron: "ウィー エクスチェンジド ナンバーズ ソー ウィー クッド テクスト アバウト ホウムワーク",
    sentence_jp: "宿題について連絡できるよう、電話番号を交換しました。",
    synonyms: [
      { word: "swap", pron: "スワップ", mean: "交換する" },
      { word: "share", pron: "シェア", mean: "共有する" },
    ],
    antonyms: [
      { word: "keep to yourself", pron: "キープ トゥー ユアセルフ", mean: "自分だけで持っておく" },
    ],
    idioms: [
      { phrase: "exchange views", mean: "意見を交わす" },
      { phrase: "in exchange for", mean: "〜と引き換えに" },
    ],
  },
  {
    word: "add",
    word_pron: "アド",
    mean: "（SNSで）追加する",
    sentence: "Add me on Instagram — I'll send you my handle.",
    sentence_pron: "アド ミー オン インスタグラム アイル センド ユー マイ ハンドル",
    sentence_jp: "インスタで追加して。ユーザー名送るね。",
    synonyms: [
      { word: "follow", pron: "フォロウ", mean: "フォローする" },
      { word: "connect", pron: "コネクト", mean: "つながる" },
    ],
    antonyms: [
      { word: "remove", pron: "リムーヴ", mean: "削除する" },
      { word: "block", pron: "ブロック", mean: "ブロックする" },
    ],
    idioms: [
      { phrase: "add up", mean: "合計する；つじつまが合う" },
      { phrase: "add to", mean: "〜を増やす、〜に加える" },
    ],
  },
  {
    word: "story",
    word_pron: "ストーリー",
    mean: "（SNSの）ストーリー",
    sentence: "I saw your story — that sunset photo was beautiful!",
    sentence_pron: "アイ ソー ユア ストーリー ザット サンセット フォウト ワズ ビューティフル",
    sentence_jp: "ストーリー見たよ。あの夕日の写真、きれいだったね！",
    synonyms: [
      { word: "post", pron: "ポスト", mean: "投稿" },
      { word: "update", pron: "アップデイト", mean: "更新" },
    ],
    antonyms: [],
  },
  {
    word: "invite",
    word_pron: "インヴァイト",
    mean: "誘う、招待する",
    sentence: "I invited her to join us for lunch and she said yes!",
    sentence_pron: "アイ インヴァイティド ハー トゥー ジョイン アス フォー ランチ アンド シー セッド イェス",
    sentence_jp: "ランチに一緒に来ないかと誘ったら、来てくれました！",
    synonyms: [
      { word: "ask", pron: "アスク", mean: "誘う" },
      { word: "welcome", pron: "ウェルカム", mean: "歓迎する" },
    ],
    antonyms: [
      { word: "exclude", pron: "エクスクルード", mean: "除外する" },
    ],
    idioms: [
      { phrase: "invite someone over", mean: "家に人を招く" },
      { phrase: "invite trouble", mean: "問題を自ら招く" },
    ],
  },
  {
    word: "join",
    word_pron: "ジョイン",
    mean: "一緒に加わる",
    sentence: "Do you want to join us? We're heading to the café after class.",
    sentence_pron: "ドゥー ユー ウォント トゥー ジョイン アス ウィーア ヘディング トゥー ザ カフェ アフター クラス",
    sentence_jp: "一緒に来ない？授業の後カフェに行くんだけど。",
    synonyms: [
      { word: "come along", pron: "カム アロング", mean: "一緒に来る" },
      { word: "participate", pron: "パーティシペイト", mean: "参加する" },
    ],
    antonyms: [
      { word: "leave", pron: "リーヴ", mean: "去る" },
      { word: "skip", pron: "スキップ", mean: "欠席する" },
    ],
    idioms: [
      { phrase: "join forces", mean: "力を合わせる、協力する" },
      { phrase: "join in", mean: "加わる、一緒に参加する" },
    ],
  },
  {
    word: "split the bill",
    word_pron: "スプリット ザ ビル",
    mean: "割り勘にする",
    sentence: "Let's split the bill evenly — it's easier that way.",
    sentence_pron: "レッツ スプリット ザ ビル イーヴンリー イッツ イージア ザット ウェイ",
    sentence_jp: "均等に割り勘にしましょう。その方が楽だから。",
    synonyms: [
      { word: "go dutch", pron: "ゴー ダッチ", mean: "割り勘にする" },
      { word: "share the cost", pron: "シェア ザ コスト", mean: "費用を分ける" },
    ],
    antonyms: [
      { word: "my treat", pron: "マイ トリート", mean: "私のおごり" },
    ],
  },
  {
    word: "my treat",
    word_pron: "マイ トリート",
    mean: "私がおごります",
    sentence: "It's my treat today — you paid last time!",
    sentence_pron: "イッツ マイ トリート トゥデイ ユー ペイド ラスト タイム",
    sentence_jp: "今日は私のおごりね。前回あなたが払ってくれたから！",
    synonyms: [
      { word: "I'll pay", pron: "アイル ペイ", mean: "私が払う" },
      { word: "on me", pron: "オン ミー", mean: "私のおごり" },
    ],
    antonyms: [
      { word: "split the bill", pron: "スプリット ザ ビル", mean: "割り勘" },
    ],
  },
  {
    word: "go dutch",
    word_pron: "ゴー ダッチ",
    mean: "割り勘にする",
    sentence: "Should we go dutch, or do you want me to get this one?",
    sentence_pron: "シュッド ウィー ゴー ダッチ オア ドゥー ユー ウォント ミー トゥー ゲット ディス ワン",
    sentence_jp: "割り勘にする？それとも今回は私が払おうか？",
    synonyms: [
      { word: "split the bill", pron: "スプリット ザ ビル", mean: "割り勘" },
      { word: "share", pron: "シェア", mean: "分担する" },
    ],
    antonyms: [
      { word: "my treat", pron: "マイ トリート", mean: "私のおごり" },
    ],
  },
  {
    word: "nearby",
    word_pron: "ニアバイ",
    mean: "近くに",
    sentence: "There's a great coffee shop nearby — want to check it out?",
    sentence_pron: "ゼアズ ア グレイト コフィー ショップ ニアバイ ウォント トゥー チェック イット アウト",
    sentence_jp: "近くにいいカフェがあるんだよね。行ってみない？",
    synonyms: [
      { word: "close", pron: "クロウス", mean: "近い" },
      { word: "around the corner", pron: "アラウンド ザ コーナー", mean: "すぐそこ" },
    ],
    antonyms: [
      { word: "far away", pron: "ファー アウェイ", mean: "遠い" },
    ],
  },
  {
    word: "check it out",
    word_pron: "チェック イット アウト",
    mean: "試してみる、見てみる",
    sentence: "I heard about a new bubble tea place — let's check it out!",
    sentence_pron: "アイ ハード アバウト ア ニュー バブル ティー プレイス レッツ チェック イット アウト",
    sentence_jp: "新しいタピオカのお店ができたって聞いた。行ってみよ！",
    synonyms: [
      { word: "give it a try", pron: "ギヴ イット ア トライ", mean: "試してみる" },
      { word: "try it", pron: "トライ イット", mean: "試す" },
    ],
    antonyms: [
      { word: "skip it", pron: "スキップ イット", mean: "やめる" },
    ],
  },
  {
    word: "recommend",
    word_pron: "レコメンド",
    mean: "勧める、おすすめする",
    sentence: "What do you recommend here? This is my first time at this café.",
    sentence_pron: "ワット ドゥー ユー レコメンド ヒア ディス イズ マイ ファースト タイム アット ディス カフェ",
    sentence_jp: "ここで何がおすすめ？このカフェ初めて来たんだ。",
    synonyms: [
      { word: "suggest", pron: "サジェスト", mean: "勧める" },
      { word: "advise", pron: "アドヴァイズ", mean: "アドバイスする" },
    ],
    antonyms: [
      { word: "discourage", pron: "ディスカリッジ", mean: "止める" },
    ],
  },
  {
    word: "order",
    word_pron: "オーダー",
    mean: "注文する",
    sentence: "Have you ordered yet? I'll go up with you if you want.",
    sentence_pron: "ハヴ ユー オーダード イェット アイル ゴー アップ ウィズ ユー イフ ユー ウォント",
    sentence_jp: "もう注文した？よかったら一緒に行くよ。",
    synonyms: [
      { word: "get", pron: "ゲット", mean: "頼む" },
      { word: "request", pron: "リクエスト", mean: "注文する" },
    ],
    antonyms: [
      { word: "cancel", pron: "キャンセル", mean: "キャンセルする" },
    ],
    idioms: [
      { phrase: "order around", mean: "あれこれ命令する、こき使う" },
      { phrase: "a tall order", mean: "難しい注文、無理難題" },
    ],
  },
  {
    word: "for here or to go",
    word_pron: "フォー ヒア オア トゥー ゴー",
    mean: "店内召し上がりですか、お持ち帰りですか",
    sentence: "For here or to go? — For here, please. We'll sit by the window.",
    sentence_pron: "フォー ヒア オア トゥー ゴー フォー ヒア プリーズ ウィール シット バイ ザ ウィンドウ",
    sentence_jp: "店内でよろしいですか、お持ち帰りですか？ ―― 店内で。窓際に座ります。",
    synonyms: [
      { word: "dine-in or takeout", pron: "ダインイン オア テイクアウト", mean: "店内かテイクアウト" },
    ],
    antonyms: [],
  },
  {
    word: "connection",
    word_pron: "コネクション",
    mean: "つながり、縁",
    sentence: "It's amazing how quickly you can make a real connection with someone.",
    sentence_pron: "イッツ アメイジング ハウ クウィックリー ユー キャン メイク ア リール コネクション ウィズ サムワン",
    sentence_jp: "こんなに早く誰かと本当のつながりが生まれるのは不思議です。",
    synonyms: [
      { word: "bond", pron: "ボンド", mean: "絆" },
      { word: "relationship", pron: "リレーションシップ", mean: "関係" },
    ],
    antonyms: [
      { word: "disconnect", pron: "ディスコネクト", mean: "切断・疎遠" },
    ],
  },
  {
    word: "keep in touch",
    word_pron: "キープ イン タッチ",
    mean: "連絡を取り合う",
    sentence: "Let's keep in touch — text me anytime!",
    sentence_pron: "レッツ キープ イン タッチ テクスト ミー エニータイム",
    sentence_jp: "連絡取り合おうね。いつでもメッセージして！",
    synonyms: [
      { word: "stay in contact", pron: "ステイ イン コンタクト", mean: "連絡を保つ" },
      { word: "reach out", pron: "リーチ アウト", mean: "連絡を取る" },
    ],
    antonyms: [
      { word: "lose touch", pron: "ルーズ タッチ", mean: "連絡が途絶える" },
    ],
  },
  {
    word: "outgoing",
    word_pron: "アウトゴーイング",
    mean: "社交的な、外向きな",
    sentence: "She's really outgoing — she introduced herself to everyone on day one.",
    sentence_pron: "シーズ リアリー アウトゴーイング シー イントロデュースト ハーセルフ トゥー エブリワン オン デイ ワン",
    sentence_jp: "彼女はとても社交的で、初日からみんなに自己紹介していました。",
    synonyms: [
      { word: "sociable", pron: "ソウシャブル", mean: "社交的な" },
      { word: "extroverted", pron: "エクストロヴァーティド", mean: "外向的な" },
    ],
    antonyms: [
      { word: "shy", pron: "シャイ", mean: "内気な" },
      { word: "introverted", pron: "イントロヴァーティド", mean: "内向的な" },
    ],
  },
  {
    word: "shy",
    word_pron: "シャイ",
    mean: "恥ずかしがり屋の",
    sentence: "I'm naturally shy, but I'm pushing myself to be more social here.",
    sentence_pron: "アイム ナチュラリー シャイ バット アイム プッシング マイセルフ トゥー ビー モア ソウシャル ヒア",
    sentence_jp: "もともと恥ずかしがり屋ですが、ここではもっと社交的になろうと自分を奮い立たせています。",
    synonyms: [
      { word: "introverted", pron: "イントロヴァーティド", mean: "内向的な" },
      { word: "reserved", pron: "リザーブド", mean: "控えめな" },
    ],
    antonyms: [
      { word: "outgoing", pron: "アウトゴーイング", mean: "社交的な" },
      { word: "bold", pron: "ボウルド", mean: "大胆な" },
    ],
  },
  {
    word: "compliment",
    word_pron: "コンプリメント",
    mean: "褒め言葉、褒める",
    sentence: "She complimented my bag and it broke the ice instantly.",
    sentence_pron: "シー コンプリメンティド マイ バッグ アンド イット ブロウク ジ アイス インスタントリー",
    sentence_jp: "彼女がカバンを褒めてくれて、それで一気に打ち解けました。",
    synonyms: [
      { word: "praise", pron: "プレイズ", mean: "褒める" },
      { word: "flatter", pron: "フラター", mean: "おだてる" },
    ],
    antonyms: [
      { word: "criticize", pron: "クリティサイズ", mean: "批判する" },
      { word: "insult", pron: "インサルト", mean: "侮辱する" },
    ],
  },
  {
    word: "break the ice",
    word_pron: "ブレイク ジ アイス",
    mean: "打ち解ける、場を和ませる",
    sentence: "Asking about someone's hometown is a great way to break the ice.",
    sentence_pron: "アスキング アバウト サムワンズ ホウムタウン イズ ア グレイト ウェイ トゥー ブレイク ジ アイス",
    sentence_jp: "出身地を聞くのは場を和ませるのにとてもいい方法です。",
    synonyms: [
      { word: "warm up", pron: "ウォームアップ", mean: "打ち解ける" },
      { word: "get comfortable", pron: "ゲット カンフォータブル", mean: "くつろぐ" },
    ],
    antonyms: [
      { word: "create awkwardness", pron: "クリエイト オークワードネス", mean: "気まずくする" },
    ],
  },
  {
    word: "in common",
    word_pron: "イン コモン",
    mean: "共通して",
    sentence: "We have so much in common — we both love K-dramas and ramen!",
    sentence_pron: "ウィー ハヴ ソー マッチ イン コモン ウィー ボウス ラヴ ケイドラマズ アンド ラーメン",
    sentence_jp: "共通点がたくさんある！二人とも韓国ドラマとラーメンが大好き！",
    synonyms: [
      { word: "shared", pron: "シェアード", mean: "共通の" },
      { word: "mutual", pron: "ミューチュアル", mean: "相互の" },
    ],
    antonyms: [
      { word: "different", pron: "ディファレント", mean: "異なる" },
    ],
  },
  {
    word: "same here",
    word_pron: "セイム ヒア",
    mean: "私も同じです（同意）",
    sentence: "I was nervous on the first day too. — Same here!",
    sentence_pron: "アイ ワズ ナーバス オン ザ ファースト デイ トゥー セイム ヒア",
    sentence_jp: "初日は緊張したよ。―― 私もです！",
    synonyms: [
      { word: "me too", pron: "ミー トゥー", mean: "私も" },
      { word: "same", pron: "セイム", mean: "同じ" },
    ],
    antonyms: [
      { word: "not me", pron: "ナット ミー", mean: "私は違う" },
    ],
  },
  {
    word: "hang on",
    word_pron: "ハング オン",
    mean: "ちょっと待って",
    sentence: "Hang on — let me save your number before I forget.",
    sentence_pron: "ハング オン レット ミー セイヴ ユア ナンバー ビフォー アイ フォーゲット",
    sentence_jp: "ちょっと待って。忘れる前に電話番号を保存させて。",
    synonyms: [
      { word: "wait", pron: "ウェイト", mean: "待って" },
      { word: "hold on", pron: "ホウルド オン", mean: "ちょっと待って" },
    ],
    antonyms: [
      { word: "go ahead", pron: "ゴー アヘッド", mean: "どうぞ" },
    ],
  },
  {
    word: "I'd love to",
    word_pron: "アイド ラヴ トゥー",
    mean: "ぜひそうしたいです",
    sentence: "I'd love to come! What time are you thinking?",
    sentence_pron: "アイド ラヴ トゥー カム ワット タイム アー ユー シンキング",
    sentence_jp: "ぜひ行きたい！何時を考えてる？",
    synonyms: [
      { word: "I'd be happy to", pron: "アイド ビー ハッピー トゥー", mean: "喜んで" },
      { word: "sounds great", pron: "サウンズ グレイト", mean: "ぜひ" },
    ],
    antonyms: [
      { word: "I'd rather not", pron: "アイド ラザー ナット", mean: "遠慮します" },
      { word: "no thanks", pron: "ノー サンクス", mean: "いいえ結構です" },
    ],
  },
  {
    word: "can't wait",
    word_pron: "キャント ウェイト",
    mean: "楽しみにしてる",
    sentence: "I can't wait — it's going to be so much fun!",
    sentence_pron: "アイ キャント ウェイト イッツ ゴーイング トゥー ビー ソー マッチ ファン",
    sentence_jp: "楽しみすぎる！すごく楽しくなりそう！",
    synonyms: [
      { word: "I'm excited", pron: "アイム エキサイティド", mean: "わくわくしてる" },
      { word: "looking forward to it", pron: "ルッキング フォーワード トゥー イット", mean: "楽しみにしている" },
    ],
    antonyms: [
      { word: "dreading it", pron: "ドレッディング イット", mean: "嫌で仕方ない" },
    ],
  },
  {
    word: "friend",
    word_pron: "フレンド",
    mean: "友だち",
    sentence: "I finally made my first real friend in America today.",
    sentence_pron: "アイ ファイナリー メイド マイ ファースト リール フレンド イン アメリカ トゥデイ",
    sentence_jp: "今日ついにアメリカで初めての本当の友だちができました。",
    synonyms: [
      { word: "buddy", pron: "バディ", mean: "友達" },
      { word: "pal", pron: "パル", mean: "仲間" },
    ],
    antonyms: [
      { word: "stranger", pron: "ストレンジャー", mean: "見知らぬ人" },
      { word: "enemy", pron: "エネミー", mean: "敵" },
    ],
    idioms: [
      { phrase: "make friends with", mean: "〜と友達になる" },
      { phrase: "fair-weather friend", mean: "都合のいい時だけの友達" },
    ],
  },
];
