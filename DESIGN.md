---
name: CD Week
version: "1.0"
description: Sistema de identidad de la Computational Design Week (Computational Design LATAM) y la familia Design Technology. Variación D1 · Perla.
language: es-MX
colors:
  perla: "#F2F2F0"
  blanco: "#FFFFFF"
  niebla: "#ECECEE"
  fondo-hero: "#ECECEA"
  linea: "#DEDEDA"
  fondo-lentes: "#E3DFDD"
  grafito: "#1D1E21"
  gris: "#5E6166"
  mantequilla: "#F1E17C"
  durazno: "#F8A082"
  coral: "#F27751"
  rosa: "#EE8FB4"
  lila: "#B7A6EE"
  cielo: "#85BBEF"
  cobalto: "#3F6FE0"
  menta: "#7FD6C2"
  violeta: "#5B539B"
typography:
  display:
    fontFamily: "Inter Display, Neue Haas Grotesk Display Pro, Segoe UI Variable Display, Segoe UI, sans-serif"
    fontWeight: 300
    fontSize: 64px
    lineHeight: 1.0
    letterSpacing: -0.045em
  titulo-hero:
    fontFamily: "Inter Display, Segoe UI Variable Display, sans-serif"
    fontWeight: 300
    fontSize: 56px
    lineHeight: 1.04
    letterSpacing: -0.04em
  titulo-seccion:
    fontFamily: "Inter Display, Segoe UI Variable Display, sans-serif"
    fontWeight: 300
    fontSize: 38px
    lineHeight: 1.0
    letterSpacing: -0.04em
  titulo-tarjeta:
    fontFamily: "Inter Display, Segoe UI Variable Display, sans-serif"
    fontWeight: 400
    fontSize: 22px
    lineHeight: 1.15
    letterSpacing: -0.025em
  cifra:
    fontFamily: "Inter Display, Segoe UI Variable Display, sans-serif"
    fontWeight: 300
    fontSize: 84px
    lineHeight: 0.9
    letterSpacing: -0.06em
  cuerpo:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.55
  pastilla:
    fontFamily: "Inter, Segoe UI, sans-serif"
    fontWeight: 600
    fontSize: 13.5px
    lineHeight: 1.2
  acento:
    fontFamily: "Instrument Serif, Sitka Display, Georgia, serif"
    fontStyle: italic
    fontWeight: 400
    fontSize: 1.12em
  etiqueta:
    fontFamily: "JetBrains Mono, Cascadia Mono, Consolas, monospace"
    fontWeight: 500
    fontSize: 11.5px
    letterSpacing: 0.16em
    textTransform: uppercase
rounded:
  xl: 28px
  lg: 17px
  md: 16px
  sm: 14px
  full: 999px
spacing: [4px, 8px, 12px, 16px, 20px, 28px, 40px, 56px, 80px, 104px]
components:
  tarjeta: { background: blanco, radius: 28px, padding: 24px, border: none, shadow: none }
  boton-primario: { background: grafito, color: blanco, radius: 999px, padding: 12px 18px, font: "Inter 500 14px" }
  boton-secundario: { background: transparent, color: grafito, border: "1px grafito", radius: 999px }
  chip: { background: niebla, color: grafito, radius: 999px, padding: 7px 11px, font: "Inter 500 12px" }
  chip-activo: { background: "linear-gradient(90deg, durazno 42% + blanco, lila 42% + blanco)", color: grafito }
  pastilla: { background: "rgba(255,255,255,.92)", color: grafito, radius: 16px, padding: 11px 13px }
  icono: { size: 54px, shape: circle, background: "degradado 140° entre dos colores vecinos", icon: "línea blanca 28px, trazo 1.9" }
---

# CD Week · Manual de identidad de la Computational Design Week

Versión 1.0 · octubre de 2026 · Variación **D1 · Perla**.
Este archivo es la fuente de verdad del sistema. Está escrito para que lo lean personas y herramientas de IA (Claude Design u otras).
`manual.html` muestra lo mismo de forma visual, `cd-week.css` y `cd-week.js` traen los componentes listos, y `ejemplos/` tiene una captura de cada pieza.

> Contenido de ejemplo: las personas, cifras, fechas y casos que aparecen aquí son ficticios. Cualquier pieza que los use debe llevar la etiqueta «Ejemplo».

---

## 1. Resumen para la IA (léelo primero)

CD Week es **luz difusa de color, trazo blanco preciso y mucho aire perla**.

Las 10 reglas de oro:

