# 購入候補リスト

作成日: 2026-05-28

Amazon で購入する前提の候補リストです。商品リンクは価格、販売者、仕様、在庫、型番表記が変わるため、このドキュメントでは型番・用途・確認ポイントを中心に管理します。

購入前に、Amazonの商品ページだけでなくメーカーまたは販売店の仕様情報も確認します。

## まず買う本命セット

| 優先 | 区分 | 候補 | 数量 | 用途 | 購入前確認 |
|---:|---|---|---:|---|---|
| 1 | 100V安全 | HATAYA BFX-013KC2 または同等の漏電遮断器付き防雨型延長コード | 1 | 防雨形コンセントから最初に取る延長コード | 屋外用、防雨型、定格、漏電遮断、過負荷保護、口数 |
| 2 | 100V保護箱 | Hrensaw 大型屋外電気ボックス IP54 / 32 x 22 x 13cm級 | 1 | 延長コードのメス側とUSB-C ACアダプタを入れる | 内寸、ケーブル入口数、IP等級、発熱余裕 |
| 3 | AC to 5V | Anker 523 Charger 47W 相当 | 1 | USB-C 5V電源 | PSE、2ポート時出力、サイズ、密閉箱内の発熱 |
| 4 | 5V配線 | USB-C & USB-C 1m-2m ケーブル相当 | 2 | 100V側からM5側へ5Vを引く | プランター一体固定なら3mは長め。まず1m、余裕を見るなら2m。3mは箱を大きく離す時だけ |
| 5 | M5保護箱 | 推奨: 150 x 200 x 100mm級 IP65防滴ボックス / 最小: タカチ BCAP112107G | 1 | M5StickS3、TypeC2Grove、MOSFET、GND端子台、配線の収納 | 初心者は150 x 200 x 100mm級を優先。BCAP112107Gは入るが配線とUSB-C曲げが窮屈 |
| 6 | コネクタ通線 | オーム電機 OA-WH22-06/13 セパレートキャプコン相当 | 2-3 | USB-Cなどコネクタ付きケーブルの通線 | 適合ケーブル径、取付穴径、IP67条件 |
| 7 | 制御本体 | M5StickS3 | 1 | Wi-Fi付き制御本体 | USB-C 5V入力、Grove端子、固定方法 |
| 8 | 5V/Grove補助 | M5Stack TypeC2Grove | 1 | M5側の5V/Grove給電・変換補助 | 5V入力、Grove接続、電流余裕 |
| 9 | 防水土壌水分 | DFRobot Gravity IP65 Capacitive Soil Moisture Sensor / SEN0308 相当 | 1 | ベランダ常設用の土壌水分測定 | IP65、3.3-5.5V、アナログ出力、M5側ADC接続方法 |
| 10 | 給水 | 5V-6V チューブポンプ / ペリスタルティックポンプ相当 | 1 | センサーと分離した給水 | 流量、電流、チューブ径、空運転対策 |
| 11 | センサー変換 | Grove/HY2.0-4P to Dupont 変換ケーブル、またはM5用Groveブレイクアウト | 1 | SEN0308の2.54mm 3ピン信号をM5StickS3へ入れる | GND、5V/3.3V、Signalを取り違えない |
| 12 | ポンプ駆動 | MOSFETポンプドライバ、または5Vポンプ駆動モジュール | 1 | M5のGPIOでポンプ電源を直接流さず制御する | 500mA以上、逆起電力対策、共通GND |
| 13 | GND共通化 | WAGO 221-415/221-615 相当のレバーコネクタ | 1-2 | M5 GND、ポンプ電源-、MOSFET GND、センサーGNDを同じGNDへまとめる | 低電圧5V側だけに使う。100V側には使わない |
| 14 | 配線 | 端子台、Dupont線、2.54mm 3ピン接続部品 | 適量 | センサー/ドライバ/ポンプの仮配線と箱内固定 | 緩み、極性、抜け止め |
| 15 | 電源テスト | USB-C 電圧・電流チェッカー | 1 | 初回テストで電圧降下と電流を見る | USB-C PD対応範囲、表示項目 |
| 16 | 環境情報 簡単案 | SwitchBot 防水温湿度計 + Hub Mini/Hub 2 | 1式 | 屋外の温度・湿度をM5とは別系統で取る | IP65。Hub経由でクラウド/API、Home AssistantならBluetoothでも拾える |
| 17 | 環境情報 照度込み | Wi-Fiウェザーステーション候補 | 1式 | 温湿度に加え、照度/日射/UVまで見たい場合 | 屋外7-in-1センサーはソーラー+電池、表示機は室内または100V箱側電源。Wi-Fi/クラウド/API対応を確認 |
| 18 | 環境情報 DIY案 | M5Stack ENV III + DLight | 各1 | M5へ直接つなぎたい場合 | 防水ではない。センサー保護とI2C拡張が必要 |
| 19 | DIY保護 | FP1806級自然通風シェルター + 透明カバー | 1式 | ENV III/DLightを外へ出す場合の保護 | DIY案だけで必要。簡単案なら不要 |
| 20 | DIY I2C拡張 | Grove Hub/PaHUB、Unit ADC、EXT.IO2 | 各1 | 環境センサーまでM5に載せる場合 | G9/G10をI2Cに寄せる |

