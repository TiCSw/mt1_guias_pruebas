# Proyecto · Semana 4: Pruebas de reconocimiento

> **Resumen.** El equipo explora de forma automática el panel de administración de la **versión
> base** de la ABP con dos herramientas de reconocimiento, un _monkey_ y un _ripper_, con ejecuciones
> reproducibles mediante semillas. Entrega un _release_ del repositorio (`semana-4`), un reporte por
> herramienta, la estrategia de pruebas actualizada y un video. Las [reglas de juego](reglas) del
> proyecto aplican a esta semana.

## Contexto

Las pruebas exploratorias de la semana 1 dependieron del criterio y del tiempo de cada persona.
_TSDC_ quiere saber cuánto puede aportar la exploración automática, sin intervención humana: una
herramienta que genera eventos aleatorios (_monkey_) y otra que recorre la interfaz de forma
sistemática (_ripper_). Su equipo ejecutará las dos sobre la ABP, comparará lo que encuentra cada
una e incorporará los resultados a la estrategia de pruebas.

## Objetivos de aprendizaje

1. Configurar y ejecutar pruebas de reconocimiento con un _monkey_ y un _ripper_ sobre la ABP.
2. Garantizar la reproducibilidad de las ejecuciones mediante semillas.
3. Comparar la exploración aleatoria y la exploración sistemática con base en sus resultados.
4. Actualizar la estrategia de pruebas con base en la retroalimentación y en los resultados.

## Preparación

1. Levante la ABP desde la raíz del repositorio con `npm run abp:up`. Esta semana se usa la
   **versión base**, publicada en la URL `ABP_URL` del archivo `.env`.
2. Agregue los dos módulos con el _workflow_ **Setup Herramientas Reconocimiento** del repositorio
   (_Actions → Run workflow_): `monkey` y `ripper`.
3. Instale y prepare cada módulo desde la raíz del repositorio: `npm run <módulo>:install` y
   `npm run <módulo>:prepare`.
4. Lea el `README.md` de cada módulo, en particular la sección **Explorar la ABP**: indica cómo
   apuntar la herramienta a la ABP, dónde iniciar sesión y cómo obtener las credenciales del archivo
   `.env`.

## Actividades

1. **_Monkey_.** Configure el _monkey_ para que explore la versión base de la ABP: que inicie sesión
   con el administrador del archivo `.env` antes de la primera acción y explore el panel de
   administración (`/ghost/`). Defina la semilla y los parámetros de la ejecución (cantidad de
   eventos de cada tipo y espera entre eventos).
2. **_Ripper_.** Configure el _ripper_ de la misma forma: que inicie sesión con el administrador del
   archivo `.env` antes de explorar y recorra el panel de administración. Defina la semilla, la
   profundidad de la exploración y los demás parámetros.
3. **Cambios al código base.** Documente en el `README.md` de cada módulo todo cambio que haga a su
   código base (por ejemplo, el inicio de sesión): qué se cambió y para qué. Las URL y las
   credenciales de la ABP se obtienen solo del archivo `.env`.
4. **Ejecución y reproducibilidad.** Ejecute cada herramienta con `npm run monkey:test` y
   `npm run ripper:test`. Ejecute cada una dos veces con la misma semilla y confirme que recorre la
   misma secuencia de eventos. Documente en el `README.md` de cada módulo la semilla y los parámetros
   con los que se reproduce la ejecución reportada.
5. **Defectos.** Analice los reportes, capturas y videos que generan las herramientas. Reporte cada
   defecto de la ABP en los _issues_ del repositorio con la plantilla **Reporte Incidencia**,
   indicando la herramienta y la semilla que lo reproducen. Si una herramienta no encuentra defectos,
   justifique por qué con base en lo que exploró.
6. **Análisis comparativo.** Compare el _monkey_ y el _ripper_: ventajas y desventajas de cada uno,
   observadas en sus ejecuciones sobre la ABP.
7. **Estrategia.** Actualice la estrategia de pruebas de la semana 3: incorpore las pruebas de
   reconocimiento, aplique la retroalimentación recibida y ajuste las decisiones con base en los
   resultados de esta semana.
8. **Video.** Grabe un video de máximo 15 minutos que presente los cambios a la estrategia y el
   análisis comparativo de las dos herramientas.
