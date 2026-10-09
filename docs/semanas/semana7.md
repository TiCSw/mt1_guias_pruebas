# Proyecto · Semana 7: Generación de datos

> **Resumen.** El equipo extiende los escenarios E2E de la **versión rc** con tres estrategias de
> generación de datos (_data pool a-priori_, _data pool_ dinámico y pseudo-aleatoria) hasta obtener
> ciento veinte escenarios que validan el manejo de datos válidos e inválidos. Entrega un _release_
> del repositorio (`semana-7`) y un reporte de resultados. Las [reglas de juego](reglas) del proyecto
> aplican a esta semana.

## Contexto

Los escenarios E2E de _TSDC_ ya se ejecutan sobre la versión rc, pero cada uno prueba un solo
conjunto de datos. Los formularios de la ABP reciben entradas de todo tipo y _TSDC_ necesita saber
cómo se comportan ante datos válidos, inválidos y en sus límites. Su equipo multiplicará los
escenarios existentes con estrategias de generación de datos para encontrar defectos en la validación
de entradas.

## Objetivos de aprendizaje

1. Diseñar esquemas de generación de datos a partir del modelo de dominio de la estrategia de
   pruebas.
2. Implementar las estrategias _data pool a-priori_, _data pool_ dinámico y pseudo-aleatoria en
   escenarios E2E existentes.
3. Definir oráculos de prueba para los datos generados.
4. Identificar defectos de validación de datos en la ABP.

## Conceptos clave

