　<h1 align='center'>フロントの詳細情報</h1>

当アプリは [Next.js](https://nextjs.org/) を使用しています。

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)を使用し、雛形の作成を行いました。

## フロントの使用技術
- TypeScript
- Next.js
- Recoil
- Atomic Design
- Docker
- material-ui
- axios
- react-pdf
- react-dropzone
- Jest

## 使用技術の選定理由
なぜEXのフロントで上記技術を選定したのかを説明します。

* Next.js
    * [npm trends](https://www.npmtrends.com/next)にて検索したところ2021年からは右肩上がりで使用度が増えてきているから。また、日本の大手企業でもNext.jsでの採用を行った記事をたびたび目にするようになったので、今後ますますNext.jsを採用する企業が増えてくるだろうということでNext.jsを選定しました。

* TypeScript
    * TypeScriptは2019年ごろから使用している企業が増えてきており、2021年からはTypeScriptで記述するのがデフォルトとなってきているので、TypeScriptを選定しました。

* Recoil
    * Reactの状態管理ライブライとして有名なReduxが存在するが、使用してみた所感、難しく使用難易度が高いように感じました。一方でRecoilを初めて使用した時はとても使用しやすくまだメジャーリリース（2021/05/09時点ではまだメジャーリリースされていない）がされていなく機能も基本的なものしか搭載されていないのでとても使いやすいかったのでRecoilを選定しました。

* material-ui
    * 今回はUIフレームワークにmaterial-uiを採用しました。当初はTailwind CSSか material-uiのどちらかで考えましたが、結果個人的に利用頻度の多いmaterial-uiを選定しました。


## フロント環境のセットアップ

まず初めに

```bash
npm install
# or
yarn install
```

動作を見たい方は
```bash
npm run dev
# or
yarn dev
```

実行後、 [http://localhost:3000](http://localhost:3000) にアクセスすることでローカル環境で使用することができます。

※ 動作されるにはバックエンドの環境構築が必要です。バックエンドの環境構築は[こちら]('../functions/README.md')からおねがいします。

## 各ページの説明

- Enter
    - アプリケーション起動後に表示する
- Login
    - ログインを行う
- Register
    - 登録を行う
- main
    - ファイルの一覧を表示する
- detail
    - 一覧で選択したファイルの詳細情報を表示する
- post
    - ファイルの投稿を行う
- edit
    - 編集を行うことができます
- error
    - エラーが発生した場合に表示する

## Next.jsについて

- [Next.jsの公式ドキュメント](https://nextjs.org/docs) - Next.jsの公式ドキュメントです。
- [Next.jsを学びたい人](https://nextjs.org/learn) - Next.jsを学ぶことができます。

[Next.js GitHub repository](https://github.com/vercel/next.js/) - Next.jsのソースコードがあります。

## ToDo

- [x] Dockerの導入  