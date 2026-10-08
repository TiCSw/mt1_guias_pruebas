# Taller: Monkey testing con Playwright

Un _monkey_ ejecuta eventos aleatorios sobre una aplicación (clics, texto, teclas, navegación) para
encontrar fallos que las pruebas guiadas por casos no encuentran. En este taller construirán un
monkey sobre [Playwright](https://playwright.dev) para la tienda EverShop.

A través de este taller:

- Implementarán un monkey reproducible: la misma semilla genera la misma secuencia de eventos.
- Diseñarán eventos sobre distintos tipos de elementos (enlaces, botones, campos de texto, listas).
- Definirán oráculos que decidan automáticamente qué es un fallo.
- Medirán y compararán estrategias de exploración con datos de sus propias ejecuciones.
- Reducirán una secuencia de eventos que produce un fallo a la mínima que lo reproduce.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres instalado y EverShop en ejecución).

El taller está en `talleres/monkey-testing/` de su repositorio:

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencias (Playwright y Faker) y scripts del taller |
| `src/monkey.js` | Monkey base (sección 2) |
| `src/experiment.js`, `src/replay.js`, `src/minimize.js` | Scripts de la actividad, por implementar (secciones 3.3 y 3.4) |
| `minimized/` | Secuencias mínimas (sección 3.4) |
| `README.md` | Secciones que debe completar |

**`talleres/monkey-testing/package.json`**

```json
{
  "name": "taller-monkey-testing",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24"
  },
  "scripts": {
    "setup": "playwright install chromium",
    "monkey": "node src/monkey.js",
    "evaluate": "node src/monkey.js --seed 4103 --events 30",
    "experiment": "node src/experiment.js",
    "replay": "node src/replay.js",
    "minimize": "node src/minimize.js"
  },
  "devDependencies": {
    "@faker-js/faker": "~10.6.0",
    "playwright": "~1.63.0"
  }
}
```

## 2. Implementación base