## 屋外本命の代替候補

| 優先 | 区分 | 候補 | 数量 | 用途 | 購入前確認 |
|---:|---|---|---:|---|---|
| A | 防水土壌水分 | IP68級アナログ土壌水分センサー | 1 | より強い屋外・埋設前提 | 出力方式、電源、価格、納期、校正方法 |
| B | 給水 | 他の小型5Vポンプ | 1 | センサーと分離した給水 | 防滴配置、空運転対策、流量、電流 |

## 環境情報の取得方針

| 方針 | 候補 | 取れるもの | データの飛ばし方 | 判断 |
|---|---|---|---|---|
| 簡単 | SwitchBot 防水温湿度計 + Hub Mini/Hub 2 | 温度、湿度 | BLE、Hub経由、OpenAPI、Home Assistant | まずこれ。M5側の配線を増やさず屋外温湿度が取れる |
| 照度込み | Wi-Fiウェザーステーション各種 | 温度、湿度、光/UV、雨、風 | Wi-Fi、アプリ連動、モデルにより外部サービス/API | 北向きの明るさまで常時見たいならこちら。Ecowitt固定ではなく同等要件で選ぶ |
| DIY | ENV III + DLight + シェルター | 温度、湿度、気圧、照度 | M5StickS3経由 | 学習には良いが、防水と配線が増える |

Amazon商品リンク:

