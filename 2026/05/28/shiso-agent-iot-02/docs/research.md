# ベランダで大葉エージェントIoT計画 02 調査メモ

Checked: 2026-05-28

## 方針

- 100V AC 側は屋外用電源ボックスだけに入れる。
- ベランダ既設の防雨形コンセントは、ベランダ床面から中心高さ約450 mmとしてCADに反映する。
- IP65 防滴ボックスには 5V USB-C / Grove 系だけを入れる。
- 100V 側は完成品を挿すだけ。切断、被覆剥き、ねじり、圧着、端子加工はしない。
- ボックスは床直置きしない。水タンク、鉢皿、給水チューブより高い位置に置く。
- 全ケーブルに水切りループを作り、入口は下面または側面下寄りにする。

## 寸法ソース

| 品目 | 寸法・仕様 | CAD採用値 | 根拠 |
|---|---:|---:|---|
| M5StickS3 | 48.0 x 24.0 x 15.0 mm、5V USB-C入力 | 48 x 24 x 15 mm | M5Stack Store product size |
| M5Stack TypeC to Grove U151 | 32.0 x 24.0 x 10.8 mm、5V最大3A、Grove cable 20cm | 32 x 24 x 11 mm | M5Stack Docs |
| M5Stack Unit ENV-III U001-C | 32.0 x 24.0 x 8.0 mm、動作温度0-60 C | 32 x 24 x 8 mm | M5Stack Docs PDF |
| HATAYA BFX-013KC / BFX-013KC2 | 0.7m、コンセント側0.2m、プラグ側0.5m、15A/125V、感度15mA、0.1秒以内、質量約0.65kg | ブレーカーブロック 90 x 43 x 43 mm 仮、タップ部 120 x 55 x 45 mm 仮 | HATAYA/ESCO/販売店情報。外形は実測要確認 |
| 屋外用電源ボックス候補 | タカショー LSO-70: 外寸約395 x 315 x 145 mm、有効内寸約330 x 225 x 128 mm、IP55 | 内寸 330 x 225 x 128 mm | Costco Japan |
| 5V IoT 防滴ボックス候補 | M5StickS3、TypeC2Grove、MOSFET、GND端子台、乾燥剤を入れる。ポンプ本体は雨よけ下または箱内に分離配置 | 内寸 160 x 110 x 60 mm 以上 | CAD用推奨値 |
| USB-C ACアダプタ | 製品未指定。小型20-30W級を 45 x 45 x 30 mm、プラグ/ケーブル曲げ代込み占有 80 x 70 x 45 mm と仮定 | 45 x 45 x 30 mm | 実機選定後に差し替え |
| ベランダ防雨形コンセント | 床面から中心高さ 450 mm | 壁面に 86 x 18 x 120 mm 仮ブロック | ユーザー提供条件 |

## 推奨レイアウト

### 100V 側ボックス

- タカショー LSO-70 級の有効内寸 330 x 225 x 128 mm を第一候補にする。
- HATAYA の差込口、USB-C ACアダプタ、曲げ半径、ケーブル水切りを同時に入れるには、小型すぎる防滴箱では厳しい。
- 100V ボックス内部では、USB-C ACアダプタを差し込むだけにする。追加の端子台や裸線接続は設けない。
- 既設コンセントが床上450 mmなので、コンセントから一度下げて水切りループを作り、屋外用電源ボックスへ入れる。
- 排水される設計ではないため、箱内に水が入った場合にアダプタ周辺へ溜まらない向きで固定する。

### 5V IoT 側ボックス

- Unit Watering は屋外常設の本命から外し、防水土壌水分センサーと分離チューブポンプ構成にする。
- ENV III は箱内に密閉すると外気温湿度を測りにくい。安全優先なら箱内、計測優先なら防雨カバー付き通気部や外付け配置を別途検討する。
- 乾燥剤は電子基板から離し、交換しやすい位置に置く。
- Grove ケーブルのコネクタ部に無理な曲げをかけない。20cmケーブルを前提に機器間距離を短くする。

## 未確定・実測ポイント

- BFX-013KC2 のブレーカーボックス部と3口タップ部の正確な外形寸法。
- 採用するUSB-C ACアダプタの外形、発熱、屋外ボックス内利用可否。
- 採用するIP65ボックスの有効内寸、リブ、ボス、ケーブルグランド位置。
- 分離チューブポンプの吸水/吐出チューブを箱内外どちらに逃がすか。

## ソース

- M5StickS3 product size: https://shop.m5stack.com/products/m5sticks3-esp32s3-mini-iot-dev-kit
- TypeC to Grove product size and 5V@3A: https://docs.m5stack.com/en/unit/typec2grove
- Unit ENV-III product size PDF: https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/static/pdf/static/en/unit/envIII.pdf
- HATAYA BFX product page: https://www.hataya.jp/products/cordreel/post1066/
- ESCO BFX-013KC spec summary: https://www.esco-net.com/wcs/escort/ec/detail/pdf?hHinCd=EA940MH-21
- Takasho LSO-70 internal dimensions: https://www.costco.co.jp/c/TAKASHO-Power-Box-L-Size-LSO-70/p/68460
