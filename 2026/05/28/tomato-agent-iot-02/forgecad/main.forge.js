const viewMode = Param.choice("View mode", "final-cad", ["final-cad", "exploded"]);
const showSafetyZones = Param.bool("Show safety zones", true);

const C = {
  power: "#f4c64f",
  powerWall: "#d18a21",
  iot: "#67b7dc",
  iotWall: "#2674a8",
  dark: "#1f2933",
  plastic: "#f4f6f8",
  cable: "#111111",
  usb: "#f7f7f7",
  grove: "#00a6c8",
  water: "#0496d7",
  danger: "#e11d48",
  green: "#3c7a3c",
};

const d = {
  powerOuter: { w: 395, dep: 315, h: 145 },
  powerInner: { w: 330, dep: 225, h: 128 },
  iotOuter: { w: 300, dep: 190, h: 100 },
  iotInner: { w: 260, dep: 160, h: 80 },
  breaker: { w: 90, dep: 43, h: 43 },
  tap: { w: 120, dep: 55, h: 45 },
  adapter: { w: 45, dep: 45, h: 30 },
  m5: { w: 48, dep: 24, h: 15 },
  typec: { w: 32, dep: 24, h: 11 },
  watering: { w: 193, dep: 27, h: 33 },
  env: { w: 32, dep: 24, h: 8 },
  desiccant: { w: 55, dep: 35, h: 12 },
  outdoorOutlet: { w: 86, dep: 18, h: 120 },
};

function cuboid(size, x, y, z, color, name, opacity = 1) {
  return {
    name,
    shape: box(size.w, size.dep, size.h)
      .placeReference("bottom", [x, y, z])
      .color(color)
      .material({ opacity }),
  };
}

function plate(w, dep, h, x, y, z, color, name, opacity = 1) {
  return cuboid({ w, dep, h }, x, y, z, color, name, opacity);
}

function openBox(prefix, outer, inner, x, y, z, color, wallColor) {
  const wall = (outer.w - inner.w) / 2;
  const backWall = (outer.dep - inner.dep) / 2;
  const floorH = outer.h - inner.h;
  const out = [];
  out.push(plate(outer.w, outer.dep, floorH, x, y, z, wallColor, `${prefix} floor`));
  out.push(plate(wall, outer.dep, inner.h, x - outer.w / 2 + wall / 2, y, z + floorH, wallColor, `${prefix} left wall`));
  out.push(plate(wall, outer.dep, inner.h, x + outer.w / 2 - wall / 2, y, z + floorH, wallColor, `${prefix} right wall`));
  out.push(plate(inner.w, backWall, inner.h, x, y + outer.dep / 2 - backWall / 2, z + floorH, wallColor, `${prefix} back wall`));
  out.push(plate(inner.w, backWall, inner.h, x, y - outer.dep / 2 + backWall / 2, z + floorH, wallColor, `${prefix} front wall with lower cable entries`));
  out.push(plate(inner.w, inner.dep, 2, x, y, z + floorH + 1, color, `${prefix} usable inner floor`, 0.45));
  out.push(plate(outer.w, outer.dep, 5, x, y + (viewMode === "exploded" ? -260 : 0), z + outer.h + (viewMode === "exploded" ? 80 : 18), color, `${prefix} removable lid shown raised`, 0.55));
  return out;
}

function cylBetween(name, a, b, r, color) {
  const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
  return {
    name,
    shape: cylinder(len, r, r, 24)
      .pointAlong([dx, dy, dz])
      .translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2)
      .color(color),
  };
}

function dripLoop(name, x, y, z, r, color) {
  return [
    cylBetween(`${name} vertical drop`, [x, y, z], [x, y, z - 70], r, color),
    cylBetween(`${name} lower run`, [x, y, z - 70], [x + 62, y, z - 70], r, color),
    cylBetween(`${name} vertical rise to entry`, [x + 62, y, z - 70], [x + 62, y, z - 14], r, color),
  ];
}

function dripLoopYZ(name, x, y, z, r, color) {
  return [
    cylBetween(`${name} vertical drop`, [x, y, z], [x, y, z - 70], r, color),
    cylBetween(`${name} lower run`, [x, y, z - 70], [x, y + 62, z - 70], r, color),
    cylBetween(`${name} vertical rise to entry`, [x, y + 62, z - 70], [x, y + 62, z - 14], r, color),
  ];
}

function wallDripLoop(name, x, y, z, r, color) {
  return [
    cylBetween(`${name} wall drop`, [x, y, z], [x, y, z - 95], r, color),
    cylBetween(`${name} bottom loop offset`, [x, y, z - 95], [x + 34, y, z - 95], r, color),
    cylBetween(`${name} wall rise`, [x + 34, y, z - 95], [x + 34, y, z - 30], r, color),
  ];
}

function cableGland(name, x, y, z, color) {
  return {
    name,
    shape: cylinder(24, 8, 8, 32)
      .pointAlong([0, 1, 0])
      .translate(x, y, z)
      .color(color),
  };
}

function cableGlandX(name, x, y, z, color) {
  return {
    name,
    shape: cylinder(24, 8, 8, 32)
      .pointAlong([1, 0, 0])
      .translate(x, y, z)
      .color(color),
  };
}

const out = [];

