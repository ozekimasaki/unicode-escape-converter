# Chromeウェブストア 公開手順ガイド

## 事前準備

### 1. GitHubリポジトリ作成
1. GitHubで新しいリポジトリ「unicode-escape-converter」を作成
2. 以下のファイルをプッシュ:
   - manifest.json
   - popup.html
   - popup.css
   - popup.js
   - icons/ フォルダ
   - README.md
   - privacy-policy.html

### 2. GitHub Pagesでプライバシーポリシー公開
1. リポジトリのSettings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `root`
4. 保存

プライバシーポリシーのURL:
```
https://[GitHubユーザー名].github.io/unicode-escape-converter/privacy-policy.html
```

このURLをChromeウェブストアの「プライバシー実務」欄に入力します。

### 3. スクリーンショット準備
以下のサイズでスクリーンショットを作成（少なくとも1枚必要）:
- 1280x800px または 640x400px
- PNGまたはJPG形式

作成方法:
1. 拡張機能をブラウザで開く
2. スクリーンショット撮影ツール（Windows: Snipping Tool, Mac: ショートカット）で撮影
3. 必要に応じて画像編集ソフトでサイズ調整

## Chromeウェブストア提出

### アカウント準備
1. [Chromeウェブストア デベロッパーダッシュボード](https://chrome.google.com/webstore/devconsole)にアクセス
2. Googleアカウントでログイン
3. 初回のみ開発者登録（$5の登録料）

### 新しいアイテムの追加
1. 「新しいアイテムを追加」をクリック
2. 「拡張機能」を選択
3. ZIPファイルをアップロード

### 必要な入力項目

#### 1. 一般情報
- **ストアでの表示名**: Unicode Escape Converter
- **簡潔な説明**（128文字以内）:
  ```
  文字列とUnicodeエスケープシーケンスを相互変換できるシンプルなツール。改行を維持、クリックでクリップボードコピー。
  ```
- **詳細な説明**: `chrome-store-submission.md`の「長い説明」セクションをコピー
- **カテゴリ**: 開発ツール
- **言語**: 日本語

#### 2. 詳細情報
- **権限**: なし（空欄）
- **ホスト権限**: なし

#### 3. プライバシー実務
- **プライバシーポリシー**:
  - プライバシーポリシーURL: `https://[ユーザー名].github.io/unicode-escape-converter/privacy-policy.html`
  - データ収集: なし

#### 4. 販売/配布
- **価格**: 無料
- **公開範囲**: 一般公開（または公開テスト）

#### 5. アイコンと画像
- **ストアアイコン**: 128x128px PNG（`icons/icon128.png`を使用）
- **スクリーンショット**: 作成した画像をアップロード

### 審査
- 審査期間: 通常1〜3営業日
- 審査結果がメールで通知されます

## 審査後

### 承認された場合
- 拡張機能が公開されます
- ChromeウェブストアのURLが発行されます
- README.mdのバッジURLを更新してください

### 拒否された場合
- 拒否理由がメールで届きます
- 指示に従って修正し、再提出してください

## メンテナンス

### 更新の手順
1. `manifest.json`のバージョン番号を更新
   ```json
   "version": "1.1.0"
   ```
2. 変更をGitHubにプッシュ
3. 新しいZIPファイルを作成
4. デベロッパーダッシュボードで新しいバージョンをアップロード

### バージョニングルール
- メジャーバージョン: `1.0.0` → `2.0.0`（大きな機能追加）
- マイナーバージョン: `1.0.0` → `1.1.0`（小さな機能追加）
- パッチ: `1.0.0` → `1.0.1`（バグ修正）

## よくある問題

### Q: 審査が拒否されました
A: 一般的な原因:
- プライバシーポリシーへのリンクが間違っている
- 説明文が不足している
- スクリーンショットが不十分

### Q: バッジのURLが不明
A: 公開後にバッジURLが発行されます。それまでの間はプレースホルダーにしてください。

### Q: プライバシーポリシーのリンクが動かない
A: GitHub Pagesの設定とリポジトリの公開設定を確認してください。

## リンク集

- [Chromeウェブストア デベロッパーダッシュボード](https://chrome.google.com/webstore/devconsole)
- [Chrome拡張機能 ポリシー](https://developer.chrome.com/docs/webstore/program-policies/)
- [Manifest V3 ガイド](https://developer.chrome.com/docs/extensions/mv3/)
