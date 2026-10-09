# Proyecto · Reglas de juego

Estas reglas aplican a todas las semanas del proyecto.

## Resultado de una prueba

Una prueba automatizada termina en uno de tres resultados. Solo los dos primeros corresponden a una
prueba correctamente implementada:

| Resultado | Significado | Qué hacer |
|---|---|---|
| **Exitosa** | La prueba se ejecutó completa y su oráculo confirmó el resultado esperado. | — |
| **Fallida** | La prueba se ejecutó completa, pero su oráculo detectó un resultado distinto del esperado. | Es un posible defecto de la ABP: analícelo y, si se confirma, repórtelo como incidencia en el repositorio. |
| **Con error** | La prueba no pudo ejecutarse completa: error de sintaxis o de dependencias, selector inexistente, tiempo de espera agotado, ABP no disponible. | Es una implementación incorrecta de la prueba, no un defecto de la ABP: corríjala. Una prueba con error **no** cuenta como implementada. |

## Evaluación

La calificación de cada semana tiene dos partes:

- **Criterios de evaluación**, en la guía de la semana: suman **100 puntos**. Cada criterio indica
  sus puntos y, cuando se cuenta por elementos (escenarios, pruebas, incidencias), cuántos puntos vale
  cada uno. Cada sección muestra su total.
- **_Fatalities_**: incumplimientos que restan puntos de la calificación obtenida, en cualquier
  semana en la que ocurran. En total restan como máximo **50 puntos**, y la calificación final no es
  menor que 0.

Un entregable que no se puede abrir, o que no existe, obtiene 0 puntos en los criterios que lo
evalúan.

## _Fatalities_

| Incumplimiento | Puntos |
|---|---|
| El _release_ no existe o se publicó después del plazo, o los documentos se entregaron después del plazo. | −15 |
| El repositorio contiene archivos no permitidos: binarios, multimedia, documentos, dependencias o resultados de ejecución. Por ejemplo: `.pdf`, `.docx`, `.xlsx`, `.png`, `.jpg`, `.gif`, `.mp4`, `.mov`, `.zip`, `node_modules/`, `screenshots/`, `cypress/videos/`, `test-results/`, `playwright-report/`, `backstop_data/bitmaps_*/`, `results/`. | −20 |
| Se modificaron archivos protegidos del repositorio (los lista el `README.md` de la raíz del repositorio). | −20 |
| Una URL o una credencial de la ABP está escrita en un archivo distinto del `.env` del repositorio. | −20 |
| Un módulo no parte del código base que instalan los _workflows_ del repositorio. | −20 |
| Las pruebas no se ejecutan con los scripts de la raíz y la ABP levantada, o requieren pasos manuales adicionales. | −20 |
| Un documento no está en formato `.pdf`, o un enlace no se puede abrir sin solicitar permisos. | −10 |

Cada _fatality_ se aplica una vez por semana, aunque el incumplimiento aparezca en varios archivos
o herramientas.
