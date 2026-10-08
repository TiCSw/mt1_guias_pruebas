# Taller: Monkey testing con Playwright

Un _monkey_ ejecuta eventos aleatorios sobre una aplicación (clics, texto, teclas, navegación) para
encontrar fallos que las pruebas guiadas por casos no encuentran. En este taller extenderán un
monkey construido sobre [Playwright](https://playwright.dev) para la tienda EverShop.

A través de este taller:

- Entenderán cómo un monkey reproducible usa una semilla: la misma semilla genera la misma
  secuencia de eventos.
- Diseñarán eventos sobre distintos tipos de elementos e interacciones.
- Controlarán la exploración con pesos por tipo de evento.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres instalado y EverShop en ejecución).

El taller está en `talleres/monkey-testing/` de su repositorio:

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencias (Playwright y Faker) y scripts del taller |
| `src/monkey.js` | Monkey base (sección 2), donde agregará sus acciones |
| `README.md` | Secciones para documentar su trabajo |

## 2. Implementación base

`src/monkey.js` tiene esta estructura:

```javascript
faker.seed(seed); // todas las decisiones aleatorias dependen solo de la semilla

// Cada acción ejecuta una interacción y devuelve qué hizo, o { skipped } si no pudo actuar.
const actions = {
  async clickLink(page) {
    // elige con faker un enlace visible de la tienda y hace clic
    return { target: href };
  },
};

// --weights clickLink=2,otraAccion=1: probabilidad relativa de cada acción (1 si no se indica)
const choices = parseWeights(options.weights);

for (let event = 1; event <= totalEvents; event++) {
  const action = faker.helpers.weightedArrayElement(choices);
  const detail = await actions[action](page);
  events.push({ event, action, from, ...detail, to: page.url() });
}
// escribe results/events.json y results/summary.json
```

- Opciones: `--seed`, `--events`, `--weights`, `--delay` (espera entre eventos, en ms) y `--headed`
  (muestra el navegador).
- `page.route` cancela las navegaciones hacia otros sitios: el monkey solo explora EverShop.
- El oráculo es `pageerror`: una excepción de JavaScript no capturada en la página.
- `results/events.json` guarda la secuencia de eventos y `results/summary.json`, el resumen.

Con la tienda en ejecución, desde `talleres/monkey-testing/`:

```bash
npm run monkey -- --seed 7 --events 20 --headed
```

Ejecute dos veces la misma semilla y compare los `events.json`: deben ser idénticos.

## 3. Actividad

El equipo docente le asignó un tipo (A, B, C o D) en el archivo `asignacion.json` de la raíz de su
repositorio. Agregue a `actions` las dos acciones de su tipo, con exactamente estos nombres:

| Tipo | Acciones | Qué hace cada una |
|---|---|---|
| A | `fillInput`, `pressKey` | Escribe en un campo de texto visible un valor de Faker acorde con su tipo (correo, número, contraseña, teléfono o texto). Presiona `Enter`, `Tab` o `Escape`. |
| B | `clickButton`, `hover` | Hace clic en un botón visible. Pasa el puntero sobre un enlace o botón visible. |
| C | `scroll`, `reload` | Desplaza la página una distancia aleatoria hacia arriba o hacia abajo. Recarga la página. |
| D | `goBack`, `resizeViewport` | Vuelve a la página anterior. Cambia el tamaño de la ventana a móvil, tableta o escritorio. |

Condiciones:

- Toda decisión aleatoria (qué elemento, qué valor, qué tecla) usa `faker`, nunca `Math.random()`.
- Si una acción no tiene sobre qué actuar (por ejemplo, no hay campos de texto visibles), devuelve
  `{ skipped: "motivo" }` en lugar de fallar.
- El monkey sigue siendo reproducible: con la misma semilla y los mismos pesos produce la misma
  secuencia de eventos.

Pruebe sus acciones con pesos que las incluyan, por ejemplo para el tipo A:

```bash
npm run monkey -- --seed 4103 --weights clickLink=2,fillInput=1,pressKey=1 --headed
```

Describa sus acciones en el `README.md` del taller.

## 4. Entrega

Cree el _tag_ `taller-monkey-testing` sobre el _commit_ que se debe evaluar y súbalo a su
repositorio (`git push origin taller-monkey-testing`) antes de la fecha límite.

## 5. Evaluación

La evaluación es automática. El taller cuenta si el _tag_ se entregó a tiempo y pasa todas las
verificaciones de `npm run evaluate -- monkey-testing`, que puede ejecutar desde la raíz de su
repositorio. El resultado queda en `talleres/monkey-testing/results/grade.json`.

1. `npm run evaluate` del taller termina sin errores y genera `results/summary.json`.
2. El monkey se ejecuta con la semilla 4103, 60 eventos y los pesos `clickLink=2` y `1` para cada
   acción de su tipo.
3. Dos ejecuciones con esa configuración, cada una sobre la tienda reiniciada, producen exactamente
   la misma secuencia de eventos.
4. Cada una de las dos acciones de su tipo se ejecuta al menos una vez sin error y sin `skipped`.
