# Taller: Pruebas de regresión visual con ResembleJS

Las pruebas de regresión visual (VRT) comparan capturas de pantalla de dos versiones de una interfaz
para detectar cambios visuales. En este taller usarán [Playwright](https://playwright.dev) y
[ResembleJS](https://github.com/rsmbl/Resemble.js) para comparar dos versiones de la tienda
EverShop.

A través de este taller:

- Capturarán de forma automática páginas de una aplicación en distintos tamaños de pantalla y
  estados.
- Compararán capturas con ResembleJS e interpretarán sus resultados.
- Configurarán interacciones previas a la captura.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres instalado y EverShop en ejecución).

Comparará dos versiones de la tienda:

| Versión | URL | Variable de entorno |
|---|---|---|
| Base | <http://localhost:3000> | `BASE_URL` |
| Release | <http://localhost:3001> | `RELEASE_URL` |

La versión release tiene cambios visuales en varias páginas, entre ellos un banner de promoción en
la parte superior de todas las páginas.

El taller está en `talleres/visual-regression-testing/` de su repositorio:

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencias (Playwright, ResembleJS y `canvas`) y scripts del taller |
| `vrt.config.js` | Comparaciones, umbral y opciones de ResembleJS (sección 2) |
| `src/vrt.js` | Captura y comparación |
| `src/report.js` | Reporte HTML |
| `README.md` | Secciones para documentar su trabajo |

## 2. Implementación base

`vrt.config.js` define las comparaciones:

```javascript
export default {
  threshold: 0.1, // porcentaje de diferencia a partir del cual se reporta una diferencia
  resemble: { /* opciones de compareImages de ResembleJS */ },
  comparisons: [
    {
      name: "producto", // nombre de las imágenes en results/screenshots/
      path: "/accessories/stainless-steel-thermos-yellow",
      viewport: { width: 1280, height: 800 },
      steps: [], // interacciones antes de capturar
    },
  ],
};
```

Los pasos (`steps`) se ejecutan en orden después de abrir `path`: `{ click: selector }`,
`{ fill: [selector, valor] }`, `{ goto: ruta }` y `{ waitFor: selector }`, con
[selectores de Playwright](https://playwright.dev/docs/other-locators).

Para cada comparación, `src/vrt.js` abre la página en las dos versiones con el _viewport_ indicado,
ejecuta los pasos, toma una captura de página completa, compara las dos capturas con ResembleJS y
guarda la imagen de diferencias. `misMatchPercentage` es el porcentaje de píxeles distintos. El
resultado queda en `results/summary.json` y en el reporte `results/report.html`.

Con la tienda en ejecución, desde `talleres/visual-regression-testing/`:

```bash
npm run evaluate
```

## 3. Actividad

El equipo docente le asignó un tipo (A, B, C o D) en el archivo `asignacion.json` de la raíz de su
repositorio. Agregue a `comparisons` una comparación de la página de su tipo con su acción:

| Tipo | Página | Acción |
|---|---|---|
| A | Categoría Accessories (`/accessories`) | _Viewport_ móvil de 375 × 812. |
| B | Búsqueda de "thermos" (`/search?keyword=thermos`) | _Viewport_ de tableta de 768 × 1024. |
| C | Inicio de sesión de clientes (`/account/login`) | Interacción: enviar el formulario vacío para que se muestren los mensajes de validación. |
| D | Carrito con un producto (`/cart`) | Interacción: elegir una variante de un producto y agregarlo al carrito antes de abrir el carrito. |

La comparación debe terminar en la página de su tipo (la que se captura). Revise el reporte y
describa en el `README.md` del taller las diferencias que encontró entre las dos versiones.

## 4. Entrega

Cree el _tag_ `taller-visual-regression-testing` sobre el _commit_ que se debe evaluar y súbalo a su
repositorio (`git push origin taller-visual-regression-testing`) antes de la fecha límite.

## 5. Evaluación

La evaluación es automática. El taller cuenta si el _tag_ se entregó a tiempo y pasa todas las
verificaciones de `npm run evaluate -- visual-regression-testing`, que puede ejecutar desde la raíz
de su repositorio. El resultado queda en `talleres/visual-regression-testing/results/grade.json`.

1. `npm run evaluate` del taller termina sin errores y genera `results/summary.json`.
2. Hay una comparación cuya captura se toma en la página de su tipo.
3. Esa comparación usa el _viewport_ de su tipo (A y B) o ejecuta al menos un paso antes de capturar
   (C y D).
4. Existen sus capturas base y release y su imagen de diferencias.
5. La comparación tiene un porcentaje de diferencia.
