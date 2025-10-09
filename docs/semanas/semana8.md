
# Proyecto Pruebas automatizadas

## Semana 8: Versión final de la estrategia de pruebas

Estimado equipo de pruebas, nos encontramos en la recta final de este proyecto! El CTO de TSDC ha visto sus avances semanales y, al observar los beneficios la automatización de pruebas dentro de la compañía, ha pedido recibir la versión final de su estrategia de pruebas (EP1) junto con sus resultados y hallazgos. Adiciónalmente, debido a los resultados prometedores de su equipo, el CTO ha decidido crear una nueva división dentro de la compañia para los procesos de automatización y los ha nombrado a ustedes como los nuevos automatizadores _senior_!

Con el objetivo de continuar con los esfuerzos de automatización sobre la ABP, la primera tarea de su nueva división será crear una segunda estrategia de pruebas (EP2) para aumentar continuar incrementanto la cobertura del sistema. Para ello, se presentan las siguientes restricciones:

- Dado que se busca aumentar la cobertura, deberán enfocarse en funciónalidades distintas a las de la primera estrategia (EP1).
- Tendrán 1 semana para diseñar la estrategia y 2 meses (8 semanas) para su implementación y ejecución.
- Respecto a los recursos humanos, su división necesita contratar 2 _automatizadores junior_ por _automatizador senior_ (e.g. si su equipo es de 4 personas, su estrategia debe incluir 8 _automatizadores junior_).
- Su equipo no tiene ninguna restricción monetaria para la contratacion del personal y tiene la libertad de definir el perfil de los nuevos empleados. Asuma que cada empleado de la división trabaja 8 horas/día.
- Respecto a los recursos computacionales, todas las pruebas deben ser ejecutadas utilizando algun proveedor de servicios en la nube. Cuentan con un presupuesto de 1000 USD.
- **No** es posible contratar servicios de outsourcing para la definisión, implementación, ni ejecución de pruebas. En otras palabras, la estrategia de pruebas no puede apalancarse en servicios de pruebas de terceros.
- Debido a que en TSDC cuenta con otras divisiones de ingeniería con mayor conocimiento técnico sobre los sistemas y componentes de la ABP, su estrategia debe contemplar únicamente la implementacion y ejecución de pruebas funcionales. Del mismo modo, se espera que la estrategia se enfoque solamente en los niveles de prueba de sistema y aceptación.


## Resumen de las actividades

1. Su equipo deberá entregar la version final de la estrategia de pruebas (EP1) que han diseñado durante las últimas semanas. Particularmente, su estrategia debe incluir todas las actividades realizadas (pruebas de exploración, reconocimiento, extremo a extremo, regresión visual, y generación de datos), al igual que la correcciónes y mejoras a partir de la retroalimentacion recibida en entregas pasadas.
2. Escriban un reporte con resultados de ejecución de la estrategia (EP1), los cuales deben estar respaldados con el código fuente que implementaron para ejecutar las pruebas. Como mínimo, se espera que este documento liste los escenarios de la estrategia (ID, nombre, descripción, tipo, nivel, y técnica), incluya enlaces con las evidencias de ejecución de **todas** las técnicas utilizadas, y la relación entre los escenario y las incidencias identificadas.
4. Elaboren una nueva estrategia de pruebas (EP2) utilizando las restricciones mencionadas anteriormente. Para esto deben utilizar la plantilla de estrategia ([enlace](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/estrategia-pruebas.docx))
5. Adicionalmente, graben un video para presentar los resultados obtenidos de la estrategia de pruebas EP1, y en donde expliquen las decisiones tomadas para la nueva estrategia de pruebas EP2.


## Detalles de la entrega

Su equipo debe entregar un archivo `.pdf` distinto para cada estrategia de pruebas y el reporte de resultado, y un video con los resutados y decisiones de las estrategias.