| 用途 | 商品 | ASIN | 確認価格 | 機能 | 電源/通信 | URL | 開けない時 |
|---|---|---|---:|---|---|---|---|
| API本命・照度込み | ECOWITT Wittboy GW2001 / WS90 7-in-1 | B09TZZTYPK | Amazon表示 47,568円 | 温度、湿度、照度/light、UV、風、雨 | GW2000系Hub + WS90。Ecowitt Cloud API、Custom upload、Weather Underground/WeatherCloud/WOW系 | https://www.amazon.co.jp/dp/B09TZZTYPK | Amazon検索欄に `B09TZZTYPK` を入れる |
| API本命・照度込み | ECOWITT GW1100 + WS90 キット | B0D8BNR5JL | Amazon表示 68,273円 | 温度、湿度、照度/light、UV、風、雨 | GW1100 Wi-Fi Gateway + WS90。LAN/Cloud/Custom upload系 | https://www.amazon.co.jp/dp/B0D8BNR5JL | Amazon検索欄に `B0D8BNR5JL` を入れる |
| API代替・照度込み | WeatherFlow Tempest | B0868WY7NY | Amazon表示 72,998円 | 温湿度、solar radiation、UV、lux、風、雨 | REST API、WebSocket、UDP Broadcast | https://www.amazon.co.jp/dp/B0868WY7NY | Amazon検索欄に `B0868WY7NY` を入れる |
| API代替・照度込み | Ambient Weather WS-5000 | B09V3FVJGG | Amazon表示 73,448円 | 温湿度、solar radiation、UV、風、雨 | Ambient Weather REST/Real-Time API | https://www.amazon.co.jp/dp/B09V3FVJGG | Amazon検索欄に `B09V3FVJGG` を入れる |
| API代替・照度込み | Ambient Weather WS-2000 | B07GRBY9NP | Amazon表示 68,783円 | 温湿度、UV、風、雨 | Ambient Weather REST/Real-Time API | https://www.amazon.co.jp/dp/B07GRBY9NP | Amazon検索欄に `B07GRBY9NP` を入れる |
| API弱め・照度込み | Sainlogic Smart WiFi SA6 Plus | B0FVM5NDJC | Amazon表示 52,452円 | Wi-Fi/App/WU/WeatherCloud系 | Weather Underground/WeatherCloud/App連携。独自API未確認 | https://www.amazon.co.jp/dp/B0FVM5NDJC | Amazon検索欄に `B0FVM5NDJC` を入れる |
| 照度込みウェザーステーション | JoyeeLii スマート気象観測ステーション | B0GM6Q7BJV | Amazon表示 17,699円 | 温度、湿度、UV、雨、風。照度は商品名に明記なし | 屋外センサー、Wi-Fi/APP連動 | https://www.amazon.co.jp/dp/B0GM6Q7BJV | Amazon検索欄に `B0GM6Q7BJV` を入れる |
| 照度込みウェザーステーション | Moongiantgo スマホアプリ接続 気象観測器 | B0DRHXMBKC | Amazon表示 26,850円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、スマホアプリ接続。API記載なし | https://www.amazon.co.jp/dp/B0DRHXMBKC | Amazon検索欄に `B0DRHXMBKC` を入れる |
| 照度込みウェザーステーション | 特大画面WIFIプロフェッショナル屋外センサー | B0GZWH4183 | Amazon表示 27,949円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、Wi-Fi。専用サイトへアップロード表記、API記載なし | https://www.amazon.co.jp/dp/B0GZWH4183 | Amazon検索欄に `B0GZWH4183` を入れる |
| 照度込みウェザーステーション | 特大画面WIFIプロフェッショナル屋外センサー | B0DH4H5J72 | Amazon表示 27,990円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、Wi-Fi。専用サイトへアップロード表記。関連表示にWeather Underground/WeatherCloudあり | https://www.amazon.co.jp/dp/B0DH4H5J72 | Amazon検索欄に `B0DH4H5J72` を入れる |
| 照度込みウェザーステーション | TIMDU 気象観測所 5-in-1 | B0GYS1WT7T | Amazon表示 32,800円 | 温度、湿度、照度、UV、雨、風 | 屋外ワイヤレス、Wi-Fi | https://www.amazon.co.jp/dp/B0GYS1WT7T | Amazon検索欄に `B0GYS1WT7T` を入れる |
| 照度込みウェザーステーション | Moongiantgo 携帯アプリ付 気象観測器 | B0CQXHQ4Z2 | Amazon表示 33,550円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、Weather Senseアプリ。API記載なし | https://www.amazon.co.jp/dp/B0CQXHQ4Z2 | Amazon検索欄に `B0CQXHQ4Z2` を入れる |
| 照度込みウェザーステーション | Moongiantgo ウェザーステーション | B0CLG6B4QP | Amazon表示 34,950円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付 | https://www.amazon.co.jp/dp/B0CLG6B4QP | Amazon検索欄に `B0CLG6B4QP` を入れる |
| 照度込みウェザーステーション | Moongiantgo WIFI接続 気象観測器 | B0CLVCLT2B | Amazon表示 36,150円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、Wi-Fi。専用サイトへアップロード表記。関連表示にWeather Underground/WeatherCloudあり | https://www.amazon.co.jp/dp/B0CLVCLT2B | Amazon検索欄に `B0CLVCLT2B` を入れる |
| 照度込みウェザーステーション | Kurflo ウェザーステーション | B0F1CP1JZZ | Amazon表示 37,500円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、Wi-Fi | https://www.amazon.co.jp/dp/B0F1CP1JZZ | Amazon検索欄に `B0F1CP1JZZ` を入れる |
| 照度込みウェザーステーション | Moongiantgo ウェザーステーション | B0CK21Z7ST | Amazon表示 38,850円 | 温度、湿度、照度、UV、雨、風 | ソーラーパネル付、専用サイトへアップロード表記。関連表示にWeather Underground/WeatherCloudあり | https://www.amazon.co.jp/dp/B0CK21Z7ST | Amazon検索欄に `B0CK21Z7ST` を入れる |
| 屋外温湿度 | SwitchBot 防水温湿度計 | B0BVLYPYT1 | Amazon表示 1,780円 | 温度、湿度 | 電池、Bluetooth。Hub追加でクラウド/API | https://www.amazon.co.jp/dp/B0BVLYPYT1 | Amazon検索欄に `B0BVLYPYT1` を入れる |
| SwitchBotクラウド連携 | SwitchBot Hub Mini Matter対応版 | B0DSPXKDP8 | Amazon表示 5,230円 | SwitchBot機器の遠隔確認、API/通知連携 | USB給電、Wi-Fi/Bluetooth | https://www.amazon.co.jp/dp/B0DSPXKDP8 | Amazon検索欄に `B0DSPXKDP8` を入れる |
| 照度計/ルクスメーター | 未定 | - | 0〜3,000円程度 | 手動の照度確認 | スマホアプリまたは電池式照度計 | - | 初期調査はスマホアプリでも可。買う場合は型番を決めてから商品URL化 |

