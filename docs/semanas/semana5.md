# Proyecto Pruebas automatizadas

## Semana 5: Pruebas E2E

### Descripción de la semana

En esta semana del proyecto de *TSDC*, el objetivo es automatizar pruebas funcionales de extremo a extremo (E2E) sobre la Aplicación Bajo Prueba (ABP), con el fin de mejorar la confiabilidad, repetibilidad y trazabilidad de los escenarios definidos.

Las pruebas manuales E2E presentan limitaciones como la variabilidad en la ejecución y la falta de registro sistemático de resultados. Por ello, se espera que el equipo implemente pruebas automatizadas que repliquen escenarios funcionales definidos, y sean ejecutables de forma consistente sobre la ABP. Adicionalmente, se busca comparar herramientas modernas de automatización E2E, por lo que se busca trabajar con dos enfoques:

- Herramientas basadas en scripts: [Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) o [Playwright](https://playwright.dev).
- Enfoque BDT utilizando [Kraken](https://thesoftwaredesignlab.github.io/Kraken/).

El resultado esperado es un conjunto de escenarios E2E implementados de forma equivalente en ambas herramientas, junto con un reporte estructurado de resultados.


### Resumen de las actividades

> [!NOTE]
> Si el equipo realiza cambios en las funcionalidades seleccionadas, estos deben reflejarse de manera consistente en los escenarios de prueba, implementaciones y reporte final.

> [!WARNING]
> Los valores de configuración (por ejemplo: URL base, puertos, credenciales de prueba) deben estar centralizados en un único punto de configuración (variables de entorno, archivos `.env`, `.yml` o configuración propia de las herramientas). No se permite la duplicación de estos valores en múltiples archivos.

1. Seleccione un mínimo de cinco (5) funcionalidades y defina al menos veinte (20) escenarios de prueba E2E. Cada escenario debe tener identificador único, estar asociado a una funcionalidad y describir claramente el comportamiento esperado.

2. Implemente los veinte (20) escenarios utilizando una herramienta basada en scripts ([Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) o [Playwright](https://playwright.dev)), asegurando ejecución automatizada completa sobre la ABP.

3. Implemente los mismos veinte (20) escenarios utilizando [Kraken](https://thesoftwaredesignlab.github.io/Kraken/), garantizando equivalencia funcional con la otra herramienta.

4. Aplique en ambas herramientas los patrones _Page Object_ y _Given-When-Then_, evidenciando su uso en la estructura del código y en la definición de los escenarios.

5. Configure las herramientas en el repositorio del equipo en la organización [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/) y verifique la ejecución exitosa de todos los escenarios sobre la ABP.

6. Documente en los archivos `README.md` de cada herramienta los pasos necesarios para configurar el despliegue de la ABP (por ejemplo, uso de contenedores, puertos y variables de entorno) y ejecutar los escenarios de prueba. No es necesario incluir pasos de instalación de la ABP, pero sí es indispensable que se indiquen todos los pasos para garantizar la ejecución de las herramientas de prueba.


### Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.


La entrega debe realizarse mediante un _release_ en el repositorio del equipo (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)), el cual debe permitir la ejecución completa de los escenarios y la validación de todos los artefactos. Este _release_ debe incluir tanto la implementación de las pruebas como la documentación necesaria para su ejecución y el reporte de resultados.

En la carpeta `./e2e` se debe incluir la implementación de los escenarios de prueba en dos herramientas: una herramienta basada en scripts (Cypress, Playwright o Puppeteer) y Kraken. En ambas implementaciones, los escenarios deben ser equivalentes, compartir el mismo identificador y validar el mismo comportamiento funcional. La organización del código debe evidenciar el uso de los patrones _Page Object_ y _Given-When-Then_.

Cada herramienta debe incluir un archivo `README.md` que permita a un tercero ejecutar las pruebas sin ambigüedad. Este archivo debe documentar:

- La configuración necesaria para el despliegue de la ABP (por ejemplo: puertos, variables de entorno, uso de contenedores).
- Los pasos y comandos necesarios para ejecutar los escenarios de prueba.

El _release_ también debe incluir un reporte de resultados en formato `.pdf` (por ejemplo, `reporte-semana-5.pdf`), el cual consolide la información necesaria para evaluar la actividad. Este reporte debe contener:

- Información de los integrantes del equipo.
- Listado de funcionalidades, cada una con identificador, nombre y descripción.
- Tabla de los veinte (20) escenarios de prueba, donde cada escenario incluya como mínimo:
  - Identificador del escenario.
  - Identificador de la funcionalidad asociada.
  - Tipo de prueba (E2E).
  - Descripción del escenario.
  - Resultado esperado.
  - Resultado obtenido en cada herramienta.
  - Estado final (éxito o fallo).
- Resultados de ejecución, incluyendo evidencia verificable (logs, capturas o enlaces externos) y un resumen cuantitativo de la ejecución.
- Análisis comparativo entre la herramienta seleccionada y Kraken, incluyendo ventajas, desventajas y conclusiones basadas en la ejecución realizada.

---

### Criterios de evaluación

> [!NOTE]
> La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.

#### 0. Fatalities

- No se crea un _release_ en el repositorio dentro del plazo establecido con todos los entregables requeridos. **[-15 puntos]**
- Alguna herramienta no ejecuta las pruebas sobre la configuración indicada en su `README.md`. **[-20 puntos por herramienta]**
- Los archivos `README.md` no permiten configurar la ABP ni ejecutar las pruebas. **[-20 puntos por herramienta]**
- Los valores de configuración (URL, puertos, credenciales) no están centralizados y requieren modificaciones manuales en múltiples archivos para ejecutar las pruebas. **[-20 puntos]**
- Se incluyen archivos innecesarios en el repositorio (por ejemplo: `node_modules`, binarios, documentos distintos al `.pdf`). **[-20 puntos]**


#### 1. Implementación en herramienta basada en scripts **[40 puntos]**

- Se implementan y ejecutan correctamente veinte (20) escenarios E2E. (1 punto por escenario) **[20 puntos]**
- Cada escenario tiene identificador único y consistente con el reporte. (0.5 puntos por escenario) **[10 puntos]**
- Uso correcto del patrón _Page Object_. **[5 puntos]**
- Uso correcto del patrón _Given-When-Then_. **[5 puntos]**


#### 2. Implementación en Kraken **[40 puntos]**

- Se implementan y ejecutan correctamente veinte (20) escenarios equivalentes. (1 punto por escenario) **[20 puntos]**
- Identificadores consistentes entre herramientas y reporte. (0.5 puntos por escenario) **[10 puntos]**
- Uso correcto del patrón _Page Object_. **[5 puntos]**
- Uso correcto del enfoque _Given-When-Then_. **[5 puntos]**


#### 3. Reporte de resultados **[20 puntos]**

- Lista de mínimo cinco (5) funcionalidades completas. (1 punto por funcionalidad) **[5 puntos]**
- Tabla de veinte (20) escenarios con todos los campos requeridos y trazabilidad completa. (0.25 puntos por escenario) **[5 puntos]**
- Resultados de ejecución documentados en ambas herramientas (incluye estado y evidencia verificable). **[5 puntos]**
- Análisis comparativo claro, estructurado y basado en la ejecución real de las herramientas. **[5 puntos]**