9. **Entrega.** Publique un
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   del repositorio con el _tag_ `semana-4`.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de las herramientas | _Release_ `semana-4` del repositorio del equipo | Los dos módulos agregados por el _workflow_, con el inicio de sesión, su configuración y sus `README.md` actualizados |
| Reporte del _monkey_ | PDF | Ver [Contenido de los reportes](#contenido-de-los-reportes) |
| Reporte del _ripper_ | PDF | Ver [Contenido de los reportes](#contenido-de-los-reportes) |
| Estrategia de pruebas actualizada | PDF, elaborado en la plantilla de la semana 3 | La estrategia con los cambios de la actividad 7 y la lista de cambios |
| Video | Enlace, máximo 15 minutos | Los cambios a la estrategia y el análisis comparativo |

El repositorio contiene solo el código necesario para ejecutar las pruebas, en archivos de texto
plano: ni documentos, ni imágenes, ni videos, ni dependencias, ni resultados de ejecución. Los enlaces
deben abrirse sin solicitar permisos: públicos o con acceso para cuentas `@uniandes.edu.co`. El
contenido del video posterior al minuto 15 no se evalúa.

### Contenido de los reportes

Cada herramienta tiene su propio reporte con:

1. Integrantes del equipo.
2. Ejecuciones: semilla y parámetros de cada ejecución, y enlace a la evidencia que genera la
   herramienta (reporte, capturas o video).
3. Defectos: enlace a la incidencia de cada defecto encontrado, o la justificación de por qué la
   herramienta no encontró defectos.
4. Ventajas y desventajas de la herramienta observadas en sus ejecuciones.

### Lista de cambios de la estrategia

La estrategia actualizada termina con una lista de cambios. Cada cambio indica la sección modificada,
qué cambió y su motivo: un comentario de la retroalimentación de la semana 3 o un resultado de esta
semana.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. _Monkey_ [30 puntos]

- **1.1 Ejecución [10 puntos].** El _monkey_ inicia sesión con el administrador del archivo `.env`,
  explora el panel de administración de la versión base y, con la semilla documentada en su
  `README.md`, dos ejecuciones recorren la misma secuencia de eventos.
- **1.2 `README.md` [5 puntos].** El `README.md` del módulo indica la semilla, los parámetros de la
  ejecución, los comandos para ejecutarla y cada cambio al código base con su propósito.
- **1.3 Ejecuciones y defectos [10 puntos].** El reporte presenta la semilla, los parámetros y la
  evidencia de cada ejecución, y enlaza la incidencia de cada defecto encontrado o justifica por qué
  la herramienta no encontró defectos.
- **1.4 Ventajas y desventajas [5 puntos].** El reporte presenta dos ventajas y dos desventajas del
  _monkey_ observadas en sus ejecuciones sobre la ABP.

### 2. _Ripper_ [30 puntos]

- **2.1 Ejecución [10 puntos].** El _ripper_ inicia sesión con el administrador del archivo `.env`,
  recorre el panel de administración de la versión base y, con la semilla documentada en su
  `README.md`, dos ejecuciones recorren la misma secuencia de eventos.
- **2.2 `README.md` [5 puntos].** El `README.md` del módulo indica la semilla, los parámetros de la
  ejecución, los comandos para ejecutarla y cada cambio al código base con su propósito.
- **2.3 Ejecuciones y defectos [10 puntos].** El reporte presenta la semilla, los parámetros y la
  evidencia de cada ejecución, y enlaza la incidencia de cada defecto encontrado o justifica por qué
  la herramienta no encontró defectos.
- **2.4 Ventajas y desventajas [5 puntos].** El reporte presenta dos ventajas y dos desventajas del
  _ripper_ observadas en sus ejecuciones sobre la ABP.

### 3. Estrategia de pruebas [30 puntos]

- **3.1 Pruebas de reconocimiento [10 puntos].** La tabla TNT y la distribución del esfuerzo incluyen
  las pruebas de reconocimiento, con su propósito, los objetivos que apoyan y las funcionalidades que
  cubren.
- **3.2 Retroalimentación [10 puntos].** La lista de cambios relaciona cada comentario de la
  retroalimentación de la semana 3 con el cambio que lo atiende y la sección modificada.
- **3.3 Decisiones basadas en resultados [10 puntos].** Los cambios de la estrategia motivados por
  esta semana citan el resultado del _monkey_ o del _ripper_ que los justifica (por ejemplo, un
  defecto encontrado o una parte de la ABP que no se exploró).

### 4. Video [10 puntos]

- **4.1 Cambios a la estrategia [5 puntos].** El video presenta los cambios de la estrategia, cada
  uno con su motivo.
- **4.2 Análisis comparativo [5 puntos].** El video compara el _monkey_ y el _ripper_ con base en los
  resultados de sus ejecuciones y concluye para qué le sirve cada uno a _TSDC_.
