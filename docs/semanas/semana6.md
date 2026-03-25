# Proyecto Pruebas automatizadas

## Semana 6: Pruebas de regresión visual en *TSDC*

### Descripción de la Semana

En esta semana, el equipo de *TSDC* incorpora pruebas de regresión visual (_Visual Regression Testing - VRT_) como una extensión del trabajo previamente realizado en automatización de pruebas E2E.

El propósito de la actividad es fortalecer la capacidad del equipo para identificar cambios no deseados en la interfaz de usuario mediante comparaciones visuales entre versiones de la aplicación. Para ello, se parte del estado actual del proyecto (_versión **latest**_), sobre el cual se han desarrollado los escenarios E2E durante el curso, y se evoluciona hacia una nueva versión (_versión **rc**_), que será utilizada en las siguientes semanas.

Al finalizar la actividad, se espera que el equipo cuente con una suite de pruebas E2E completamente funcional en la versión **rc**, instrumentada con captura de evidencia visual y acompañada de un proceso automatizado de regresión visual que permita comparar ambas versiones de manera reproducible, trazable y analizable.


### Resumen de las actividades

> [!NOTE]  
> El equipo cuenta actualmente con 20 escenarios E2E únicos, implementados en dos herramientas, una basada en scripts ([Cypress](https://www.cypress.io/), [Puppeteer](https://pptr.dev/) o [Playwright](https://playwright.dev/)) y [Kraken](https://thesoftwaredesignlab.github.io/Kraken/), para un total de 40 pruebas automatizadas. En esta actividad no se crean escenarios nuevos. Se deben reutilizar y adaptar los escenarios existentes para soportar regresión visual.

1. El equipo debe modificar los 40 escenarios E2E existentes para incorporar la captura automática de _screenshots_ después de cada paso ejecutado. Esta modificación debe aplicarse de forma consistente en ambas herramientas, garantizando que cada ejecución produzca evidencia visual completa.

2. Una vez instrumentados, los escenarios deben ejecutarse sobre la versión **latest**, verificando que todas las pruebas finalicen correctamente y que los screenshots se generen sin errores. Estas capturas deben almacenarse de forma estructurada para su posterior uso en regresión visual.

3. El equipo debe migrar la aplicación a la versión **rc**, indicada por el equipo docente, y adaptar los 40 escenarios E2E para garantizar su correcta ejecución en esta nueva versión, manteniendo su validez funcional. Los cambios realizados deben mantener el uso de patrones *Page Object* y *Given-When-Then*.

4. Posteriormente, los escenarios deben ejecutarse nuevamente sobre la versión **rc**, generando un segundo conjunto de screenshots equivalente al obtenido en la versión **latest**, de manera que permita su comparación.

5. Con base en ambos conjuntos de evidencia, el equipo debe implementar un script automatizado de regresión visual que compare los screenshots de la versión **latest** con los de la versión **rc**, a nivel de cada paso dentro de cada escenario. Para ello, pueden utilizar herramientas como *ResembleJS*, *PixelMatch* o *BackstopJS*. El script debe ser ejecutable mediante configuración, sin requerir intervención manual, y debe generar un reporte en formato HTML con los resultados de la comparación.

6. Todas las diferencias visuales detectadas deben registrarse como incidencias en el sistema de _issues_ del repositorio. Cada incidencia debe corresponder a una única diferencia e incluir evidencia visual y trazabilidad al escenario y paso correspondiente.

7. El equipo debe elaborar un análisis del uso del proceso de regresión visual implementado, identificando ventajas, desventajas y limitaciones, con base en los resultados obtenidos.

8. Finalmente, se debe actualizar la estrategia de pruebas para incorporar explícitamente el uso de regresión visual,  los ajustes derivados de la retroalimentación recibida y decisiones explícitas sustentadas en los resultados obtenidos durante la ejecución.


### Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

La entrega debe realizarse mediante un _release_ en el repositorio del equipo (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)), el cual  debe permitir la reproducción completa del proceso de pruebas y regresión visual. Este release debe permitir ejecutar los escenarios E2E, generar los screenshots y reproducir el proceso de regresión visual sin depender de artefactos externos.

Dentro del repositorio, la carpeta `./e2e` debe contener los 40 escenarios E2E completamente funcionales en la versión **rc**, incluyendo los cambios realizados para la captura automática de screenshots por cada paso. La implementación debe evidenciar el uso consistente del patrón *Page Object* y la estructura *Given-When-Then*, así como incluir archivos README por herramienta con instrucciones claras de ejecución.

La carpeta `./vrt` debe contener el script de regresión visual junto con su archivo de configuración, así como un README que describa cómo ejecutar el proceso de comparación y generar el reporte HTML.

Cada herramienta debe incluir un archivo `README.md` que permita a un tercero ejecutar las pruebas sin ambigüedad. Este archivo debe documentar claramente:

- La configuración necesaria para el despliegue de la ABP (por ejemplo: puertos, variables de entorno, uso de contenedores).
- Los comandos necesarios para ejecutar los escenarios de prueba.

El equipo debe garantizar que el repositorio contenga únicamente archivos de texto plano necesarios para la ejecución del proyecto. No se deben incluir imágenes, videos, reportes generados u otros archivos binarios. En su lugar, se deben proporcionar instrucciones claras para regenerar estos artefactos.

Adicionalmente, se debe entregar un **reporte de resultados en formato PDF**, el cual debe incluir, como mínimo:
- Información de los integrantes del equipo.
- Listado de funcionalidades, cada una con identificador, nombre y descripción.
- Una tabla con los veinte (20) escenarios de prueba, donde cada escenario incluya: Identificador del escenario, identificador de la funcionalidad asociada, tipo de prueba (E2E), descripción del escenario, resultado esperado, resultado obtenido funcional obtenido, resultado de la regresión visual, y estado final (éxito o fallo).
- Resultados de ejecución, incluyendo evidencia verificable (logs, capturas o enlaces externos) y un resumen cuantitativo (número de escenarios exitosos y fallidos por herramienta).
- Análisis del proceso de regresión visual, incluyendo ventajas, desventajas y conclusiones.

Finalmente, se debe entregar la estrategia de pruebas actualizada en formato PDF.

---

### Criterios de evaluación

> [!NOTE]
> La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.


#### 0. Fatalities

- No se crea un _release_ en el repositorio dentro del plazo establecido con todos los entregables requeridos. **[-15 puntos]**
- Las pruebas E2E no siguen las instrucciones definidas en `./e2e/README.md`. **[-20 puntos por herramienta]**
- Alguna herramienta no ejecuta las pruebas sobre la configuración indicada en su `README.md`. **[-20 puntos por herramienta]**
- Los archivos `README.md` no permiten configurar la ABP ni ejecutar las pruebas. **[-20 puntos por herramienta]**
- Los valores de configuración (URL, puertos, credenciales) no están centralizados y requieren modificaciones manuales en múltiples archivos para ejecutar las pruebas. **[-20 puntos]**
- El repositorio incluye archivos no permitidos (binarios, imágenes, videos o reportes). **[-20 puntos]**
- Se incluyen archivos innecesarios en el repositorio (por ejemplo: `node_modules`, binarios, documentos distintos al `.pdf`). **[-20 puntos]**
- El reporte no se entrega en formato `.pdf`. **[-5 puntos]**


#### 1. Pruebas E2E para regresión visual **[40 puntos]**

- Se implementan y ejecutan correctamente los veinte (20) escenarios E2E en la versión **rc**, cada uno sin errores y validando su resultado esperado. Cada escenario tiene identificador único y consistente con el reporte (1 punto por escenario) **[20 puntos]**
- Los escenarios E2E incluyen captura automática de screenshots por cada paso ejecutado (0.5 puntos por escenario). **[10 puntos]**
- Uso correcto del patrón _Page Object_, evidenciado en la separación entre lógica de interfaz y lógica de prueba. **[5 puntos]**
- Uso correcto del patrón _Given-When-Then_, evidenciado en la estructura de los escenarios. **[5 puntos]**


#### 2. Pruebas de regresión visual **[30 puntos]**

- El script de regresión visual permite comparar de forma automatizada los screenshots de la versión **latest** y **rc** a nivel de escenario y paso. **[15 puntos]**
- El reporte HTML generado presenta resultados de forma clara, estructurada y comprensible, facilitando el análisis técnico de las diferencias. Parae cada paso de ejecución, se muestran los screenshots de la versión **latest**, la versión **rc**, y la comparación visual. **[15 puntos]**


#### 3. Reporte de resultados **[20 puntos]**

- Lista de mínimo cinco (5) funcionalidades completas. (1 punto por funcionalidad) **[5 puntos]**
- Tabla de veinte (20) escenarios completa y consistente con las implementaciones. (0.5 puntos por escenario) **[10 puntos]**
- Resultados de ejecución documentados para cada escenario en ambas herramientas, con evidencia verificable. **[2 puntos]**
- Análisis del proceso de regresión visual, incluyendo ventajas, desventajas y conclusiones,  basado en los resultados obtenidos. **[3 puntos]**


#### 4. Estrategia de pruebas **[10 puntos]**

- La estrategia incorpora pruebas de regresión visual indicando su propósito, alcance y relación con los objetivos del proyecto. **[5 puntos]**
- Se evidencia la incorporación de la retroalimentación de la semanas anteriores mediante cambios explícitos y trazables. **[5 puntos]**