Respecto al código fuente desarrollado para la primera estrategia de pruebas (EP1), la entrega debe ser realizada utilizando el repositorio de trabajo dado por el equipo docente (en caso de no poder acceder a la organización del curso, [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), contacten al equipo docente). Su equipo debe crear un _release_ en el repositorio (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)).

> _(*)_ Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (Google drive, OneDrive, Youtube, etc), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.


### Criterios de evaluación:

0. _"Fatalities"_.

    _Nota: el incumplimiento de cualquiera de los aspectos mencionados a continuación puede incurrir en una penalización sobre la calificación de la actividad_.
    
    - El repositorio del equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) **NO** cuenta con un release, creado dentro del plazo establecido, en donde se incluyen todos los entregables de la actividad. **[-15 puntos]**
    - Los archivos README de las herramientas de automatización **NO** describen los pasos para la instalación y ejecución de los escenarios de prueba. **[-20 puntos x herramienta]**
    - Se incluyen archivos multimedia (videos, logs, imágenes, etc.), documentos no-planos (.pdf, .xlsx, etc.) o dependencias/librerías (node_modules) dentro del repositorio. **[-20 puntos]**
    - Se entregan documentos realizados por el equipo con formatos distintos a `.pdf`. **[-5 puntos x documento]**

1. Estrategia de Pruebas (EP1). **[20 puntos]**
    - El TNT especifica y describe la relación entre las pruebas, y es coherente con los objetivos de la estrategia. El TNT incluye el uso de pruebas de exploración, reconocimiento, extremo a extremo, regresión visual, y generación de datos. **[10 puntos]**
    - La distribución describe la asignación de recursos (humanos, computaciónales, outsourcing), y es coherente con el TNT y la duracion de la estrategia. **[10 puntos]**

2. Reporte de Resultados de la Estrategia (EP1). **[15 puntos]**
    - El documento lista todos los escenarios de prueba de la estrategia. Cada escenario tiene, como mínimo, un identificador, un nombre, una descripción, y el TNT (tipo, nivel, y técnica utilizada). **[5 puntos]**
    - El documento incluye los enlaces a las evidencias de ejecución de todas las técnicas (`./e2e/*`, `./reconocimiento/*`, `./vrt/*`). **[5 puntos]**
    - El documento incluye las incidencias identificadas como resultado de la ejecución de la estrategia. Se indican los escenarios asociados a cada incidencia. **[5 puntos]**

3. Código Fuente de la Estrategia (EP1). **[15 puntos]**
    - El código de prueba se encuentra en el repositorio del equipo (`./e2e/*`, `./reconocimiento/*`, `./vrt/*`) y permite la ejecución de todos los escenarios de la estrategia de pruebas. **[15 puntos]**

4. Estrategia de Pruebas (EP2). **[40 puntos]**
    - Se establecen los objetivos que se esperan alcanzar durante el periodo de pruebas. Cada objetivo debe ser _SMART_ (especifico, medible, y realizable, relevante, y acotado en el tiempo). **[10 puntos]**
    - El presupuesto de pruebas describe los recursos humanos, computacionales, y de contrataciones de servicios requeridos para la estrategia. Los costos costos y consumos de cada tipo de recurso coherentes con la estrategia y están soportados con datos adicionales que deben estar descritos o referenciados. **[10 puntos]**
    - El TNT especifica las técnicas, niveles y tipos (TNT) de cada prueba a utilizar. La relación entre las pruebas y los objetivos es coherente con la estrategia. **[10 puntos]**
    - Se presenta la distribución de esfuerzo para la ejecución de la estrategia. Se debe describir la asignación de recursos del presupuesto, al igual que su relación con las actividades del TNT, durante el transcurso de la duración de la estrategia. **[10 puntos]**

5. Video. **[10 puntos]**
    - El video presenta los resultados obtenidos de la estrategia de pruebas EP1. **[5 puntos]**
    - El video presenta las decisiones tomadas para la nueva estrategia de pruebas EP2. **[5 puntos]**

**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