API確認メモ:

- Ecowittは公式情報で別格。GW1100系は ecowitt.net、Weather Underground、WeatherCloud、WOW、Customized servers への送信に対応。Ecowitt公式APIクイックスタートにも Cloud API、LAN HTTP API、Home Assistant integration が載っている。
- Ecowitt GW1100の対応センサー表では、WS90が outdoor temperature/humidity、light、UV、wind、rainfall に対応。
- Amazon上で確認できたEcowitt候補は Wittboy GW2001/WS90 が 47,568円、GW1100+WS90 キットが 68,273円。
- 「Wi-Fi」「アプリ」「専用サイトへアップロード」「Weather Underground/WeatherCloud」は、データを外へ出せる可能性を示すが、こちらから直接JSON APIで読む保証ではない。
- 自作連携を前提にするなら、購入前に「Weather Underground/WeatherCloudへアップロード可能」または「Custom server/custom upload対応」を商品ページ、説明書、販売者質問で確認する。
- Weather Underground系はPWSアップロードプロトコルがあり、外部サービスへ送る用途では使われる。ただし買った機器からローカルAPIで直接読めるとは限らない。

メーカー公式確認:

| メーカー | 公式で確認した内容 | URL |
|---|---|---|
| Ecowitt | Cloud API、LAN HTTP API、Home Assistant integration、Custom upload、GW1100の対応サーバー/WS90センサー | https://www.ecowitt.com/api/quickstart/product?id=282 |
| WeatherFlow Tempest | REST API、WebSocket API、UDP Broadcast、Personal Access Token | https://weatherflow.github.io/Tempest/api/ |
| Ambient Weather | JSON形式のREST/Real-Time API、API key、application key | https://ambientweather.com/support/question/view/id/1811/ |
| Sainlogic | Weather Underground、WeatherCloud、App連携 | https://www.sainlogic.com/it/pages/0310-key-features |

## API前提の星取表

価格は 2026-05-28 時点でChromeからAmazon.co.jpを開いて確認。公式機能はメーカー公式ページ/マニュアル/APIドキュメントで確認。

| 候補 | 価格 | API確度 | ローカル取得 | 照度/UV | 風/雨 | 土壌水分拡張 | Amazon入手 | コメント |
|---|---:|---|---|---|---|---|---|---|
| ECOWITT Wittboy GW2001/WS90 | 47,568円 | ◎ | ○ | ◎ | ◎ | ○ | ○ | GW1100+WS90の安い代替。本命 |
| ECOWITT GW1100 + WS90 | 68,273円 | ◎ | ◎ | ◎ | ◎ | ◎ | ○ | 拡張重視。WH51土壌水分などもEcowitt側へ寄せられる |
| WeatherFlow Tempest | 72,998円 | ◎ | ◎ | ◎ | ◎ | × | ○ | REST/WebSocket/UDPが強い。土壌水分は別系統 |
| Ambient Weather WS-5000 | 73,448円 | ◎ | △ | ◎ | ◎ | ○ | ○ | REST/Real-Time API。クラウド寄り |
| Ambient Weather WS-2000 | 68,783円 | ◎ | △ | ◎ | ◎ | ○ | ○ | APIあり。WS-5000より従来型 |
| Sainlogic WiFi系 | 52,452円 | △ | × | ○ | ○ | × | ○ | WU/WeatherCloud/App中心。直接API用途では弱い |
| Moongiantgo系 | 26,850〜38,850円 | △ | × | ○ | ○ | × | ○ | 安いがAPI未確定。API必須なら本命外 |
| QYTEC 0345 5-in-1 | 16,000円 | × | × | × | ○ | × | ○ | 温湿度/風/雨だけ。APIと照度UVがないので本命外 |
| 自作 ESP32/M5Stack 温湿度+照度APIノード | 約7,000〜15,000円 | ◎ | ◎ | ◎ | × | △ | 部品次第 | 最低要件に最短。温湿度+照度+APIだけに絞る |
| SwitchBot + Hub | 7,010円 | ○ | △ | × | × | × | ◎ | 温湿度のみ。照度/UV用途では不足 |

記号: ◎=公式情報で強い、○=可能、△=条件付き/要確認、×=不足。

現時点の判断: APIで取れない候補は本命から外す。第一候補は ECOWITT Wittboy GW2001/WS90。拡張性まで見るなら ECOWITT GW1100 + WS90。Tempest と Ambient はAPI代替として有力だが、土壌水分まで一体で寄せるならEcowittが扱いやすい。

