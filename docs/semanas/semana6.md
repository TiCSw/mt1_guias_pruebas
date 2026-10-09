# Proyecto · Semana 6: Pruebas de regresión visual

> **Resumen.** El equipo instrumenta los cuarenta escenarios E2E de la semana 5 para tomar una
> captura después de cada paso, los ejecuta en la **versión base** y en la **versión rc** de la ABP, y
> compara las capturas de ambas versiones con una herramienta de regresión visual (VRT). Entrega dos
> _releases_ del repositorio (`semana-6-base` y `semana-6-rc`), un reporte de resultados y la
> estrategia de pruebas actualizada. Las [reglas de juego](reglas) del proyecto aplican a esta
> semana.

## Contexto

_TSDC_ va a liberar la versión rc de la ABP. Antes de hacerlo necesita saber qué cambia en la
interfaz respecto a la versión base y si esos cambios son intencionales o defectos. Su equipo
reutilizará los escenarios E2E de la semana anterior para capturar la interfaz paso a paso en las dos
versiones, los migrará a la versión rc y comparará las capturas de forma automática y reproducible.

## Objetivos de aprendizaje

1. Instrumentar pruebas E2E para producir evidencia visual por paso.
2. Migrar una suite de pruebas E2E a una nueva versión de la ABP conservando sus patrones.
3. Automatizar la comparación visual entre dos versiones de la ABP y reportar sus diferencias.
4. Analizar el aporte y las limitaciones de la regresión visual en una estrategia de pruebas.

## Conceptos clave

- **Versiones de la ABP.** La versión base, publicada en la URL `ABP_URL` del archivo `.env`, es la
  que se probó en las semanas anteriores. La versión rc, publicada en `ABP_RC_URL`, es la nueva
  versión que _TSDC_ va a liberar. `npm run abp:up` levanta las dos al mismo tiempo.
- **Dos _releases_ de la misma semana.** El trabajo se hace en la rama `main`. Cuando los escenarios
  ya toman capturas en la versión base, se crea una rama para la versión base y se publica desde ella
  el _release_ `semana-6-base`. Luego, en `main`, se migran los escenarios a la versión rc y se publica
  el _release_ `semana-6-rc`. Así, `main` conserva la historia completa de la suite.
- **Capturas por paso.** Cada escenario guarda, después de cada paso, una captura en
  `screenshots/<versión>/<herramienta>/<escenario>/<paso>.png` en la raíz del repositorio. Por
  ejemplo, `screenshots/rc/kraken/ESC-27/03.png` es la captura del tercer paso del escenario `ESC-27`
  en Kraken sobre la versión rc. Las capturas no se suben al repositorio: la carpeta `screenshots/`
  está en el `.gitignore`. Por eso git no las borra al cambiar de rama, y las capturas de la versión
  base siguen disponibles para compararlas con las de la versión rc.

## Preparación

1. Levante la ABP desde la raíz del repositorio con `npm run abp:up`: la versión base queda en
   `ABP_URL` y la versión rc en `ABP_RC_URL`.
2. Agregue el módulo de regresión visual con el _workflow_ **Setup VRT** del repositorio (_Actions →
   Run workflow_): `backstopjs`, `pixelmatch` o `resemblejs`.
3. Instale y prepare el módulo desde la raíz del repositorio: `npm run <módulo>:install` y
   `npm run <módulo>:prepare`, y lea su `README.md`.

## Actividades

1. **Capturas en la versión base.** En la rama `main`, que al empezar la semana coincide con el
   _release_ `semana-5`, haga que los cuarenta escenarios de las dos herramientas tomen una captura
   después de cada paso en `screenshots/base/…`. Ejecute los escenarios sobre la versión base.
2. **_Release_ de la versión base.** Cuando los cuarenta escenarios tomen sus capturas, cree desde
   `main` una rama para la versión base y publique desde ella el _release_ `semana-6-base`.
3. **Migración a la versión rc.** De vuelta en `main`, migre los cuarenta escenarios a la versión rc:
   las pruebas usan la URL `ABP_RC_URL` del archivo `.env` y se adaptan a los cambios de la interfaz,
   conservando los patrones _Page Object_ y _Given-When-Then_ y los identificadores de la semana 5.
   Las capturas se guardan en `screenshots/rc/…`.
4. **Ejecución en la versión rc.** Ejecute los cuarenta escenarios sobre la versión rc. Cada prueba
   termina como exitosa o fallida; una prueba que no puede ejecutarse completa está mal implementada
   y se corrige.
5. **Comparación visual.** Implemente en el módulo de regresión visual la comparación de las capturas
   de la versión base con las de la versión rc, paso a paso, para los cuarenta escenarios. La
   comparación se ejecuta con los scripts de la raíz del repositorio, sin intervención manual, y
   genera un reporte HTML. Documente en el `README.md` del módulo cómo se ejecuta.
6. **Diferencias.** Reporte cada diferencia visual en los _issues_ del repositorio con la plantilla
   **Reporte Incidencia**: una incidencia por diferencia, con las capturas de ambas versiones, la
   imagen de diferencias y el escenario y el paso en que aparece.
7. **Análisis.** Analice el proceso de regresión visual: ventajas, desventajas y limitaciones
   observadas.
