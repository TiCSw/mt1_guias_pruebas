# Taller: Pruebas de regresión visual con ResembleJS

Las pruebas de regresión visual (VRT) comparan capturas de pantalla de dos versiones de una interfaz
para detectar cambios visuales. El reto no es comparar imágenes sino decidir qué diferencias
importan: cambios intencionales, regresiones o ruido. En este taller construirán un proceso de VRT
con [Playwright](https://playwright.dev) y [ResembleJS](https://github.com/rsmbl/Resemble.js) para
comparar dos versiones de la tienda EverShop.

A través de este taller:

- Capturarán de forma automática y estable páginas, tamaños de pantalla y estados de una aplicación.
- Compararán capturas con ResembleJS e interpretarán sus resultados.
- Identificarán y eliminarán fuentes de ruido en las capturas.
- Clasificarán las diferencias encontradas contrastándolas con las notas de versión.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres instalado y EverShop en ejecución).

Comparará dos versiones de la tienda:

| Versión | URL | Variable de entorno |
|---|---|---|
| Base | <http://localhost:3000> | `BASE_URL` |
| Release | <http://localhost:3001> | `RELEASE_URL` |

Notas de la versión release:

1. El precio en la página de detalle de producto usa el color de la marca y un tamaño mayor.
2. Los nombres de los productos en los listados aparecen en mayúsculas.
3. Nuevo color de fondo del pie de página.
4. Nuevo banner de promoción con cuenta regresiva en la parte superior de todas las páginas.

El taller está en `talleres/visual-regression-testing/` de su repositorio:

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencias (Playwright, ResembleJS y `canvas`) y scripts del taller |
| `vrt.config.js` | Páginas, _viewports_, umbral y opciones de comparación (sección 2) |
| `src/vrt.js`, `src/report.js` | Comparación y reporte base (sección 2) |
| `src/stability.js` | Comparación de estabilidad, por implementar (sección 3.2) |
| `README.md` | Secciones que debe completar |

**`talleres/visual-regression-testing/package.json`**

```json
{
  "name": "taller-visual-regression-testing",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24"
  },
  "scripts": {
    "setup": "playwright install chromium",
    "evaluate": "node src/vrt.js",
    "stability": "node src/stability.js"
  },
  "devDependencies": {
    "canvas": "~3.2.3",
    "playwright": "~1.63.0",
    "resemblejs": "~5.0.0"
  },
  "allowScripts": {
    "canvas": true
  }
}
```

`allowScripts` autoriza el script de instalación de `canvas`, la librería de imágenes que usa
ResembleJS. ResembleJS pide además una versión antigua de `canvas` que npm intenta compilar; si su
equipo no tiene herramientas de compilación, npm la omite y ResembleJS usa la incluida aquí.

## 2. Implementación base

La configuración define las páginas, los tamaños de pantalla (_viewports_), el umbral y las opciones
de comparación de ResembleJS:

**`talleres/visual-regression-testing/vrt.config.js`**

```javascript
export default {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  releaseUrl: process.env.RELEASE_URL ?? "http://localhost:3001",
  pages: [{ name: "producto", path: "/accessories/stainless-steel-thermos-yellow" }],
  viewports: [{ name: "escritorio", width: 1280, height: 800 }],
  // Mismatch percentage above which a comparison is reported as a difference.
  threshold: 0.1,
  resemble: {
    ignore: "antialiasing",
    scaleToSameSize: true,
    output: { errorColor: { red: 255, green: 0, blue: 255 }, errorType: "movement", outputDiff: true },
  },
};
```

El script captura cada página en las dos versiones, las compara y guarda la imagen de diferencias:

**`talleres/visual-regression-testing/src/vrt.js`**

```javascript
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import compareImages from "resemblejs/compareImages.js";
import config from "../vrt.config.js";
import { writeReport } from "./report.js";

const versions = { base: config.baseUrl, release: config.releaseUrl };
await mkdir("results/screenshots", { recursive: true });

const browser = await chromium.launch();
const comparisons = [];

for (const viewport of config.viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  for (const { name, path } of config.pages) {
    const id = `${name}-${viewport.name}`;
    const images = {};
    for (const [version, url] of Object.entries(versions)) {
      await page.goto(new URL(path, url).href, { waitUntil: "load" });
      images[version] = await page.screenshot({
        path: `results/screenshots/${id}-${version}.png`,
        fullPage: true,
      });
    }
    const result = await compareImages(images.base, images.release, config.resemble);
    await writeFile(`results/screenshots/${id}-diff.png`, result.getBuffer());
    const mismatch = Number(result.misMatchPercentage);
    comparisons.push({
      id,
      page: name,
      path,
      viewport: viewport.name,
      mismatch,
      different: mismatch > config.threshold,
      sameDimensions: result.isSameDimensions,
    });
    console.log(`${id}: ${mismatch}%`);
  }
  await page.close();
}

await browser.close();

const summary = {
  threshold: config.threshold,
  comparisons: comparisons.length,
  different: comparisons.filter((comparison) => comparison.different).length,
  results: comparisons,
};
await writeFile("results/summary.json", `${JSON.stringify(summary, null, 2)}\n`);
await writeReport(summary, "results/report.html");
console.log(`Reporte: results/report.html (${summary.different} de ${summary.comparisons} con diferencias)`);
```

`misMatchPercentage` es el porcentaje de píxeles distintos. Una comparación con un porcentaje mayor
que `threshold` se reporta como diferencia.

