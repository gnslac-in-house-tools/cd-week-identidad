# CD Week · Manual de identidad de la Computational Design Week

Este repositorio trae lo que necesitas para diseñar piezas de la **Computational Design Week** con su identidad visual, o para pedírselas a una IA como Claude Design.

La identidad CD Week es **luz difusa de color, trazo blanco preciso y mucho aire perla**.

> Las personas, cifras, fechas y casos de los ejemplos son ficticios. Si una pieza usa alguno, debe decir «Ejemplo».

---

## Empieza aquí (5 minutos)

1. **Descarga el repositorio:** botón verde **Code › Download ZIP** y descomprímelo.
2. **Abre `manual.html`** con doble clic (Edge o Chrome). Ahí ves cada pieza en vivo, con su código y los prompts listos para copiar. Si lo mueves, copia la carpeta completa: el manual necesita `cd-week.css` y `cd-week.js` a su lado.
3. **Lee la sección 1 de `DESIGN.md`**, «Resumen para la IA». Son las 10 reglas de oro.
4. **Mira `ejemplos/`**: así se ven las piezas terminadas.

## Qué hay en el repositorio

| Archivo | Para qué sirve | ¿Se lo das a la IA? |
|---|---|---|
| `DESIGN.md` | El manual completo: marca, color, letra, gráficos, íconos, componentes, SharePoint, voz, reglas y prompts. **Es la fuente de verdad.** | Sí, siempre |
| `ejemplos/` | 24 PNG, uno por pieza: Hero, miniaturas, tarjetas, banner, gráficas, logotipo, monograma, paleta y tipografía | Sí |
| `tokens.json` | Colores, letras, radios y espacios en formato de tokens (W3C DTCG) | Sí |
| `cd-week.css` | Los tokens (`--cdw-*`) y los componentes (`.cdw-*`) en CSS | Sí, si la IA va a escribir código |
| `cd-week.js` | Dibujos blancos, íconos, red de soluciones y gráficas en SVG | Sí, si la IA va a escribir código |
| `svg/` | Íconos y dibujos de línea sueltos (en grafito; cambian al color del texto) | Opcional |
| `manual.html` | El manual visual, para personas | No hace falta |
| `scripts/exportar.mjs` | Regenera `ejemplos/` y `svg/` | No |

---

## Usarlo con Claude

En Claude, un **sistema de diseño** guarda colores, letras, componentes y reglas, y Claude los aplica en cada diseño o presentación nueva. Lo creas una vez en tu cuenta y queda listo para todos tus proyectos.

Necesitas un plan Pro, Max, Team o Enterprise. En Enterprise, los sistemas de diseño vienen apagados hasta que un owner de tu organización los activa.

Si estás en la misma organización de Claude que el equipo de Computational Design LATAM, no necesitas nada de esto: pide que te compartan el sistema de diseño «CD Week» y aparecerá en **Settings › Design systems**.

### Opción A · Con el link de este repositorio

1. En **Claude Design** (claude.ai/design), al crear o configurar tu sistema de diseño, vincula este repositorio: `https://github.com/gnslac-in-house-tools/cd-week-identidad`. Es público, así que no pide permisos.
2. Sube además unas 6 imágenes de `ejemplos/` (por ejemplo `hero`, `miniaturas`, `dato`, `evento`, `banner` y `logotipo`). Claude lee el código del repositorio, pero no está documentado que lea sus imágenes.
3. Revisa el resultado como se explica abajo.

### Opción B · Con los archivos (funciona siempre)

1. Descarga el ZIP (**Code › Download ZIP**).
2. En Claude, abre un chat nuevo y adjunta `DESIGN.md`, `tokens.json`, `cd-week.css`, `cd-week.js` y las imágenes de `ejemplos/`. Si la herramienta limita cuántos archivos puedes subir, empieza por `DESIGN.md`, `tokens.json` y estas imágenes: `hero`, `miniaturas`, `dato`, `persona`, `evento`, `banner`, `logotipo`, `tipografia` y `luz`.
3. Escribe:
   > Crea un sistema de diseño llamado «CD Week» con estos archivos. `DESIGN.md` es la fuente de verdad: respeta sus colores, letras, componentes y reglas al pie de la letra, y usa las imágenes de `ejemplos/` como referencia visual.

### Revisa lo que armó

Compáralo con `DESIGN.md`:

- colores con su hexadecimal exacto (perla `#F2F2F0`, grafito `#1D1E21` y los nueve de la luz);
- las cuatro familias de letra;
- esquinas de 28 px;
- miniaturas con dibujo blanco y pastilla, sin ícono.

Si algo no coincide, pídele a Claude que lo corrija.

**Si el repositorio cambia**, tu sistema no se actualiza solo: vuelve a importarlo o pídele a Claude que lo actualice con los archivos nuevos.

