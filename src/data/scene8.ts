import type { VocabularyItem } from "@/types/vocabulary";

/** シーン8：美容と自分磨き（50語） */
export const scene8Vocabulary: VocabularyItem[] = [
  {
    word: "book",
    word_pron: "ブック",
    mean: "予約する（美容系）",
    sentence: "I'd like to book an appointment for a manicure this Saturday.",
    sentence_pron: "アイド ライク トゥー ブック アン アポイントメント フォー ア マニキュア ディス サタデイ",
    sentence_jp: "今週土曜日にネイルの予約を取りたいのですが。",
    synonyms: [
      { word: "reserve", pron: "リザーヴ", mean: "予約する" },
      { word: "make an appointment", pron: "メイク アン アポイントメント", mean: "予約を取る" },
    ],
    antonyms: [
      { word: "cancel", pron: "キャンセル", mean: "キャンセルする" },
    ],
    idioms: [
      { phrase: "book in advance", mean: "前もって予約する" },
      { phrase: "book solid", mean: "予約でいっぱいの状態" },
    ],
  },
  {
    word: "available",
    word_pron: "アヴェイラブル",
    mean: "空いている（予約枠が）",
    sentence: "Is two o'clock on Friday available? I'd prefer the afternoon.",
    sentence_pron: "イズ トゥー オクロック オン フライデイ アヴェイラブル アイド プリファー ジ アフタヌーン",
    sentence_jp: "金曜の午後2時は空いていますか？午後の方がいいのですが。",
    synonyms: [
      { word: "open", pron: "オープン", mean: "空き枠がある" },
      { word: "free", pron: "フリー", mean: "空いている" },
    ],
    antonyms: [
      { word: "booked", pron: "ブックト", mean: "予約済みの" },
      { word: "unavailable", pron: "アナヴェイラブル", mean: "空きなし" },
    ],
  },
  {
    word: "walk-in",
    word_pron: "ウォークイン",
    mean: "予約なしで来店する",
    sentence: "Do you accept walk-ins, or do I need a reservation?",
    sentence_pron: "ドゥー ユー アクセプト ウォークインズ オア ドゥー アイ ニード ア レザヴェーション",
    sentence_jp: "予約なしでも来店できますか？それとも予約が必要ですか？",
    synonyms: [
      { word: "drop in", pron: "ドロップ イン", mean: "ふらっと立ち寄る" },
    ],
    antonyms: [
      { word: "reservation", pron: "レザヴェーション", mean: "予約" },
      { word: "appointment", pron: "アポイントメント", mean: "予約" },
    ],
  },
  {
    word: "reschedule",
    word_pron: "リスケジュール",
    mean: "予約を変更する",
    sentence: "Something came up — can I reschedule my appointment to next week?",
    sentence_pron: "サムシング ケイム アップ キャン アイ リスケジュール マイ アポイントメント トゥー ネクスト ウィーク",
    sentence_jp: "急用が入ってしまって。予約を来週に変更できますか？",
    synonyms: [
      { word: "change", pron: "チェンジ", mean: "変更する" },
      { word: "move", pron: "ムーヴ", mean: "日程を動かす" },
    ],
    antonyms: [
      { word: "confirm", pron: "コンファーム", mean: "確認する" },
      { word: "keep", pron: "キープ", mean: "そのまま維持する" },
    ],
  },
  {
    word: "cancel",
    word_pron: "キャンセル",
    mean: "キャンセルする",
    sentence: "I need to cancel my four o'clock — I'm so sorry for the late notice.",
    sentence_pron: "アイ ニード トゥー キャンセル マイ フォー オクロック アイム ソー ソーリー フォー ザ レイト ノウティス",
    sentence_jp: "4時の予約をキャンセルしたいのですが。直前のご連絡で大変申し訳ありません。",
    synonyms: [
      { word: "call off", pron: "コール オフ", mean: "中止する" },
      { word: "drop", pron: "ドロップ", mean: "取りやめる" },
    ],
    antonyms: [
      { word: "book", pron: "ブック", mean: "予約する" },
      { word: "confirm", pron: "コンファーム", mean: "確認する" },
    ],
    idioms: [
      { phrase: "cancel out", mean: "相殺する、打ち消し合う" },
      { phrase: "cancel on someone", mean: "約束をドタキャンする" },
    ],
  },
  {
    word: "nail salon",
    word_pron: "ネイル サロン",
    mean: "ネイルサロン",
    sentence: "There's a nail salon two blocks from campus with great reviews.",
    sentence_pron: "ゼアズ ア ネイル サロン トゥー ブロックス フロム キャンパス ウィズ グレイト リヴューズ",
    sentence_jp: "キャンパスから2ブロックのところに評判のいいネイルサロンがあります。",
    synonyms: [
      { word: "nail studio", pron: "ネイル スタジオ", mean: "ネイルスタジオ" },
      { word: "nail bar", pron: "ネイル バー", mean: "ネイルショップ" },
    ],
    antonyms: [],
  },
  {
    word: "manicure",
    word_pron: "マニキュア",
    mean: "マニキュア（手のネイル）",
    sentence: "I'd like a gel manicure, please — something simple and clean.",
    sentence_pron: "アイド ライク ア ジェル マニキュア プリーズ サムシング シンプル アンド クリーン",
    sentence_jp: "ジェルネイルをお願いします。シンプルで清潔感のあるものがいいです。",
    synonyms: [
      { word: "nail treatment", pron: "ネイル トリートメント", mean: "ネイルケア" },
    ],
    antonyms: [
      { word: "pedicure", pron: "ペディキュア", mean: "ペディキュア（足のネイル）" },
    ],
  },
  {
    word: "pedicure",
    word_pron: "ペディキュア",
    mean: "ペディキュア（足のネイル）",
    sentence: "Can I get a manicure and pedicure together? Is there a package deal?",
    sentence_pron: "キャン アイ ゲット ア マニキュア アンド ペディキュア トゥゲザー イズ ゼア ア パッケッジ ディール",
    sentence_jp: "マニキュアとペディキュアを一緒にできますか？セット料金はありますか？",
    synonyms: [
      { word: "foot treatment", pron: "フット トリートメント", mean: "フットケア" },
    ],
    antonyms: [
      { word: "manicure", pron: "マニキュア", mean: "マニキュア（手のネイル）" },
    ],
  },
  {
    word: "gel nails",
    word_pron: "ジェル ネイルズ",
    mean: "ジェルネイル",
    sentence: "Gel nails last much longer than regular polish — usually two to three weeks.",
    sentence_pron: "ジェル ネイルズ ラスト マッチ ロンガー ザン レギュラー ポリッシュ ユージュアリー トゥー トゥー スリー ウィークス",
    sentence_jp: "ジェルネイルは普通のポリッシュより長持ちします。通常2〜3週間もちます。",
    synonyms: [
      { word: "gel polish", pron: "ジェル ポリッシュ", mean: "ジェルポリッシュ" },
    ],
    antonyms: [
      { word: "regular polish", pron: "レギュラー ポリッシュ", mean: "通常のネイルポリッシュ" },
    ],
  },
  {
    word: "nail polish",
    word_pron: "ネイル ポリッシュ",
    mean: "マニキュア液、ネイルポリッシュ",
    sentence: "Could I see your nail polish color chart, please?",
    sentence_pron: "クッダイ シー ユア ネイル ポリッシュ カラー チャート プリーズ",
    sentence_jp: "ネイルポリッシュのカラーチャートを見せていただけますか？",
    synonyms: [
      { word: "lacquer", pron: "ラッカー", mean: "ラッカー（塗料）" },
      { word: "varnish", pron: "ヴァーニッシュ", mean: "ニス・ポリッシュ" },
    ],
    antonyms: [
      { word: "nail remover", pron: "ネイル リムーバー", mean: "ネイルリムーバー" },
    ],
  },
  {
    word: "nail design",
    word_pron: "ネイル デザイン",
    mean: "ネイルデザイン",
    sentence: "I'd like a simple nail design — maybe a nude base with a gold line.",
    sentence_pron: "アイド ライク ア シンプル ネイル デザイン メイビー ア ニュード ベース ウィズ ア ゴウルド ライン",
    sentence_jp: "シンプルなネイルデザインがいいです。ヌードベースにゴールドラインとかどうでしょう。",
    synonyms: [
      { word: "nail art", pron: "ネイル アート", mean: "ネイルアート" },
      { word: "nail pattern", pron: "ネイル パターン", mean: "ネイル柄" },
    ],
    antonyms: [
      { word: "plain nails", pron: "プレイン ネイルズ", mean: "無地のネイル" },
    ],
  },
  {
    word: "french tip",
    word_pron: "フレンチ ティップ",
    mean: "フレンチネイル",
    sentence: "Can you do a classic French tip? I like the timeless look.",
    sentence_pron: "キャン ユー ドゥー ア クラシック フレンチ ティップ アイ ライク ザ タイムレス ルック",
    sentence_jp: "クラシックなフレンチネイルにしてもらえますか？シンプルな感じが好きなので。",
    synonyms: [
      { word: "French manicure", pron: "フレンチ マニキュア", mean: "フレンチマニキュア" },
    ],
    antonyms: [
      { word: "solid color", pron: "ソリッド カラー", mean: "単色ネイル" },
    ],
  },
  {
    word: "remove",
    word_pron: "リムーブ",
    mean: "（ネイルを）オフする",
    sentence: "Could you remove my old gel nails first before applying new ones?",
    sentence_pron: "クッジュー リムーブ マイ オウルド ジェル ネイルズ ファースト ビフォー アプライイング ニュー ワンズ",
    sentence_jp: "新しいネイルをする前に、古いジェルネイルをオフしてもらえますか？",
    synonyms: [
      { word: "take off", pron: "テイク オフ", mean: "取り除く" },
      { word: "soak off", pron: "ソーク オフ", mean: "浸して取り除く" },
    ],
    antonyms: [
      { word: "apply", pron: "アプライ", mean: "塗る・つける" },
    ],
    idioms: [
      { phrase: "remove all doubt", mean: "疑いを完全に払拭する" },
      { phrase: "remove oneself from", mean: "〜から距離を置く、立ち去る" },
    ],
  },
  {
    word: "cuticle",
    word_pron: "キューティクル",
    mean: "甘皮（ネイルの）",
    sentence: "Please be gentle with the cuticles — mine are a bit sensitive.",
    sentence_pron: "プリーズ ビー ジェントル ウィズ ザ キューティクルズ マインズ アー ア ビット センシティヴ",
    sentence_jp: "甘皮は優しくお願いします。私のはちょっと敏感なので。",
    synonyms: [
      { word: "nail skin", pron: "ネイル スキン", mean: "ネイル周りの皮膚" },
    ],
    antonyms: [],
  },
  {
    word: "hair salon",
    word_pron: "ヘア サロン",
    mean: "美容院",
    sentence: "I finally found a hair salon that specializes in Asian hair.",
    sentence_pron: "アイ ファイナリー ファウンド ア ヘア サロン ザット スペシャライズズ イン エイジャン ヘア",
    sentence_jp: "ようやくアジア系の髪を得意とする美容院を見つけました。",
    synonyms: [
      { word: "beauty salon", pron: "ビューティー サロン", mean: "美容院" },
      { word: "barbershop", pron: "バーバーショップ", mean: "理髪店" },
    ],
    antonyms: [],
  },
  {
    word: "stylist",
    word_pron: "スタイリスト",
    mean: "スタイリスト、美容師",
    sentence: "My stylist is amazing — she always understands exactly what I want.",
    sentence_pron: "マイ スタイリスト イズ アメイジング シー オールウェイズ アンダースタンズ エグザクトリー ワット アイ ウォント",
    sentence_jp: "担当のスタイリストはすごい。私が求めるものをいつもぴったり理解してくれます。",
    synonyms: [
      { word: "hairdresser", pron: "ヘアドレッサー", mean: "美容師" },
      { word: "hair artist", pron: "ヘア アーティスト", mean: "ヘアアーティスト" },
    ],
    antonyms: [
      { word: "customer", pron: "カスタマー", mean: "お客さん" },
    ],
  },
  {
    word: "haircut",
    word_pron: "ヘアカット",
    mean: "カット",
    sentence: "Just a haircut today — no color, please.",
    sentence_pron: "ジャスト ア ヘアカット トゥデイ ノー カラー プリーズ",
    sentence_jp: "今日はカットだけでお願いします。カラーはなしで。",
    synonyms: [
      { word: "trim", pron: "トリム", mean: "カット（少量）" },
      { word: "cut", pron: "カット", mean: "カット" },
    ],
    antonyms: [
      { word: "grow out", pron: "グロウ アウト", mean: "伸ばす" },
    ],
  },
  {
    word: "trim",
    word_pron: "トリム",
    mean: "毛先だけ整える、少しカットする",
    sentence: "Just a trim, please — I want to keep the length.",
    sentence_pron: "ジャスト ア トリム プリーズ アイ ウォント トゥー キープ ザ レングス",
    sentence_jp: "毛先だけ整えてください。長さはキープしたいんです。",
    synonyms: [
      { word: "snip", pron: "スニップ", mean: "少し切る" },
      { word: "tidy up", pron: "タイディ アップ", mean: "整える" },
    ],
    antonyms: [
      { word: "chop off", pron: "チョップ オフ", mean: "ばっさり切る" },
    ],
  },
  {
    word: "keep the length",
    word_pron: "キープ ザ レングス",
    mean: "長さをキープする",
    sentence: "Please keep the length — I'm growing my hair out.",
    sentence_pron: "プリーズ キープ ザ レングス アイム グロウイング マイ ヘア アウト",
    sentence_jp: "長さはキープしてください。伸ばしている最中なので。",
    synonyms: [
      { word: "maintain the length", pron: "メインテイン ザ レングス", mean: "長さを保つ" },
    ],
    antonyms: [
      { word: "cut shorter", pron: "カット ショーター", mean: "短くカットする" },
    ],
  },
  {
    word: "shorter",
    word_pron: "ショーター",
    mean: "もっと短く",
    sentence: "Can you go a little shorter? About two inches shorter than this.",
    sentence_pron: "キャン ユー ゴー ア リトル ショーター アバウト トゥー インチズ ショーター ザン ディス",
    sentence_jp: "もう少し短くしてもらえますか？今より2インチほど短くしてください。",
    synonyms: [
      { word: "cropped", pron: "クロップト", mean: "刈り込んだ" },
      { word: "cut back", pron: "カット バック", mean: "短くする" },
    ],
    antonyms: [
      { word: "longer", pron: "ロンガー", mean: "もっと長く" },
    ],
  },
  {
    word: "layers",
    word_pron: "レイヤーズ",
    mean: "レイヤー（段差）を入れる",
    sentence: "I'd love some layers to add movement and volume.",
    sentence_pron: "アイド ラヴ サム レイヤーズ トゥー アド ムーヴメント アンド ヴォリューム",
    sentence_jp: "動きとボリュームを出すために、レイヤーを入れてほしいんです。",
    synonyms: [
      { word: "steps", pron: "ステップス", mean: "段差（髪の）" },
    ],
    antonyms: [
      { word: "blunt cut", pron: "ブラント カット", mean: "ワンレングス" },
    ],
  },
  {
    word: "bangs",
    word_pron: "バングズ",
    mean: "前髪",
    sentence: "Can you cut my bangs? They've gotten too long.",
    sentence_pron: "キャン ユー カット マイ バングズ ゼイヴ ガットン トゥー ロング",
    sentence_jp: "前髪をカットしてもらえますか？長くなりすぎて。",
    synonyms: [
      { word: "fringe", pron: "フリンジ", mean: "前髪（英）" },
    ],
    antonyms: [
      { word: "no bangs", pron: "ノー バングズ", mean: "前髪なし" },
    ],
  },
  {
    word: "highlights",
    word_pron: "ハイライツ",
    mean: "ハイライト（部分染め）",
    sentence: "I'm thinking about adding some highlights around the face.",
    sentence_pron: "アイム シンキング アバウト アディング サム ハイライツ アラウンド ザ フェイス",
    sentence_jp: "顔まわりにハイライトを入れようかなと思っています。",
    synonyms: [
      { word: "partial color", pron: "パーシャル カラー", mean: "部分染め" },
      { word: "streaks", pron: "ストリークス", mean: "メッシュカラー" },
    ],
    antonyms: [
      { word: "lowlights", pron: "ロウライツ", mean: "ローライト（暗め部分染め）" },
      { word: "solid color", pron: "ソリッド カラー", mean: "単色" },
    ],
  },
  {
    word: "hair color",
    word_pron: "ヘア カラー",
    mean: "ヘアカラー",
    sentence: "I want a subtle hair color — nothing too dramatic.",
    sentence_pron: "アイ ウォント ア サトル ヘア カラー ナッシング トゥー ドラマティック",
    sentence_jp: "派手すぎないヘアカラーがいいです。ナチュラルな感じで。",
    synonyms: [
      { word: "hair dye", pron: "ヘア ダイ", mean: "ヘアダイ" },
      { word: "tint", pron: "ティント", mean: "染料" },
    ],
    antonyms: [
      { word: "natural color", pron: "ナチュラル カラー", mean: "地毛の色" },
    ],
  },
  {
    word: "blow dry",
    word_pron: "ブロー ドライ",
    mean: "ブローする、乾燥させる",
    sentence: "Could you blow dry it straight? I like a smooth finish.",
    sentence_pron: "クッジュー ブロー ドライ イット ストレイト アイ ライク ア スムース フィニッシュ",
    sentence_jp: "ストレートにブローしてもらえますか？つるんとした仕上がりが好きなので。",
    synonyms: [
      { word: "dry", pron: "ドライ", mean: "乾かす" },
      { word: "style", pron: "スタイル", mean: "スタイリングする" },
    ],
    antonyms: [
      { word: "air dry", pron: "エア ドライ", mean: "自然乾燥" },
    ],
  },
  {
    word: "a little off",
    word_pron: "ア リトル オフ",
    mean: "少しだけカットする",
    sentence: "Just take a little off the ends — I really don't want it too short.",
    sentence_pron: "ジャスト テイク ア リトル オフ ジ エンズ アイ リアリー ドント ウォント イット トゥー ショート",
    sentence_jp: "毛先を少しだけカットしてください。あまり短くしたくないので。",
    synonyms: [
      { word: "just a trim", pron: "ジャスト ア トリム", mean: "少しだけカット" },
    ],
    antonyms: [
      { word: "take a lot off", pron: "テイク ア ロット オフ", mean: "たくさん切る" },
    ],
  },
  {
    word: "split ends",
    word_pron: "スプリット エンズ",
    mean: "枝毛",
    sentence: "I have a lot of split ends — can you clean those up?",
    sentence_pron: "アイ ハヴ ア ロット オブ スプリット エンズ キャン ユー クリーン ゾウズ アップ",
    sentence_jp: "枝毛がたくさんあって。整えてもらえますか？",
    synonyms: [
      { word: "damaged ends", pron: "ダメージド エンズ", mean: "傷んだ毛先" },
    ],
    antonyms: [
      { word: "healthy hair", pron: "ヘルシー ヘア", mean: "健康な髪" },
    ],
  },
  {
    word: "texture",
    word_pron: "テクスチャー",
    mean: "毛の質感、テクスチャー",
    sentence: "My hair has a lot of texture — it's naturally wavy.",
    sentence_pron: "マイ ヘア ハズ ア ロット オブ テクスチャー イッツ ナチュラリー ウェイヴィー",
    sentence_jp: "私の髪は質感があります。生まれつきウェーブがかかっているんです。",
    synonyms: [
      { word: "feel", pron: "フィール", mean: "手触り" },
      { word: "quality", pron: "クォリティ", mean: "質" },
    ],
    antonyms: [
      { word: "smooth", pron: "スムース", mean: "すべすべの" },
      { word: "straight", pron: "ストレイト", mean: "まっすぐの" },
    ],
  },
  {
    word: "massage",
    word_pron: "マサージ",
    mean: "マッサージ",
    sentence: "I booked a sixty-minute massage to treat myself after a long week.",
    sentence_pron: "アイ ブックト ア シクスティ ミニット マサージ トゥー トリート マイセルフ アフター ア ロング ウィーク",
    sentence_jp: "長い一週間を頑張った自分へのご褒美に、60分のマッサージを予約しました。",
    synonyms: [
      { word: "bodywork", pron: "ボディワーク", mean: "ボディケア" },
      { word: "rub", pron: "ラブ", mean: "もみほぐし" },
    ],
    antonyms: [],
  },
  {
    word: "pressure",
    word_pron: "プレッシャー",
    mean: "圧力、マッサージの強さ",
    sentence: "Could you increase the pressure a little? I like it firm.",
    sentence_pron: "クッジュー インクリース ザ プレッシャー ア リトル アイ ライク イット ファーム",
    sentence_jp: "もう少し強くしてもらえますか？しっかり目が好きなので。",
    synonyms: [
      { word: "force", pron: "フォース", mean: "力" },
      { word: "intensity", pron: "インテンシティ", mean: "強さ" },
    ],
    antonyms: [
      { word: "lightness", pron: "ライトネス", mean: "軽さ" },
    ],
    idioms: [
      { phrase: "under pressure", mean: "プレッシャーを受けて、重圧の下で" },
      { phrase: "pressure someone into", mean: "〜するよう圧力をかける" },
    ],
  },
  {
    word: "stronger",
    word_pron: "ストロンガー",
    mean: "もっと強く",
    sentence: "Could you go a bit stronger on my shoulders? There's a lot of tension there.",
    sentence_pron: "クッジュー ゴー ア ビット ストロンガー オン マイ ショウルダーズ ゼアズ ア ロット オブ テンション ゼア",
    sentence_jp: "肩をもう少し強くやってもらえますか？すごくコリがあるんです。",
    synonyms: [
      { word: "harder", pron: "ハーダー", mean: "もっと強く" },
      { word: "firmer", pron: "ファーマー", mean: "もっとしっかり" },
    ],
    antonyms: [
      { word: "lighter", pron: "ライター", mean: "もっと優しく" },
      { word: "gentler", pron: "ジェントラー", mean: "もっとやさしく" },
    ],
  },
  {
    word: "lighter",
    word_pron: "ライター",
    mean: "もっと軽く、優しく",
    sentence: "That's a bit too strong for me — could you go lighter, please?",
    sentence_pron: "ザッツ ア ビット トゥー ストロング フォー ミー クッジュー ゴー ライター プリーズ",
    sentence_jp: "少し強すぎます。もう少し優しくしてもらえますか？",
    synonyms: [
      { word: "gentler", pron: "ジェントラー", mean: "よりやさしく" },
      { word: "softer", pron: "ソフター", mean: "もっと柔らかく" },
    ],
    antonyms: [
      { word: "stronger", pron: "ストロンガー", mean: "もっと強く" },
      { word: "harder", pron: "ハーダー", mean: "もっと強く" },
    ],
  },
  {
    word: "tension",
    word_pron: "テンション",
    mean: "コリ、緊張（筋肉の）",
    sentence: "I carry a lot of tension in my neck and upper back.",
    sentence_pron: "アイ キャリー ア ロット オブ テンション イン マイ ネック アンド アッパー バック",
    sentence_jp: "首と肩甲骨まわりがすごくこっています。",
    synonyms: [
      { word: "stiffness", pron: "スティフネス", mean: "筋肉の硬さ" },
      { word: "tightness", pron: "タイトネス", mean: "緊張感" },
    ],
    antonyms: [
      { word: "relaxation", pron: "リラクセーション", mean: "リラックス" },
    ],
    idioms: [
      { phrase: "ease the tension", mean: "緊張を和らげる" },
      { phrase: "tension between", mean: "〜間の緊張関係" },
    ],
  },
  {
    word: "knot",
    word_pron: "ナット",
    mean: "筋肉の結び目（コリのかたまり）",
    sentence: "There's a big knot right here — can you work on this area?",
    sentence_pron: "ゼアズ ア ビッグ ナット ライト ヒア キャン ユー ワーク オン ディス エリア",
    sentence_jp: "ここにかたまりがあります。この部分を重点的にやってもらえますか？",
    synonyms: [
      { word: "tight spot", pron: "タイト スポット", mean: "コリのひどい箇所" },
      { word: "muscle knot", pron: "マッスル ナット", mean: "筋肉のコリ" },
    ],
    antonyms: [
      { word: "loose muscle", pron: "ルース マッスル", mean: "緩んだ筋肉" },
    ],
    idioms: [
      { phrase: "tie the knot", mean: "結婚する" },
      { phrase: "stomach in knots", mean: "緊張でお腹がキリキリする" },
    ],
  },
  {
    word: "deep tissue",
    word_pron: "ディープ ティッシュー",
    mean: "深部組織マッサージ（深いコリ向け）",
    sentence: "I'd like a deep tissue massage — I've been really stiff lately.",
    sentence_pron: "アイド ライク ア ディープ ティッシュー マサージ アイヴ ビン リアリー スティフ レイトリー",
    sentence_jp: "ディープティッシュマッサージをお願いします。最近かなり体が硬くて。",
    synonyms: [
      { word: "firm massage", pron: "ファーム マサージ", mean: "しっかりしたマッサージ" },
    ],
    antonyms: [
      { word: "Swedish massage", pron: "スウィーディッシュ マサージ", mean: "スウェーデン式マッサージ" },
      { word: "light massage", pron: "ライト マサージ", mean: "軽いマッサージ" },
    ],
  },
  {
    word: "Swedish massage",
    word_pron: "スウィーディッシュ マサージ",
    mean: "スウェーデン式マッサージ（リラックス向け）",
    sentence: "I prefer a Swedish massage today — I just want to relax.",
    sentence_pron: "アイ プリファー ア スウィーディッシュ マサージ トゥデイ アイ ジャスト ウォント トゥー リラックス",
    sentence_jp: "今日はスウェーデン式マッサージがいいです。ただリラックスしたくて。",
    synonyms: [
      { word: "relaxation massage", pron: "リラクセーション マサージ", mean: "リラクゼーションマッサージ" },
    ],
    antonyms: [
      { word: "deep tissue", pron: "ディープ ティッシュー", mean: "深部組織マッサージ" },
    ],
  },
  {
    word: "focus on",
    word_pron: "フォーカス オン",
    mean: "〜を重点的にする",
    sentence: "Could you focus on my lower back? That's where I have the most pain.",
    sentence_pron: "クッジュー フォーカス オン マイ ロウア バック ザッツ ウェア アイ ハヴ ザ モウスト ペイン",
    sentence_jp: "腰を重点的にやってもらえますか？そこが一番痛いんです。",
    synonyms: [
      { word: "concentrate on", pron: "コンセントレイト オン", mean: "集中する" },
      { word: "pay attention to", pron: "ペイ アテンション トゥー", mean: "注目する" },
    ],
    antonyms: [
      { word: "avoid", pron: "アボイド", mean: "避ける" },
    ],
  },
  {
    word: "sensitive",
    word_pron: "センシティヴ",
    mean: "敏感な、痛みに弱い（部位）",
    sentence: "My neck is a bit sensitive — please be extra careful there.",
    sentence_pron: "マイ ネック イズ ア ビット センシティヴ プリーズ ビー エクストラ ケアフル ゼア",
    sentence_jp: "首が少し敏感です。そこは特に注意してください。",
    synonyms: [
      { word: "tender", pron: "テンダー", mean: "押すと痛い" },
      { word: "delicate", pron: "デリケット", mean: "デリケートな" },
    ],
    antonyms: [
      { word: "tough", pron: "タフ", mean: "丈夫な" },
      { word: "insensitive", pron: "インセンシティヴ", mean: "鈍感な" },
    ],
  },
  {
    word: "relaxing",
    word_pron: "リラクシング",
    mean: "リラックスできる",
    sentence: "That was so relaxing — I almost fell asleep on the table!",
    sentence_pron: "ザット ワズ ソー リラクシング アイ オールモースト フェル アスリープ オン ザ テーブル",
    sentence_jp: "すごくリラックスできました。施術台で寝てしまいそうだった！",
    synonyms: [
      { word: "soothing", pron: "スーズィング", mean: "心を和ませる" },
      { word: "calming", pron: "カーミング", mean: "落ち着く" },
    ],
    antonyms: [
      { word: "stressful", pron: "ストレスフル", mean: "ストレスの多い" },
    ],
  },
  {
    word: "too much",
    word_pron: "トゥー マッチ",
    mean: "強すぎる、多すぎる",
    sentence: "That's a little too much — the pressure right there is hurting.",
    sentence_pron: "ザッツ ア リトル トゥー マッチ ザ プレッシャー ライト ゼア イズ ハーティング",
    sentence_jp: "少し強すぎます。そこの圧が痛いです。",
    synonyms: [
      { word: "too intense", pron: "トゥー インテンス", mean: "強烈すぎる" },
      { word: "overwhelming", pron: "オーヴァーウェルミング", mean: "強すぎる" },
    ],
    antonyms: [
      { word: "just right", pron: "ジャスト ライト", mean: "ちょうどいい" },
      { word: "not enough", pron: "ナット イナフ", mean: "足りない" },
    ],
  },
  {
    word: "let me know",
    word_pron: "レット ミー ノウ",
    mean: "（何かあれば）教えてください",
    sentence: "Let me know if the pressure is too strong or if you'd like me to adjust anything.",
    sentence_pron: "レット ミー ノウ イフ ザ プレッシャー イズ トゥー ストロング オア イフ ユード ライク ミー トゥー アジャスト エニシング",
    sentence_jp: "圧が強すぎたり、調整してほしいことがあれば教えてください。",
    synonyms: [
      { word: "tell me", pron: "テル ミー", mean: "教えて" },
      { word: "inform me", pron: "インフォーム ミー", mean: "知らせて" },
    ],
    antonyms: [],
  },
  {
    word: "face mask",
    word_pron: "フェイス マスク",
    mean: "フェイスマスク（美容用）",
    sentence: "Would you like to add a face mask to your treatment today?",
    sentence_pron: "ウッジュー ライク トゥー アド ア フェイス マスク トゥー ユア トリートメント トゥデイ",
    sentence_jp: "今日のトリートメントにフェイスマスクを追加しますか？",
    synonyms: [
      { word: "facial mask", pron: "フェイシャル マスク", mean: "フェイシャルマスク" },
      { word: "sheet mask", pron: "シート マスク", mean: "シートマスク" },
    ],
    antonyms: [],
  },
  {
    word: "treatment",
    word_pron: "トリートメント",
    mean: "トリートメント（美容・ケア）",
    sentence: "I added a hair treatment to nourish my damaged ends.",
    sentence_pron: "アイ アディド ア ヘア トリートメント トゥー ナーリッシュ マイ ダメージド エンズ",
    sentence_jp: "傷んだ毛先をケアするために、ヘアトリートメントを追加しました。",
    synonyms: [
      { word: "care", pron: "ケア", mean: "ケア" },
      { word: "conditioning", pron: "コンディショニング", mean: "コンディショニング" },
    ],
    antonyms: [
      { word: "damage", pron: "ダメージ", mean: "ダメージ" },
    ],
  },
  {
    word: "conditioner",
    word_pron: "コンディショナー",
    mean: "コンディショナー、リンス",
    sentence: "What conditioner do you use? My hair feels so smooth after this.",
    sentence_pron: "ワット コンディショナー ドゥー ユー ユーズ マイ ヘア フィールズ ソー スムース アフター ディス",
    sentence_jp: "どんなコンディショナーを使っているんですか？施術後に髪がすごくサラサラです。",
    synonyms: [
      { word: "hair mask", pron: "ヘア マスク", mean: "ヘアマスク" },
      { word: "moisturizer", pron: "モイスチャライザー", mean: "保湿剤" },
    ],
    antonyms: [
      { word: "shampoo", pron: "シャンプー", mean: "シャンプー" },
    ],
  },
  {
    word: "cash tip",
    word_pron: "キャッシュ ティップ",
    mean: "現金でのチップ",
    sentence: "I prefer to leave a cash tip directly — it feels more personal.",
    sentence_pron: "アイ プリファー トゥー リーヴ ア キャッシュ ティップ ダイレクトリー イット フィールズ モア パーソナル",
    sentence_jp: "直接現金でチップを渡す方が好きです。その方がより気持ちが伝わる気がして。",
    synonyms: [
      { word: "gratuity", pron: "グラチューイティ", mean: "心付け" },
      { word: "tip", pron: "ティップ", mean: "チップ" },
    ],
    antonyms: [],
  },
  {
    word: "gratuity",
    word_pron: "グラチューイティ",
    mean: "チップ、心付け（フォーマル）",
    sentence: "Is gratuity included in the price, or should I add it separately?",
    sentence_pron: "イズ グラチューイティ インクルーディド イン ザ プライス オア シュッダイ アド イット セパレートリー",
    sentence_jp: "チップは料金に含まれていますか？それとも別途追加するのですか？",
    synonyms: [
      { word: "tip", pron: "ティップ", mean: "チップ" },
      { word: "service charge", pron: "サービス チャージ", mean: "サービス料" },
    ],
    antonyms: [],
  },
  {
    word: "pamper",
    word_pron: "パンパー",
    mean: "ゆっくり自分を甘やかす、贅沢なケアをする",
    sentence: "I try to pamper myself at least once a month — it's good for the soul.",
    sentence_pron: "アイ トライ トゥー パンパー マイセルフ アット リースト ワンス ア マンス イッツ グッド フォー ザ ソウル",
    sentence_jp: "少なくとも月に1回は自分を甘やかすようにしています。心の栄養になります。",
    synonyms: [
      { word: "treat yourself", pron: "トリート ユアセルフ", mean: "自分を甘やかす" },
      { word: "indulge", pron: "インダルジ", mean: "贅沢する" },
    ],
    antonyms: [
      { word: "neglect", pron: "ネグレクト", mean: "放置する" },
    ],
  },
  {
    word: "self-care",
    word_pron: "セルフ ケア",
    mean: "セルフケア、自分を大切にすること",
    sentence: "Self-care isn't selfish — it's necessary, especially when you're far from home.",
    sentence_pron: "セルフ ケア イズント セルフィッシュ イッツ ネセサリー エスペシャリー ウェン ユーア ファー フロム ホウム",
    sentence_jp: "セルフケアはわがままじゃない。特に故郷を離れている時は必要なことです。",
    synonyms: [
      { word: "wellness", pron: "ウェルネス", mean: "ウェルネス" },
      { word: "self-love", pron: "セルフ ラヴ", mean: "自己愛" },
    ],
    antonyms: [
      { word: "self-neglect", pron: "セルフ ネグレクト", mean: "自分を後回しにすること" },
    ],
  },
  {
    word: "refresh",
    word_pron: "リフレッシュ",
    mean: "リフレッシュする、気分が晴れる",
    sentence: "After the massage and nails, I felt completely refreshed.",
    sentence_pron: "アフター ザ マサージ アンド ネイルズ アイ フェルト コンプリートリー リフレッシュト",
    sentence_jp: "マッサージとネイルの後、すっかりリフレッシュした気分になりました。",
    synonyms: [
      { word: "rejuvenate", pron: "リジュヴェネイト", mean: "若返らせる・リフレッシュする" },
      { word: "recharge", pron: "リチャージ", mean: "元気を取り戻す" },
    ],
    antonyms: [
      { word: "exhaust", pron: "イグゾースト", mean: "疲弊させる" },
    ],
    idioms: [
      { phrase: "refresh one's memory", mean: "記憶を呼び起こす、思い出す" },
      { phrase: "refreshing change", mean: "気持ちのいい変化" },
    ],
  },
  {
    word: "glow",
    word_pron: "グロウ",
    mean: "輝く、上品な艶（肌・髪）",
    sentence: "Your skin is glowing — what did they put on your face?",
    sentence_pron: "ユア スキン イズ グロウイング ワット ディッド ゼイ プット オン ユア フェイス",
    sentence_jp: "肌が輝いてる！顔に何を塗ってもらったの？",
    synonyms: [
      { word: "shine", pron: "シャイン", mean: "輝き" },
      { word: "radiance", pron: "レイディアンス", mean: "輝き・艶" },
    ],
    antonyms: [
      { word: "dull", pron: "ダル", mean: "くすんでいる" },
    ],
    idioms: [
      { phrase: "glow up", mean: "見違えるほど美しくなる、垢抜ける" },
      { phrase: "inner glow", mean: "内側から溢れる輝き" },
    ],
  },
  {
    word: "compliment",
    word_pron: "コンプリメント",
    mean: "褒める、褒め言葉",
    sentence: "My husband complimented my new hair — it made all the effort worth it.",
    sentence_pron: "マイ ハズバンド コンプリメンティド マイ ニュー ヘア イット メイド オール ジ エフォート ワース イット",
    sentence_jp: "夫が新しい髪型を褒めてくれました。頑張った甲斐がありました。",
    synonyms: [
      { word: "praise", pron: "プレイズ", mean: "褒める" },
      { word: "flatter", pron: "フラター", mean: "おだてる" },
    ],
    antonyms: [
      { word: "criticize", pron: "クリティサイズ", mean: "批判する" },
      { word: "insult", pron: "インサルト", mean: "侮辱する" },
    ],
    idioms: [
      { phrase: "pay someone a compliment", mean: "〜を褒める、お世辞を言う" },
      { phrase: "compliment on", mean: "〜について褒める" },
    ],
  },
];
