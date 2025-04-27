# Proyecto Pruebas automatizadas

## Semana  5: Pruebas E2E

Ya tenemos más claro cómo funcionan las pruebas de reconocimiento. Nos parece que son herramientas útiles para detectar “crashes”, excepciones y errores inesperados sin intervención humana. Entendemos que este tipo de pruebas requieren la disponibilidad de máquinas para su ejecución por varias horas y que se espera que se usen como complemento a pruebas funcionales. Sin embargo, consideramos que esto no es suficiente para evaluar la calidad de la ABP.  

Por ejemplo, hemos utilizado pruebas manuales funcionales con un enfoque de E2E, es decir de “extremo a extremo”. Sin embargo, re-ejecutar los escenarios de pruebas de forma manual puede llevar a errores en la ejecución de la prueba y, lamentablemente, nuestros ingenieros suelen no documentarlos. Por lo tanto, como parte de su labor queremos que automatice las pruebas E2E. Con base en una revisión de blogs hemos encontrado que [Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev) son herramientas apliamente utilizadas para hacer pruebas E2E basadas en scripts. Por otro lado, nuestros amigos de The Software Design Lab nos recomendaron usar su herramienta [Kraken](https://thesoftwaredesignlab.github.io/Kraken/) que permite hacer pruebas E2E, pero usando escenarios escritos en un estilo BDT (es decir, Behavior Driven Testing).

### Resumen de las actividades

Creemos entonces que una buena forma de empezar sería implementando escenarios de prueba de las funcionalidades que su equipo seleccionó en su estrategia de pruebas. Para ello, les solicitamos que seleccionen mínimo 5 funcionalidades e implementen por lo menos 20 de los escenarios utilizando Kraken y algunas de las otras tres herramientas ([Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev)). En otras palabras, los 20 escenarios de prueba deben ser implementados idénticamente tanto con Kraken como con la otra herramienta de su elección. Los escenarios deben utilizar **todos** los patrones vistos (_Page Object_, _Given-When-Then_), independientemente de la herramieta.

Para tal efecto, utilicen su repositorio de equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) para configurar las herramientas de automatización e implementar los escenarios de prueba. Los escenarios deben ser ejecutados en la ABP, utilizando la versión definida para el proyecto, con el fin de asegurar que las pruebas estén bien construidas.

### Detalles de la entrega

La entrega debe ser realizada utilizando el repositorio de trabajo dado por el equipo docente (en caso de no poder acceder a la organización del curso, [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), contacten al equipo docente). Su equipo debe crear un _release_ en el repositorio (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)) con los siguientes elementos:

- La carpeta `./e2e` con los escenarios de prueba de la herramienta de automatización seleccionada (Cypress, Playwright, Puppeteer) y Kraken (leer el README de la carpeta para entender cómo configurar las herramientas).
    - Las pruebas en ambas herramientas deben contar con el identificador del escenario correspondiente.
    - Deben utilizar todos los patrones vistos para E2E en ambas herramientas (_Page Object_, _Given-When-Then_).
    - Los README de cada herramienta deben ser actualizados para garantizar que el equipo docente pueda instalar y ejecutar las pruebas.

- El archivo `./actividades/actividad-semana-5` debe tener tener como mínimo:
    - Información de los integrantes que participaron en la actividad.
    - Listado de las funcionalidades que seleccionaron de su estrategia de prueba. Debe incluir, como mínimo, un identificador, un nombre, y una descripción.
    - Listado de escenarios de prueba. Cada escenario debe tener, por lo menos, un identificador único, la funcionalidad asociada, y una descripción.
    - El resumen de los pros y los contras de cada herramienta de automatización seleccionada.

> _(*)_ Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (Google drive, OneDrive, Youtube, etc), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

---

### Criterios de evaluación

0. _"Fatalities"_.

    _Nota: el incumplimiento de cualquiera de los aspectos mencionados a continuación puede incurrir en una penalización sobre la calificación de la actividad_.
    
    - El repositorio del equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) **NO** cuenta con un release, creado dentro del plazo establecido, en donde se incluyen todos los entregables de la actividad. **[-15 puntos]**
    - Los archivos README de las herramientas de automatización **NO** describen los pasos para la instalación y ejecución de los escenarios de prueba. **[-20 puntos x herramienta]**

1. Pruebas con la herramienta de automatización de su elección. **[40 puntos]**

   - Los 20 escenarios de prueba se encuentra en el repositorio del equipo (`./e2e/*`), y se ejecutan exitosamente. Cada prueba debe contar con el identificador asociado al escenario de prueba **[20 puntos]**
   - Los escenarios de prueba utilizan correctamente el patrón _Page Object_. **[10 puntos]**
   - Los escenarios de prueba utilizan correctamente el patrón _Given-When-Then_. **[10 puntos]**

2. Pruebas con la herramienta de automatización Kraken. **[40 puntos]**

   - Los 20 escenarios de prueba se encuentra en el repositorio del equipo (`./e2e/*`), y se ejecutan exitosamente. Cada prueba debe contar con el identificador asociado al escenario de prueba **[20 puntos]**
   - Los escenarios de prueba utilizan correctamente el patrón _Page Object_. **[10 puntos]**
   - Los escenarios de prueba utilizan correctamente el patrón _Given-When-Then_. **[10 puntos]**

3. Reporte de la Actividad. **[20 puntos]**

    El reporte de la actividad de su repositorio de equipo (`./actividades/actividad-semana-4`):
   
    - Se listan las funcionalidades seleccionadas para las pruebas E2E. Cada funcionalidad cuenta con un identificador único, un nombre, y una descripción. **[5 puntos]**
    - Se listan los escenarios pruebas E2E. Cada escenario cuenta con un identificador único, una descripción, y la funcionalidad asociada. **[5 puntos]**
    - El resumen de los pros y los contras de la herramienta de automatización seleccionada es coherente con la herramienta. **[5 puntos]**
    - El resumen de los pros y los contras de la herramienta Kraken es coherente con la herramienta. **[5 puntos]**

**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
