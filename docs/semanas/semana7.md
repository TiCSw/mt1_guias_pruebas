# Proyecto Pruebas automatizadas

## Semana 7: Llegó la hora

### Descripción de la Semana

En esta semana del proyecto *TSDC*, el equipo continúa fortaleciendo la automatización de pruebas de la ABP utilizando la versión `rc`. A partir de los resultados obtenidos previamente, el enfoque se centra en evaluar los mecanismos de validación de datos en formularios y el manejo de entradas inválidas.

El objetivo principal es ampliar los escenarios de prueba existentes mediante el uso de estrategias de generación de datos, de manera que se logre una mayor cobertura sobre posibles combinaciones de entrada, incluyendo casos inválidos. Se espera que al finalizar la actividad el equipo haya construido un conjunto robusto de escenarios automatizados que incorporen distintas estrategias de generación de datos y permitan identificar defectos relacionados con validación.

---

### Resumen de las actividades

> [!NOTE]  
> El equipo cuenta actualmente con 20 escenarios E2E únicos, implementados en dos herramientas, una basada en scripts ([Cypress](https://www.cypress.io/), [Puppeteer](https://pptr.dev/) o [Playwright](https://playwright.dev/)) y [Kraken](https://thesoftwaredesignlab.github.io/Kraken/), para un total de 40 pruebas automatizadas. En esta actividad no se crean escenarios nuevos. Se deben reutilizar y adaptar los escenarios existentes para soportar regresión visual. Estos deben ser extendidos hasta alcanzar un total de 120 escenarios mediante estrategias de generación de datos.

1. El equipo debe construir un total de 120 escenarios de validación a partir de los escenarios existentes. Estos nuevos escenarios deben generarse utilizando estrategias de generación de datos, asegurando que cada escenario representa una variación válida o inválida de entrada sobre las funcionalidades previamente automatizadas.

2. Para la generación de datos, se deben utilizar las siguientes estrategias: _Data pool a-priori_, _Data pool dinámico (online)_ y _Pseudo-aleatoria (independiente)_. Cada una debe integrarse en los escenarios de prueba de forma explícita.

3. Se debe utilizar el modelo de dominio definido en su estrategia de pruebas para diseñar los esquemas de generación de datos. En el caso de los _data pools_, los esquemas generadores deben soportar un oráculo de prueba que permita validar automáticamente los resultados esperados.

4. Los escenarios existentes deben ser reutilizados siempre que sea posible, adaptándolos para incorporar las estrategias de generación de datos. No se deben crear escenarios completamente independientes si pueden derivarse de los ya existentes.

5. El equipo puede utilizar cualquier herramienta de generación de datos que considere adecuada, siempre que implemente las tres estrategias requeridas.

6. La distribución de los escenarios entre estrategias de generación de datos y herramientas de automatización E2E queda a discreción del equipo, pero debe documentarse claramente en el listado de escenarios.

El uso de las estrategias de generación de datos debe aplicarse sobre los datos propios del escenario bajo prueba y sus aserciones, no sobre precondiciones. En particular, funcionalidades como registro o login no se consideran escenarios válidos para esta actividad si su único propósito es habilitar la ejecución de otras pruebas.


### Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

La entrega debe realizarse mediante un _release_ en el repositorio del equipo (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)), el cual debe contener los artefactos asociados a la generación y ejecución de los escenarios de prueba con estrategias de datos.

El repositorio debe contener la carpeta `./e2e`, en la cual se encuentren los escenarios de prueba automatizados que implementan las estrategias de generación de datos en la(s) herramienta(s) seleccionada(s). Cada escenario debe estar correctamente identificado y asociado a su correspondiente identificador. Además, las implementaciones deben aplicar los patrones vistos en el curso para pruebas E2E, específicamente _Page Object_ y _Given-When-Then_.

Los archivos README de cada herramienta deben ser actualizados para permitir la instalación, configuración y ejecución de las pruebas, incluyendo la configuración necesaria para las herramientas de generación de datos. Las instrucciones proporcionadas deben ser suficientes para ejecutar los escenarios sin ambigüedades.

Adicionalmente, se debe incluir un reporte de resultados en formato PDF, el cual debe contener como mínimo:

- Información de los integrantes del equipo.
- Listado de funcionalidades, cada una con identificador, nombre y descripción.
- Una tabla con los veinte (20) escenarios de prueba, donde cada escenario incluya: identificador base del escenario, identificador de la funcionalidad asociada, tipo de prueba (E2E), descripción del escenario, estrategia de generación de datos utilizada, identificadores específicos de cada sub-escenario generado, resultado esperado, resultado obtenido y estado final (éxito o fallo).
- Resultados de ejecución, incluyendo evidencia verificable (logs, capturas o enlaces externos) y un resumen cuantitativo con el número de escenarios exitosos y fallidos por herramienta.
- Análisis de la implementación de las estrategias de generación de datos utilizadas, describiendo a alto nivel cómo se integró cada estrategia. Para los casos de _data pools_, se debe indicar explícitamente el oráculo de prueba que soporta el esquema de generación.

Finalmente, todos los errores identificados mediante las pruebas de generación de datos deben ser reportados en el sistema de registro de incidencias (_Issues_) del repositorio.

---

### Criterios de evaluación

> [!NOTE]
> La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.


#### 0. Fatalities

El incumplimiento de cualquiera de los siguientes aspectos genera penalizaciones directas sobre la calificación:

- El repositorio del equipo no cuenta con un _release_ creado dentro del plazo establecido que incluya todos los entregables de la actividad. **[-15 puntos]**
- Las herramientas de automatización no utilizan el código fuente indicado en el archivo `./e2e/README.md`. **[-20 puntos por herramienta]**
- Los archivos README de las herramientas no describen los pasos necesarios para la instalación y ejecución de los escenarios. **[-20 puntos por herramienta]**
- Los archivos README de las herramientas no describen los pasos de configuración de las herramientas de generación de datos. **[-20 puntos por herramienta]**
- El repositorio incluye archivos multimedia, documentos no planos (.pdf, .xlsx) o dependencias/librerías (por ejemplo, `node_modules`). **[-20 puntos]**


#### 1. Pruebas con las herramientas de generación de datos [60 puntos]

- El repositorio contiene el código fuente en `./e2e/*` que permite generar 120 escenarios distintos mediante estrategias de generación de datos. Las instrucciones del README permiten ejecutar efectivamente los escenarios. **[15 puntos]**

- Los escenarios implementan la estrategia _Data pool a-priori_, y el esquema generador del _data pool_ soporta el oráculo de prueba definido por el equipo. **[15 puntos]**

- Los escenarios implementan la estrategia _Data pool dinámico (online)_, y el esquema generador del _data pool_ soporta el oráculo de prueba definido por el equipo. **[15 puntos]**

- Los escenarios implementan la estrategia _Pseudo-aleatoria (independiente)_. **[15 puntos]**


#### 2. Reporte de la actividad [40 puntos]

- El reporte incluye la información de los integrantes del equipo. **[5 puntos]**

- El reporte lista las funcionalidades bajo prueba, cada una con identificador único, nombre y descripción. **[5 puntos]**

- El reporte presenta la tabla de escenarios con los campos requeridos: identificador base, funcionalidad asociada, tipo de prueba, descripción, estrategia de generación, sub-escenarios generados, resultados esperados y obtenidos, y estado final. **[10 puntos]**

- El reporte incluye resultados de ejecución con evidencia verificable y un resumen cuantitativo de escenarios exitosos y fallidos por herramienta. **[10 puntos]**

- El reporte describe la implementación de las estrategias _Data pool a-priori_, _Data pool dinámico (online)_ y _Pseudo-aleatoria (independiente)_, incluyendo para los _data pools_ el oráculo de prueba que soporta el esquema generador. **[5 puntos]**

- Se reportan en el sistema de incidencias al menos 10 defectos relacionados con el manejo de datos inválidos, identificados mediante las pruebas generadas. **[5 puntos]**