## 自作見積もり: 温湿度 + 照度 + API

実例ベースでは、ESP32/ESP8266に BME280/SHT31 と BH1750 をI2C接続し、HTTP/WebSocket/MQTT/ThingSpeakへ送る構成が定番。今回の最低要件「温湿度 + 照度 + API」はこれで満たせる。

## フェーズ1設計図: 透明ケース簡易版

UVは今回の最低要件から外す。透明ケース越しのUVは素材で値が変わりやすいため、まずは温湿度 + 照度 + APIを成立させる。ハンダはしない。M5StickS3とGrove接続のM5Stack Unitだけで組む。

```text
ダイソー透明ケース + M5 ハンダなし版

本体箱:
  ダイソー フタ付収納ケース（透明）M
  M5StickS3
  Unit Hub または PaHUB
  USB-C 5V入力
  乾燥剤

温湿度:
  M5Stack ENV III/ENV IV
  通風スリット近く、できれば白い小型通風カバー側へ寄せる

照度:
  M5Stack Unit DLight
  透明面の裏、空が見える向き

左右側面:
  通気スリット + 防虫メッシュ

底面:
  水抜き穴
  ケーブル出口は下向き

API:
  HTTP /metrics.json
  または MQTT temp/humidity/lux
```

| 加工場所 | 内容 | 理由 |
|---|---|---|
| 左右側面 | 細い通気スリットを複数 | 温湿度がケース内にこもるのを減らす |
| 底面 | 1〜2mm水抜き穴を数個 | 結露や吹き込み水を逃がす |
| ケーブル出口 | 下向き、必要ならグロメット | 水がケーブルを伝って入るのを避ける |
| 照度センサー位置 | 透明面の裏に固定 | 小屋の影を測らない |

### 電源から簡易ウェザーステーションまでの導線

電源ボックスと簡易ウェザーステーションケースは別。100V側の屋外用電源ボックスには、延長コードのメス側とUSB-C ACアダプタだけを入れる。ダイソーケースには100Vを入れず、USB-C 5Vだけを入れる。

| 順番 | 区間 | 必要なもの | 足りない/確認するもの |
|---:|---|---|---|
| 1 | 防雨形コンセント -> 延長コード | HATAYA BFX-013KC2相当 | 屋外用、漏電遮断、定格 |
| 2 | 延長コード -> 100V側電源ボックス | Hrensaw/Hrensaw級のIP54電源ボックス | ACアダプタと差込口が無理なく入る内寸 |
| 3 | 100V側電源ボックス内で100V -> 5V | USB-C ACアダプタ | PSE、箱内発熱、ポート数 |
| 4 | 100V側電源ボックス -> 簡易ウェザーステーションケース | USB-C 1m-2m | ここから先は5Vだけ。実際の距離を測る |
| 5 | 簡易ウェザーステーションケース入口 | セパレートキャプコン または ゴムグロメット | USB-Cコネクタが通る穴径、ケーブル外径 |
| 6 | ケース内部 | M5StickS3、Unit Hub/PaHUB、ENV、DLight、Groveケーブル | Groveケーブル本数、箱内固定、乾燥剤 |
| 7 | ケース加工 | 通風スリット、防虫メッシュ、水抜き穴 | 穴あけ刃、バリ取り、白い小ひさし |

この段階では、ポンプ、MOSFET、GND端子台、土壌水分センサーは不要。

### 工具・加工で追加が必要なもの

インパクトドライバーはある前提。

| 用途 | 追加候補 | 理由 |
|---|---|---|
| 大穴 | ステップドリル | 樹脂ケースに20〜28mm級の穴を開ける。ホールソーより割れにくい |
| 下穴 | 3mmドリル | ステップドリル前のガイド穴 |
| 水抜き穴 | 1〜2mmドリル | 底面の結露/吹き込み水抜き |
| 仕上げ | バリ取りカッター、丸ヤスリ | ケーブル被覆を傷つけない |
| 割れ防止 | マスキングテープ、当て木 | 樹脂ケースの穴あけ時の割れ/欠けを減らす |
| 防滴仕上げ | 自己融着テープ、シリコンシーラント | 穴まわりの簡易防滴 |
| 通風保護 | 防虫メッシュ、薄い白プラ板 | スリットから虫や雨滴が入りにくくする |

### 通線部品の注意

オーム OA-WH22-06/13 は公式仕様で、適合ケーブル径6〜13mm、取付穴径28mm。USB-Cケーブルが細い場合、防水性能の条件から外れる可能性がある。実物ケーブル外径を測ってから、OA-WH22-06/13、OA-WH16系、ゴムグロメットのどれにするか決める。

