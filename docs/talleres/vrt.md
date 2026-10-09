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

| Versión | URL |
|---|---|
| Base | <http://localhost:3000> |
| Release | <http://localhost:3001> |

La versión release tiene cambios visuales en varias páginas, entre ellos un banner de promoción en
la parte superior de todas las páginas.

El taller está en `talleres/visual-regression-testing/` de su repositorio:

| Archivo | Contenido | ¿Se edita? |
|---|---|---|
| `vrt.config.js` | Comparaciones, umbral y opciones de ResembleJS (sección 2) | Sí |
| `README.md` | Documentación de su trabajo | Sí |
| `runner/vrt.js`, `runner/report.js` | Runner: captura, comparación, reporte y resumen | No |
| `package.json`, `package-lock.json` | Dependencias (Playwright, ResembleJS y `canvas`) y scripts | No |

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
`{ fill: [selector, valor] }`, `{ goto: ruta }`, `{ waitFor: selector }` (espera un elemento) y
`{ waitForUrl: patrón }` (espera a que la URL coincida, por ejemplo `"**?color=*"`), con
[selectores de Playwright](https://playwright.dev/docs/other-locators).

Para cada comparación, el runner (`runner/vrt.js`) abre la página en las dos versiones con el
_viewport_ indicado, toma una captura, ejecuta los pasos, toma la captura final, compara las capturas
finales de las dos versiones con ResembleJS y guarda la imagen de diferencias. `misMatchPercentage`
es el porcentaje de píxeles distintos. Las imágenes quedan en `results/screenshots/`, el reporte en
`results/report.html` y el resumen (con la ruta capturada y el _hash_ de cada imagen) en
`results/summary.json`.

Con la tienda en ejecución, desde `talleres/visual-regression-testing/`:

```bash
npm run vrt
```

## 3. Actividad

Agregue a `comparisons` una comparación de la página de su tipo (`type` en `asignacion.json`) con
su acción:

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
repositorio (`git push origin taller-visual-regression-testing`) a más tardar el día de la fecha
límite.

## 5. Evaluación

La evaluación es automática (ver el [Taller 0](evershop)). Además de las condiciones generales de
entrega, el equipo docente ejecuta el runner sobre una tienda recién iniciada y verifica en el
resumen que una de las comparaciones:

1. Se captura en la página de su tipo en las dos versiones.
2. Usa el _viewport_ de su tipo (A y B), o ejecuta pasos que cambian la página antes de la captura
   (C y D: la captura final es distinta de la captura inicial).
3. Tiene sus capturas de las dos versiones, su imagen de diferencias y su porcentaje de diferencia.