- **Estrategias y herramientas.** Cada estrategia se implementa con las herramientas indicadas:

  | Estrategia | Cuándo se generan los datos | Herramienta | Código del escenario |
  |---|---|---|---|
  | _Data pool a-priori_ | Antes de la ejecución; quedan en un archivo de texto (por ejemplo, JSON o CSV) versionado en el repositorio | [Mockaroo](https://www.mockaroo.com/) o un modelo de IA | `APR` |
  | _Data pool_ dinámico | Durante la ejecución, en cada corrida | La API de Mockaroo o un modelo de IA | `DIN` |
  | Pseudo-aleatoria | Durante la ejecución, a partir de una semilla fija | [Faker](https://fakerjs.dev/) | `ALE` |

- **Escenario generado.** Cada combinación de un escenario existente con un conjunto de datos
  generados es un escenario distinto, identificado como `ESC-##-<código>-###`: el escenario de la
  semana 5, el código de la estrategia y un consecutivo. Por ejemplo, `ESC-07-APR-003` es el tercer
  conjunto de datos del _data pool a-priori_ para el escenario `ESC-07`.
- **Oráculo de un _data pool_.** Cada registro del _data pool_ incluye, además de los datos de
  entrada, el resultado esperado (por ejemplo, "se guarda" o "muestra el error del campo título"). La
  prueba valida ese resultado esperado.
- **Credenciales de servicios externos.** Las llaves de la API de Mockaroo o del modelo de IA no se
  suben al repositorio: se leen de variables de entorno cuyo nombre se documenta en el `README.md` del
  módulo.

## Preparación

1. Levante la ABP desde la raíz del repositorio con `npm run abp:up`. Esta semana se usa la
   **versión rc**, publicada en la URL `ABP_RC_URL` del archivo `.env`.
2. Parta de los escenarios de la versión rc entregados en la semana 6, en las dos herramientas.

## Actividades

1. **Esquemas de datos.** Con el modelo de dominio de su estrategia de pruebas, diseñe los esquemas
   de los datos que reciben los escenarios: campos, tipos, restricciones y clases de valores válidos e
   inválidos.
2. **_Data pool a-priori_.** Genere con Mockaroo o con un modelo de IA un archivo de datos, versionado
   en el repositorio, en el que cada registro tiene los datos de entrada y el resultado esperado.
3. **_Data pool_ dinámico.** Implemente la generación de datos durante la ejecución con la API de
   Mockaroo o con un modelo de IA, de modo que cada registro generado incluya el resultado esperado.
4. **Pseudo-aleatoria.** Implemente la generación de datos con Faker a partir de una semilla fija,
   documentada en el `README.md` del módulo.
5. **Escenarios generados.** Extienda los escenarios existentes con las tres estrategias hasta obtener
   ciento veinte escenarios generados distintos, repartidos entre estrategias y herramientas según el
   criterio del equipo. Reutilice los escenarios existentes: no cree escenarios independientes si se
   pueden derivar de uno existente. Los datos generados alimentan las entradas y las validaciones del
   escenario, no sus precondiciones: un inicio de sesión o un registro cuyo único propósito es
   habilitar otro escenario no cuenta como escenario generado.
6. **Ejecución.** Ejecute los ciento veinte escenarios sobre la versión rc. Cada prueba termina como
   exitosa o fallida; una prueba que no puede ejecutarse completa está mal implementada y se corrige.
   Reporte cada defecto de la ABP en los _issues_ del repositorio con la plantilla **Reporte
   Incidencia**, indicando el identificador del escenario generado. Los escenarios deben detectar al
   menos diez defectos en el manejo de datos inválidos.
7. **Documentación.** Actualice el `README.md` de cada módulo con la configuración de cada estrategia
   (archivos de datos, variables de entorno de las llaves y semilla) y los comandos que ejecutan los
   escenarios generados.
8. **Entrega.** Publique un
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   del repositorio con el _tag_ `semana-7` y elabore el reporte de resultados.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de las pruebas | _Release_ `semana-7` del repositorio del equipo | Los escenarios generados en las dos herramientas, los archivos del _data pool a-priori_ y los `README.md` actualizados |
| Reporte de resultados | PDF | Ver [Contenido del reporte](#contenido-del-reporte) |

El repositorio contiene solo el código y los datos necesarios para ejecutar las pruebas, en archivos
de texto plano: ni documentos, ni imágenes, ni videos, ni dependencias, ni resultados de ejecución, ni
llaves de servicios externos.

### Contenido del reporte

1. Integrantes del equipo.
2. Funcionalidades: identificador (`FUN-##`), nombre y descripción de cada una de las cinco.
3. Tabla de escenarios, con una fila por cada escenario existente que se extendió: identificador
   (`ESC-##`), herramienta, funcionalidad, descripción, estrategia, identificadores de sus escenarios
   generados y cantidad de escenarios generados exitosos y fallidos.
4. Evidencia de ejecución de cada herramienta: una captura de la salida de la ejecución (terminal o
   reporte de la herramienta) en la que se ven sus escenarios generados y su resultado.
5. Estrategias: cómo se integró cada estrategia en los escenarios y, para cada _data pool_, el
   esquema de los datos y el oráculo que valida el resultado esperado.
6. Defectos: los defectos de la ABP encontrados (al menos diez), cada uno con el identificador del
   escenario generado que lo detectó y el enlace a su incidencia.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Escenarios generados [60 puntos]

- **1.1 Escenarios generados [15 puntos].** El repositorio contiene ciento veinte escenarios generados
  distintos, cada uno con un identificador `ESC-##-<código>-###` derivado de un escenario existente.
  Se ejecutan sobre la versión rc con los scripts de la raíz del repositorio y terminan como exitosos,
  o como fallidos con su defecto reportado como incidencia.
- **1.2 _Data pool a-priori_ [15 puntos].** Los escenarios `APR` toman sus datos de un archivo
  generado con Mockaroo o con un modelo de IA y versionado en el repositorio. Cada registro incluye el
  resultado esperado y la prueba lo valida.
- **1.3 _Data pool_ dinámico [15 puntos].** Los escenarios `DIN` generan sus datos durante la
  ejecución con la API de Mockaroo o con un modelo de IA. Cada registro generado incluye el resultado
  esperado y la prueba lo valida.
- **1.4 Pseudo-aleatoria [15 puntos].** Los escenarios `ALE` generan sus datos con Faker a partir de la
  semilla documentada en el `README.md` del módulo, y dos ejecuciones con esa semilla usan los mismos
  datos.

### 2. Reporte de resultados [40 puntos]

- **2.1 Funcionalidades [5 puntos, 1 por funcionalidad].** Las cinco funcionalidades tienen
  identificador (`FUN-##`), nombre y descripción.
- **2.2 Tabla de escenarios [10 puntos].** La tabla contiene todos los escenarios extendidos, con todos
  sus campos diligenciados y con los mismos identificadores del código.
- **2.3 Evidencia de ejecución [6 puntos, 3 por herramienta].** El reporte incluye, para cada
  herramienta, una captura de la salida de su ejecución en la que se ven sus escenarios generados y su
  resultado.
- **2.4 Estrategias y oráculos [9 puntos, 3 por estrategia].** El reporte explica cómo se integró
  cada estrategia en los escenarios y, para cada _data pool_, presenta el esquema de los datos y el
  oráculo que valida el resultado esperado.
- **2.5 Defectos [10 puntos, 1 por defecto].** El reporte presenta diez defectos de la ABP en el
  manejo de datos inválidos, detectados por escenarios generados fallidos. Cada defecto indica el
  identificador del escenario generado que lo detectó y enlaza su incidencia en el repositorio,
  reportada con la plantilla **Reporte Incidencia**.