### ハンダなしM5構成

| 部品 | 数 | URL | 役割 |
|---|---:|---|---|
| M5StickS3 | 1 | https://docs.m5stack.com/en/core/StickS3 | Wi-Fi/API送信本体 |
| M5Stack ENV III または ENV IV | 1 | https://docs.m5stack.com/ja/unit/env | 温度・湿度・気圧 |
| M5Stack Unit DLight | 1 | https://shop.m5stack.com/collections/globo_basis_collection/products/dlight-unit-ambient-light-sensor-bh1750fvi-tr | 照度 lux |
| M5Stack Unit Hub または PaHUB | 1 | https://docs.m5stack.com/en/unit/pahub | Groveを分岐。ENVとDLightを同時接続 |
| HY2.0-4P Groveケーブル | 必要分 | https://docs.m5stack.com/en/learn/interface/grove | 差すだけ配線 |
| ダイソー フタ付収納ケース（透明）M | 1 | https://jp.daisonet.com/products/4550480731698 | 本体箱 |
| 防虫メッシュ、結束バンド、乾燥剤 | 1式 | - | 通風、固定、湿気対策 |

| 初回で外すもの | 理由 |
|---|---|
| UVセンサー | 透明ケースでUVが減衰しやすく、初回の判断材料として不安定 |
| 風速/雨量 | 大葉の最低要件ではない |
| 本格百葉箱 | 初回には過剰。温度ズレが問題になったら温湿度だけ分離 |

### ダイソー候補ケース

蓋は必須。蓋なしの箱は、別で上カバーを作る前提でない限り本命にしない。

| 優先 | 候補 | 蓋 | 価格 | サイズ | URL | 判断 |
|---:|---|---|---:|---|---|---|
| 1 | フタ付収納ケース（透明）M | あり | 330円 | 内寸21.5 x 32 x 12.3cm / 外寸23.5 x 13.5 x 33.8cm | https://jp.daisonet.com/products/4550480731698 | 本命。M5/ESP32、USB-C曲げ、乾燥剤、センサー固定の余裕がある |
| 2 | 透明収納ケース（フタ付、B） | あり | 220円 | 27 x 5.7 x 10.4cm | https://jp.daisonet.com/products/4550480210780 | 長いが浅い。照度センサー別箱や薄型配置向け |
| 3 | クリアボックスMサイズ | あり | 110円 | 約13.5 x 9.7 x 7.1cm | https://jp.daisonet.com/products/4906137319113 | 小さい。ESP32最小構成向け |
| 4 | 積み重ね収納ボックス（深型） | なし | 220円 | 15.2 x 21.5 x 16.3cm | https://jp.daisonet.com/products/4550480731674 | 高さは良いが蓋がない。別の上カバーが必要 |
| 5 | 積み重ね収納ボックス | なし | 110円 | 15.2 x 21.5 x 8.3cm | https://jp.daisonet.com/products/4984355715931 | 薄めで蓋なし。今回の本命から外す |

採用方針: まずはフタ付収納ケース（透明）Mを買う。小さくしたい場合は、蓋付きの透明収納ケース/クリアボックスへ落とす。

### ケース穴とケーブル部品

| 場所 | 必要部品 | 数 | URL | 理由 |
|---|---|---:|---|---|
| USB-C電源入力 | オーム OA-WH22-06/13 セパレートキャプコン相当 | 1 | https://www.ohm.jp/english/parts/capcon_oa-w/separate/ | USB-Cコネクタ付きケーブルを切らずに通す |
| センサー線/細線 | ゴムグロメット または 小径ケーブルグランド | 1-2 | Amazon/ホームセンターで現物径に合わせる | 穴のバリ保護、ケーブル固定、雨滴侵入の低減 |
| ケース底面 | 1-2mm水抜き穴 | 数個 | - | 入った水や結露を逃がす |
| 穴あけ後 | 自己融着テープ/シリコンシーラント | 適量 | Amazon/ホームセンター | 仕上げの防滴補強 |

穴は側面下寄りに開け、ケーブルは一度下へ垂らしてから箱へ入れる。

### 既存事例

