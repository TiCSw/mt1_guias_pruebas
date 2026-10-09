# Proyecto · Semana 8: Estrategia de pruebas final

> **Resumen.** El equipo entrega la versión final de su estrategia de pruebas (EP1) con el reporte de
> sus resultados y el código que la ejecuta, y diseña una segunda estrategia (EP2) para nuevas
> funcionalidades de la ABP. Entrega un _release_ del repositorio (`semana-8`), tres documentos y un
> video. Las [reglas de juego](reglas) del proyecto aplican a esta semana.

## Contexto

El CTO de _TSDC_ ha seguido los avances semanales del equipo y, al ver los beneficios de la
automatización de pruebas, pide la versión final de la estrategia de pruebas (EP1) con sus resultados
y hallazgos. Además, crea una nueva división de automatización de pruebas y nombra a los integrantes
del equipo como sus automatizadores _senior_. La primera tarea de la división es diseñar una segunda
estrategia de pruebas (EP2) que aumente la cobertura de la ABP.

## Objetivos de aprendizaje

1. Consolidar una estrategia de pruebas con las técnicas aplicadas durante el proyecto.
2. Reportar los resultados de una estrategia de pruebas con evidencia trazable.
3. Diseñar una estrategia de pruebas bajo nuevas restricciones de alcance, personal y presupuesto.
4. Comunicar los resultados y las decisiones de las estrategias.

## Conceptos clave

- **EP1 y EP2.** EP1 es la estrategia que el equipo construyó y ejecutó entre las semanas 3 y 7. EP2
  es una estrategia nueva, para funcionalidades de la ABP distintas de las de EP1.

## Actividades

1. **EP1 final.** Entregue la versión final de EP1: aplique la retroalimentación de las entregas
   anteriores e incluya todas las técnicas del proyecto (pruebas exploratorias, de reconocimiento,
   E2E, de regresión visual y de generación de datos) en la tabla TNT y en la distribución del
   esfuerzo. El documento que se entrega es la estrategia completa, con esas mejoras incluidas y su
   lista de cambios.
2. **Reporte de EP1.** Elabore el reporte de resultados de EP1, respaldado por el código del
   repositorio: los escenarios de la estrategia, la evidencia de ejecución de cada técnica y las
   incidencias encontradas, con el escenario que detectó cada una.