1. Fondo **perla `#F2F2F0`** y tarjetas **blancas**. Nunca fondos oscuros, negros ni fotos de fondo.
2. El color vive en **orbes y campos difusos** (degradados con desenfoque, brillo y grano), nunca en bloques planos ni en el texto.
3. Solo colores de la paleta: pasteles cálidos y fríos. **Nada de neón, colores saturados ni chillones.**
4. Encima del color van **trazos e íconos blancos**, finos, con una sombra violeta muy suave.
5. El texto va en **grafito `#1D1E21`** (o gris `#5E6166` para lo secundario), sobre perla, blanco o una **pastilla blanca**. Nunca texto blanco sobre pastel.
6. Títulos y cifras en grotesca **Light 300** con tracking negativo. Nunca títulos en negritas.
7. Etiquetas en **mono, mayúsculas y espaciadas** (+16 %).
8. **Una sola palabra en itálica serif**, solo dentro de las pastillas.
9. Esquinas redondas de **28 px**, sin bordes ni sombras duras. Máximo **tres orbes** por pieza (seis en el banner).
10. Los datos inventados llevan **«Ejemplo»**. No uses logos de la firma ni de clientes.

Si dudas entre dos opciones, elige la más calmada, la más clara y la que deja más aire.

---

## 2. Esencia

**Concepto.** CD Week junta la luz difusa del análisis (sol, viento, flujo, datos) con el trazo preciso del diseño computacional. Los orbes de color son las fuerzas que no se ven; las líneas blancas son el modelo que las explica. La frase guía es *«Hacemos visible lo que da forma a los proyectos.»*

**Palabras clave:**

| Palabra | Qué significa en una pieza |
|---|---|
| Sereno | Fondos perla, mucho aire, movimiento lento. Nada grita. |
| Luminoso | El color se siente como luz, no como pintura: difuso, con brillo y grano. |
| Claro | Cada imagen dice de qué trata con un dibujo blanco. El texto siempre se lee. |
| Preciso | Trazos finos, cifras grandes y etiquetas mono: el rigor del dato. |

**CD Week es** sereno, técnico sin ser frío, cálido sin ser infantil, editorial, generoso con el espacio y honesto con los datos.
**CD Week no es** neón, gamer, «corporativo azul», oscuro, saturado ni lleno de efectos. Tampoco lleva íconos oscuros sobre auras borrosas ni fotos de stock.

**Origen.** La identidad sale de la iteración D (Halo) de la exploración de identidad del equipo: la paleta, los orbes, el logotipo, la tarjeta de dato, el evento y el banner vienen de la iteración A · Campo; el trazo blanco, los íconos en círculo de color, la pastilla con itálica y el orden espectral vienen de la iteración C · Espectro, pero sin sus colores intensos.

---

## 3. Marca

### 3.1 Logotipo horizontal (principal)

- **Orbe** a la izquierda: diámetro 84 px cuando el texto mide 46 px (1.8 × la altura de una línea). Colores coral, durazno, lila y cielo; desenfoque de 7 px; grano al 45 %.
- **Nombre** en dos líneas, todo en minúsculas: `computational` / `design`. Grotesca Light 300, 46 px, interlínea 0.95, tracking −4.5 %, en grafito.
- **Región**: `LATAM` en mono 500, 13 px, tracking +32 %, debajo del nombre y precedida por una raya horizontal de 28 px × 1 px.
- **Separación** entre orbe y texto: 22 px (la cuarta parte del orbe).
- **Área libre**: alrededor del logotipo, al menos la mitad del diámetro del orbe.
- **Tamaño mínimo**: orbe de 32 px en pantalla. Más chico, usa el monograma.
- **Fondos permitidos**: perla o blanco. No va sobre fotos, fondos oscuros ni campos de color.

Usos incorrectos: pintar el nombre de color; cambiar el orbe por un círculo plano; ponerlo sobre oscuro o sobre fotos; cambiar la letra (negritas, serif, mayúsculas iniciales); deformarlo; agregarle sombras o contornos.

### 3.2 Familia Design Technology

Misma forma (orbe de 30 px + nombre en minúsculas, Light 300, 22 px, tracking −3 %), con otra temperatura de color por área:

| Área | Colores del orbe |
|---|---|
| computational design | coral, durazno, lila, cielo (todo el espectro) |
| design technology | lila, cielo, durazno, mantequilla |
| bim | cielo, cobalto, lila, cielo (frío) |
| reality capture | menta, cielo, menta, lila |

### 3.3 Monograma (logo del sitio y favicon)

- Cuadrado con esquinas al 26 % del lado.
- Fondo: luz radial durazno arriba a la izquierda (22 % · 18 %) sobre un degradado a 150° de durazno → lila (58 %) → cielo.
- Un orbe del tamaño del cuadro (coral, lila, cobalto, durazno; desenfoque del 12 % del lado) sale por la esquina inferior derecha (−30 %, −30 %).
- Letras `cd` en **blanco**, Light 300, al 36 % del lado, tracking −5 %, con sombra violeta muy suave (`rgba(40,32,90,.3)`).
- Tamaños: 128, 64 y 40 px con letras; a 24 px o menos, **sin letras** (solo la luz).