| 事例 | URL | 構成 | この計画への反映 |
|---|---|---|---|
| Comprehensive Local Weather Station With ESP32 | https://www.instructables.com/Comprehensive-Local-Weather-Station-With-ESP32-for/ | ESP32、温湿度センサー、Stevenson Screen | 温湿度は通風シェルター内で測る |
| Build a Weather Station Enclosure | https://www.instructables.com/Build-a-Weather-Station-Enclosure/ | 日射と雨を遮り、空気を通す筐体 | 左右スリットだけでなく白い外カバー/日除けが必要 |
| ESP32 weather station guide | https://zbotic.in/build-an-esp32-weather-station-with-oled-display-complete-project-guide/ | ESP32、BME280、BH1750/LDR、ケーブルグランド | 温湿度 + 照度 + API構成は成立。ケーブルはグランドとドリップループ |
| HiGrow enclosure | https://youmagine.com/designs/higrow-enclosure | ESP32植物センサー用屋外ケース | 植物系センサーの屋外ケース化事例。防湿処理が必要 |
| 農業ハウスESP32温度監視 | https://www.shimanuki-farm.net/archives/2403/ | ESP32、防水ケース、温度送信 | 回路本体は防水/防滴箱へ入れる |

反映方針: ダイソー透明ケースはプロトタイプ本体箱。常設寄りにするなら、温湿度センサーだけ小さな白い通風カバーへ出し、照度センサーは透明面または外向きにする。

| 構成 | 概算 | 取れるもの | API | コメント |
|---|---:|---|---|---|
| 最低要件構成 | 7,000〜15,000円 | 温湿度、照度 | ◎ MQTT/HTTP/JSON自由 | まずこれ。UV/風雨/土壌水分は入れない |
| 大葉向け拡張 | 12,000〜22,000円 | 温湿度、照度、土壌水分 | ◎ MQTT/HTTP/JSON自由 | 水やり判断まで見るならここ |
| UV追加 | +1,000〜3,000円 | UV | ◎ | 透明カバー素材で値が狂いやすい |

| 部品 | 概算 | 用途 |
|---|---:|---|
| ESP32 DevKit / M5Stamp / M5StickS3 | 1,500〜5,000円 | Wi-Fi/API送信 |
| SHT31/SHT35 または BME280 | 1,000〜3,000円 | 温湿度。BME280なら気圧も取れる |
| BH1750 または TSL2591 | 500〜2,000円 | 照度lux |
| ダイソー/100均小物ケース、鉢皿、白プラ板 | 300〜1,000円 | 温湿度用の通風シェルター材料 |
| 小型防水箱/ケーブルグランド/乾燥剤 | 1,500〜4,000円 | ESP32本体保護 |
| USB-Cケーブル/5V電源/固定具 | 1,500〜4,000円 | 電源と設置 |
| 防水土壌水分センサー | 2,000〜6,000円 | 大葉向け拡張 |

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

訂正: 照度は栽培可否の判断に必要なので、初期調査では必ず測る。常時IoT化するかどうかは後でよい。

## 電源まわりの整理

| 系統 | 電源 | 置き場所 | メモ |
|---|---|---|---|
| 100V安全側 | 防雨形コンセント -> HATAYA -> 屋外用電源ボックス | ベランダ、床直置きしない | ACアダプタや差込口を入れる。裸線加工しない |
| M5/ポンプ側 | 屋外用電源ボックス内のUSB-C ACアダプタ -> USB-C 1m-2m | M5防滴箱、プランター支柱へ固定 | M5とポンプ用5Vを分ける。GNDは共通化 |
| Wi-Fiウェザーステーション屋外センサー | ソーラー + 電池 | プランター近く、空が見える位置 | 100Vを引かない。照度/UVを見るため日陰に入れない |
| Wi-Fiウェザーステーション表示機/ゲートウェイ | USB/ACアダプタ | 室内推奨、または100V箱側 | Wi-Fiへアップロードする側。雨ざらしにしない |
| SwitchBot防水温湿度計 | 電池 | ベランダ | Hubは室内コンセント。温湿度だけなら電源工作が少ない |

ウェザーステーションを使う場合、屋外センサー本体に100Vを持っていかない。屋外センサーはソーラー/電池で動かし、表示機やゲートウェイだけを室内または100V箱側で給電する。

## 照度測定の進め方

| 手順 | 測るもの | 判断 |
|---|---|---|
| 1 | 常設センサーで照度/UVを取る。スマホ照度アプリや照度計は設置前後の補助確認に使う | 北向きベランダの実力を見る |
| 2 | 1週間ほど晴れ/曇りの日を記録する | 大葉でいけるか、育成ライトがいるか判断 |
| 3 | 継続ログが欲しくなったらDLight透明カバー、またはWi-Fiウェザーステーションへ進む | IoT化はここからでよい |

## M5側防滴ボックス候補