out.push(plate(980, 440, 8, 0, 0, 0, "#77866c", "balcony floor datum z0", 0.55));
out.push(plate(980, 10, 620, 0, 190, 8, "#c8c5ba", "rear wall reference plane"));
out.push(cuboid(d.outdoorOutlet, -410, 181, 390, "#f3f0e8", "rainproof wall outlet center height 450mm"));
out.push(plate(72, 6, 92, -410, 169, 404, "#d7d0c2", "rainproof outlet hinged cover", 0.75));
out.push(cylBetween("450mm outlet height dimension line", [-470, 174, 8], [-470, 174, 450], 2.5, C.green));
out.push(cylBetween("450mm dimension top tick", [-490, 174, 450], [-450, 174, 450], 2.5, C.green));
out.push(cylBetween("450mm dimension floor tick", [-490, 174, 8], [-450, 174, 8], 2.5, C.green));

out.push(...openBox("100V outdoor power box LSO-70 class", d.powerOuter, d.powerInner, -250, 0, 35, C.power, C.powerWall));
out.push(...openBox("5V IP65 electronics box", d.iotOuter, d.iotInner, 245, 0, 80, C.iot, C.iotWall));

out.push(cuboid(d.breaker, -330, -55, 62, "#f07b3f", "HATAYA BFX breaker block placeholder - measure actual"));
out.push(cuboid(d.tap, -205, -55, 62, "#ffd84d", "HATAYA outlet/tap placeholder - measure actual"));
out.push(cuboid(d.adapter, -215, 55, 62, "#333b44", "USB-C AC adapter placeholder"));
out.push(plate(82, 72, 38, -215, 55, 61, "#9aa0a6", "USB-C adapter bend-clearance envelope", 0.28));

out.push(cuboid(d.m5, 145, -55, 107, "#273c75", "M5StickS3 48x24x15"));
out.push(cuboid(d.typec, 145, 5, 107, "#1aa89a", "TypeC2Grove U151 32x24x11"));
out.push(cuboid(d.env, 145, 58, 107, "#6a994e", "ENV III U001-C 32x24x8"));
out.push(cuboid(d.watering, 280, -55, 107, "#6d5ba6", "Unit Watering U101 193x27x33"));
out.push(cuboid(d.desiccant, 276, 58, 107, "#e9ecef", "replaceable desiccant pack"));

out.push(cableGlandX("100V left-side cable entry gland", -448, -70, 95, C.cable));
out.push(cableGland("5V USB-C lower cable entry gland", 95, -96, 145, C.usb));
out.push(cableGland("water tube exit kept away from 100V side", 385, -96, 135, C.water));

out.push(cylBetween("finished 100V cord vertical drop from outlet", [-410, 169, 450], [-410, 169, 245], 5, C.cable));
out.push(cylBetween("finished 100V cord left of power box upper run", [-410, 169, 245], [-462, 120, 245], 5, C.cable));
out.push(cylBetween("finished 100V cord left side drop before loop", [-462, 120, 245], [-462, -70, 170], 5, C.cable));
out.push(cylBetween("100V drip loop left down leg", [-462, -70, 170], [-462, -70, 70], 4.2, C.cable));
out.push(cylBetween("100V drip loop bottom", [-462, -70, 70], [-462, -20, 70], 4.2, C.cable));
out.push(cylBetween("100V drip loop rise to side entry", [-462, -20, 70], [-462, -20, 95], 4.2, C.cable));
out.push(cylBetween("finished 100V cord enters left side of power box", [-462, -20, 95], [-448, -70, 95], 5, C.cable));
out.push(cylBetween("5V USB-C only cord between boxes", [-190, 55, 91], [95, -96, 145], 3.2, C.usb));
out.push(...dripLoop("5V USB-C drip loop", 35, -96, 145, 3.2, C.usb));
out.push(cylBetween("Grove cable M5StickS3 to TypeC2Grove", [145, -43, 126], [145, -7, 122], 2, C.grove));
out.push(cylBetween("Grove cable TypeC2Grove to ENV III", [145, 17, 121], [145, 54, 117], 2, C.grove));
out.push(cylBetween("Grove cable TypeC2Grove to Unit Watering", [161, 5, 122], [265, -48, 126], 2, C.grove));
out.push(cylBetween("water tube route away from 100V", [385, -96, 135], [455, -185, 45], 3.5, C.water));

if (showSafetyZones) {
  out.push(plate(80, 280, 6, -5, -5, 36, C.danger, "red keep-apart zone between 100V and water tube", 0.5));
}

console.log("CAD model: open-box layout, wall outlet included.");
console.log("Rainproof wall outlet center height: 450 mm from balcony floor datum.");
console.log("100V box outer:", d.powerOuter.w, "x", d.powerOuter.dep, "x", d.powerOuter.h, "mm");
console.log("100V box usable:", d.powerInner.w, "x", d.powerInner.dep, "x", d.powerInner.h, "mm");
console.log("5V box outer:", d.iotOuter.w, "x", d.iotOuter.dep, "x", d.iotOuter.h, "mm");
console.log("5V box usable:", d.iotInner.w, "x", d.iotInner.dep, "x", d.iotInner.h, "mm");
console.log("HATAYA BFX external shape is still a placeholder and must be measured.");

return out;
