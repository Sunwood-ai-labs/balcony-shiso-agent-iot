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
| AC to 5V | Anker 523 Charger 47W 相当 | 1 | 目安3,990円。USB-C 5V電源 |
| USB-C配線 | USB-C 1m-2m 相当 | 1-2 | 目安1,190円〜。簡易ウェザーステーションだけなら1本。予備や後続ポンプ電源まで見るなら2本。3mは箱を離す時だけ |
| M5防滴箱 | 推奨: 150 x 200 x 100mm級 / 最小: BCAP112107G | 1 | 初心者は配線余裕のある150 x 200 x 100mm級を優先 |
| 通線部品 | オーム OA-WH22-06/13 相当 | 1-3 | 目安約1,200円前後。USB-CやGrove系ケーブルの通線 |
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
| QYTEC 0345 5-in-1 | 16,000円 | × | × | × | × | ○ | 安いが温湿度/風/雨のみ。API/照度UVなし |
| 自作 ESP32/M5Stack 温湿度+照度APIノード | 約7,000〜15,000円 | ◎ | ◎ | ◎ | △ | 部品次第 | 最低要件に最短。温湿度+照度+APIだけに絞る |
| SwitchBot + Hub | 7,010円 | ○ | △ | × | × | ◎ | 温湿度だけ。照度/UVなし |

記号: ◎=公式情報で強い、○=可能、△=条件付き/要確認、×=不足。

## 既製品組み合わせ案

Zigbeeに限定しない。SwitchBot、Tuya/Smart Life、Matter/Thread、Wi-Fi気象計、Netatmo/Ecowittのような既製品を組み合わせても、温湿度 + 明るさ + 雨検知の簡易ウェザーステーションは作れる。見るべき軸は通信方式ではなく、温湿度、照度/日射、雨、API、屋外耐性、電源が揃うか。

クラウドAPIは、Smart Life/Tuyaアプリで見る値をTuya側サーバーから読む方式。ベランダ内だけで完結させたいなら、Zigbee2MQTTやHome AssistantでローカルMQTT/API化する。zmart/Tuya日光・雨センサーは安い候補だが、センサー単体でHTTP APIを持つわけではない。

| 構成 | 概算価格 | 取れるもの | 通信/API | 判断 |
|---|---:|---|---|---|
| SwitchBot防水温湿度計 + Hub Mini | 約7,010円 | 温度、湿度、VPDなど | Bluetooth + Wi-Fi Hub / SwitchBot Cloud OpenAPI | 最小で楽。ただし照度なし |
| SwitchBot + Hub + Smart Life日光/雨センサー | 約12,000〜16,000円 | 温度、湿度、明るさ、雨検知 | Bluetooth + Wi-FiまたはZigbee / APIは分離 | 既製品だけなら有力。Home Assistant集約が現実的 |
| zmart/Tuya日光・雨センサー + Zigbee2MQTT | 約7,427円〜 | 明るさ、雨検知、電池 | Zigbee + ローカルMQTT | 日光/雨4,831円 + USBドングル2,596円。常時稼働機は別 |
| Tuya/Smart Life系で統一 | 約9,000〜13,000円 | 温度、湿度、明るさ、雨検知 | Wi-Fi/Zigbee + Tuya Cloud API | アプリを1つに寄せられるが屋外温湿度仕様を要確認 |
| Eve Weather / Matter-Thread + 別体照度 | 約12,000〜25,000円 | 温度、湿度、気圧、照度は追加 | Matter over Thread / Home Assistant等 | Apple HomeやMatter中心なら候補。雨は別 |
| Netatmo Weather Station + 別体照度 | 約25,000〜45,000円級 | 温湿度、気圧。雨/風は追加 | Wi-Fi + Netatmo API | 既製品感は強いが照度は弱い |
| M5StickS3 + ENV + DLight | 約12,000〜15,000円 | 温度、湿度、気圧、照度 | Wi-Fi / HTTP JSON・MQTT自由 | 工作は必要だがAPIが一番素直 |

