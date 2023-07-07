# Wistant Feedback TOC

[Wistant](https://www.wistant.com/) のフィードバック回答の表示画面に各設問にジャンプすることができる目次を生成する Chrome 拡張機能です。

## インストール

[最新バージョン](https://github.com/kuy/wistant-fb-toc/releases/tag/v0.1.0) のzipファイルをダウンロードして展開し、そのディレクトリをChromeから拡張機能として読み込ませてください。展開済みの拡張機能を読み込むには `開発者モード` にする必要があります。

## 使い方

フィードバック回答の表示画面 `https://*.wistant.com/feedbacks/*/sheets/*` にアクセスすると自動的に画面右側に目次が生成されます。
動作しないときは画面リロードをお試しください。

## 開発

### 開発サーバー起動

`npm run dev`

`dist` ディレクトリに成果物が生成されるので、Chrome の拡張機能画面で開発者モードにして、 `dist` ディレクトリを読み込むと有効になります。HMR も有効になるので都度リロードは不要です。

### ビルド

`npm run build`

`dist` ディレクトリに成果物が生成されます。

### パッケージング

WIP
