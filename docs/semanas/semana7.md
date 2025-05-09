
# Proyecto Pruebas automatizadas

## Semana  7: Llegó la hora

Los resultados obtenidos la semana pasada nos convencen más de que debemos continuar con nuestro proyecto para automatizar las pruebas de GHOST. Ahora queremos avanzar en evaluar los mecanismos de validación de datos en nuestros formularios y el manejo de entradas inválidas. Por lo tanto, queremos que construyan escenarios de validación de datos haciendo uso de estrategias y herramientas para generación de datos.

### Resumen de las actividades
En particular, queremos que usen las siguientes estrategias de generación de datos: _Data pool a-priori_, _Data pool dinámico (online)_, y _Pseudo-aleatoria (independiente)_

Su equipo deberá crear 120 escenarios diferentes de validación, a partir de los escenarios implementados en entregas pasadas, los cuales deben utilizar las estrategias de generación de datos mencionadas. Para ello, les recomendamos:

- Utilizar el modelo de dominio de su estrategia de pruebas para definir los esquemas de los _data pools_ (recuerden, los esquemas generadores del data pool deben soportar un oráculo de prueba).
- Deben reusar escenarios existentes, siempre y cuando estos puedan ser adaptados a las estrategias de generación de datos.
- Su equipo tiene la libertad de construir los escenarios usando cualquiera de las herramientas para pruebas E2E que han utilizado y cualquiera de las herramientas existentes para generación de datos.
- Su equipo puede decidir la distribución de escenarios por estrategia de generación. Esto debe quedar documentado en el listado de escenarios.


### Detalles de la entrega:
La entrega debe ser realizada utilizando el repositorio de trabajo dado por el equipo docente (en caso de no poder acceder a la organización del curso, [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), contacten al equipo docente). Su equipo debe crear un _release_ en el repositorio (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)) con los siguientes elementos:

- La carpeta `./e2e` con los escenarios de prueba utilizando las estrategias de generación de datos en la(s) herramienta(s) de automatización seleccionada(s).
    - Las pruebas en ambas deben contar con el identificador del escenario correspondiente.
    - Deben utilizar todos los patrones vistos para E2E en ambas herramientas (_Page Object_, _Given-When-Then_).
    - Los README de cada herramienta deben ser actualizados para garantizar que el equipo docente pueda instalar y ejecutar las pruebas.

- El archivo `./actividades/actividad-semana-7` debe tener tener como mínimo:
    - Información de los integrantes que participaron en la actividad.
    - Listado de las funcionalidades que seleccionaron de su estrategia de prueba. Debe incluir, como mínimo, un identificador, un nombre, y una descripción.
    - Listado de escenarios de prueba. Cada escenario debe tener, por lo menos, un identificador único, la funcionalidad asociada, una descripción, y la estrategia de generación de datos utilizada.
    - Resumen de las estrategias de generación usadas para la automatización de los escenarios. Esta debe incluir la descrición de cómo implementaron cada estrategia utilizada. Para el caso de _pool_ de datos, se debe indicar el oráculo de prueba que soporta el esquema de generación.
    - En caso de identificar errores de la APB, deben reportartlos en su sistema de registro de incidencias.


## Criterios de evaluación:

0. _"Fatalities"_.

    _Nota: el incumplimiento de cualquiera de los aspectos mencionados a continuación puede incurrir en una penalización sobre la calificación de la actividad_.
    
    - El repositorio del equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) **NO** cuenta con un release, creado dentro del plazo establecido, en donde se incluyen todos los entregables de la actividad. **[-15 puntos]**
    - Los archivos README de las herramientas de automatización **NO** describen los pasos para la instalación y ejecución de los escenarios de prueba. **[-20 puntos x herramienta]**
    - Los archivos README de las herramientas de automatización **NO** describen los pasos de configuración para las herramientas de generación de datos. **[-20 puntos x herramienta]**
    - Se incluyen archivos multimedia (videos, logs, imágenes, etc.), documentos no-planos (.pdf, .xlsx) o dependencias/librerías (node_modules) dentro del repositorio. **[-20 puntos]**

1. Pruebas con las herramientas de generación de datos **[60 puntos]**

   - El código de prueba se encuentra en el repositorio del equipo (`./e2e/*`), y permiten generar 120 escenarios diferentes a través de las estrategias de generación de datos. Los escenarios son funcionales y el README detalla las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[15 puntos]**
   - La estrategia de genearción de datos _Data pool a-priori_ es utilizada dentro de los escenarios de prueba. El esquema generador utilizado para _pool_ de datos soporta el oráculo de prueba indicado por el equipo. **[15 puntos]**
   - La estrategia de genearción de datos _Data pool dinámico (online)_ es utilizada dentro de los escenarios de prueba. El esquema generador utilizado para _pool_ de datos soporta el oráculo de prueba indicado por el equipo. **[15 puntos]**
   - La estrategia de genearción de datos _Pseudo-aleatoria (independiente)_ es utilizada dentro de los escenarios de prueba. **[15 puntos]**

3. Reporte de la Actividad. **[40 puntos]**

   El reporte de la actividad de su repositorio de equipo (`./actividades/actividad-semana-7`):
   
    - Se listan las funcionalidades seleccionadas para las pruebas E2E. Cada funcionalidad cuenta con un identificador único, un nombre, y una descripción. **[5 puntos]**
    - Se listan los escenarios pruebas E2E. Cada escenario cuenta con un identificador único, una descripción, y la funcionalidad asociada. **[5 puntos]**
    - Se describe la estrategia _Data pool a-priori_, cómo realizó la  integración dentro de los escenarios de prueba, y cuál es el oráculo que soporta el esquema generador de la herramienta. **[5 puntos]**
    - Se describe la estrategia _Data pool dinámico (online)_, cómo realizó la  integración dentro de los escenarios de prueba, y cuál es el oráculo que soporta el esquema generador de la herramienta. **[5 puntos]**
    - Se describe la estrategia _Pseudo-aleatoria (independiente)_, cómo realizó la  integración dentro de los escenarios de prueba, y cuál es el oráculo que soporta la herramienta. **[5 puntos]**
    - Se reportan, en el sistema de registro de incidencias, por lo menos 10 defectos por manejo de datos inválidos. **[15 puntos]**


**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