## 電源まわり

ウェザーステーションを入れる場合でも、屋外センサーへ100Vは引かない。

| 系統 | 電源 | 置き場所 |
|---|---|---|
| M5/ポンプ | 屋外用電源ボックス内のUSB-C ACアダプタ | M5箱はプランター支柱へ固定 |
| Wi-Fiウェザーステーション屋外センサー | ソーラー + 電池 | 空が見える位置。照度/UVを見るので日陰に入れない |
| Wi-Fiウェザーステーション表示機/ゲートウェイ | USB/ACアダプタ | 室内推奨。屋外なら100V箱側で保護 |
| SwitchBot防水温湿度計 | 電池 | ベランダ。Hubは室内コンセント |

## 簡易ウェザーステーション導線チェック

北向きベランダの環境調査用に、まず M5StickS3 + ENV + DLight の簡易ウェザーステーションだけを作る場合の導線。

```text
防雨形コンセント
  |
HATAYA 漏電遮断器付き防雨延長コード
  |
屋外用電源ボックス = 100V側の箱
  `- USB-C ACアダプタ
       |
     ここから先は5Vだけ
       |
     USB-C 1m-2m
       |
ダイソー フタ付透明ケースM = 簡易ウェザーステーション側の箱
  |- M5StickS3
  |- Unit Hub / PaHUB
  |- ENV III/ENV IV
  `- DLight
```

電源ボックスと簡易ウェザーステーションケースは別。100V側の屋外用電源ボックスには、延長コードのメス側とUSB-C ACアダプタだけを入れる。ダイソーケースには100Vを入れず、USB-C 5Vだけを入れる。

この段階ではポンプ、MOSFET、GND端子台、土壌水分センサーは不要。必要なのは「100V側で5Vへ変換する」「5Vだけをダイソーケースへ送る」「M5から温湿度と照度を取る」「ケースを防滴寄りに加工する」部分だけ。

### 足りない可能性が高いもの

| 区分 | 追加で必要そうなもの | 理由 |
|---|---|---|
| USB-C電源 | USB-C ACアダプタ | 100V側電源ボックス内で5Vへ変換する必須部品 |
| USB-C配線 | USB-C to USB-C 1m-2m | 電源ボックスからダイソーケースへ5Vだけ送る必須部品 |
| 穴あけ刃 | ステップドリル、3mm下穴ドリル、1〜2mm水抜き穴用ドリル | インパクト本体だけでは穴径を合わせにくい。樹脂ケースはステップドリルが割れにくい |
| 穴仕上げ | バリ取りカッター、丸ヤスリ、マスキングテープ、当て木 | 穴のバリでUSB-Cケーブルを傷つけないため |
| 通線 | セパレートキャプコン、またはゴムグロメット + シリコン/自己融着テープ | USB-Cを切らずに通す。ケーブル径が合わない場合の逃げが必要 |
| ケーブル径確認 | ノギス、または定規で外径確認 | OA-WH22-06/13は適合ケーブル径6〜13mm、取付穴径28mm。細いUSB-Cケーブルだと径不足の可能性あり |
| 通風 | 防虫メッシュ、薄い白プラ板/小さいひさし | スリットから虫や雨滴が入りにくくする |
| 固定 | ケース内の両面テープ/面ファスナー、外側の結束バンド | M5やセンサーを箱内で暴れさせない |
| 湿気対策 | シリカゲル乾燥剤 | 透明ケース内の結露対策 |

### 現時点の判断

- インパクトドライバーがあるなら本体工具は足りている。
- ただし、ステップドリルとバリ取りは買った方がよい。
- OA-WH22-06/13を使うなら、取付穴は28mm級。USB-Cケーブル外径が6mm未満なら防水性能の条件から外れる可能性がある。
- まずは実物USB-Cケーブルの外径を測って、セパレートキャプコンで行くか、ゴムグロメット + シリコン/自己融着テープの簡易防滴にするか決める。

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
| QYTEC 0345 5-in-1 | `B0BVP2NYN7` | Amazon表示 16,000円 | 温度、湿度、風速、風向、降水量。API/照度/UVなし | https://www.amazon.co.jp/dp/B0BVP2NYN7 |
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

