# QAメモ

Checked: 2026-05-28

## 実行確認

- `forgecad run forgecad/main.forge.js`
  - 実行成功。
  - 主要寸法ログ出力を確認。
  - 透明な外形箱だけの初版は破棄し、開いた箱・底板・壁・部品・ケーブル入口を持つCADモデルに作り直し。
- `forgecad render 3d forgecad/main.forge.js assets/cad-overview.png --camera 45:25 --camera 0:90 --camera 0:0 --size 1200`
  - `assets/cad-overview_az45_el25.png`
  - `assets/cad-overview_az0_el90.png`
  - `assets/cad-overview_az0_el0.png`
- `forgecad render 3d forgecad/main.forge.js assets/cad-with-450mm-outlet.png --camera 45:25 --camera 0:90 --camera 0:0 --size 1300`
  - `assets/cad-with-450mm-outlet_az45_el25.png`
  - `assets/cad-with-450mm-outlet_az0_el90.png`
  - `assets/cad-with-450mm-outlet_az0_el0.png`
  - ベランダ床面から450 mmの壁面コンセント、防雨カバー、寸法ライン、100Vコード経路を追加確認。
- `forgecad render inspect forgecad/main.forge.js assets/cad-inspect --channels rgb,mask,collisions --force --size 900`
  - inspect bundle 作成成功。
  - collision count は 21。

## collision count の読み方

このモデルは、ラベル板、ケーブルグランド、ケーブル/チューブの差し込み部など、接触や貫通を表現する部位があるため collision count が残ります。

実際に修正対象だった M5StickS3 と 5V側部品の干渉は解消済みです。

次の段階で、採用する実箱の内部リブ・ボス・ケーブルグランドを入れる場合は、箱を単なる透明ブロックではなく壁厚付きシェルにして、部品同士/壁との干渉を再検査します。

## QA状態

| 項目 | 状態 |
|---|---|
| 寸法調査 | pass with caveats |
| ForgeCAD 実行 | pass |
| レンダリング | pass |
| inspect bundle | pass with intentional enclosure collisions |
| HATAYA BFX-013KC2 外形 | blocked until physical measurement or official dimension drawing |
| USB-C ACアダプタ外形 | blocked until product selection |
| 最終設置安全確認 | blocked until actual purchased products and location are known |
