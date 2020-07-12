const { join } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isDevMode = argv.mode === "development";

  return {
    // モードの設定
    mode: argv.mode,
    // エントリーポイントの設定
    entry: "./src/ts/app.ts",
    // source-map設定
    devtool: isDevMode ? "inline-source-map" : "none",
    // 出力の設定
    output: {
      filename: "bundle.js",
      path: join(__dirname, "dist"),
    },
    // モジュール設定
    module: {
      rules: [
        // html
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        // babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["env", { modules: false }],
              },
            },
          ],
        },
        // TypeScript
        {
          enforce: "pre",
          test: /\.ts$/,
          use: [
            {
              loader: "eslint-loader",
              options: {
                typeCheck: true,
                fix: true,
              },
            },
          ],
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: "awesome-typescript-loader",
          // use: "ts-loader",
        },
        {
          enforce: "pre",
          test: /\.js$/,
          use: "source-map-loader",
        },
        // Sass/css
        {
          test: /\.scss$/,
          use: [
            // CSSファイルを書き出すオプションを有効にする
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: isDevMode,
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2,
              },
            },
            // ベンダープレフィックス挿入
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require("autoprefixer")({
                    grid: true,
                  }),
                ],
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        // 画像ファイル
        {
          test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
          // 画像を埋め込まず任意のフォルダに保存する
          loader: "file-loader",
          options: {
            name: "./images/[name].[ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
        path: join(__dirname, "dist"),
      }),
    ],
  };
};