## 自作見積もり: 温湿度 + 照度 + API

実例ベースでは、ESP32/ESP8266に BME280/SHT31 と BH1750 をI2C接続し、HTTP/WebSocket/MQTT/ThingSpeakへ送る構成が定番。今回の最低要件はこれで満たせる。

## フェーズ1設計図: 透明ケース簡易版

まず作るのはこれ。UVは今回の最低要件から外す。理由は、大葉の初期判断に必要なのはまず温湿度と照度で、UVは透明ケース素材によって値が狂いやすいから。ハンダはしない。M5StickS3とGrove接続のM5Stack Unitだけで組む。

```text
ダイソー透明ケース + M5 ハンダなし版

本体箱: フタ付収納ケース（透明）M
  - M5StickS3
  - Unit Hub または PaHUB
  - USB-C 5V入力
  - 乾燥剤

温湿度: M5Stack ENV III/ENV IV
  - 箱の中に密閉しない
  - ケース側面の通風スリット近く、できれば白い小型通風カバー側へ寄せる

照度: M5Stack Unit DLight
  - 透明面の裏、空が見える向き
  - 百葉箱には入れない

ケース加工
  - 雨が入りにくい位置に通気スリット
  - スリット内側に防虫メッシュ
  - 水抜き穴
  - ケーブル出口は下向き

API
  - /metrics.json をHTTPで返す
  - またはMQTTで temp, humidity, lux を送る
```

ケース加工:

| 場所 | 加工/部品 | 目的 |
|---|---|---|
| 本体 | M5StickS3 + Unit Hub/PaHUB | Grove接続を分岐して、ENVとDLightをハンダなし接続 |
| 温湿度 | ENV III/ENV IVを通風スリット近くへ固定 | 箱内の熱だまりを測りにくくする |
| 照度 | DLightを透明面の裏に固定 | 小屋の影を測らない |
| 左右側面 | 細い通気スリットを複数 + 防虫メッシュ | 温湿度がケース内にこもるのを減らす |
| 底面 | 1〜2mm水抜き穴を数個 | 結露や吹き込み水を逃がす |
| ケーブル出口 | 下向き + セパレートキャプコン/グロメット | 水がケーブルを伝って入るのを避ける |

ハンダなし部品:

| 部品 | 数 | 役割 |
|---|---:|---|
| M5StickS3 | 1 | Wi-Fi/API送信本体 |
| M5Stack ENV III または ENV IV | 1 | 温度・湿度・気圧 |
| M5Stack Unit DLight | 1 | 照度 lux |
| M5Stack Unit Hub または PaHUB | 1 | Groveを分岐。ENVとDLightを同時接続 |
| HY2.0-4P Groveケーブル | 必要分 | 差すだけ配線 |
| ダイソー フタ付収納ケース（透明）M | 1 | 本体箱 |
| 防虫メッシュ、結束バンド、乾燥剤 | 1式 | 通風、固定、湿気対策 |

採用しないもの:

| 項目 | 理由 |
|---|---|
| UVセンサー | 初回は不要。透明ケースでUVが減衰しやすく、値の信頼性が落ちる |
| 風速/雨量 | 大葉の最低要件ではない。構造が大きくなる |
| 本格百葉箱 | 初回には過剰。温度が高めに出たらフェーズ2で分離する |

フェーズ2で直す点:

| 問題 | 改善 |
|---|---|
| 晴天時に温度が高めに出る | 温湿度センサーだけ白い通風シェルターへ分離 |
| ケース内が結露する | スリット追加、乾燥剤交換、底面水抜き増加 |
| 照度が低く出る | 照度センサーだけ透明面の外寄りへ移動 |

