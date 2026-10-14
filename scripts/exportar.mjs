// Exporta los recursos del manual CD Week: SVG sueltos desde cd-week.js y PNG de cada pieza de manual.html con Edge headless.
// Uso: node scripts/exportar.mjs [ids...]   (requiere Node y Microsoft Edge; EDGE=<ruta> si Edge está en otro lugar)
import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import vm from 'node:vm';

const EDGE = process.env.EDGE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const DIR = resolve(fileURLToPath(new URL('..', import.meta.url)));
// cd-week.js es un script de navegador: se evalúa en un contexto aparte y se toma CDWeek de ahí.
const ctx = {};
vm.runInNewContext(readFileSync(join(DIR, 'cd-week.js'), 'utf8'), ctx);
const { CDWeek } = ctx;

// ---------- SVG sueltos (grafito por defecto; cambian de color con `color` o `stroke`) ----------
const conColor = (svg, color, w, h) => svg.replace('<svg class="cdw-svg" ', `<svg width="${w}" height="${h}" style="color:${color}" `);
mkdirSync(join(DIR, 'svg/iconos'), { recursive: true });
mkdirSync(join(DIR, 'svg/dibujos'), { recursive: true });
for (const k of Object.keys(CDWeek.ICONOS)) {
  writeFileSync(join(DIR, `svg/iconos/${k}.svg`), CDWeek.icono(k).replace('<svg class="cdw-ico" ', '<svg width="48" height="48" style="color:#1D1E21" ').replace(' aria-hidden="true"', '') + '\n');
}
for (const k of Object.keys(CDWeek.DIBUJOS)) writeFileSync(join(DIR, `svg/dibujos/${k}.svg`), conColor(CDWeek.dibujo(k), '#1D1E21', 400, 320) + '\n');
writeFileSync(join(DIR, 'svg/dibujos/ruta.svg'), conColor(CDWeek.ruta(), '#1D1E21', 1600, 640) + '\n');
writeFileSync(join(DIR, 'svg/lentes.svg'), CDWeek.lentes().replace('<svg class="cdw-svg" ', '<svg width="640" height="480" ') + '\n');
writeFileSync(join(DIR, 'svg/area.svg'), CDWeek.area().replace('<svg class="cdw-svg" ', '<svg width="640" height="480" ') + '\n');

// ---------- PNG de cada pieza: [ancho, alto, opciones] en px de CSS ----------
// llenar: la pieza se estira al tamaño; transparente: sin fondo perla; escala: densidad de píxeles (el PNG sale de ancho × escala);
// s: tamaño del monograma. Cada pieza se dibuja a su tamaño de diseño y se amplía con la escala, así guarda sus proporciones.
// Ventanas de más de 700 px de CSS para no caer en la vista móvil (las tarjetas y miniaturas no cambian en móvil).
const PIEZAS = {
  hero: [1200, 480, { llenar: 1, escala: 4 / 3 }],
  miniaturas: [1516, 292, { llenar: 1 }],
  banner: [1200, 225, { llenar: 1, escala: 4 / 3 }],
  dato: [380, 360, { llenar: 1, escala: 2 }],
  persona: [380, 360, { llenar: 1, escala: 2 }],
  evento: [380, 360, { llenar: 1, escala: 2 }],
  controles: [380, 360, { llenar: 1, escala: 2 }],
  encuesta: [800, 600, { llenar: 1 }],
  area: [800, 600, { llenar: 1 }],
  vidrio: [800, 600, { llenar: 1 }],
  lentes: [800, 600, { llenar: 1 }],
  logotipo: [760, 170, { transparente: 1, escala: 2 }],
  'familia-dt': [1000, 90, { transparente: 1, escala: 2 }],
  monograma: [256, 256, { transparente: 1, s: 256 }],
  iconos: [760, 110, { transparente: 1, escala: 2 }],
  neutros: [1200, 220, { llenar: 1 }],
  luz: [1200, 500, { llenar: 1 }],
  firma: [1200, 80, { llenar: 1 }],
  tipografia: [1200, 760, { llenar: 1 }],
};
for (const s of CDWeek.SERVICIOS) PIEZAS[`miniatura-${s.id}`] = [300, 300, { llenar: 1, escala: 2 }];

const base = pathToFileURL(join(DIR, 'manual.html')).href;
mkdirSync(join(DIR, 'ejemplos'), { recursive: true });
const filtro = process.argv.slice(2);
for (const [id, [w, h, op]] of Object.entries(PIEZAS)) {
  if (filtro.length && !filtro.includes(id)) continue;
  const q = new URLSearchParams({ pieza: id, w, h, ...(op.llenar ? { llenar: 1 } : {}), ...(op.transparente ? { transparente: 1 } : {}), ...(op.s ? { s: op.s } : {}) });
  const png = join(DIR, 'ejemplos', `${id}.png`);
  const args = ['--headless', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--virtual-time-budget=5000', `--window-size=${w},${h}`, `--screenshot=${png}`];
  if (op.transparente) args.push('--default-background-color=00000000');
  if (op.escala) args.push(`--force-device-scale-factor=${op.escala}`);
  spawnSync(EDGE, [...args, `${base}?${q}`], { timeout: 120000 });
  const e = op.escala || 1;
  console.log(existsSync(png) ? `${id}.png  ${Math.round(w * e)}×${Math.round(h * e)}  ${Math.round(statSync(png).size / 1024)} KB` : `${id}.png  FALTA`);
}