---

## 4. Color

### 4.1 Paleta

**Neutros**

| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| Perla | `#F2F2F0` | 242 242 240 | Fondo de página (dominante) |
| Blanco | `#FFFFFF` | 255 255 255 | Tarjetas, pastillas, trazos e íconos sobre color |
| Niebla | `#ECECEE` | 236 236 238 | Superficie secundaria, chips, fondo de anillos |
| Fondo Hero | `#ECECEA` | 236 236 234 | Detrás de los orbes del Hero |
| Línea | `#DEDEDA` | 222 222 218 | Divisores finos (pocos) |
| Fondo lentes | `#E3DFDD` | 227 223 221 | Fondo del mapa de lentes |
| Grafito | `#1D1E21` | 29 30 33 | Texto, botón primario, marcadores |
| Gris | `#5E6166` | 94 97 102 | Texto secundario, etiquetas, unidades |

**Luz (ordenada de cálido a frío)**

| Nombre | Hex | RGB | Uso |
|---|---|---|---|
| Mantequilla | `#F1E17C` | 241 225 124 | Luz; inicio del degradado firma |
| Durazno | `#F8A082` | 248 160 130 | Luz cálida |
| Coral | `#F27751` | 242 119 81 | Luz cálida, el más intenso de los cálidos |
| Rosa | `#EE8FB4` | 238 143 180 | Transición cálido → frío |
| Lila | `#B7A6EE` | 183 166 238 | Transición; anillos y medidores |
| Cielo | `#85BBEF` | 133 187 239 | Luz fría |
| Cobalto | `#3F6FE0` | 63 111 224 | Profundidad; foco de teclado |
| Menta | `#7FD6C2` | 127 214 194 | Luz fría; Reality Capture |
| Violeta | `#5B539B` | 91 83 155 | Solo en lentes y como color de enlace |

**Degradado firma** (90°): mantequilla → durazno → coral → rosa → lila → cielo → cobalto → menta. Se usa en barras de dato, separadores y bandas, nunca en texto.

### 4.2 Proporción

**60 % perla y blanco · 30 % grafito y gris · 10 % luz.** La luz se nota mucho porque es luz: si una pieza tiene más color que perla, sobra color.

### 4.3 Cómo se combina el color

- Los colores de la luz **siempre se mezclan con sus vecinos** en el orden espectral: coral con durazno y mantequilla, lila con rosa y cielo, cielo con menta y cobalto. Evita saltos como mantequilla junto a cobalto en el mismo campo.
- Un campo usa **tres** colores vecinos; un orbe, **cuatro**; un ícono, **dos**.
- **Nada plano**: los colores de la luz no van como relleno sólido de botones, fondos de sección ni texto.

Pares y tríos ya definidos:

| Pieza | Colores |
|---|---|
| Miniatura Territorial & Site Intelligence | coral, durazno, mantequilla |
| Miniatura Performance Simulation | rosa, coral, durazno |
| Miniatura Generative & Parametric Design | lila, rosa, durazno |
| Miniatura Automation & Custom Tools | cielo, lila, cobalto |
| Miniatura Education & Enablement | cielo, menta, cobalto |
| Íconos (en orden) | durazno/coral · coral/rosa · rosa/lila · lila/cielo · cielo/cobalto · cobalto/menta |
| Orbes del banner | mantequilla/coral · coral/lila · lila/cielo · cielo/cobalto · durazno/lila · coral/mantequilla |
| Barras de encuesta | durazno/mantequilla · mantequilla/cielo · cielo/menta |
| Área por equipo | durazno · lila · cielo · menta; medidor lila sobre niebla |
| Lentes | coral, violeta, cielo, lila sobre fondo lentes |

Un servicio o ícono nuevo toma el siguiente par libre del orden espectral.

### 4.4 Contraste (WCAG 2.1)

| Combinación | Contraste | Veredicto |
|---|---|---|
| Grafito sobre perla / blanco | 14.9 : 1 / 16.7 : 1 | Sí, todo el texto |
| Gris sobre perla / blanco | 5.6 : 1 / 6.2 : 1 | Sí, texto secundario |
| Grafito sobre cualquier color de la luz | 6.0 : 1 (coral) a 12.5 : 1 (mantequilla) | Sí |
| Violeta sobre perla | 5.9 : 1 | Sí, enlaces de color |
| Blanco sobre cobalto | 4.6 : 1 | Sí; es el único caso de texto blanco |
| Blanco sobre durazno, lila, cielo, menta, mantequilla, rosa, coral | 1.3 : 1 a 2.8 : 1 | **No para texto**. Solo trazos, íconos y el `cd` del monograma |
| Gris sobre colores de la luz | 1.4 : 1 a 4.7 : 1 | No; usa grafito o pastilla blanca |
| Cobalto sobre perla | 4.1 : 1 | No para texto chico; sí para íconos y anillo de foco |