| 優先 | 候補サイズ | 位置づけ | メモ |
|---:|---|---|---|
| 1 | 150 x 200 x 100mm級 | 推奨 | M5StickS3、TypeC2Grove、MOSFET、GND端子台、USB-C曲げ、乾燥剤を入れやすい |
| 2 | タカチ BCAP112107G / 外寸110 x 210 x 75mm / 内寸85.8 x 185.8 x 61.6mm | 最小候補 | 部品は入るが、USB-Cケーブル曲げ、通線部品、箱内固定の余裕が少ない |

## 環境センサー保護候補

| 用途 | 候補 | 採用判断 |
|---|---|---|
| 温度・湿度・気圧 | フィールドプロ FP1806 小型自然通風シェルター | 本命候補。直径130mm、高さ200mm級で、ENV IIIを外気測定に近づけやすい |
| 温度・湿度・気圧 | Amazon検索: 小型 自然通風シェルター / 放射シールド | 安価候補。サイズ、取付方法、センサー収納径を確認して選ぶ |
| 温度・湿度・気圧 | 3Dプリント放射シールド / DIY Stevenson screen | DIY候補。屋外IoTではよくあるが、耐候性、白色材、通気、固定方法を自分で確認する |
| 照度 | 透明フタ付き小型ケース / 透明アクリルカバー | DLight用。百葉箱に入れると照度が落ちるので、透明カバーで雨だけ避ける |

実例の傾向:

- ちゃんと測りたい人は、温湿度センサーを放射シールド、百葉箱、Stevenson screenに入れる。
- 安く済ませる人は、白い皿状パーツや3Dプリント部品で放射シールドを作る。
- 照度センサーは温湿度用シェルターとは分け、透明カバーで雨だけ避ける。

## 追加で買うと安心な消耗品

| 備品 | 数量目安 | 用途 |
|---|---:|---|
| 自己融着テープ | 1 | コネクタ周り・ケーブル出口の防滴補強 |
| シリカゲル乾燥剤 | 適量 | M5箱内の湿気対策 |
| 耐候性結束バンド | 1袋 | 支柱、ケーブル、チューブ固定 |
| Rタイプ ケーブルクランプ | 適量 | 箱内外でケーブルを固定し、コネクタに力をかけない |

## オプション

| フェーズ | 候補 | 用途 | 注意 |
|---|---|---|---|
| 2 | M5Stack ENV III | 温湿度・気圧 | 外気を測るなら小型百葉箱/自然通風シェルターが必要 |
| 2 | M5Stack Unit DLight | 照度 | 北向きベランダの明るさ判断用。防水ではないため透明カバー等が必要 |
| 3 | ESP32 PSRAM Timer Camera X | 栽培画像 | 電源、Wi-Fi、設置角度、防雨が別途課題 |

## 栽培側の候補

| 備品 | 数量目安 | メモ |
|---|---:|---|
| 大葉用 横長プランター | 1 | 幅60〜65cm、深さ20cm以上が目安。2〜3株なら株間20cm前後を確保 |
| 野菜用培養土 14-20L | 1 | 大葉向け。横長プランター容量に合わせる |
| 短い支柱 or 小型ワイヤーネット | 1 | M5箱固定用。壁や手すりに頼らず、横長プランターに立てて結束バンドで箱を固定する |
| 大型トレー・鉢皿 | 1 | ベランダ水漏れ対策 |
| 2Lペットボトル or 3L-3.5L級ウォータータンク | 1 | 分離ポンプの吸水元。大葉2株の検証は2Lで十分始められる。常設は倒れにくい3L級を検討 |
| 大葉苗 | 2 | 北向きで比較的明るいベランダ向け。園芸店で状態確認する方が安全 |

## 北向きベランダの栽培注意

北向きで直射日光が少ない場合は、強い日照を必要とする実もの野菜より、大葉のような葉物へ寄せる。

- 大葉は明るい半日陰でも育てやすい。
- 直射が少ない環境では、葉がやわらかくなりやすい一方、暗すぎると徒長する。
- 深さ20cm以上、幅60cm級の横長プランターに2〜3株を目安にする。
- 水切れに弱いので、土壌水分センサーと短時間給水の検証対象に向く。

## 購入前チェック

- 型番が一致しているか。
- 屋外用、防雨、防滴、防塵の表記が用途に合うか。
- PSE や定格が確認できるか。
- 実物寸法がボックス内寸に収まるか。
- USB-C コネクタがセパレートキャプコンを通せるか。
- 密閉に近い箱内で AC アダプタが過熱しないか。
- ベランダに露出するセンサーやポンプに、防水等級または屋外利用前提の説明があるか。
