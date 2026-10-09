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

| Archivo | Contenido | ¿Se edita? |
|---|---|---|
| `src/actions.js` | Acciones del monkey (sección 2), donde agregará las suyas | Sí |
| `README.md` | Documentación de su trabajo | Sí |
| `runner/monkey.js` | Runner: navegador, semilla, pesos, ciclo de eventos y resumen | No |
| `package.json`, `package-lock.json` | Dependencias (Playwright y Faker) y scripts | No |

## 2. Implementación base

`src/actions.js` exporta las acciones del monkey. Cada acción recibe la página de Playwright y un
contexto con `faker` (ya inicializado con la semilla) y `origin` (el origen de la tienda), ejecuta una
interacción y devuelve qué hizo, o `{ skipped: "motivo" }` si no encontró sobre qué actuar:

```javascript
export const actions = {
  async clickLink(page, { faker, origin }) {
    // elige con faker un enlace visible de la tienda (mismo origen) y hace clic
    return { target: href };
  },
};
```

El runner (`runner/monkey.js`) abre el navegador, inicializa `faker` con la semilla y, en cada
evento, elige una acción según los pesos y la ejecuta:

```javascript
faker.seed(seed);
for (let event = 1; event <= events; event++) {
  const action = faker.helpers.weightedArrayElement(choices); // según --weights
  const detail = await actions[action](page, { faker, origin });
  // registra el evento: acción, URL antes y después, resultado (ok, skipped o error) y detalle
}
// escribe results/summary.json
```

- Opciones: `--seed`, `--events`, `--weights` (por ejemplo `clickLink=2,otraAccion=1`; 1 si no se
  indica), `--delay` (espera entre eventos, en ms) y `--headed` (muestra el navegador).
- El runner cancela las navegaciones hacia otros sitios y registra como fallo cualquier excepción de
  JavaScript no capturada en la página (`pageerror`).
- `results/summary.json` contiene los parámetros de la ejecución, las acciones disponibles, la
  secuencia de eventos y los fallos.

Con la tienda en ejecución, desde `talleres/monkey-testing/`:

```bash
npm run monkey -- --seed 7 --events 20 --headed
```

Ejecute dos veces la misma semilla sobre la tienda recién reiniciada (`npm run app:reset`) y compare
las secuencias de eventos de los resúmenes: deben ser iguales.

## 3. Actividad

Agregue en `src/actions.js` las dos acciones de su tipo (`type` en `asignacion.json`), con
exactamente estos nombres:

| Tipo | Acciones | Qué hace cada una |
|---|---|---|
| A | `fillInput`, `pressKey` | Escribe en un campo de texto visible un valor de Faker acorde con su tipo (correo, número, contraseña, teléfono o texto). Presiona `Enter`, `Tab` o `Escape`. |
| B | `clickButton`, `hover` | Hace clic en un botón visible. Pasa el puntero sobre un enlace o botón visible. |
| C | `scroll`, `reload` | Desplaza la página una distancia aleatoria hacia arriba o hacia abajo. Recarga la página. |
| D | `goBack`, `resizeViewport` | Vuelve a la página anterior. Cambia el tamaño de la ventana a móvil, tableta o escritorio. |

Condiciones:

- Toda decisión aleatoria (qué elemento, qué valor, qué tecla) usa el `faker` que recibe la acción,
  nunca `Math.random()`.
- Si una acción no tiene sobre qué actuar (por ejemplo, no hay campos de texto visibles), devuelve
  `{ skipped: "motivo" }` en lugar de fallar.
- El monkey sigue siendo reproducible: con la misma semilla, los mismos pesos y la misma tienda
  produce la misma secuencia de eventos.

Pruebe sus acciones con pesos que las incluyan, por ejemplo para el tipo A:

```bash
npm run monkey -- --seed 4103 --weights clickLink=2,fillInput=1,pressKey=1 --headed
```

Describa sus acciones en el `README.md` del taller.

## 4. Entrega

Cree el _tag_ `taller-monkey-testing` sobre el _commit_ que se debe evaluar y súbalo a su
repositorio (`git push origin taller-monkey-testing`) a más tardar el día de la fecha límite.

## 5. Evaluación

La evaluación es automática (ver el [Taller 0](evershop)). Además de las condiciones generales de
entrega, el equipo docente ejecuta el runner con la semilla 4103, 60 eventos y los pesos
`clickLink=2` y `1` para cada acción de su tipo, y verifica en el resumen que:

1. Las dos acciones de su tipo existen y cada una se ejecuta al menos una vez con resultado `ok`.
2. Dos ejecuciones con esa configuración sobre la misma tienda producen la misma secuencia de eventos
   (acción, URL antes y después, y resultado de cada evento).
