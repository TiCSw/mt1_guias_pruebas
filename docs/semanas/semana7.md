# Proyecto · Semana 7: Generación de datos

> **Resumen.** El equipo extiende los escenarios E2E de la **versión rc** con tres estrategias de
> generación de datos (_data pool a-priori_, _data pool_ dinámico y pseudo-aleatoria) hasta obtener
> ciento veinte escenarios generados que validan el manejo de datos válidos e inválidos. Entrega un
> _release_ del repositorio (`semana-7`), un reporte de resultados y un video. Las
> [reglas de juego](reglas) del proyecto aplican a esta semana.

## Contexto

Los escenarios E2E de _TSDC_ ya se ejecutan sobre la versión rc, pero cada uno prueba un solo
conjunto de datos. Los formularios de la ABP reciben entradas de todo tipo y _TSDC_ necesita saber
cómo se comportan ante datos válidos, inválidos y en sus límites. Su equipo multiplicará los
escenarios existentes con estrategias de generación de datos para encontrar defectos en la validación
de entradas.

## Objetivos de aprendizaje

1. Diseñar esquemas de generación de datos a partir del modelo de dominio de la estrategia de
   pruebas, con particiones de equivalencia y límites.
2. Implementar las estrategias _data pool a-priori_, _data pool_ dinámico y pseudo-aleatoria en
   escenarios E2E existentes.
3. Definir oráculos de prueba para los datos generados.
4. Identificar defectos de validación de datos en la ABP.

## Conceptos clave