El monkey base, en `src/monkey.js`, solo hace clic en enlaces visibles de la tienda, elegidos al
azar con [Faker](https://fakerjs.dev) inicializado con una semilla.

**`talleres/monkey-testing/src/monkey.js`**

```javascript
import { mkdir, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";
import { faker } from "@faker-js/faker";
import { chromium } from "playwright";

const { values: options } = parseArgs({
  options: {
    seed: { type: "string", default: "4103" },
    events: { type: "string", default: "30" },
    delay: { type: "string", default: "500" },
    headed: { type: "boolean", default: false },
  },
});
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const origin = new URL(baseUrl).origin;
const seed = Number(options.seed);
const totalEvents = Number(options.events);
const delay = Number(options.delay);

// Same seed and same application state => same sequence of events.
faker.seed(seed);

// Each action performs one random interaction and returns what it did.
const actions = {
  async clickLink(page) {
    const links = await page.locator("a[href]").evaluateAll(
      (anchors, appOrigin) =>
        anchors
          .map((anchor, index) => ({ index, href: anchor.href, visible: anchor.checkVisibility() }))
          .filter((link) => link.visible && new URL(link.href).origin === appOrigin),
      origin,
    );
    if (links.length === 0) return { skipped: "no hay enlaces visibles" };
    const link = faker.helpers.arrayElement(links);
    await page.locator("a[href]").nth(link.index).click();
    return { target: link.href };
  },
};

const browser = await chromium.launch({ headless: !options.headed });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.setDefaultTimeout(5000);

let current = 0;
const failures = [];
page.on("pageerror", (error) => {
  failures.push({ event: current, oracle: "pageerror", message: error.message, url: page.url() });
});

// Keep the monkey inside the application under test.
await page.route("**/*", (route) => {
  const request = route.request();
  const leavesApp = request.isNavigationRequest() && new URL(request.url()).origin !== origin;
  return leavesApp ? route.abort() : route.continue();
});

await mkdir("results", { recursive: true });
await page.goto(baseUrl);

const events = [];
for (current = 1; current <= totalEvents; current++) {
  const action = faker.helpers.arrayElement(Object.keys(actions));
  const from = page.url();
  try {
    const detail = await actions[action](page);
    await page.waitForLoadState("load");
    await page.waitForTimeout(delay);
    events.push({ event: current, action, from, ...detail, to: page.url() });
  } catch (error) {
    events.push({ event: current, action, from, error: error.message.split("\n")[0] });
  }
}

await browser.close();

const summary = {
  seed,
  baseUrl,
  events: events.length,
  visitedUrls: new Set(events.map((event) => event.to).filter(Boolean)).size,
  failures,
};
await writeFile("results/events.json", `${JSON.stringify(events, null, 2)}\n`);
await writeFile("results/summary.json", `${JSON.stringify(summary, null, 2)}\n`);
console.log(`Semilla ${seed}: ${events.length} eventos, ${summary.visitedUrls} URL distintas, ${failures.length} fallos.`);
```

Puntos clave:

- `faker.seed(seed)` hace que todas las elecciones aleatorias dependan solo de la semilla. Con la
  misma semilla y la misma tienda (después de `npm run app:reset`), el monkey repite exactamente la
  misma secuencia. No use `Math.random()`.
- Cada acción de `actions` recibe la página, ejecuta una interacción y devuelve qué hizo. El monkey
  elige una acción por evento.
- `page.route` cancela las navegaciones hacia otros sitios: el monkey solo explora EverShop.
- El único oráculo es `pageerror`: una excepción de JavaScript no capturada en la página.
- Al terminar escribe `results/events.json` (la secuencia de eventos) y `results/summary.json`.

Ejecútelo desde `talleres/monkey-testing/` con la tienda en ejecución:

```bash
npm run monkey -- --seed 7 --events 20 --headed
npm run evaluate
```

Ejecute dos veces la misma semilla y compare los `events.json`: deben ser idénticos.

## 3. Actividad

Extienda el monkey base. Conserve la reproducibilidad en todo lo que agregue: si dos ejecuciones con
la misma semilla producen secuencias distintas, explique la causa en el README y corríjala.

### 3.1 Eventos

Agregue al menos cuatro acciones nuevas, por ejemplo: clic en un botón, escribir en un campo de
texto con datos de Faker acordes con su tipo (correo, número, texto), elegir una opción de una lista,
presionar una tecla (`Enter`, `Tab`, `Escape`) y navegar (atrás, recargar). Cada acción tiene un
**peso** configurable por línea de comandos (por ejemplo, `--weights clickLink=3,fillInput=2`) y el
monkey elige las acciones según esos pesos.

### 3.2 Oráculos

Agregue oráculos que detecten, como mínimo:

- mensajes `console.error`;
- respuestas HTTP con estado 400 o mayor, tanto de páginas como de recursos (imágenes, scripts,
  llamadas a la API);
- un oráculo propio, justificado en el README.

Cada fallo registra el evento en el que ocurrió, el oráculo, la URL, el detalle y una captura de
pantalla. Defina una **firma** para cada fallo (por ejemplo, oráculo + recurso normalizado) de modo
que el mismo defecto encontrado varias veces cuente una sola vez.

### 3.3 Experimento

Compare dos estrategias: la base (solo `clickLink`) y su configuración de pesos. Ejecute cada una con
10 semillas y 100 eventos por ejecución, reiniciando la tienda entre ejecuciones
(`npm run app:reset`). Implemente `npm run experiment` (`src/experiment.js`), que ejecuta el
experimento y guarda los datos en `results/experiment.json`.

En el README presente una tabla por estrategia con URL distintas visitadas, firmas de fallo
distintas y tiempo de ejecución (media y rango), y responda con sus datos:

- ¿Qué estrategia explora más de la tienda y cuál encuentra más fallos? ¿Coinciden?
- ¿Qué fallos encontró solo una de las estrategias y por qué?
- ¿A partir de cuántos eventos dejan de aparecer fallos nuevos?

### 3.4 Minimización

Para cada firma de fallo encontrada, obtenga la **secuencia mínima** de eventos que lo reproduce a
partir del `events.json` de la ejecución que lo encontró. Implemente:

- `npm run replay -- <archivo>` (`src/replay.js`): reproduce una secuencia de eventos guardada (no una semilla) y
  reporta los fallos.
- `npm run minimize -- <archivo> <firma>` (`src/minimize.js`): reduce la secuencia, por ejemplo con _delta debugging_
  (ddmin) o eliminando eventos uno por uno, verificando con `replay` que el fallo se mantiene.

Guarde las secuencias mínimas en `talleres/monkey-testing/minimized/` (versionadas) e indique en el README la
longitud original y la mínima de cada una.

### 3.5 Análisis

En el README, para cada firma de fallo: ¿es un defecto de EverShop, de los datos de ejemplo o del
entorno, o un falso positivo de su monkey? Sustente cada respuesta con la evidencia de sus
ejecuciones (capturas, eventos, respuestas HTTP). Indique cuáles habría encontrado una prueba E2E
escrita a mano y cuáles no.

## 4. Entrega

Cree el _tag_ `taller-monkey-testing` sobre el _commit_ que se debe evaluar y súbalo a su repositorio
(`git push origin taller-monkey-testing`). En ese _commit_, `talleres/monkey-testing/` debe contener:

- El código fuente del monkey, `package.json` y `package-lock.json`.
- `npm run evaluate`: ejecuta su monkey con su configuración de pesos, una semilla fija y al menos 100
  eventos, y escribe `results/summary.json` con este formato:

  ```json
  {
    "seed": 4103,
    "events": 100,
    "visitedUrls": 12,
    "failures": [
      { "event": 7, "oracle": "http", "signature": "...", "url": "...", "detail": "..." }
    ],
    "signatures": ["..."]
  }
  ```

- `npm run experiment`, `npm run replay` y `npm run minimize` implementados, y la carpeta
  `minimized/`.
- `README.md` con sus secciones completas:
  - cómo ejecutar cada script y qué parámetros acepta;
  - los resultados del experimento y las respuestas de las secciones 3.3 y 3.5;
  - **Uso de IA**: qué partes generó o sugirió un asistente de IA, qué errores tenía lo generado y
    cómo verificó el resultado.

El equipo docente ejecutará `npm run evaluate -- monkey-testing` desde la raíz del repositorio, ejecutará
`replay` sobre sus secuencias mínimas y evaluará su monkey contra una versión de EverShop con fallos
inyectados que ustedes no conocen.

## 5. Criterios de evaluación

| Criterio | Puntos |
|---|---|
| `npm run evaluate -- monkey-testing` termina sin intervención y dos ejecuciones con la misma semilla producen la misma secuencia de eventos. | 10 |
| Las acciones nuevas son correctas, usan datos acordes con cada elemento y respetan los pesos configurados. | 15 |
| Los oráculos detectan los fallos pedidos y las firmas agrupan correctamente los fallos repetidos. | 15 |
| Fallos inyectados por el equipo docente que su monkey detecta (proporcional). | 15 |
| El experimento es reproducible con `npm run experiment` y las respuestas se sustentan en sus datos. | 15 |
| Las secuencias mínimas reproducen su fallo con `replay` y son significativamente más cortas que las originales. | 20 |
| El README permite ejecutar todo sin ambigüedad, el análisis de la sección 3.5 se sustenta en evidencia y la sección de uso de IA es concreta. | 10 |

Los números del README que no se puedan reproducir con sus scripts no suman puntos.