### 4.5 Variaciones de temperatura (solo si se piden)

D1 · Perla es la identidad de Computational Design. Para otras áreas de la familia existen dos variaciones con la misma estructura:

- **D2 · Bruma (fría, BIM):** fondo `#EFF0F3`; luz `#7E92E6`, `#A6CBF1`, `#B7A6EE`, `#86CFE3`, `#3F63C9`, `#D5ECF5`, `#9C9BEB`, `#7FD6C2`, `#4B4790`.
- **D3 · Atardecer (cálida):** fondo `#F4F1EC`; luz `#EE7F5E`, `#F6B092`, `#C9A2DE`, `#F2C27A`, `#C8664E`, `#F3E08E`, `#EC93B3`, `#D9A27F`, `#7A4D6E`.

---

## 5. Tipografía

| Rol | Familia | Alternativas | Uso |
|---|---|---|---|
| Display | **Inter Display Light 300** | Neue Haas Grotesk Display Light; en Windows, Segoe UI Variable Display Light | Títulos, cifras, logotipo |
| Texto | **Inter 400 · 500 · 600** | Segoe UI (Windows y SharePoint) | Párrafos, botones, pastillas |
| Mono | **JetBrains Mono 500** | Cascadia Mono, Consolas | Etiquetas, fechas, escalas, códigos |
| Acento | **Instrument Serif Italic** | Sitka Display Italic, Georgia Italic | Una palabra por pastilla |

### Escala

| Estilo | Peso · tamaño · tracking · interlínea | Ejemplo |
|---|---|---|
| Portada | 200–300 · 104–184 px · −6 % · 0.85–0.95 | CD Week |
| Título Hero | 300 · 56 px (34 px en móvil) · −4 % · 1.04 | Hacemos visible lo que da forma a los proyectos. |
| Título de sección | 300 · 38–40 px · −4 % · 1.0–1.05 | Comunidad · AI Builders |
| Título de tarjeta | 400 · 22 px · −2.5 % · 1.15 | AI Builders: agentes para revisar normativa |
| Cifra | 300 · 64–84 px · −6 % · 0.9; unidad al 55 % en gris | 62 % |
| Cuerpo | 400 · 16 px · 0 · 1.55 | Escríbenos cuando el proyecto todavía está en concepto. |
| Secundario | 400 · 14–14.5 px · gris | Computational Designer · Ciudad de México |
| Pastilla | 600 · 13.5 px · 1.2; acento en itálica serif a 1.12 em | Performance *Simulation* |
| Botón | 500 · 14 px | Pedir apoyo |
| Etiqueta | mono 500 · 11–12 px · +16 % · MAYÚSCULAS · gris | PERFORMANCE SIMULATION · MX |

### Reglas

- Más grande, más cerrado: −6 % en cifras y portada, −4 % en títulos, 0 en texto.
- Títulos y cifras **siempre Light**. Las negritas solo existen en pastillas (600) y botones (500).
- Estilo oración en títulos (solo mayúscula inicial). Mayúsculas solo en etiquetas mono. El logotipo, todo en minúsculas.
- La itálica serif aparece **una vez por pieza, dentro de una pastilla**, en la palabra que da el matiz (la última del nombre del servicio).
- En las cifras, la unidad (%, h, m²) va más chica y en gris: `62` + `%`.

---

## 6. Elementos gráficos

### 6.1 Orbe (luz)

El elemento firma. Cuatro capas:

1. **Color**: gradiente cónico con cuatro colores vecinos de la luz, que empieza en un ángulo variable (`from 200deg` por defecto).
2. **Difusión**: desenfoque gaussiano del 6–8 % del diámetro (6 px en orbes de 100 px, 28 px en orbes de 700 px).
3. **Brillo**: luz blanca radial en el 34 % · 30 % del orbe, al 78 % de opacidad, desvanecida al 46 %.
4. **Grano**: ruido fractal (`feTurbulence`, frecuencia 0.85, 3 octavas, sin color) en mezcla *overlay* al 40–50 %, solo en el centro del orbe.

Los orbes giran (una vuelta en 40–70 s) y flotan (8–14 px en 16–22 s). Se recortan con los bordes de la pieza: es mejor que salgan del cuadro que verlos completos y pequeños.

### 6.2 Campo

Fondo de miniaturas, monograma e íconos: tres colores vecinos con una luz radial arriba a la izquierda (85 % × 75 % en 10 % · 8 %), un degradado a 150° y un orbe grande (96 % del ancho) que sale por la esquina inferior derecha. Grano encima al 30 %.

### 6.3 Trazo blanco

Dibujos de línea que explican la idea de cada pieza, siempre en blanco sobre el color:

