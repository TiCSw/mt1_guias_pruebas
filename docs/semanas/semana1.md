# Proyecto · Semana 1: Exploración de la aplicación bajo pruebas

> **Resumen.** El equipo instala la **versión base** de la ABP, la explora, ejecuta y documenta
> treinta pruebas exploratorias sobre quince funcionalidades, reporta los defectos que encuentra y
> modela la interfaz y el dominio de la ABP. Entrega el listado de funcionalidades, el inventario de
> pruebas, los dos modelos y las incidencias en el repositorio. Las [reglas de juego](reglas) del
> proyecto aplican a esta semana.

## Contexto

Bienvenido a su primera semana en _TSDC_. Para automatizar las pruebas de la ABP, el primer paso es
conocerla: sus funcionalidades, los atributos de calidad que se esperan de ella, su arquitectura y
las tecnologías con las que está construida. _TSDC_ no mantiene documentación actualizada de la ABP,
así que su equipo adquirirá ese conocimiento explorándola: ejecutando pruebas exploratorias y
analizando su código. Las pruebas exploratorias también buscan defectos, que el equipo reportará en
el repositorio que le asigna el equipo docente.

## Objetivos de aprendizaje

1. Desplegar la ABP en un ambiente local de pruebas.
2. Identificar las funcionalidades de la ABP mediante exploración.
3. Diseñar, ejecutar y documentar pruebas exploratorias.
4. Reportar defectos de forma reproducible y trazable.
5. Modelar la interfaz gráfica y el dominio de la ABP.

## Preparación

Esta semana se usa la **versión base** de la ABP. Instale
[Docker](https://www.docker.com/products/docker-desktop/) (Docker Desktop en macOS o Windows, Docker
Engine en Linux) en su versión más reciente, y despliegue la ABP de una de estas dos formas:

- **Antes de recibir el repositorio del equipo.** El equipo docente crea el repositorio de cada
  equipo cuando se confirman los equipos, durante la semana. Mientras tanto, despliegue la versión
  base con Docker siguiendo la guía de despliegue de Ghost de los contenidos del curso, y cree el
  administrador al abrir la ABP por primera vez.
- **Con el repositorio del equipo.** Cuando el repositorio esté listo en la organización
  [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), clónelo, lea su `README.md`
  (requiere también Node.js 24) y levante la ABP desde su raíz con `npm run abp:up`. La versión base
  queda publicada en la URL `ABP_URL` del archivo `.env`, y su administrador es el del mismo archivo
  (`ABP_ADMIN_EMAIL` y `ABP_ADMIN_PASSWORD`).

Las actividades se pueden hacer con cualquiera de los dos despliegues. Las incidencias se reportan en
el repositorio del equipo cuando esté disponible.

## Actividades

1. **Instalación.** Verifique que la ABP funciona: abra su URL, abra el panel de administración
   (`/ghost/`) e inicie sesión con el administrador.
2. **Código fuente.** Revise el [código fuente de Ghost](https://github.com/TryGhost/Ghost) para
   identificar los lenguajes, la estructura de directorios y los patrones de arquitectura y de diseño
   de la ABP.
3. **Exploración rápida.** Explore la ABP durante máximo diez minutos para identificar su estrategia
   de navegación (menús, pestañas, botones y enlaces) y sus funcionalidades principales.
4. **Funcionalidades.** Liste quince funcionalidades de la ABP, identificadas como `FEXP-01` a
   `FEXP-15`, cada una con nombre y una descripción que indica qué hace el usuario y qué resultado
   observable obtiene.
5. **Pruebas exploratorias.** Ejecute y documente treinta pruebas exploratorias, dos por cada
   funcionalidad, en la
   [plantilla del inventario de pruebas exploratorias](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/inventario-pruebas-exploratorias.xlsx).
   Cada prueba tiene identificador (`EXP-01` a `EXP-30`), fecha, autor, identificador de la
   funcionalidad, tipo de requerimiento (funcional o no funcional), tipo de prueba (positiva, negativa
   o mixta), título, descripción y el enlace a un video de su ejecución, alojado fuera del
   repositorio.
6. **Defectos.** Reporte cada defecto encontrado en los _issues_ del repositorio con la plantilla
   **Reporte Incidencia** (ver la guía de
   [reporte de incidencias](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/pguOv/reporte-de-incidencias)),
   indicando el identificador de la prueba exploratoria que lo detectó. Registre en el inventario el
   enlace a la incidencia de cada prueba que encontró un defecto. Las pruebas deben detectar al menos
   diez defectos.
7. **Modelos.** Elabore el modelo de GUI (pantallas y transiciones) y el modelo de dominio (entidades
   y relaciones) de la ABP, con base en lo explorado. Puede apoyarse en los
   [consejos de la semana](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/xjgTI/para-tener-en-cuenta-esta-semana).

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Listado de funcionalidades | PDF | Las quince funcionalidades con identificador, nombre y descripción |
| Inventario de pruebas exploratorias | PDF, exportado de la plantilla | Las treinta pruebas con sus campos, el enlace a su video y, cuando corresponde, el enlace a su incidencia |
| Modelo de GUI | PDF o imagen | Las pantallas de la ABP y las transiciones entre ellas |
| Modelo de dominio | PDF o imagen | Las entidades de la ABP con sus atributos y relaciones |
| Incidencias | _Issues_ del repositorio del equipo | Un _issue_ por defecto, con la plantilla **Reporte Incidencia** |

Los enlaces de los videos deben abrirse sin solicitar permisos: públicos o con acceso para cuentas
`@uniandes.edu.co` (por ejemplo, OneDrive Uniandes o YouTube).

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Funcionalidades [15 puntos]

- **1.1 Funcionalidades [15 puntos, 1 por funcionalidad].** Las quince funcionalidades tienen
  identificador (`FEXP-##`), nombre y una descripción que indica qué hace el usuario y qué resultado
  observable obtiene, y cada una es distinta de las demás.

### 2. Inventario de pruebas exploratorias [65 puntos]

- **2.1 Registro de las pruebas [30 puntos, 1 por prueba].** Las treinta pruebas del inventario tienen
  todos los campos de la actividad 5 y corresponden a dos pruebas por funcionalidad.
- **2.2 Videos [15 puntos, 0,5 por prueba].** El video de cada una de las treinta pruebas se abre sin
  solicitar permisos y muestra la ejecución de la prueba sobre la ABP.
- **2.3 Ejecución de las pruebas [10 puntos].** Las pruebas validan la funcionalidad a la que están
  asociadas y se ejecutaron sobre la ABP en funcionamiento: ninguna falla por una instalación
  incompleta, un error del ambiente o una mala preparación del escenario.
- **2.4 Defectos [10 puntos, 1 por defecto].** El inventario presenta diez defectos de la ABP. Cada
  defecto está reportado como incidencia en el repositorio con la plantilla **Reporte Incidencia**,
  indica el identificador de la prueba exploratoria que lo detectó, y el inventario enlaza esa
  incidencia.

### 3. Modelos [20 puntos]

- **3.1 Modelo de GUI [10 puntos].** El modelo muestra las pantallas que recorren las quince
  funcionalidades y las transiciones entre ellas, cada una etiquetada con la acción del usuario.
- **3.2 Modelo de dominio [10 puntos].** El modelo muestra las entidades de la ABP con sus atributos y
  las relaciones entre ellas con su cardinalidad.