3. **Código de EP1.** Verifique que los módulos de `reconocimiento/`, `e2e/` y `vrt/` ejecutan todos
   sus escenarios como lo documenta su `README.md`, y publique un
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   del repositorio con el _tag_ `semana-8`.
4. **EP2.** Diseñe EP2 en la
   [plantilla de estrategia de pruebas](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/estrategia-pruebas.docx),
   respetando las [restricciones de EP2](#restricciones-de-ep2). Sus funcionalidades se identifican a
   partir de `FUN-06`, a continuación de las de EP1.
5. **Video.** Grabe un video de máximo 15 minutos que presente los resultados de EP1 y justifique las
   decisiones de EP2.

### Restricciones de EP2

- **Alcance**: funcionalidades de la ABP distintas de las de EP1; solo pruebas funcionales, en los
  niveles de sistema y aceptación.
- **Duración**: 1 semana de diseño y 8 semanas de implementación y ejecución.
- **Recursos humanos**: los integrantes del equipo son automatizadores _senior_, y la división
  contrata 2 automatizadores _junior_ por cada _senior_ (por ejemplo, un equipo de 4 personas contrata
  8 _junior_). No hay límite de presupuesto para la contratación; el equipo define el perfil de cada
  cargo. Cada persona trabaja 8 horas al día.
- **Recursos computacionales**: todas las pruebas se ejecutan en un proveedor de servicios en la nube,
  con un presupuesto de 1000 USD.
- **_Outsourcing_**: no se permite contratar servicios externos para definir, implementar ni ejecutar
  pruebas.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de EP1 | _Release_ `semana-8` del repositorio del equipo | Los módulos de `reconocimiento/`, `e2e/` y `vrt/` con sus `README.md` actualizados |
| EP1 final | PDF, elaborado en la plantilla de la semana 3 | La estrategia completa, con la retroalimentación aplicada, todas las técnicas del proyecto y la lista de cambios |
| Reporte de resultados de EP1 | PDF | Ver [Contenido del reporte](#contenido-del-reporte) |
| EP2 | PDF, elaborado en la plantilla | La estrategia completa para las nuevas funcionalidades |
| Video | Enlace, máximo 15 minutos | Ver [Contenido del video](#contenido-del-video) |

El repositorio contiene solo el código necesario para ejecutar las pruebas, en archivos de texto
plano: ni documentos, ni imágenes, ni videos, ni dependencias, ni resultados de ejecución. Los enlaces
deben abrirse sin solicitar permisos: públicos o con acceso para cuentas `@uniandes.edu.co`. El
contenido del video posterior al minuto 15 no se evalúa.

### Lista de cambios de EP1

EP1 final termina con una lista de cambios. Cada cambio indica la sección modificada, qué cambió y su
motivo: un comentario de la retroalimentación de las entregas anteriores o un resultado del proyecto.

### Contenido del reporte

1. Integrantes del equipo.
2. Escenarios de EP1: identificador, nombre, descripción y combinación de la tabla TNT (técnica,
   nivel y tipo) de cada uno.
3. Evidencia de ejecución de cada técnica: enlace a la evidencia de las pruebas exploratorias, de
   reconocimiento, E2E, de regresión visual y de generación de datos.
4. Incidencias: enlace a cada incidencia encontrada y el identificador del escenario que la detectó.

### Contenido del video

1. Resultados de EP1: escenarios ejecutados y defectos encontrados por técnica, y qué técnicas
   aportaron más hallazgos.
2. Decisiones de EP2: funcionalidades elegidas, objetivos, tabla TNT, presupuesto y distribución del
   esfuerzo, justificados con los resultados de EP1 y las restricciones de EP2.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. EP1 final [20 puntos]

- **1.1 TNT [8 puntos].** La tabla TNT de EP1 incluye las pruebas exploratorias, de reconocimiento,
  E2E, de regresión visual y de generación de datos, cada combinación con su propósito, los objetivos
  que apoya y las funcionalidades que cubre.
- **1.2 Distribución del esfuerzo [7 puntos].** La distribución del esfuerzo de EP1 asigna, para cada
  una de las 8 semanas, las pruebas de la tabla TNT que se ejecutan y los recursos asignados, y sus
  totales coinciden con el presupuesto.
- **1.3 Retroalimentación [5 puntos].** EP1 final incluye la retroalimentación de las entregas
  anteriores aplicada, y la lista de cambios relaciona cada comentario con el cambio que lo atiende y
  la sección modificada.

### 2. Reporte de resultados de EP1 [15 puntos]

- **2.1 Escenarios [5 puntos].** El reporte lista todos los escenarios de EP1 con identificador,
  nombre, descripción y combinación de la tabla TNT.
- **2.2 Evidencia [5 puntos, 1 por técnica].** El reporte enlaza la evidencia de ejecución de las
  pruebas exploratorias, de reconocimiento, E2E, de regresión visual y de generación de datos.
- **2.3 Incidencias [5 puntos].** El reporte enlaza cada incidencia encontrada en el proyecto con el
  identificador del escenario que la detectó.

### 3. Código de EP1 [15 puntos]

- **3.1 Ejecución [15 puntos, 5 por grupo de módulos].** Los módulos de `reconocimiento/`, `e2e/` y
  `vrt/` del _release_ `semana-8` ejecutan todos sus escenarios con los scripts de la raíz del
  repositorio, como lo documenta su `README.md`, y cada prueba termina como exitosa o fallida.

### 4. EP2 [40 puntos]

- **4.1 Objetivos [10 puntos].** Los objetivos de EP2 (`OBJ-##`) cumplen los cinco atributos SMART y se
  refieren a funcionalidades distintas de las de EP1.
- **4.2 Presupuesto [10 puntos].**
  - **[5 puntos]** Los recursos humanos incluyen a los integrantes del equipo como _senior_ y 2
    _junior_ por cada _senior_, cada cargo con su perfil, su costo por hora y su referencia de
    mercado, a 8 horas al día, y el costo total.
  - **[5 puntos]** Los recursos computacionales son servicios de un proveedor en la nube, cada uno con
    unidad de medida, costo por unidad, consumo estimado y costo total, y el total no supera
    1000 USD.
- **4.3 TNT [10 puntos].** Cada fila de la tabla TNT de EP2 combina una técnica, un nivel de sistema o
  de aceptación y un tipo de prueba funcional, sin combinaciones repetidas, e indica su propósito, los
  objetivos que apoya y las funcionalidades que cubre. La tabla cubre todos los objetivos.
- **4.4 Distribución del esfuerzo [10 puntos].** La distribución del esfuerzo de EP2 cubre la semana de
  diseño y las 8 semanas de implementación y ejecución, asigna para cada semana las pruebas de la
  tabla TNT y los recursos asignados, y sus totales coinciden con el presupuesto.

### 5. Video [10 puntos]

- **5.1 Resultados de EP1 [5 puntos].** El video presenta los escenarios ejecutados y los defectos
  encontrados por técnica, e identifica qué técnicas aportaron más hallazgos.
- **5.2 Decisiones de EP2 [5 puntos].** El video justifica las funcionalidades, los objetivos, la tabla
  TNT, el presupuesto y la distribución del esfuerzo de EP2 con los resultados de EP1 y las
  restricciones de EP2.
