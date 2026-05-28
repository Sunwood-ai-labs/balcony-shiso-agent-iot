# 仕様確認メモ

確認日: 2026-05-28

この計画は購入前の企画書なので、商品仕様は購入直前に再確認する。以下は現時点で参照した公式・販売元系ページのメモ。

## M5Stack 系

- M5StickS3
  - 参照: <https://docs.m5stack.com/en/core/StickS3>
  - 確認観点: 本体サイズ、USB-C入力、Grove/HY2.0-4Pまわり。
- M5Stack Grove interface
  - 参照: <https://docs.m5stack.com/en/learn/interface/grove>
  - 確認観点: Grove/HY2.0-4P のピン構成。
- USB TypeC2Grove Unit
  - 参照: <https://shop.m5stack.com/products/usb-typec2grove-unit>
  - 確認観点: USB-C 5V入力、Grove給電補助としての利用。

## 屋外本命センサー・ポンプ

- DFRobot Gravity IP65 Capacitive Soil Moisture Sensor / SEN0308
  - 参照: <https://www.dfrobot.com/product-2054.html>
  - 参照: <https://wiki.dfrobot.com/sen0308>
  - 確認観点: IP65、防水保護、3.3-5.5V、アナログ出力、ケーブル長、M5側ADC接続方法。
- Adafruit Peristaltic Liquid Pump with Silicone Tubing / Product ID 3910
  - 参照: <https://www.adafruit.com/product/3910>
  - 確認観点: 5V-6V DC、チューブポンプ、モーター電流約500mA、M5側駆動回路。

## M5StickS3 接続

- M5StickS3
  - 参照: <https://docs.m5stack.com/en/core/StickS3>
  - 確認観点: Grove端子が `GND / 5V / G9 / G10`。センサーADC入力とポンプ制御GPIOの割り当て候補。

## 100V 側・防滴部材

- HATAYA BFX系
  - 参照: <https://www.hataya.jp/products/cordreel/post1066/>
  - 確認観点: 屋外用、防雨、漏電遮断、定格。

## 未確認のまま残すこと

- Amazon の販売者、価格、在庫、商品ページURL。
- RESTMO、Anker、タカチ、オーム電機の候補品が、購入時点で同じ仕様・付属品かどうか。
- 実際のベランダでの雨の吹き込み、コンセント高さ、管理規約。

これらは購入直前または現地実測で確定する。
