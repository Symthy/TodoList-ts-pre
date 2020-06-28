# TodoList-ts-pre Repository

CSSとTypeScript勉強用。割とガチめなTodoList作成　Not Library. Not Framework.

## How to use

※開発中のため動きません。

git clone

dist/index.html 開くだけ

## Details

distフォルダ内のファイルだけをローカルに落とせばそのまま使えるようにするため

webpack4 を使用して フォーマット→自動コンパイル&バンドル して別フォルダに配置できるようにしている。
- dist フォルダ：webpackでsrcフォルダのソースをコンパイル＆バンドルしたコード
- src フォルダ：実際に書いたソースコード

## source record

- webpack 初期導入
  - https://github.com/Symthy/TodoList-ts-pre/tree/record/first-webpack-introduction

- CSS
  - 修正前 (flocssもどき)
    - https://github.com/Symthy/TodoList-ts-pre/tree/record/after-refactor-flocss-modoki-to-precss
  - 修正後 (PRECSS)
    - https://github.com/Symthy/TodoList-ts-pre/tree/record/before-refactor-flocss-modoki

## 開発機能メモ
MVVMで実装（双方向バインディングはやらない）

- Task作成
  - 種別：Todo/bugs (容易に追加できるようにする、できたらjsonファイル等で設定変更)
  - Task入力項目
    - タイトル
    - 見積h
    - 実績h
    - 進捗率（バー）
    - 詳細（普段は非表示、詳細画面開いた時だけ表示）

- 状態別にリスト表示： 
  - 状態は４つ： Waiting/In progress/Completed/Pending (できたら表示名はjsonファイル等で設定変更）
  - リストは４つソート可能
  - ~~Taskはドラッグ＆ドロップで移動して状態変更~~ コンテキストメニューから選択して状態変更
  
- データ保存 
  - Task作成/編集時にindexed DBに保存
  - jsonファイル読み込み → IndexedDBに保存
    - 既存データはクリアして保存
    - DBへの保存はworkerでバックグラウンド実行

- データロード
  - indexed DBからロードして画面表示
  - jsonファイル読み込み時 → 即時画面表示

- データ出力
  - csvファイル出力
  - jsonファイル出力（バックアップ取得用機能）

- 完了タスク自動削除
  - TaskがCompletedになってから一定期間経過で
    - 画面に表示されなくする
    - indexed DBから削除
    - 自動でファイル出力（やるかは要検討）

## issue は メモ帳
