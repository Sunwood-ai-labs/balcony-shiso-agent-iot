# 接続確認

作成日: 2026-05-28

## 結論

M5StickS3 と防水土壌水分センサー、分離ポンプは接続できる。ただし、センサーもポンプもそのままM5StickS3へ直挿しする構成ではない。

- DFRobot SEN0308 はアナログ出力センサーなので、M5StickS3 のADC入力へ入れる。
- 5V-6Vチューブポンプは約500mA級のDCモーターなので、M5StickS3のGPIOやGrove電源へ直結しない。
- ポンプは外部5V電源 + MOSFETドライバでON/OFFする。
- M5StickS3、センサー、ポンプ電源、MOSFETドライバのGNDは共通化する。

## M5StickS3側

公式PinMapでは、M5StickS3 のGrove端子は以下。

```text
HY2.0-4P Grove
GND / 5V / G9 / G10
```

今回の割り当て案:

| M5StickS3側 | 用途 |
|---|---|
| GND | 共通GND |
| 5V | センサーVCC、またはセンサー用5V |
| G9 | SEN0308 Signal / ADC入力 |
| G10 | MOSFETドライバ制御入力 |

G9/G10は実機でADC/GPIOとして使えることを短いスケッチで確認する。SEN0308の出力は0-2.9Vなので、3.3V系ADCへ入れる前提として範囲内。

## SEN0308 接続

DFRobot SEN0308 は 3.3-5.5V動作、0-2.9Vアナログ出力。

```text
SEN0308 Red    VCC    -> M5StickS3 Grove 5V
SEN0308 Black  GND    -> M5StickS3 Grove GND
SEN0308 Yellow Signal -> M5StickS3 G9 / ADC
SEN0308 Black  Shield -> GND、または未接続
```

必要部品:

- Grove/HY2.0-4P to Dupont 変換ケーブル、またはM5用Groveブレイクアウト。
- 2.54mm 3ピン側を受けられるジャンパ線。
- 屋外側へ出す場合は、コネクタ部を防滴箱内または防滴ジョイント内に置く。

## ポンプ接続

Adafruit 3910相当の5V-6Vチューブポンプはモーター電流が約500mA。M5StickS3のGPIOやGrove負荷へ直結しない。

```text
外部5V +      -> ポンプ +
ポンプ -      -> MOSFET Drain / OUT-
MOSFET Source -> 外部5V GND
M5StickS3 G10 -> MOSFET IN
M5StickS3 GND -> 外部5V GND
```

必要部品:

- 5V対応 MOSFETドライバモジュール、またはロジックレベルN-MOSFET回路。
- フライバックダイオード付き、またはDCモーター駆動向けと明記されたモジュール。
- ポンプ用5V電源。Anker 523 Chargerの片ポートを使うか、TypeC2Grove/USB-C 5V給電から分岐する。
- GND共通化用のWAGO 221-415/221-615相当レバーコネクタ。
- ポンプ線の接続用端子台または防滴コネクタ。

GND共通化は、M5StickS3のGND線、ポンプ電源のマイナス線、MOSFETドライバのGND線、センサーGND線を同じWAGO 221などへ入れて、全員が同じ0V基準を見る状態にすること。

## 電源構成

```text
Anker 523 Charger
  ├ USB-C 1 -> M5StickS3
  └ USB-C 2 -> ポンプ用5V系 / TypeC2Grove / MOSFETドライバ

GNDはM5側とポンプ側で共通化
100VはM5側IP65箱へ入れない
```

## 全部品リスト

### 制御・電源

- M5StickS3
- Anker 523 Charger 47W
- USB-C 3mケーブル x2
- USB-C電圧・電流チェッカー

### センサー

- DFRobot SEN0308 IP65 Capacitive Soil Moisture Sensor
- Grove/HY2.0-4P to Dupont 変換ケーブル、またはM5用Groveブレイクアウト
- ジャンパ線または2.54mm 3ピン接続部品

### ポンプ

- 5V-6Vチューブポンプ
- MOSFETポンプドライバモジュール
- 端子台または防滴コネクタ
- シリコンチューブ予備

### 防滴・固定

- タカチ BCAP112107G などのIP65防滴ボックス
- オーム OA-WH22-06/13 セパレートキャプコン x2-3
- 自己融着テープ
- シリカゲル
- 耐候性結束バンド
- ケーブルクランプ

## 未確定チェック

- G9をADC入力、G10をポンプ制御GPIOとして使う実機スケッチ確認。
- ポンプ起動時の電圧降下。
- MOSFETドライバが500mA以上を余裕を持って扱えること。
- ポンプ電源とM5電源を分けた場合のGND共通化。
- 屋外側コネクタの防滴処理。