- **Estrategias y herramientas.**

  | Estrategia | Cuándo se generan los datos | Herramienta recomendada | Código |
  |---|---|---|---|
  | _Data pool a-priori_ | Antes de la ejecución; quedan en un archivo de texto (por ejemplo, JSON o CSV) en el repositorio | [Mockaroo](https://www.mockaroo.com/) o un modelo de IA | `APR` |
  | _Data pool_ dinámico | Durante la ejecución, en cada corrida | La API de Mockaroo o un modelo de IA | `DIN` |
  | Pseudo-aleatoria | Durante la ejecución, a partir de una semilla fija | [Faker](https://fakerjs.dev/) | `ALE` |

  El equipo puede usar otras herramientas siempre que la generación de datos sea reproducible, se
  ejecute con los scripts de la raíz del repositorio y respete las reglas del proyecto.
- **Escenario generado.** Es la combinación de un escenario existente, una estrategia y una partición
  de equivalencia o un límite de sus datos. Se identifica como `ESC-##-<código>-###`: el escenario de
  la semana 5, el código de la estrategia y un consecutivo por partición. Por ejemplo, si el escenario
  `ESC-01` usa un _data pool a-priori_ con cinco registros de cinco particiones distintas (título
  válido, título vacío, título de 255 caracteres, título de 256 caracteres y título con emojis),
  produce cinco escenarios generados, `ESC-01-APR-001` a `ESC-01-APR-005`. Varios registros de la
  misma partición cuentan como un solo escenario generado.
- **Oráculo de los datos generados.** Cada registro generado indica su partición y el resultado
  esperado (por ejemplo, "se guarda" o "muestra el error del campo título"). La prueba valida ese
  resultado esperado.
- **Llaves de servicios externos.** Si una estrategia usa un servicio que requiere una llave (por
  ejemplo, la API de Mockaroo o de un modelo de IA), el equipo decide cómo la configura y lo documenta
  en el `README.md` del módulo. Si la ejecución la necesita, el equipo entrega la llave al equipo
  docente. Se recomienda no subir llaves al repositorio.

## Preparación

1. Levante la ABP desde la raíz del repositorio con `npm run abp:up`. Esta semana se usa la
   **versión rc**, publicada en la URL `ABP_RC_URL` del archivo `.env`.
2. Parta de los escenarios de la versión rc entregados en la semana 6, en las dos herramientas.

## Actividades

1. **Esquemas de datos.** Con el modelo de dominio de su estrategia de pruebas, diseñe los esquemas
   de los datos que reciben los escenarios: campos, tipos, restricciones, particiones de equivalencia
   y límites.
2. **_Data pool a-priori_.** Genere antes de la ejecución un archivo de datos, guardado en el
   repositorio, en el que cada registro indica su partición y su resultado esperado.
3. **_Data pool_ dinámico.** Implemente la generación de datos durante la ejecución, de modo que cada
   registro generado indique su partición y su resultado esperado.
4. **Pseudo-aleatoria.** Implemente la generación de datos a partir de una semilla fija, documentada
   en el `README.md` del módulo, de modo que cada dato generado corresponda a una partición conocida.
5. **Escenarios generados.** Extienda los escenarios existentes con las tres estrategias hasta obtener
   ciento veinte escenarios generados, repartidos entre estrategias y herramientas según el criterio
   del equipo. Reutilice los escenarios existentes: no cree escenarios independientes si se pueden
   derivar de uno existente. Los datos generados alimentan las entradas y las validaciones del
   escenario, no sus precondiciones: un inicio de sesión o un registro cuyo único propósito es
   habilitar otro escenario no cuenta como escenario generado.
6. **Ejecución.** Ejecute los escenarios generados sobre la versión rc. Cada prueba termina como
   exitosa o fallida; una prueba que no puede ejecutarse completa está mal implementada y se corrige.
   Reporte cada defecto de la ABP en los _issues_ del repositorio con la plantilla **Reporte
   Incidencia**, indicando el identificador del escenario generado. Los escenarios deben detectar al
   menos diez defectos en el manejo de datos inválidos.
7. **Documentación.** Actualice el `README.md` de cada módulo con la configuración de cada estrategia
   (archivos de datos, llaves de servicios y semilla) y los comandos que ejecutan los escenarios
   generados.
8. **Video.** Grabe un video de máximo 15 minutos que muestre la ejecución de los escenarios generados
   y explique el oráculo de cada estrategia en relación con sus pruebas.
9. **Entrega.** Publique un
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   del repositorio con el _tag_ `semana-7` y elabore el reporte de resultados.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de las pruebas | _Release_ `semana-7` del repositorio del equipo | Los escenarios generados en las dos herramientas, los archivos del _data pool a-priori_ y los `README.md` actualizados |
| Reporte de resultados | PDF | Ver [Contenido del reporte](#contenido-del-reporte) |
| Video | Enlace, máximo 15 minutos | Ver [Contenido del video](#contenido-del-video) |

El repositorio contiene solo el código y los datos necesarios para ejecutar las pruebas, en archivos
de texto plano: ni documentos, ni imágenes, ni videos, ni dependencias, ni resultados de ejecución.
Los enlaces deben abrirse sin solicitar permisos: públicos o con acceso para cuentas
`@uniandes.edu.co`. El contenido del video posterior al minuto 15 no se evalúa.

### Contenido del reporte

1. Integrantes del equipo.
2. Funcionalidades: identificador (`FUN-##`), nombre y descripción de cada una de las cinco.
3. Tabla de escenarios generados, con una fila por cada uno de los ciento veinte: identificador
   (`ESC-##-<código>-###`), herramienta, funcionalidad, estrategia, partición o límite, resultado
   esperado y resultado obtenido (exitoso o fallido).
4. Evidencia de ejecución de cada herramienta: una captura de la salida de la ejecución (terminal o
   reporte de la herramienta) en la que se ven sus escenarios generados y su resultado.
5. Estrategias: cómo se integró cada estrategia en los escenarios, la herramienta usada, el esquema
   de los datos con sus particiones y límites, y el oráculo que valida el resultado esperado.
6. Defectos: los defectos de la ABP encontrados (al menos diez), cada uno con el identificador del
   escenario generado que lo detectó y el enlace a su incidencia.

### Contenido del video

1. Ejecución de los escenarios generados de cada herramienta, con sus resultados.
2. Para cada estrategia, su oráculo: cómo se define el resultado esperado de cada partición y cómo
   lo valida la prueba, con un ejemplo de un escenario generado.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Escenarios generados [55 puntos]

- **1.1 Escenarios generados [10 puntos].** El repositorio contiene ciento veinte escenarios
  generados, cada uno con su identificador `ESC-##-<código>-###` y una partición o un límite distinto
  de los demás escenarios generados del mismo escenario y estrategia. Se ejecutan sobre la versión rc
  con los scripts de la raíz del repositorio y terminan como exitosos, o como fallidos con su defecto
  reportado como incidencia.
- **1.2 _Data pool a-priori_ [15 puntos].** Los escenarios `APR` toman sus datos de un archivo
  generado antes de la ejecución y guardado en el repositorio. Cada registro indica su partición y su
  resultado esperado, y la prueba valida ese resultado.
- **1.3 _Data pool_ dinámico [15 puntos].** Los escenarios `DIN` generan sus datos durante la
  ejecución. Cada registro generado indica su partición y su resultado esperado, y la prueba valida
  ese resultado.
- **1.4 Pseudo-aleatoria [15 puntos].** Los escenarios `ALE` generan sus datos a partir de la semilla
  documentada en el `README.md` del módulo; cada dato corresponde a una partición conocida, y dos
  ejecuciones con esa semilla usan los mismos datos.

### 2. Reporte de resultados [35 puntos]

- **2.1 Funcionalidades [5 puntos, 1 por funcionalidad].** Las cinco funcionalidades tienen
  identificador (`FUN-##`), nombre y descripción.
- **2.2 Tabla de escenarios generados [5 puntos].** La tabla contiene los ciento veinte escenarios
  generados con todos sus campos diligenciados y con los mismos identificadores del código.
- **2.3 Evidencia de ejecución [5 puntos].** El reporte incluye, para cada herramienta, una captura de
  la salida de su ejecución en la que se ven sus escenarios generados y su resultado.
- **2.4 Estrategias y oráculos [10 puntos].** El reporte explica, para cada estrategia, cómo se
  integró en los escenarios, la herramienta usada, el esquema de los datos con sus particiones y
  límites, y el oráculo que valida el resultado esperado.
- **2.5 Defectos [10 puntos, 1 por defecto].** El reporte presenta diez defectos de la ABP en el
  manejo de datos inválidos, detectados por escenarios generados fallidos. Cada defecto indica el
  identificador del escenario generado que lo detectó y enlaza su incidencia en el repositorio,
  reportada con la plantilla **Reporte Incidencia**.

### 3. Video [10 puntos]

- **3.1 Ejecución [4 puntos, 2 por herramienta].** El video muestra la ejecución de los escenarios
  generados de la herramienta y sus resultados.
- **3.2 Oráculos [6 puntos, 2 por estrategia].** El video explica el oráculo de la estrategia: cómo se
  define el resultado esperado de cada partición y cómo lo valida la prueba, con un ejemplo de un
  escenario generado.