> **Cuidado:** si lo compartes, hazlo solo con personas específicas. No lo marques como predeterminado de tu organización ni lo compartas con todos: cambiaría los diseños de toda la organización.

### En otra IA

Adjunta `DESIGN.md` y de 4 a 6 imágenes de `ejemplos/`, y empieza el prompt con: «Sigue estrictamente DESIGN.md (CD Week, variación D1 · Perla)».

---

## Cómo pedir un diseño

Un buen prompt dice cinco cosas:

1. la pieza;
2. su tamaño o proporción;
3. el contenido;
4. qué elementos de CD Week usa;
5. que los datos inventados lleven «Ejemplo».

Tres ejemplos:

- **Miniatura de un servicio nuevo.** «Con CD Week, crea una miniatura 1:1 para el servicio "Digital Twins": campo cielo, menta y cobalto; orbe grande abajo a la derecha; dibujo de línea blanco de un edificio en malla con sensores; grano al 30 %; pastilla blanca "Digital *Twins*". Sin ícono ni texto blanco.»
- **Anuncio de evento.** «Diseña con CD Week una tarjeta y un banner 16:5 (1920 × 600) para la sesión de AI Builders "Agentes para revisar normativa", martes 21 de octubre, 18:00, abierta a todo LATAM. Marca "Ejemplo".»
- **Revisión.** «Revisa esta pieza contra DESIGN.md de CD Week y su lista de revisión. Dime qué reglas rompe y propón la corrección con los tokens exactos.»

Hay seis prompts completos en `DESIGN.md` §14 y en la sección 14 de `manual.html`, con botón para copiarlos.

## Lo que nunca cambia

- Fondo **perla** y tarjetas **blancas**. Nada de fondos oscuros ni fotos de fondo.
- El color va solo en **orbes y campos difusos**: pastel, nunca neón ni chillón.
- Sobre el color van **trazos e íconos blancos**. El texto va en **grafito**, sobre perla, blanco o una pastilla blanca.
- Títulos y cifras en **Light**, nunca en negritas. Etiquetas en **mono, mayúsculas y espaciadas**.
- **Una sola palabra en itálica serif**, y solo dentro de una pastilla.
- Esquinas de **28 px**, sin bordes ni sombras duras. Máximo **tres orbes** por pieza.
- **Sin logos** de la firma ni de clientes. Los datos inventados llevan **«Ejemplo»**.

## Antes de entregar

- [ ] Fondo perla o blanco; el color solo en orbes, campos, íconos o barras.
- [ ] Todos los colores son de la paleta; nada saturado ni neón.
- [ ] Texto en grafito o gris; el blanco solo en trazos, íconos o el monograma.
- [ ] Títulos y cifras Light con tracking negativo; etiquetas en mono mayúsculas.
- [ ] Máximo una palabra en itálica serif, dentro de una pastilla.
- [ ] Miniaturas con dibujo blanco y pastilla, sin ícono.
- [ ] Esquinas de 28 px, sin bordes ni sombras duras.
- [ ] Máximo tres orbes por pieza y mucho aire.
- [ ] Datos inventados con «Ejemplo»; sin logos de la firma ni de clientes.

---

## Para SharePoint

SharePoint no acepta fuentes ni estilos propios, así que CD Week llega como **imágenes**:

| Pieza | Formato |
|---|---|
| Hero | PNG 1920 × 1080 |
| Mosaicos de Quick links | Miniaturas 1:1 en PNG |
| Banner | PNG 1920 × 600 |
| Logo del sitio | Monograma «cd» |
| Gráficas | GIF lento de 3 MB como máximo |

Los textos usan los estilos de SharePoint. El detalle está en `DESIGN.md` §11.

## Letras

Inter Display, Inter, JetBrains Mono e Instrument Serif (itálica). Las cuatro son gratuitas. Si no están instaladas, Windows usa Segoe UI, Cascadia Mono y Sitka, y se ve bien.

## Si vas a escribir HTML

```html
<link rel="stylesheet" href="cd-week.css">

<div class="cdw-miniatura cdw-campo-simulacion">
  <div class="cdw-orbe"><i></i></div>
  <div class="cdw-dibujo" data-cdw-dibujo="solar"></div>
  <div class="cdw-grano"></div>
  <div class="cdw-pastilla">Performance <em>Simulation</em></div>
</div>

<script src="cd-week.js"></script>
<script>CDWeek.montar();</script>
```

`CDWeek.montar()` dibuja el contenido de los elementos con `data-cdw-*` (dibujos, íconos, red, lentes, área, barras y vidrio). El código de cada componente está en `DESIGN.md` §8 y en el manual visual.

## Cambios

`DESIGN.md` manda. Si algo cambia, primero se cambia ahí y luego en `cd-week.css`, `cd-week.js` y `tokens.json`. Al final se regeneran `ejemplos/` y `svg/` con `node scripts/exportar.mjs` (requiere Node y Microsoft Edge).
