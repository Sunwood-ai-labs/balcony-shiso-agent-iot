# ベランダで大葉エージェントIoT計画

北向きでも比較的明るいベランダで、大葉栽培の水やりを M5Stack と防水土壌水分センサー、分離ポンプで小さく自動化するための企画・設計メモです。

このリポジトリは「購入前の安全設計」と「段階的な実証」を主目的にしています。屋外 100V、雨、水タンク、鉢、USB 5V 電源を同時に扱うため、最初から実装を急がず、電源、防滴、配線、給水テストを分けて検証します。

## 設計方針

```text
防雨形コンセント
  |
漏電遮断器付き・防雨型延長コード
  |
屋外用電源ボックス = 100V側
  `- USB-C ACアダプタ
       |
     5V USB-C
       |
IP65防滴ボックス = M5側
  |- M5StickS3
  `- TypeC2Grove
  |- 防水土壌水分センサー入力
  `- 分離ポンプ制御
       |
     センサー線 + 給水チューブ
       |
大葉プランター側 = 防水センサー / 吐水口 / 2L-3.5L水源
```

## 重要な安全境界

- 100V 側は完成品を挿すだけにし、切断、被覆剥き、圧着、端子加工をしない。
- 100V 側と 5V 側のボックスを分ける。
- M5 側の IP65 防滴ボックスには 5V USB-C / Grove 系だけを入れる。
- M5 側の IP65 防滴ボックスは床置きしない。壁や手すりに頼らず、横長プランターに立てた短い支柱または小型ワイヤーネットへ固定し、鉢皿や水源より高い位置に置く。
- 全ケーブルに水切りループを作り、ボックス入口は下面または側面下寄りにする。
- 防水等級は「正しく施工された状態」の性能なので、穴あけ、ケーブル径、パッキン、固定方向を実物で確認する。
- 最終設置前に、購入品の取扱説明書と設置場所の条件を確認する。

## ドキュメント

- [企画書](docs/proposal.md)
- [購入候補リスト](docs/bom.md)
- [安全チェックリスト](docs/safety-checklist.md)
- [実装ロードマップ](docs/roadmap.md)
- [仕様確認メモ](docs/source-notes.md)
- [屋外運用設計](docs/outdoor-design.md)
- [接続確認](docs/connectivity.md)
- [備品画像つき簡易構成図](docs/diagram/index.html)
- [過去のCAD・寸法検討](2026/05/28/shiso-agent-iot-02/README.md)

## 現在のゴール

まずは以下の 3 点を確認します。

1. 100V を安全に 5V USB-C へ変換して屋外で扱えること。
2. M5StickS3 と TypeC2Grove が防滴ボックス内で安定動作すること。
3. 分離ポンプを 3 秒だけ動かして、電圧降下と水漏れがないこと。

## 現時点の購入候補一覧

| 区分 | 候補 | 数量 | メモ |
|---|---|---:|---|
| 100V安全 | HATAYA BFX-013KC2 相当 | 1 | 防雨形コンセントから取る最初の延長コード |
| 100V保護箱 | Hrensaw 大型屋外電気ボックス IP54 / 32 x 22 x 13cm級 | 1 | 延長コードのメス側とUSB-C ACアダプタを入れる |
| AC to 5V | Anker 523 Charger 47W 相当 | 1 | USB-C 5V電源 |
| USB-C配線 | USB-C 1m-2m 相当 | 2 | プランター一体固定なら3mは長め。3mは箱を離す時だけ |
| M5防滴箱 | 推奨: 150 x 200 x 100mm級 / 最小: BCAP112107G | 1 | 初心者は配線余裕のある150 x 200 x 100mm級を優先 |
| 通線部品 | オーム OA-WH22-06/13 相当 | 2-3 | USB-CやGrove系ケーブルの通線 |
| 制御本体 | M5StickS3 | 1 | Wi-Fi付き制御本体 |
| 5V/Grove補助 | M5Stack TypeC2Grove | 1 | Grove系の5V補助 |
| 防水土壌水分 | DFRobot SEN0308 相当 | 1 | 土へ常設する防水センサー |
| 給水 | 5V-6V チューブポンプ | 1 | センサーと分離した給水 |
| ポンプ駆動 | DFRobot DFR0457 MOSFET 相当 | 1 | G10でポンプON/OFF |
| GND共通化 | WAGO 221-415 相当 | 1-2 | M5 GND、ポンプ電源-、センサーGNDをまとめる |
| 環境情報 簡単案 | SwitchBot 防水温湿度計 + Hub Mini/Hub 2 | 1式 | IP65屋外温湿度。データはBLE/Hub/API/Home Assistantへ逃がせる |
| 環境情報 照度込み | Wi-Fiウェザーステーション候補 | 1式 | 温湿度に加えて照度/日射/UVまで欲しい場合。M5とは別系統で飛ばす |
| 環境情報 DIY案 | ENV III + DLight + センサー保護 + I2C拡張 | 1式 | M5に全部つなぎたい場合だけ。防水処理と配線が増える |
| 固定 | 短い支柱 or 小型ワイヤーネット + 結束バンド | 1式 | プランターに立ててM5箱を固定 |
| 栽培 | 横長プランター、野菜用培養土、大葉苗2株 | 1式 | 北向きベランダ向け |
| 水源 | 2Lペットボトル or 3L-3.5L級タンク | 1 | 初回は2Lで十分 |

## 環境センサーのコスト感

| 候補 | 価格 | API確度 | ローカル取得 | 照度/UV | 土壌水分拡張 | Amazon入手 | 判断 |
|---|---:|---|---|---|---|---|---|
| ECOWITT Wittboy GW2001/WS90 | 47,568円 | ◎ | ○ | ◎ | ○ | ○ | 第一候補。GW1100+WS90より安くAPIも強い |
| ECOWITT GW1100 + WS90 | 68,273円 | ◎ | ◎ | ◎ | ◎ | ○ | 拡張重視の本命。高い |
| WeatherFlow Tempest | 72,998円 | ◎ | ◎ | ◎ | × | ○ | REST/WebSocket/UDPが強い。土壌水分は別系統 |
| Ambient Weather WS-5000 | 73,448円 | ◎ | △ | ◎ | ○ | ○ | APIあり。Ambientクラウド寄り |
| Ambient Weather WS-2000 | 68,783円 | ◎ | △ | ◎ | ○ | ○ | APIあり。WS-5000より従来型 |
| Sainlogic WiFi系 | 52,452円 | △ | × | ○ | × | ○ | WU/WeatherCloud中心。直接API用途では弱い |
| Moongiantgo系 | 26,850〜38,850円 | △ | × | ○ | × | ○ | 安いがAPI未確定。本命にはしない |
| SwitchBot + Hub | 7,010円 | ○ | △ | × | × | ◎ | 温湿度だけ。照度/UVなし |

記号: ◎=公式情報で強い、○=可能、△=条件付き/要確認、×=不足。

## 電源まわり

ウェザーステーションを入れる場合でも、屋外センサーへ100Vは引かない。

| 系統 | 電源 | 置き場所 |
|---|---|---|
| M5/ポンプ | 屋外用電源ボックス内のUSB-C ACアダプタ | M5箱はプランター支柱へ固定 |
| Wi-Fiウェザーステーション屋外センサー | ソーラー + 電池 | 空が見える位置。照度/UVを見るので日陰に入れない |
| Wi-Fiウェザーステーション表示機/ゲートウェイ | USB/ACアダプタ | 室内推奨。屋外なら100V箱側で保護 |
| SwitchBot防水温湿度計 | 電池 | ベランダ。Hubは室内コンセント |

## Amazon ASIN

価格と連携表記は2026-05-28時点でChromeからAmazon.co.jpを開いて確認。SwitchBot 2点は商品ページ、ウェザーステーション候補はAmazon検索結果と商品ページの表示。API明記は未確認。

| 商品 | ASIN | 確認価格 | 主な機能 | URL |
|---|---|---:|---|---|
| ECOWITT Wittboy GW2001/WS90 | `B09TZZTYPK` | Amazon表示 47,568円 | 温度、湿度、light/UV、風、雨。Cloud API/Custom upload系 | https://www.amazon.co.jp/dp/B09TZZTYPK |
| ECOWITT GW1100 + WS90 キット | `B0D8BNR5JL` | Amazon表示 68,273円 | 温度、湿度、light/UV、風、雨。LAN/Cloud/Custom upload系 | https://www.amazon.co.jp/dp/B0D8BNR5JL |
| WeatherFlow Tempest | `B0868WY7NY` | Amazon表示 72,998円 | 温湿度、solar radiation、UV、lux、風、雨。REST/WebSocket/UDP | https://www.amazon.co.jp/dp/B0868WY7NY |
| Ambient Weather WS-5000 | `B09V3FVJGG` | Amazon表示 73,448円 | 温湿度、solar radiation、UV、風、雨。REST/Real-Time API | https://www.amazon.co.jp/dp/B09V3FVJGG |
| Ambient Weather WS-2000 | `B07GRBY9NP` | Amazon表示 68,783円 | 温湿度、UV、風、雨。REST/Real-Time API | https://www.amazon.co.jp/dp/B07GRBY9NP |
| Sainlogic Smart WiFi SA6 Plus | `B0FVM5NDJC` | Amazon表示 52,452円 | Wi-Fi/App/WU/WeatherCloud系。APIは弱い | https://www.amazon.co.jp/dp/B0FVM5NDJC |
| JoyeeLii スマート気象観測ステーション | `B0GM6Q7BJV` | Amazon表示 17,699円 | 温度、湿度、UV、雨、風。照度は商品名に明記なし | https://www.amazon.co.jp/dp/B0GM6Q7BJV |
| Moongiantgo スマホアプリ接続 気象観測器 | `B0DRHXMBKC` | Amazon表示 26,850円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0DRHXMBKC |
| 特大画面WIFIプロフェッショナル屋外センサー | `B0GZWH4183` | Amazon表示 27,949円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0GZWH4183 |
| 特大画面WIFIプロフェッショナル屋外センサー | `B0DH4H5J72` | Amazon表示 27,990円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0DH4H5J72 |
| TIMDU 気象観測所 5-in-1 | `B0GYS1WT7T` | Amazon表示 32,800円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0GYS1WT7T |
| Moongiantgo 携帯アプリ付 気象観測器 | `B0CQXHQ4Z2` | Amazon表示 33,550円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0CQXHQ4Z2 |
| Moongiantgo WIFI接続 気象観測器 | `B0CLVCLT2B` | Amazon表示 36,150円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0CLVCLT2B |
| Kurflo ウェザーステーション | `B0F1CP1JZZ` | Amazon表示 37,500円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0F1CP1JZZ |
| Moongiantgo ウェザーステーション | `B0CK21Z7ST` | Amazon表示 38,850円 | 温度、湿度、照度、UV、雨、風 | https://www.amazon.co.jp/dp/B0CK21Z7ST |
| SwitchBot 防水温湿度計 | `B0BVLYPYT1` | Amazon表示 1,780円 | 温度、湿度 | https://www.amazon.co.jp/dp/B0BVLYPYT1 |
| SwitchBot Hub Mini Matter対応版 | `B0DSPXKDP8` | Amazon表示 5,230円 | 遠隔確認、API/通知連携 | https://www.amazon.co.jp/dp/B0DSPXKDP8 |

API確認メモ:

- Ecowittは公式情報で、Cloud API、LAN HTTP API、Home Assistant integration、Customized server upload が確認できるためAPI本命。
- Ecowitt GW1100の公式マニュアルでは、アップロード先として ecowitt.net、Weather Underground、WeatherCloud、WOW、Customized servers が載っている。
- Ecowitt GW1100の対応センサー表では、WS90が outdoor temperature/humidity、light、UV、wind、rainfall に対応。
- WeatherFlow Tempestは公式Developer PlatformでREST、WebSocket、UDPが確認できる。
- Ambient Weatherは公式サポートでJSON形式のREST/Real-Time API、API key、application keyが確認できる。
- Sainlogicはメーカー公式でWeather Underground/WeatherCloud/App連携が確認できるが、独自JSON APIの確度は低い。
- Amazon商品ページ上で「API」と明記されたウェザーステーション候補は未確認。
- 「Wi-Fi」「アプリ」「専用サイトへアップロード」は、データを外へ出せる可能性はあるが、こちらからJSON APIで自由に読める保証ではない。
- 自作連携前提なら、購入前に Weather Underground / WeatherCloud / Custom server / custom upload 対応を確認する。

Amazonアプリで直リンクが開けない場合は、Amazon検索欄にASINを入れる。

メーカー公式確認:

| メーカー | 確認した内容 | 公式URL |
|---|---|---|
| Ecowitt | Cloud API、LAN HTTP API、Home Assistant integration、Custom upload、GW1100の対応サーバー/WS90センサー | https://www.ecowitt.com/api/quickstart/product?id=282 |
| WeatherFlow Tempest | REST API、WebSocket API、UDP Broadcast、Personal Access Token | https://weatherflow.github.io/Tempest/api/ |
| Ambient Weather | JSON形式のREST/Real-Time API、API key、application key | https://ambientweather.com/support/question/view/id/1811/ |
| Sainlogic | Weather Underground、WeatherCloud、App連携 | https://www.sainlogic.com/it/pages/0310-key-features |

## 照度の扱い

照度は後回しにしない。北向きベランダで「何が育つか」を判断する入口なので、購入前または初回設置前に測る。

| 段階 | 方法 | 目的 |
|---|---|---|
| 補助確認 | スマホ照度アプリ、または安価な照度計 | 常設センサー設置前後の確認用。本命は星取表の常設センサー |
| 継続記録 | DLight + 透明カバー、またはWi-Fiウェザーステーション | 日ごとの明るさ変化をログ化する |
| 判断 | 大葉が暗すぎる場合 | 育成ライト補助、またはより低光量向きの葉物へ切り替える |

## 注意

このリポジトリは家庭用ベランダでの個人検証計画です。電気工事や製品改造の手順書ではありません。屋外電源、水回り、集合住宅の管理規約に関わる部分は、実物と現地条件を優先してください。
