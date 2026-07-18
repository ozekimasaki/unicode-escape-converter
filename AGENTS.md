# AGENTS.md

このリポジトリで作業するコーディングエージェント向けのガイドです。実際のコードと設定に基づいて記述しています。

## プロジェクト概要

Unicodeエスケープシーケンスと通常テキストを相互変換する **Google Chrome 拡張機能**（Manifest V3）です。ビルドツールやパッケージマネージャは使用しておらず、プレーンな HTML / CSS / JavaScript のみで構成されています。

## プロジェクト構成 / エントリポイント

```
unicode-escape-converter/
├── manifest.json              # 拡張機能設定（Manifest V3）。エントリはポップアップUI
├── popup.html                 # ポップアップUI（action.default_popup）
├── popup.css                  # スタイル
├── popup.js                   # 変換ロジック（DOMContentLoaded 起点）
├── icons/                     # アイコン（icon.svg + 16/32/48/128 px の PNG）
├── privacy-policy.html        # プライバシーポリシー（HTML版）
├── privacy-policy.md          # プライバシーポリシー（Markdown版）
├── DEPLOYMENT_GUIDE.md        # Chromeウェブストア公開手順
├── chrome-store-submission.md # ストア提出用の説明文素材
├── create-store-zip.bat       # 提出用ZIP作成スクリプト（Windows専用）
├── LICENSE                    # MIT
└── README.md
```

- 拡張機能本体として読み込まれるのは `manifest.json` / `popup.html` / `popup.css` / `popup.js` / `icons/` のみです。
- `manifest.json` の `action.default_popup` が `popup.html` を指し、`popup.html` が `popup.css` と `popup.js` を読み込みます。
- 変換処理は `popup.js` 内の `convertToUnicode()`（文字 → `\uXXXX`）と `convertToString()`（`\uXXXX` → 文字）に実装されています。
  - `convertToUnicode()` はサロゲートペア（BMP外・絵文字など）を2つの `\uXXXX` に分解します。
  - `convertToString()` は `\uXXXX`（4桁16進）を `String.fromCharCode` で復元します。
  - どちらも行ごとに処理し、改行（`\n`）を保持します。

## セットアップ

特別なセットアップは不要です。リポジトリをクローンすればそのまま動作します。依存パッケージのインストール（`npm install` 等）はありません。

## ビルド / テスト / lint / typecheck

**このリポジトリにはビルド・テスト・lint・typecheck のコマンドや設定は存在しません。** `package.json`、CI 設定（`.github/`）、pre-commit フック（`.husky/`、`.pre-commit-config.yaml`）はいずれもありません。存在しないコマンドを実行・記載しないでください。

動作確認は Chrome への手動読み込みで行います。

- **読み込み / 動作確認**: `chrome://extensions` を開き「デベロッパーモード」を有効化 →「パッケージ化されていない拡張機能を読み込む」からリポジトリのルートフォルダを選択。コード変更後は拡張機能カードの再読み込みボタンで反映します。
- **提出用ZIP作成（Windows専用）**: プロジェクトルートで `create-store-zip.bat` を実行し、プロンプトにバージョン番号を入力すると `unicode-escape-converter-<version>.zip` が生成されます。`manifest.json` / `popup.html` / `popup.css` / `popup.js` / `icons/` のみを含みます。

## コーディング規約

- 既存のプレーンな JavaScript（ES2015+、モジュールなし）スタイルに合わせます。フレームワークやバンドラは導入しないでください。
- インデントは2スペース。既存ファイルのスタイル（クォートや命名）に合わせます。
- DOM操作は `popup.js` に集約し、`document.getElementById` でUI要素を取得しています。新しいUI要素は `popup.html` に追加し、対応する処理を `popup.js` に記述します。
- UIの表示文言・コメントは日本語です。ユーザー向け文言を追加する場合も日本語で統一してください。
- 拡張機能はプライバシー重視の設計です。`manifest.json` に権限（`permissions` / `host_permissions`）は一切設定されていません。ネットワーク通信・外部リソース読み込み・データ収集を追加しないでください。

## 注意点

- 変更後は必ず `chrome://extensions` で拡張機能を再読み込みし、両方向の変換・改行保持・コピー・クリア・`Ctrl + Enter` での変換が動作することを手動で確認してください。
- `manifest.json` のバージョン更新はストア提出時のルール（`DEPLOYMENT_GUIDE.md` 参照）に従ってください。
- `create-store-zip.bat` は Windows のバッチスクリプトで、`powershell` の `Compress-Archive` を利用します。macOS / Linux では動作しません。
- リポジトリ内の `unicode-escape-converter.zip` は提出用の成果物です。手動で編集しないでください。
- プライバシーポリシーは HTML 版と Markdown 版の2つがあります。内容を変更する場合は両方の整合性を保ってください。
