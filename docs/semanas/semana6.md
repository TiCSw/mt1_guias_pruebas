
# Proyecto Pruebas automatizadas


## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas, TSDC ha visto los avances en la automatización de pruebas E2E sobre la ABP y han expresado su interés por continuar con su trabajo para detectar “crashes”, excepciones y errores inesperados sin intervención humana. Particularmente, están interesados en la identificación de errores y garantizar la calidad de la aplicación a lo largo del tiempo.

En este momento, su equipo ha estado utilizando una versión reciente de la ABP (_versión candidata para release_, o _versión **rc**_) para llevar a cabo la implementación y ejecución de pruebas. Sin embargo, dado que TSDC todavía mantiene y ofrece soporte a versiones anteriores, se ha expresado la necesidad de que el trabajo de automatización realizado también cubra dichas versiones. Por otra parte, la persona que diseñó los cambios de la ABP para la versión más reciente no realizó ninguna documentación, por lo que tenemos incertidumbre sobre los cambios en la interfaz y el impacto que esto tendrá sobre las pruebas.

### Resumen de las actividades

Debido a las preocupaciones sobre los cambios de la _versión **rc**_, usted junto con su equipo deben instalar una versión anterior que utilizarán como base (_versión **base**_) para ayudarnos a garantizar la calidad de la aplicación a lo largo del tiempo mediante la ejecución de prueba de regresión visual (_VRT_). Para ello, le solicitamos a su equipo:

1. Implementar la toma de screenshots al interior de las pruebas ya existentes (tanto en Kraken como la herramienta de su elección). Tengan en cuenta que el objetivo final de esta fase es realizar comparación de dichos screenshots, por lo que estos deben ser tomados después de cada paso ejecutado.

2. Ejecutar los 40 escenarios modificados en la versión actual (_versión **rc**_).

3. Utilizar la versión `4.5` de la ABP (GHOST) como la _versión **base**_. Les recomandamos utilizar Docker para deplegar las diferentes versiones de la aplicación (tutorial [Cómo desplegar Ghost utilizando Docker](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-docker-deployment))

4. Seleccionar 10 escenarios para implementarlos y ejecutarlos en la _versión **base**_. Preferiblemente, los escenarios deben pertenecer a funcionalidades diferentes, para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado.
   * _Nota_: Los escenarios de prueba deben ser implementados en Kraken y la otra herramienta de su elección.

5. Construir scripts para las pruebas de regresión visual; Dadas dos carpetas de ejecución de pruebas (screenshots), el script debe analizar de forma automática los resultados de cada paso y presentar un reporte HTML con: los pasos, los screenshots en ambas versiones y las diferencias visuales.
   * Deben haber 2 scripts, uno por herramienta de automatización (Kraken y herramienta de su elección).
   * Deben utilizar 2 de las siguientes herramientas para la comparación de imágenes: _ResembleJS_, _PixelMatch_, o _BackstopJS_. (por ejemplo _ResembleJS_ para Kraken y _BackstopJS_ para la herramienta de su elección).

6. Si encuentran diferencias visuales, estas deben ser reportadas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

7. Redactar un resumen de los pros y los contras de cada herramienta. Este resumen debe ser visible como una página en la wiki del repositorio.

8. Actualizar la estrategias de pruebas para incluir pruebas de regresión visual, al igual que la retroalimentación de las semanas anteriores.


### Detalles de la entrega

a entrega debe ser realizada utilizando el repositorio de trabajo dado por el equipo docente (en caso de no poder acceder a la organización del curso, [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), contacten al equipo docente). Su equipo debe crear un _release_ en el repositorio (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)) con los siguientes elementos:

- La carpeta `./e2e`
    - Los 40 escenarios de prueba modificados (versión `rc`) para la captura de imágenes.
    - Los 10 escenarios de prueba en la versión `base`.
    - Los README de cada herramienta deben ser actualizados para garantizar que el equipo docente pueda instalar, ejecutar y ver los resultados (imágenes) de las pruebas.
    - _Nota_: Deben utilizar todos los patrones vistos para E2E en ambas herramientas (_Page Object_, _Given-When-Then_).

- La carpera `./vrt` con los dos scripts para ejecutar las regresiones visuales (leer el README de la carpeta para entender cómo configurar las herramientas).
    - Los README de cada herramienta deben ser actualizados para garantizar que el equipo docente pueda instalar, ejecutar las regresiones.
    - Deben utilizar 2 de las siguientes herramientas para la comparación de imágenes: _ResembleJS_, _PixelMatch_, o _BackstopJS_.

