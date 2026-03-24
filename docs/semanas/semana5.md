# Proyecto Pruebas automatizadas

## Semana 5: Pruebas E2E

### Descripción de la semana

En esta semana del proyecto de *TSDC*, el objetivo es automatizar pruebas funcionales de extremo a extremo (E2E) sobre la Aplicación Bajo Prueba (ABP), con el fin de mejorar la confiabilidad, repetibilidad y trazabilidad de los escenarios definidos.

Las pruebas manuales E2E presentan limitaciones como la variabilidad en la ejecución y la falta de registro sistemático de resultados. Por ello, se espera que el equipo implemente pruebas automatizadas que repliquen escenarios funcionales definidos, sean ejecutables de forma consistente sobre la ABP, y permitan comparar herramientas modernas de automatización E2E. Para ello, se trabajará con dos enfoques:

- Herramientas basadas en scripts: [Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) o [Playwright](https://playwright.dev).
- Enfoque BDT utilizando [Kraken](https://thesoftwaredesignlab.github.io/Kraken/).

El resultado esperado es un conjunto de escenarios E2E implementados de forma equivalente en ambas herramientas, junto con un reporte estructurado de resultados que permita analizar su ejecución.


### Resumen de las actividades

> [!NOTE]
> Los valores de configuración (por ejemplo: URL base, puertos, credenciales de prueba) deben estar centralizados en un único punto de configuración (variables de entorno, archivos `.env`, `.yml` o configuración propia de las herramientas). No se permite la duplicación de estos valores en múltiples archivos.

1. Seleccione un mínimo de cinco (5) funcionalidades y defina al menos veinte (20) escenarios de prueba E2E. Cada escenario debe tener identificador único, estar asociado a una funcionalidad y describir claramente el comportamiento esperado mediante un resultado verificable.

2. Implemente los veinte (20) escenarios utilizando una herramienta basada en scripts ([Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) o [Playwright](https://playwright.dev)), asegurando su ejecución automatizada completa sobre la ABP. Un escenario se considera correctamente implementado cuando se ejecuta sin errores y valida el resultado esperado.

3. Implemente los mismos veinte (20) escenarios utilizando [Kraken](https://thesoftwaredesignlab.github.io/Kraken/), garantizando equivalencia funcional con la otra herramienta (mismo flujo, validaciones y resultado esperado).

4. Aplique en ambas herramientas los patrones _Page Object_ y _Given-When-Then_. El patrón _Page Object_ debe evidenciar separación entre lógica de interacción con la interfaz y lógica de prueba, y _Given-When-Then_ debe reflejar explícitamente precondiciones, acciones y validaciones.

5. Configure las herramientas en el repositorio del equipo en la organización [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/) y verifique la ejecución exitosa de todos los escenarios sobre la ABP.

6. Documente en los archivos `README.md` de cada herramienta los pasos necesarios para configurar el despliegue de la ABP (por ejemplo, uso de contenedores, puertos y variables de entorno) y ejecutar los escenarios de prueba. No es necesario incluir pasos de instalación de la ABP.


### Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

La entrega debe realizarse mediante un _release_ en el repositorio del equipo (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)), el cual debe permitir la ejecución completa de los escenarios y la validación de todos los artefactos sin requerir modificaciones manuales adicionales.

En la carpeta `./e2e` se debe incluir la implementación de los escenarios de prueba en dos herramientas: una herramienta basada en scripts (Cypress, Playwright o Puppeteer) y Kraken. En ambas implementaciones, los escenarios deben ser equivalentes, compartir el mismo identificador y validar el mismo comportamiento funcional. Todos los escenarios definidos deben estar implementados y deben poder ejecutarse directamente usando la configuración documentada.

Cada herramienta debe incluir un archivo `README.md` que permita a un tercero ejecutar las pruebas sin ambigüedad. Este archivo debe documentar claramente:

- La configuración necesaria para el despliegue de la ABP (por ejemplo: puertos, variables de entorno, uso de contenedores).
- Los comandos necesarios para ejecutar los escenarios de prueba.

Adicionalmente, debe incluir un reporte de resultados en formato `.pdf` (por ejemplo, `reporte-semana-5.pdf`), el cual consolide la información necesaria para evaluar la actividad. Este reporte debe contener:

- Información de los integrantes del equipo.
- Listado de funcionalidades, cada una con identificador, nombre y descripción.
- Una tabla con los veinte (20) escenarios de prueba, donde cada escenario incluya: Identificador del escenario, identificador de la funcionalidad asociada, tipo de prueba (E2E), descripción del escenario, resultado esperado, resultado obtenido en cada herramienta, y estado final (éxito o fallo).
- Resultados de ejecución, incluyendo evidencia verificable (logs, capturas o enlaces externos) y un resumen cuantitativo (número de escenarios exitosos y fallidos por herramienta).
- Un análisis comparativo entre la herramienta seleccionada y Kraken, incluyendo ventajas, desventajas y conclusiones basadas en los resultados obtenidos.

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

- Se implementan y ejecutan correctamente veinte (20) escenarios E2E, cada uno sin errores y validando su resultado esperado. (1 punto por escenario) **[20 puntos]**
- Cada escenario tiene identificador único y consistente con el reporte. (0.5 puntos por escenario) **[10 puntos]**
- Uso correcto del patrón _Page Object_, evidenciado en la separación entre lógica de interfaz y lógica de prueba. **[5 puntos]**
- Uso correcto del patrón _Given-When-Then_, evidenciado en la estructura de los escenarios. **[5 puntos]**


#### 2. Implementación en Kraken **[40 puntos]**

- Se implementan y ejecutan correctamente veinte (20) escenarios equivalentes a los de la otra herramienta. (1 punto por escenario) **[20 puntos]**
- Cada escenario tiene identificador único y consistente con el reporte. (0.5 puntos por escenario) **[10 puntos]**
- Uso correcto del patrón _Page Object_, evidenciado en la separación entre lógica de interfaz y lógica de prueba. **[5 puntos]**
- Uso correcto del patrón _Given-When-Then_, evidenciado en la estructura de los escenarios. **[5 puntos]**


#### 3. Reporte de resultados **[20 puntos]**

- Lista de mínimo cinco (5) funcionalidades completas. (1 punto por funcionalidad) **[5 puntos]**
- Tabla de veinte (20) escenarios completa y consistente con las implementaciones. (0.25 puntos por escenario) **[5 puntos]**
- Resultados de ejecución documentados para cada escenario en ambas herramientas, con evidencia verificable. **[5 puntos]**
- Análisis comparativo basado en los resultados obtenidos. **[5 puntos]**