- Tres grosores (en un lienzo de 200 × 160): **fino 0.8 px al 70 %**, **línea 1.1 px** y **acento 1.6 px** (una sola línea de acento por dibujo).
- Puntos y nodos rellenos de blanco; etiquetas en mono de 9 px.
- Sombra violeta muy suave: `drop-shadow(0 1px 2px rgba(40,32,90,.18))`.
- Biblioteca (en `cd-week.js` y `svg/dibujos/`):

| Dibujo | Idea | Servicio o uso |
|---|---|---|
| `contornos` | Curvas de nivel con un punto | Territorial & Site Intelligence |
| `solar` | Trayectoria solar con N, S, E, O | Performance Simulation |
| `malla` | Superficie paramétrica | Generative & Parametric Design |
| `grafo` | Nodos IN, GH → DEF → OUT, LOG | Automation & Custom Tools |
| `curva` | Curva de aprendizaje 01–04 | Education & Enablement |
| `ruta` | Red punteada con cuatro nodos | Hero y Soluciones: Atlas · Flujo · Brisa · Trama |

Para un tema nuevo, dibuja algo igual de simple: un esquema técnico reconocible, de línea, sin rellenos, que se entienda a 200 px.

### 6.4 Grano

Ruido fractal sin color en mezcla *overlay*: 22 % en fondos, 30 % en campos e íconos, 40–50 % en orbes. Da textura de papel y quita el aspecto digital plano.

### 6.5 Pastilla

El nombre sobre una imagen: fondo blanco al 92 %, esquinas de 16 px, relleno de 11 × 13 px, Inter 600 de 13.5 px en grafito, con **una** palabra en Instrument Serif Italic a 1.12 em. Va abajo, a 12 px de los bordes, y ocupa todo el ancho menos los márgenes.

---

## 7. Íconos

- Línea en una rejilla de **24 × 24** con 2 px de margen. Extremos y uniones **redondos**, sin relleno.
- Trazo de **1.9 px** dentro de un círculo y de **1.5 px** suelto.
- **Sobre color**: ícono blanco de 28 px dentro de un **círculo de 54 px** con degradado a 140° entre dos colores vecinos, luz blanca arriba a la izquierda, grano al 30 % y una sombra del color más profundo (`0 12px 26px -12px`).
- **Sobre perla o blanco**: el ícono va en grafito, sin círculo.
- **Nunca** íconos oscuros sobre auras borrosas, ni íconos de colores, ni íconos rellenos.

Íconos incluidos (`svg/iconos/`, en `cd-week.js` como `CDWeek.ICONOS`): territorio, simulacion, generativo, automatizacion, educacion, datos. Trazos en SVG (viewBox 0 0 24 24):

```
territorio:     M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z · círculo (12,10) r 2.4
simulacion:     círculo (12,12) r 3.6 · rayos M12 2.5v2.6 M12 18.9v2.6 M2.5 12h2.6 M18.9 12h2.6 y diagonales
generativo:     círculos (5,6) (19,6) (12,18) r 2.2 · M7.2 6h9.6 M6.1 8l4.8 8 M17.9 8l-4.8 8
automatizacion: M19.5 12a7.5 7.5 0 0 1-13.2 4.9 · M4.5 12a7.5 7.5 0 0 1 13.2-4.9 · M18 3.5v4h-4 M6 20.5v-4h4
educacion:      libro abierto, dos páginas desde el lomo central
datos:          M3.5 20.5h17 y barras M6.5 20.5v-6 M11 20.5V8 M15.5 20.5v-9 M20 20.5V4
```

---

## 8. Componentes

Todos existen en `cd-week.css` (clases `cdw-*`). Las imágenes de referencia están en `ejemplos/`.

### 8.1 Hero (`ejemplos/hero.png`)

- Proporción 2.5 : 1 (1600 × 640); en móvil 4 : 5, con el texto abajo. Fondo `#ECECEA`, esquinas de 28 px.
- Tres orbes a la derecha: 46 % del ancho (coral, durazno, lila, cielo; desenfoque 28 px), 30 % (lila, cielo, durazno, mantequilla; 24 px) y 20 % (cielo, cobalto, lila, durazno; 18 px). El grande sale por arriba y el chico por abajo.
- Encima, la **red de soluciones en blanco**: línea punteada (trazo 2, guiones `.5 7`, extremos redondos) que une cuatro nodos con nombre en grotesca de 21 px y la etiqueta «SOLUCIÓN 0N» en mono de 12.5 px.
- Texto a la izquierda en el 44 % del ancho, centrado verticalmente: etiqueta mono, título Light 56 px, párrafo gris de 16 px (máx. 44 caracteres por línea) y un botón grafito.
- Países en mono en la esquina inferior izquierda: «MX · CO · PA · AR».