### ダイソー候補ケース

初回は防水性能より「加工しやすさ、透明面、余裕」を優先する。完全防水箱ではないので、雨が直接当たり続ける場所には置かない。蓋は必須。蓋なしの箱は、別で上カバーを作る前提でない限り本命にしない。

| 優先 | ダイソー候補 | 蓋 | 価格 | サイズ | 判断 |
|---:|---|---|---:|---|---|
| 1 | フタ付収納ケース（透明）M | あり | 330円 | 内寸21.5 x 32 x 12.3cm / 外寸23.5 x 13.5 x 33.8cm | 本命。M5/ESP32、USB-C曲げ、乾燥剤、センサー固定の余裕がある |
| 2 | 透明収納ケース（フタ付、B） | あり | 220円 | 27 x 5.7 x 10.4cm | 長いが浅い。照度センサー別箱や薄型配置向け |
| 3 | クリアボックスMサイズ | あり | 110円 | 約13.5 x 9.7 x 7.1cm | 小さい。ESP32最小構成向け |
| 4 | 積み重ね収納ボックス（深型） | なし | 220円 | 15.2 x 21.5 x 16.3cm | 高さは良いが蓋がない。別の上カバーが必要 |
| 5 | 積み重ね収納ボックス | なし | 110円 | 15.2 x 21.5 x 8.3cm | 薄めで蓋なし。今回の本命から外す |

採用方針: まずはフタ付収納ケース（透明）Mを買う。小さくしたい場合は、蓋付きの透明収納ケース/クリアボックスへ落とす。

### ケース穴とケーブル部品

USB-Cケーブルをケース内に入れるなら、穴を開けるだけでは足りない。穴のふちでケーブルを傷つけず、水滴の侵入を減らす部品が必要。

| 場所 | 必要部品 | 数 | 理由 |
|---|---|---:|---|
| USB-C電源入力 | オーム OA-WH22-06/13 セパレートキャプコン相当 | 1 | USB-Cコネクタ付きケーブルを切らずに通す |
| センサー線/細線 | ゴムグロメット または 小径ケーブルグランド | 1-2 | 穴のバリ保護、ケーブル固定、雨滴侵入の低減 |
| ケース底面 | 1-2mm水抜き穴 | 数個 | 入った水や結露を逃がす |
| 穴あけ後 | 自己融着テープ/シリコンシーラント | 適量 | 仕上げの防滴補強 |

穴は側面下寄りに開け、ケーブルは一度下へ垂らしてから箱へ入れる。ケーブルを伝った水がそのまま穴に入るのを避けるため。

### 既存事例からの結論

調べた範囲では、屋外の温湿度センサーを「ただ透明ケースに入れる」だけで常設している事例は本命ではない。多いのは、白い通風シェルター/百葉箱/Stevenson Screenで温湿度を測り、電子回路は別の防滴箱に逃がす構成。

| 事例 | 構成 | この計画への反映 |
|---|---|---|
| ESP32 Weather Station + Stevenson Screen | ESP32、DHT22などを通風シェルターへ入れる | 温湿度は日射と雨を避けつつ空気を通す必要がある |
| Weather Station Enclosure自作 | 日射と水を遮り、空気を通す筐体を作る | 左右スリットだけでは弱い。白い外カバーか日除けを追加する |
| ESP32 + BME280/BH1750系 | 温湿度/気圧/照度をESP32で送信 | 今回の「温湿度 + 照度 + API」は一般的に成立する |
| HiGrow ESP32 plant enclosure | ESP32植物センサーを屋外ケースで運用 | 植物系センサーもケース化事例あり。ただし防湿処理が必要 |
| 農業ハウスESP32温度監視 | ESP32を防水ケースに入れて送信 | 回路本体は防水/防滴箱に入れる考え方が妥当 |