8. **Estrategia.** Actualice la estrategia de pruebas: aplique la retroalimentación de la semana 4,
   incorpore la regresión visual y ajuste las decisiones con base en los resultados. El documento que
   se entrega es la estrategia completa, con esas mejoras incluidas, y no solo la lista de cambios.
9. **Entrega.** Publique desde `main` el
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   `semana-6-rc`.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de la versión base | _Release_ `semana-6-base` del repositorio del equipo (rama de la versión base) | La suite de la semana 5 con capturas por paso en `screenshots/base/` |
| Código de la versión rc | _Release_ `semana-6-rc` del repositorio del equipo (rama `main`) | La suite migrada a la versión rc con capturas por paso en `screenshots/rc/`, y el módulo de regresión visual con su `README.md` |
| Reporte de resultados | PDF | Ver [Contenido del reporte](#contenido-del-reporte) |
| Estrategia de pruebas actualizada | PDF, elaborado en la plantilla de la semana 3 | La estrategia completa, con la retroalimentación de la semana 4 aplicada, las mejoras de esta semana y la lista de cambios |

El repositorio contiene solo el código necesario para ejecutar las pruebas, en archivos de texto
plano: ni capturas, ni reportes generados, ni documentos, ni dependencias.

### Contenido del reporte

1. Integrantes del equipo.
2. Funcionalidades: identificador (`FUN-##`), nombre y descripción de cada una de las cinco.
3. Tabla de escenarios, con una fila por cada uno de los cuarenta: identificador (`ESC-##`),
   herramienta, funcionalidad, descripción, resultado esperado, resultado obtenido en la versión rc
   (exitoso o fallido) y pasos con diferencias visuales, con el enlace a sus incidencias.
4. Evidencia de ejecución en la versión rc de cada herramienta: una captura de la salida de la
   ejecución (terminal o reporte de la herramienta) en la que se ven sus veinte escenarios y su
   resultado.
5. Análisis del proceso de regresión visual: ventajas, desventajas y conclusión.

### Lista de cambios de la estrategia

La estrategia actualizada termina con una lista de cambios. Cada cambio indica la sección modificada,
qué cambió y su motivo: un comentario de la retroalimentación de la semana 4 o un resultado de esta
semana.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Escenarios E2E [40 puntos]

- **1.1 Escenarios en la versión rc [20 puntos, 0,5 por escenario].** Los cuarenta escenarios
  (`ESC-01` a `ESC-40`) conservan el identificador de la semana 5, se ejecutan sobre la versión rc y
  terminan como exitosos, o como fallidos con su defecto reportado como incidencia.
- **1.2 Capturas por paso [10 puntos, 5 por herramienta].** Todos los escenarios de la herramienta
  guardan una captura después de cada paso, en la ruta definida, en el _release_ `semana-6-base`
  (versión base) y en el _release_ `semana-6-rc` (versión rc).
- **1.3 _Page Object_ [5 puntos].** Los cuarenta escenarios migrados interactúan con la interfaz solo a
  través de clases de la carpeta `pages/`: las pruebas no contienen selectores.
- **1.4 _Given-When-Then_ [5 puntos].** Cada uno de los cuarenta escenarios migrados tiene exactamente
  un bloque _Given_, uno _When_ y uno _Then_, en ese orden.

### 2. Regresión visual [30 puntos]

- **2.1 Comparación [15 puntos].** El módulo de regresión visual compara, para los cuarenta escenarios,
  la captura de cada paso en la versión base con la del mismo paso en la versión rc, y se ejecuta con
  los scripts de la raíz del repositorio sin intervención manual.
- **2.2 Reporte HTML [15 puntos].** El reporte HTML presenta los resultados agrupados por herramienta y
  escenario, y para cada paso muestra la captura de la versión base, la de la versión rc, la imagen de
  diferencias y el porcentaje de diferencia.

### 3. Reporte de resultados [20 puntos]

- **3.1 Funcionalidades [5 puntos, 1 por funcionalidad].** Las cinco funcionalidades tienen
  identificador (`FUN-##`), nombre y descripción.
- **3.2 Tabla de escenarios [10 puntos].** La tabla contiene los cuarenta escenarios con todos sus
  campos diligenciados y con los mismos identificadores del código.
- **3.3 Evidencia de ejecución [2 puntos, 1 por herramienta].** El reporte incluye, para cada
  herramienta, una captura de la salida de su ejecución en la versión rc en la que se ven sus veinte
  escenarios y su resultado.
- **3.4 Análisis de la regresión visual [3 puntos].**
  - **[1 punto]** El análisis presenta dos ventajas de la regresión visual observadas en esta semana.
  - **[1 punto]** El análisis presenta dos desventajas o limitaciones de la regresión visual
    observadas en esta semana.
  - **[1 punto]** La conclusión indica cuándo le conviene a _TSDC_ usar la regresión visual y la
    justifica con los resultados del reporte.

### 4. Estrategia de pruebas [10 puntos]

- **4.1 Regresión visual en la estrategia [5 puntos].** La tabla TNT y la distribución del esfuerzo
  incluyen la regresión visual, con su propósito, los objetivos que apoya y las funcionalidades que
  cubre.
- **4.2 Retroalimentación [5 puntos].** La estrategia entregada incluye la retroalimentación de la
  semana 4 aplicada, y la lista de cambios relaciona cada comentario con el cambio que lo atiende y la
  sección modificada.