```html
<div class="cdw-hero">
  <div class="cdw-orbe o1"><i></i></div><div class="cdw-orbe o2"><i></i></div><div class="cdw-orbe o3"><i></i></div>
  <div class="cdw-ruta" data-cdw-ruta></div>
  <div class="cdw-hero-txt">
    <p class="cdw-etiqueta">Computational Design · LATAM</p>
    <h2>Hacemos visible lo que da forma a los proyectos.</h2>
    <p>Simulación, diseño paramétrico, automatización y datos para los equipos de la región.</p>
    <a class="cdw-boton" href="#">Conoce los servicios →</a>
  </div>
  <p class="cdw-etiqueta cdw-hero-esquina">MX · CO · PA · AR</p>
</div>
```

### 8.2 Miniatura de servicio 1 : 1 (`ejemplos/miniatura-*.png`)

- Capas: campo de tres colores → orbe abajo a la derecha → **dibujo blanco** → grano → **pastilla**.
- **Sin ícono**: el dibujo blanco ya dice de qué trata.
- El dibujo ocupa el espacio que deja la pastilla (márgenes de 11 % arriba y 12 % a los lados).
- La pastilla lleva el nombre del servicio en inglés con la última palabra en itálica: «Territorial & Site *Intelligence*», «Performance *Simulation*», «Generative & *Parametric*», «Automation & *Tools*», «Education & *Enablement*».

```html
<div class="cdw-miniatura cdw-campo-simulacion">
  <div class="cdw-orbe"><i></i></div>
  <div class="cdw-dibujo" data-cdw-dibujo="solar"></div>
  <div class="cdw-grano"></div>
  <div class="cdw-pastilla">Performance <em>Simulation</em></div>
</div>
```

### 8.3 Tarjeta

Blanca, esquinas de 28 px, relleno de 24–28 px, sin borde ni sombra. Encabezado en mono (11 px, +16 %, gris) con el tipo a la izquierda y «Ejemplo» o un dato a la derecha.

### 8.4 Dato (`ejemplos/dato.png`)

Cifra Light 84 px con tracking −6 % y la unidad en gris al 55 %; una línea de contexto de 14.5 px; **barra firma** de 10 px (mantequilla → durazno → coral → lila → cielo) con un marcador grafito de 3 × 22 px en el valor; escala «0 … 100» en mono.

```html
<div class="cdw-tarjeta cdw-dato">
  <p class="cdw-tarjeta-t"><span>Dato</span><span>Ejemplo</span></p>
  <div class="cdw-cifra">62<span>%</span></div>
  <p>menos tiempo en revisar áreas con el script de Automation.</p>
  <div class="cdw-barra-firma" style="--v:62%"><b></b></div>
  <div class="cdw-escala cdw-etiqueta"><span>0</span><span>100</span></div>
</div>
```

### 8.5 Persona (`ejemplos/persona.png`)

Avatar de orbe de 88 px (coral, lila, cobalto, durazno) con las **iniciales en blanco**, Light 26 px y sombra suave; nombre en 22 px; rol y ciudad en gris; chips de herramientas en niebla. El chip activo usa un degradado suave durazno → lila, **nunca negro**.

### 8.6 Evento (`ejemplos/evento.png`)

Orbe de 104 px (lila, coral, cielo, mantequilla), fecha en mono «Mar · 21 oct · 18:00», título de 22 px y una línea en gris («Abierta a todo LATAM.»).

### 8.7 Botones y chips (`ejemplos/controles.png`)

- Primario: píldora grafito, texto blanco Inter 500 de 14 px, relleno 12 × 18 px.
- Secundario: píldora transparente con contorno grafito de 1 px.
- Chips: píldora niebla, Inter 500 de 12 px, relleno 7 × 11 px; activo con el degradado durazno/lila.
- Foco de teclado: contorno cobalto de 2 px separado 3 px.
- Verbos claros: «Pedir apoyo», «Ver casos», «Conoce los servicios».

### 8.8 Banner de sección 16 : 3 (`ejemplos/banner.png`)

Fondo blanco, esquinas de 28 px. Seis orbes de 9.5 % del ancho en fila a la derecha (separados 2.2 %), cada uno con un par de la luz. A la izquierda, etiqueta mono y título Light de 38 px («Comunidad · AI Builders»).

### 8.9 Datos y procesos