- El archivo `./actividades/actividad-semana-6` debe tener tener como mínimo:
    - Información de los integrantes que participaron en la actividad.
    - Listado de las funcionalidades que seleccionaron de su estrategia de prueba. Debe incluir, como mínimo, un identificador, un nombre, y una descripción.
    - Listado de escenarios de prueba. Cada escenario debe tener, por lo menos, un identificador único, la funcionalidad asociada, una descripción, y **las versiones en las que está disponible** (`base`, `rc`).
    - Enlace al sistema de registro de incidencias del equipo (se recomienda utilizar los _issues_ del repositorio) en donde se reportan las diferencias visuales identificadas.
    - Enlace a la estrategia de pruebas _(*)_, la cual debe incluir el uso de pruebas de regresión visual y las mejoras a partir de la retroalimentación recibida de las actividades anteriores.
    - Enlace al video explicando el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de VRT.
    - El resumen de los pros y los contras de cada herramienta de regresión visual seleccionada.

> _(*)_ Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (Google drive, OneDrive, Youtube, etc), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

---

### Criterios de evaluación:

0. _"Fatalities"_.

    _Nota: el incumplimiento de cualquiera de los aspectos mencionados a continuación puede incurrir en una penalización sobre la calificación de la actividad_.
    
    - El repositorio del equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) **NO** cuenta con un release, creado dentro del plazo establecido, en donde se incluyen todos los entregables de la actividad. **[-15 puntos]**
    - Se incluyen archivos multimedia (videos, logs, imágenes, etc.), documentos no-planos (.pdf, .xlsx) o dependencias/librerías (node_modules) dentro del release o el repositorio. **[-20 puntos]**
    - El enlace a la estrategia de pruebas **NO** se encuentra en el repositorio del equipo (`./actividades/actividad-semana-4`), **NO** es público, o **NO** permite el acceso a cuentas de la universidad. **[-30 puntos]**
    - Uno o más documentos realizados por el equipo se encuentran en formatos distintos a `.pdf`. **[-5 puntos]**
    - El enlace al video **NO** se encuentra en el repositorio del equipo (`./actividades/actividad-semana-4`), **NO** es público, o **NO** permite el acceso a cuentas de la universidad. **[-10 puntos]**

1. Estrategia de Pruebas. **[15 puntos]**
    - Se actualiza la estrategia de pruebas con la retroalimentación de la entrega anterior. La estrategia utiliza el formato indicado. **[5 puntos]**
    - La estrategia de pruebas incluye el uso de pruebas de regresión visual. La estrategia es coherente respecto al presupuesto, el TNT, y la distribución de esfuerzo. **[10 puntos]**

2. Pruebas E2E para regresión visual. **[35 puntos]**
    - El repositorio cuenta con los 40 escenarios de prueba de la semana pasada (_versión **rc**_) modificados para la toma de screenshots. Los escenarios se ejecutan exitosamente. **[15 puntos]**
    - El repositorio cuenta con los 10 escenarios de prueba modificados para la _versión **base**_ de la ABP. Las pruebas se implementan tanto en Kraken como en la herramienta de su elección. Los escenarios se ejecutan exitosamente. **[15 puntos]**
    - Los escenarios de prueba utilizan correctamente los patrones _Page Object_ y _Given-When-Then_. **[5 puntos]**

3. Pruebas de regresión visual. **[30 puntos]**

    _Nota: cada herramienta para regresiones visuales debe (1) realizar la comparación automática de los screenshots obtenidos luego de ejecutar las pruebas E2E en la versión **base** y **rc**, y (2) debe generar un reporte HTML con los resultados obtenidos (se deben evidencias las comparaciones visuales). La comparación visual se debe hacer al nivel de cada paso de los escenarios de prueba._

    - El repositorio del equipo (`./vrt/*`) cuenta con el primer script para realizar regresiones visuales de las pruebas E2E en el framework de automatización de su elección (Cypress, Playwright, Puppeteer). El README detalla las instrucciones de instalación y ejecución del script. **[15 puntos]**
    - El repositorio del equipo (`./vrt/*`) cuenta con el segundo script para realizar regresiones visuales de las pruebas E2E en Kraken. El README detalla las instrucciones de instalación y ejecución del script. **[15 puntos]**

4. Reporte de la Actividad. **[10 puntos]**

   El reporte de la actividad de su repositorio de equipo (`./actividades/actividad-semana-6`):
   
    - Se listan las funcionalidades seleccionadas para las pruebas E2E. Cada funcionalidad cuenta con un identificador único, un nombre, y una descripción. **[2 puntos]**
    - Se listan los escenarios pruebas E2E. Cada escenario cuenta con un identificador único, una descripción, la funcionalidad asociada, y **las versiones en las que está disponible** (`base`, `rc`). **[3 puntos]**
    - El resumen de los pros y los contras de las herramientas de regresión visual seleccionada es coherente con las herramientas. **[5 puntos]**

5. Video. **[10 puntos]**
    - El video incluye los ajustes a la estrategia de pruebas. La explicación de la estrategia es coherente. **[5 puntos]**
    - El video incluye el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de VRT. **[5 puntos]**


**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
