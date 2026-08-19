# Unicode Escape Converter

Unicodeエスケープシーケンスと通常テキストの相互変換を行うGoogle Chrome拡張機能です。

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/XXX)](https://chrome.google.com/webstore/detail/unicode-escape-converter/XXX)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📋 概要

シンプルで高速なUnicode変換ツール。開発者、データ処理作業をしている方、文字コードの確認・変換が必要な方に最適です。

## ✨ 機能

- ✅ **文字 → Unicode変換** - 日本語や特殊文字をUnicodeエスケープシーケンスに変換
- ✅ **Unicode → 文字変換** - Unicodeエスケープシーケンスを通常のテキストに戻す
- ✅ **改行の維持** - 複数行のテキストでも改行を維持したまま変換
- ✅ **サロゲートペア対応** - 絵文字などのBMP外文字も正しく変換（例: `😀` → `\ud83d\ude00`）
- ✅ **ワンクリックコピー** - 変換結果をクリップボードに簡単コピー
- ✅ **プライバシー重視** - 完全オフライン動作、データ収集なし、権限不要

## ✅ 動作要件

- Manifest V3 に対応した Chromium 系ブラウザ（Google Chrome など）
- ビルドツールやランタイム（Node.js 等）は不要。プレーンな HTML / CSS / JavaScript のみで動作します

## 🔧 使い方

1. Chromeのツールバーから拡張機能のアイコンをクリック
2. 変換方向を選択（`文字 → \uXXXX` または `\uXXXX → 文字`）
3. テキストエリアに変換したいテキストを入力
4. 「変換する」ボタンをクリック（`Ctrl + Enter` でも変換できます）
5. 「クリップボードにコピー」で結果をコピー
6. 「クリア」ボタンで入力・出力を消去

## 💡 変換例

### 文字 → Unicode
```
こんにちは
世界
```
→
```
\u3053\u3093\u306b\u3061\u306f
\u4e16\u754c
```

### Unicode → 文字
```
\u30a2\u30a4\u30a6\u30a8\u30aa
```
→
```
アイウエオ
```

## 🔒 プライバシー

この拡張機能は：

- ❌ ユーザーのデータを収集しません
- ❌ 外部サーバーに通信しません
- ❌ ブラウザの履歴にアクセスしません
- ❌ 個人情報を保存しません

すべての処理はブラウザ内で完結します。

詳細は[プライバシーポリシー](./privacy-policy.html)をご覧ください。

## 📦 インストール

### Chrome ウェブストア（推奨）

[Chromeウェブストアでインストール](https://chrome.google.com/webstore/detail/unicode-escape-converter/XXX)

### 手動インストール（開発者向け）

1. Chromeのアドレスバーに `chrome://extensions` と入力して移動
2. 右上の「デベロッパーモード」をオンにする
3. 左上の「パッケージ化されていない拡張機能を読み込む」をクリック
4. このフォルダを選択
5. 拡張機能がインストールされます

## 🏗️ 開発

### ファイル構成
```
unicode-escape-converter/
├── manifest.json              # 拡張機能設定（Manifest V3）
├── popup.html                 # ポップアップUI
├── popup.css                  # スタイル
├── popup.js                   # 変換ロジック
├── icons/                     # アイコン画像
│   ├── icon.svg               # SVGソース
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── privacy-policy.html        # プライバシーポリシー（HTML版）
├── privacy-policy.md          # プライバシーポリシー（Markdown版）
├── DEPLOYMENT_GUIDE.md        # Chromeウェブストア公開手順
├── chrome-store-submission.md # ストア提出用の説明文素材
├── create-store-zip.bat       # 提出用ZIP作成スクリプト（Windows）
├── LICENSE                    # MITライセンス
└── README.md                  # このファイル
```

> 拡張機能本体として読み込まれるのは `manifest.json` / `popup.html` / `popup.css` / `popup.js` / `icons/` です。その他のファイルはドキュメントおよびストア提出用の補助ファイルです。

### 開発コマンド

このプロジェクトはビルド・テスト・lint の仕組みを持たないプレーンな拡張機能です。開発時に使う操作は以下のとおりです。

- **読み込み / 動作確認**: `chrome://extensions` で「デベロッパーモード」を有効化し、「パッケージ化されていない拡張機能を読み込む」からこのフォルダを選択（コード変更後は拡張機能カードの再読み込みボタンで反映）
- **提出用ZIP作成（Windows）**: プロジェクトルートで `create-store-zip.bat` を実行し、プロンプトにバージョン番号を入力すると `unicode-escape-converter-<version>.zip` が生成されます

### テクニカル仕様
- **Manifest V3**: Chrome拡張機能の最新規格に準拠
- **Permissions**: なし
- **Host Permissions**: なし
- **Background Scripts**: なし
- **Content Scripts**: なし
- **Storage**: データを保存しません

## 🤝 貢献

バグ報告や機能要望は[GitHub Issues](https://github.com/ozekimasaki/unicode-escape-converter/issues)へお願いいたします。

## 📄 ライセンス

MIT License - 詳しくは[LICENSE](LICENSE)ファイルをご覧ください。

## 📝 お問い合わせ

- GitHub Issues: [リポジトリのIssuesページ](https://github.com/ozekimasaki/unicode-escape-converter/issues)
- Chromeウェブストアの開発者向け連絡フォーム

---

**※ スクリーンショット準備中**
