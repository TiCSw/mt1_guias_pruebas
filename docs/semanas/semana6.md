
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
   * Deben utilizar `ResembleJS` **y** `BackstopJS` (por ejemplo `ResembleJS` para Kraken y `BackstopJS` para la herramienta de su elección).

6. Si encuentran diferencias visuales, estas deben ser reportadas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

7. Redactar un resumen de los pros y los contras de cada herramienta. Este resumen debe ser visible como una página en la wiki del repositorio.


### Detalles de la entrega

Al finalizar la implementación de pruebas en la ABP, se debe entregar el enlace al repositorio público en GitHub. Este debe contener:

1. Un **Release** con los siguientes artefactos
    * Los artefactos de código para los 40 escenarios de pruebas previamente implementados (_versión **rc**_). Cada prueba debe ser modificada para soportar pruebas de regresión visual
    * Los artefactos de código para los 10 escenarios de pruebas implementandos para la _versión **base**_, tanto en Kraken como la herramienta de su elección. Cada prueba debe ser ejecutada exitosamente, y debe soportar pruebas de regresión visual.
    * Dos scripts para reportes HTML de regresión visual. Cada script debe estar completamente documentado, debe contar con por lo menos un archivo README donde se detallen las versiones, al igual que los pasos de instalación y ejecución de los artefactos y el script del reporte. Se debe utilizar `ResembleJS` **y** `BackstopJS`

2. Las incidencias reportadas en el sistema de registro de incidencias del equipo. En caso de que el sistema utilizado esté por fuera del repositorio, se debe incluir el link dentro de la Wiki.

3. Video explicando el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de VRT
  
4. Una **Wiki** con la siguiente información
   * Los nombres y correos uniandes de los estudiantes que participaron en la entrega.
   * Detalle de las funcionalidades de la ABP que se incluyen esta semana.
   * Detalle de los escenarios que fueron incluidos en ambas versiones para las pruebas de regresión visual
   * El resumen de los pros y los contras de cada herramienta (`ResembleJS` **y** `BackstopJS`).
   * Enlace al sistema de registro de incidencias
   * Enlace al video.


**Importante**: Únicamente se calificará el último Release creado antes de la fecha/hora de entrega. Del mismo modo, la hora de actualización de la entrada en la wiki debe ser antes de la fecha/hora de entrega.

---

### Criterios de evaluación:

- En la wiki del repositorio se detallan los 10 escenarios, y las funcionalidades asociadas, que se incluyen en las pruebas de esta semana. Se debe especificar los escenarios en cada herramienta (Kraken, y laherramienta de su elección)**[5 puntos]**

- El **Release** del repositorio tiene el código de los 40 escenarios de prueba de la semana pasada (_versión **rc**_) modificados para la toma de screenshots. Los escenarios son funcionales y en el README se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la instalación y ejecución de los escenarios. **De lo contrario no se darán los puntos**. **[40 puntos]**

- El **Release** del repositorio tiene el código de los 10 escenarios de prueba modificados para la versión **base**_ de la ABP. Las pruebas se implementan tanto en Kraken como la herramienta de su elección. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. **De lo contrario no se darán los puntos**. **[20 puntos]**

- El **Release** del repositorio tiene el código de los 2 scripts para reportes HTML, (uno por cada herramienta de automatización), los cuales realizan automáticamente la comparación de dos carpetas de resultados de ejecución de pruebas. La comparación visual se debe hacer al nivel de cada paso de los escenarios. Se debe utilizar `ResembleJS` **y** `BackstopJS`. **[15 puntos]**

- Se reportan por lo menos 5 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas para las pruebas de regresión visual. Los pros/contras deben ser coherentes con las características de las herramientas. **[10 puntos]**

- Link al video de explicación de procedimiento realizado en la semana para habilitar la toma de capturas de pantalla, las decisiones tomadas respecto a la construcción del reporte y una breve explicación de los resultados obtenidos en la semana. El video debe estar alojado en algún gestor de contenido (OneDrive, Youtube, etc), debe ser público o debe permitir el acceso a cuentas de la Universidad de Los Andes.  **[10 puntos]**


**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