- **Barras de encuesta** (`ejemplos/encuesta.png`): tres columnas; escala 0 % – 100 % en mono; barra de 36 px en dos tramos con degradado y un triángulo grafito en el valor; cifra Light de 64 px con el % en gris; descripción de 13 px.
- **Área y medidor** (`ejemplos/area.png`): cuatro áreas redondeadas (durazno, lila, cielo, menta) con textura de trazo blanco ondulado al 75 %; valores Light de 34 px debajo; medidor anular lila sobre niebla arriba a la derecha.
- **Capas de vidrio** (`ejemplos/vidrio.png`): cinco paneles translúcidos en perspectiva (rotados −38°) que van de GEOMETRÍA → ANÁLISIS → OPCIONES → DATOS → DECISIÓN; dos con tinte durazno y cielo; la última con la cifra.
- **Mapa de lentes** (`ejemplos/lentes.png`): cuatro elipses de color (coral, violeta, cielo, lila) en mezcla *multiply* sobre `#E3DFDD`, con la red de soluciones en blanco y un anillo de luz desenfocado.

Reglas para gráficas: pocas y grandes; una pregunta por gráfica; cifras Light; colores de la luz en degradado; sin cuadrículas pesadas ni leyendas de colores (los valores van escritos).

---

## 9. Retícula y espacio

- Retícula de **12 columnas** con medianiles de 20 px; ancho máximo 1240–1280 px; márgenes de 40 px (20 px en móvil).
- Escala de espacio en múltiplos de 4: **4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 · 80 · 104**.
- 20 px entre tarjetas; 24–28 px dentro de una tarjeta; 44–56 px entre bloques; 104 px entre secciones.
- Radios: **28 px** (tarjetas, Hero, miniaturas, banner), **17 px** (lienzos de datos), **16 px** (pastillas), **píldora** (botones y chips).
- Sin bordes en tarjetas. Las únicas sombras son de color y suaves (debajo de los íconos y en los trazos blancos).
- Móvil: tarjetas en una columna, miniaturas en dos, Hero en 4 : 5 con el texto abajo, banner en 16 : 9.

---

## 10. Movimiento

- Orbes: giro lineal de una vuelta en 40–70 s; flotación de 8–14 px en 16–22 s con *ease-in-out*. Cada orbe con su propio ritmo.
- Nada rebota, parpadea ni entra de golpe. El movimiento acompaña; no llama la atención.
- Con *reducir movimiento* activado, todo queda quieto.
- En SharePoint, el movimiento solo llega como **GIF lento** (bucle de unos 6 s, máximo 3 MB).

---

## 11. Aplicación en SharePoint

SharePoint no permite fuentes ni estilos propios: la identidad llega en **imágenes exportadas**, y los textos usan los estilos nativos.

| Elemento | Cómo se aplica |
|---|---|
| Tema del sitio | Neutral Slate (el actual del sitio de Design Technology) o Neutral Fog |
| Fondos de sección | Ninguno o Neutral. Evita el fondo fuerte: apaga la luz de los orbes |
| Logo del sitio | Monograma «cd» en PNG cuadrado |
| Hero | Imagen 16 : 9, 1920 × 1080, con orbes y red blanca; deja aire donde el web part pone su texto. PNG |
| Quick links (mosaicos) | Miniaturas 1 : 1 de servicio con dibujo blanco y pastilla. PNG |
| Banner | 16 : 5, 1920 × 600, con la fila de orbes a la derecha. PNG |
| Image y galería | Gráficas de datos y procesos en 4 : 3 o 16 : 9. GIF lento, máximo 3 MB |
| Texto | Encabezado 1 y 2 de SharePoint (Segoe UI). Las cifras grandes, la red y las pastillas van dentro de las imágenes |
| Personas | Avatar de orbe con iniciales en la lista de Comunidad, cuando no hay foto |

El simulador de páginas de SharePoint del equipo exporta las imágenes en esos tamaños.

---

## 12. Voz y contenido

- **Español de México**, de tú, frases cortas, en voz activa. Primero qué ganas; luego cómo se hace.
- Los **servicios conservan su nombre en inglés**: Territorial & Site Intelligence, Performance Simulation, Generative & Parametric Design, Automation & Custom Tools, Education & Enablement.
- Las **soluciones** tienen nombres de una palabra: Atlas, Flujo, Brisa, Trama. La comunidad de IA se llama **AI Builders**.
- Fechas: «Mar · 21 oct · 18:00». Países: «MX · CO · PA · AR». Cifras con espacio fino antes del % en texto corrido.
- Botones con verbo: «Pedir apoyo», «Ver casos», «Conoce los servicios», «Escríbenos».
- **Honestidad**: nada inventado sin «Ejemplo». Nada de superlativos vacíos («disruptivo», «de vanguardia», «increíble»).

| Así sí | Así no |
|---|---|
| Hacemos visible lo que da forma a los proyectos. | Soluciones disruptivas de vanguardia para potenciar el diseño. |
| Escríbenos cuando el proyecto todavía está en concepto. | Contacte al equipo para mayor información. |
| 62 % menos tiempo en revisar áreas (ejemplo). | Ahorros increíbles de tiempo. |
| Pedir apoyo · Ver casos | Click aquí · Más info |

---

## 13. Sí y no

