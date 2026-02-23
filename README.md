# Blog

Next.js (App Router) + Markdown で構築した個人ブログ。

## 構成

```
content/          記事（Markdownファイル）
lib/posts.ts      記事の読み込み・変換処理
app/
  layout.tsx      全ページ共通レイアウト（Google Analytics含む）
  page.tsx        トップページ（記事一覧）
  globals.css     スタイル
  posts/[slug]/
    page.tsx      個別記事ページ
```

## 開発

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # 本番ビルド
```

## 記事の追加

`content/` に `.md` ファイルを追加する。ファイル名がURLになる。

```markdown
---
title: "記事タイトル"
date: "2026-02-24"
---

本文をここに書く。
```

例: `content/my-post.md` → `/posts/my-post`

## デプロイ

Vercelにリポジトリを接続済み。`main` ブランチへのpushで自動デプロイされる。