El reporte HTML muestra, por comparación, las capturas de las dos versiones y la imagen de
diferencias:

**`talleres/visual-regression-testing/src/report.js`**

```javascript
import { writeFile } from "node:fs/promises";

const row = (comparison) => `
  <section class="${comparison.different ? "different" : "same"}">
    <h2>${comparison.page} · ${comparison.viewport} · ${comparison.mismatch}%</h2>
    <p><code>${comparison.path}</code></p>
    <div class="images">
      ${["base", "release", "diff"]
        .map((kind) => `<figure><img src="screenshots/${comparison.id}-${kind}.png" alt="${kind}"><figcaption>${kind}</figcaption></figure>`)
        .join("")}
    </div>
  </section>`;

export async function writeReport(summary, file) {
  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Reporte VRT</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 24px; }
    section { border-left: 6px solid #16a34a; padding: 0 16px; margin-bottom: 32px; }
    section.different { border-color: #dc2626; }
    .images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    img { width: 100%; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <h1>Reporte VRT</h1>
  <p>${summary.different} de ${summary.comparisons} comparaciones superan el umbral de ${summary.threshold}%.</p>
  ${summary.results.map(row).join("")}
</body>
</html>
`;
  await writeFile(file, html);
}
```

Ejecútelo desde `talleres/visual-regression-testing/` con la tienda en ejecución:

```bash
npm run evaluate
```

Abra `results/report.html`. Ejecute la comparación varias veces: ¿el porcentaje es siempre el mismo?

## 3. Actividad

### 3.1 Cobertura

Extienda la configuración y el script para capturar:

- al menos 8 páginas de la tienda, incluidas páginas de categoría, de producto, búsqueda,
  inicio de sesión y registro;
- tres _viewports_: escritorio (1280 × 800), tableta (768 × 1024) y móvil (375 × 812);
- al menos 3 estados que requieren interacción antes de la captura, por ejemplo el carrito con un
  producto, un formulario con errores de validación o un menú abierto.

### 3.2 Estabilidad

Una comparación entre una versión y sí misma debería dar 0 %. Implemente `npm run stability`
(`src/stability.js`), que compara cada versión consigo misma (dos capturas de la base y dos de la release) para todas sus
páginas, _viewports_ y estados.

Identifique cada fuente de ruido que haga que esas comparaciones no den 0 % (contenido que cambia
con el tiempo, imágenes que cargan a destiempo, animaciones, etc.) y elimínela: esperas
deterministas, desactivar animaciones, ocultar o enmascarar regiones. En el README, documente cada
fuente con el porcentaje antes y después de corregirla.

### 3.3 Cambios intencionales que desplazan el contenido

Un cambio intencional puede mover todo el contenido de la página y ocultar las demás diferencias.
Encuentre en sus resultados si alguno de los cambios de las notas de versión lo hace, y ajuste su
proceso para seguir detectando el resto de diferencias sin dejar de verificar ese cambio. Explique su
solución en el README.

### 3.4 Clasificación de diferencias

En el README, construya una tabla con cada diferencia encontrada entre las versiones: página,
_viewport_, estado, región afectada, descripción, clasificación (cambio de las notas de versión,
regresión o ruido) y la ruta a la imagen de diferencias que la evidencia. Indique también si algún
cambio de las notas de versión no fue detectado y por qué.

### 3.5 Umbral

Elija el umbral (global o por página) a partir de sus datos: los porcentajes de las comparaciones de
estabilidad frente a los de las comparaciones entre versiones. Justifique la elección en el README.

## 4. Entrega

Cree el _tag_ `taller-visual-regression-testing` sobre el _commit_ que se debe evaluar y súbalo a su repositorio
(`git push origin taller-visual-regression-testing`). En ese _commit_, `talleres/visual-regression-testing/` debe contener:

- El código fuente, `package.json` y `package-lock.json`.
- `npm run evaluate`: compara las dos versiones con toda su cobertura, genera `results/report.html` y
  escribe `results/summary.json` con el formato de la implementación base.
- `npm run stability` implementado.
- `README.md` con sus secciones completas:
  - cómo ejecutar cada script;
  - las secciones 3.2 a 3.5;
  - **Uso de IA**: qué partes generó o sugirió un asistente de IA, qué errores tenía lo generado y
    cómo verificó el resultado.

El equipo docente ejecutará `npm run evaluate -- visual-regression-testing` desde la raíz del repositorio y evaluará su
proceso contra otra versión release con regresiones que ustedes no conocen: su `summary.json` debe
marcar las páginas y _viewports_ afectados.

## 5. Criterios de evaluación

| Criterio | Puntos |
|---|---|
| `npm run evaluate -- visual-regression-testing` termina sin intervención y `npm run stability` da 0 % (o un valor justificado) en todas las comparaciones. | 10 |
| La cobertura incluye las páginas, _viewports_ y estados pedidos, capturados de forma estable. | 15 |
| Las fuentes de ruido están identificadas, eliminadas y documentadas con datos. | 15 |
| El cambio intencional que desplaza el contenido se maneja sin ocultar las demás diferencias. | 10 |
| La tabla de clasificación es completa, correcta y cada fila tiene evidencia. | 20 |
| El umbral está justificado con los datos de estabilidad y de comparación. | 5 |
| Regresiones de la versión release del equipo docente que su proceso detecta (proporcional). | 15 |
| El README permite ejecutar todo sin ambigüedad y la sección de uso de IA es concreta. | 10 |