| Sí | No |
|---|---|
| Nombre en pastilla blanca, texto grafito | Texto blanco directo sobre el pastel |
| Colores de la paleta, difusos | Neón, saturados o colores fuera de la paleta |
| Ícono blanco en un círculo de dos tonos | Ícono oscuro sobre un aura borrosa |
| Miniatura con dibujo blanco y pastilla | Miniatura con ícono, o solo un orbe sin dibujo |
| Una palabra en itálica serif dentro de la pastilla | Frases enteras en itálica o itálica fuera de pastillas |
| Uno a tres orbes y mucho aire | Llenar todo de orbes |
| Títulos Light con tracking negativo | Títulos en negritas o en mayúsculas |
| Tarjetas blancas sin borde | Bordes negros, sombras duras, biseles |
| Fondo perla o blanco | Fondos oscuros, fotos de fondo |
| Datos de ejemplo marcados | Cifras inventadas sin aviso; logos de la firma o de clientes |

---

## 14. Cómo usar este manual con IA

**En Claude:** crea un sistema de diseño llamado «CD Week» con `DESIGN.md`, `tokens.json`, `cd-week.css`, `cd-week.js` y las imágenes de `ejemplos/`. Puedes pedírselo a Claude en un chat con los archivos adjuntos o subirlos en la configuración del sistema de diseño de Claude Design. Compártelo solo con personas específicas, no como predeterminado de la organización. Los pasos están en `README.md`. En cualquier otra herramienta, adjunta al menos `DESIGN.md` y las imágenes de `ejemplos/`.

**Prompts de ejemplo:**

1. *Página de inicio.* «Usa el sistema de diseño CD Week (DESIGN.md, variación D1 · Perla). Diseña la página de inicio de Computational Design LATAM: Hero 2.5:1 con tres orbes a la derecha y la red blanca Atlas · Flujo · Brisa · Trama; fila de 5 miniaturas 1:1 de servicios (campo de color, dibujo blanco y pastilla, sin ícono); una fila con tarjeta de dato, persona y evento; banner de orbes "Comunidad · AI Builders". Fondo perla, tarjetas blancas de 28 px, texto grafito, títulos Light. Marca los datos inventados con "Ejemplo".»
2. *Miniatura de un servicio nuevo.* «Con CD Week, crea una miniatura 1:1 para el servicio "Digital Twins": campo cielo, menta y cobalto; orbe grande abajo a la derecha; dibujo de línea blanco de un edificio en malla con sensores (línea fina al 70 % y una línea de acento); grano al 30 %; pastilla blanca "Digital *Twins*". Sin ícono ni texto blanco.»
3. *Anuncio de evento.* «Diseña con CD Week una tarjeta y un banner 16:5 (1920 × 600) para la sesión de AI Builders "Agentes para revisar normativa", martes 21 de octubre, 18:00, abierta a todo LATAM. Marca "Ejemplo".»
4. *Presentación.* «Arma con CD Week 6 diapositivas 16:9 con los resultados de una encuesta interna (datos de ejemplo: 83 %, 58 %, 47 %): una idea por diapositiva, cifras Light gigantes, barras de encuesta en degradado, sin fotos.»
5. *Ficha de solución.* «Con CD Week, diseña una ficha de una página para la solución "Atlas" (análisis de sitio): etiqueta "SOLUCIÓN 01", título Light, mapa de lentes con la red blanca, tres tarjetas de dato y capas de vidrio de geometría a decisión. Datos de ejemplo marcados.»
6. *Revisión.* «Revisa esta pieza contra DESIGN.md de CD Week y su lista de revisión. Dime qué reglas rompe y propón la corrección con los tokens exactos.»

**Lista de revisión** (para cualquier pieza, hecha por persona o por IA):

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

## 15. Archivos

| Archivo | Contenido |
|---|---|
| `README.md` | Instrucciones de uso: por dónde empezar y cómo usar el manual con Claude o con otra IA |
| `DESIGN.md` | Este manual (fuente de verdad) |
| `manual.html` | El manual visual, con todas las piezas vivas y el código para copiar |
| `cd-week.css` | Tokens (`--cdw-*`) y componentes (`.cdw-*`) |
| `cd-week.js` | Dibujos, íconos, red, lentes, área, barras y vidrio; `CDWeek.montar()` llena los `data-cdw-*` |
| `tokens.json` | Tokens en formato de diseño (color, letra, radios, espacio) |
| `ejemplos/` | PNG de cada pieza (Hero, miniaturas, tarjetas, banner, gráficas, logotipo, monograma, paleta, tipografía) |
| `svg/` | Íconos y dibujos de línea sueltos, en grafito (`currentColor`) |

Para regenerar `svg/` y `ejemplos/` después de cambiar el kit: `node scripts/exportar.mjs` (requiere Node y Microsoft Edge).