結論: フェーズ1の透明ケース案は「最短プロトタイプ」としてはあり。ただし常設の本命は、電子回路箱と温湿度の通風部を分ける。ダイソーケースを使うなら、透明ケースはM5本体箱、温湿度センサーは通風スリット寄り、照度センサーは透明面寄りに配置する。ハンダなしで作るため、M5Stack UnitとGroveケーブルに寄せる。

| 構成 | 概算 | 取れるもの | API | 注意 |
|---|---:|---|---|---|
| 最低要件構成 | 7,000〜15,000円 | 温湿度、照度 | ◎ MQTT/HTTP/JSON自由 | まずこれ。UV/風雨/土壌水分は入れない |
| 大葉向け拡張 | 12,000〜22,000円 | 温湿度、照度、土壌水分 | ◎ MQTT/HTTP/JSON自由 | 水やり判断まで見るならここ |
| UV追加 | +1,000〜3,000円 | UV | ◎ | 透明カバー素材で値が狂いやすい |

自作の部品目安:

| 部品 | 概算 | 用途 |
|---|---:|---|
| ESP32 DevKit / M5Stamp / M5StickS3 | 1,500〜5,000円 | Wi-Fi/API送信 |
| SHT31/SHT35 または BME280 | 1,000〜3,000円 | 温湿度。BME280なら気圧も取れる |
| BH1750 または TSL2591 | 500〜2,000円 | 照度lux |
| ダイソー/100均小物ケース、鉢皿、白プラ板 | 300〜1,000円 | 温湿度用の通風シェルター材料 |
| 小型防水箱/ケーブルグランド/乾燥剤 | 1,500〜4,000円 | ESP32本体保護 |
| USB-Cケーブル/5V電源/固定具 | 1,500〜4,000円 | 電源と設置 |
| 防水土壌水分センサー | 2,000〜6,000円 | 大葉向け拡張 |

配置:

| 部位 | 置き方 |
|---|---|
| ESP32/M5本体 | 防水箱へ入れる。乾燥剤を入れ、直射日光を避ける |
| 温湿度センサー | 白い通風シェルターへ入れる。密閉しない |
| 照度センサー | 小屋の中に入れない。透明カバー下で空を見せる |
| API | HTTP JSON、MQTT、WebSocket、ThingSpeak CSV/JSONのどれでも実装可能 |

参考実例:

| 実例 | 内容 | URL |
|---|---|---|
| ESP32/ESP8266 + BME280 + BH1750 | 温度、湿度、気圧、luxを取得し、HTTP/WebSocket化 | https://esp-32.com/index.php/2017/06/11/esp8266esp32-reading-temperature-airpressure-humidity-and-lux-with-a-bme280-and-bh1750/ |
| ThingSpeak ESP32 + BME280 + BH1750 | 温度、湿度、気圧、LightをJSON/XML/CSVで公開 | https://thingspeak.mathworks.com/channels/997155 |
| ESP32 MQTT BME280 Weather Station | ESP32/ESP8266でBME280をMQTT送信 | https://www.donskytech.com/arduino-mqtt-example-project-bmp-bme-280-weather-station/ |

## 照度の扱い

照度は後回しにしない。北向きベランダで「何が育つか」を判断する入口なので、購入前または初回設置前に測る。

| 段階 | 方法 | 目的 |
|---|---|---|
| 補助確認 | スマホ照度アプリ、または安価な照度計 | 常設センサー設置前後の確認用。本命は星取表の常設センサー |
| 継続記録 | DLight + 透明カバー、またはWi-Fiウェザーステーション | 日ごとの明るさ変化をログ化する |
| 判断 | 大葉が暗すぎる場合 | 育成ライト補助、またはより低光量向きの葉物へ切り替える |

## 注意

このリポジトリは家庭用ベランダでの個人検証計画です。電気工事や製品改造の手順書ではありません。屋外電源、水回り、集合住宅の管理規約に関わる部分は、実物と現地条件を優先してください。
