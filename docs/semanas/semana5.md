
# Proyecto Pruebas automatizadas

## Semana  5: Pruebas E2E



Ya tenemos más claro cómo funcionan las pruebas de reconocimiento. Nos parece que son una herramienta súper útil para detectar “crashes”, excepciones y errores inesperados sin intervención humana. Entendemos que este tipo de pruebas requieren la disponibilidad de máquinas para su ejecución por varias horas y que se espera que se usen como complemento a pruebas funcionales. Sin embargo, consideramos que esto no es suficiente para evaluar la calidad de GHOST.  

Por ejemplo, para GHOST hacemos pruebas manuales funcionales con un enfoque de E2E, es decir de “extremo a extremo”. Sin embargo, re-ejecutar los escenarios de pruebas de forma manual puede llevar a errores en la ejecución de la prueba y, lamentablemente, nuestros ingenieros suelen no documentarlos. Por lo tanto, como parte de su labor queremos que automatice las pruebas E2E de GHOST. Con base en una revisión de blogs hemos encontrado que [Cypress](https://www.cypress.io) es una herramienta ampliamente usada para hacer pruebas E2E basadas en scripts. Por otro lado, nuestros amigos de The Software Design Lab nos recomendaron usar su herramienta [Kraken](https://thesoftwaredesignlab.github.io/Kraken/) que permite hacer pruebas E2E, pero usando escenarios escritos en un estilo BDT (es decir, Behavior Driven Testing). También nos hablaron de [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev).

### Resumen de las actividades

Creemos entonces que una buena forma de empezar sería implementando algunos de los escenarios de pruebas exploratorias que crearon para la primera semana. Para ello, les  solicitamos que seleccionen mínimo 5 funcionalidades e implementen por lo menos 20 de los escenarios probados utilizando Kraken y algunas de las otras tres herramientas ([Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev)). En otras palabras, los 20 escenarios de prueba deben ser implementados identicamente tanto con Kraken como con la otra herramienta de su elección. Los escenario deben utilizar **todos** los patrones vistos, independientemente de la herramieta.

Para tal efecto, creen un repositorio público en GitHub donde van a almacenar los artefactos generados de las pruebas. Los escenarios deben ser ejecutados en la ABP, utilizando la versión definida para el proyecto, con el fin de asegurar que las pruebas estén bien construidas. En la Wiki del repositorio detallen las funcionalidades seleccionadas y los escenarios de prueba (recuerden utilizar identificadores únicos para cada escenario). Adicionalmente, la Wiki debe tener un resumen de los pros y los contras de cada herramienta.

### Detalles de la entrega
Al finalizar la implementación de pruebas E2E en la ABP, se debe entregar el enlace al repositorio público en GitHub. Este debe contener:

1. Un **Release** con el código de los 20 escenarios de prueba hechos con Kraken y alguna de las otras herramienta de su elección.
    - Las pruebas en ambas herramientas deben contar con el identificador del escenario correspondiente.
    - Deben utilizar todos los patrones vistos.
2. Un README dentro del release con:
    - El nombre y correos uniandes de los estudiantes que participaron en la entrega.
    - El paso a paso para la instalación y ejecución de las pruebas en Kraken.
    - El paso a paso para la instalación y ejecución de las pruebas en la otra herramienta de su elección.
3. Una Wiki con la siguiente información:
    - Listado de funcionalidades: Cada funcionalidad debe tener, como mínimo, una descripción.
    - Escenarios seleccionados para pruebas: Cada escenario debe tener, por lo menos, un identificador único, una descripción, y la funcionalidad asociada.
    - Resumen de pros y contras de cada herramienta.

**Importante**: Únicamente se calificará el último Release creado antes de la fecha/hora de entrega. Del mismo modo, la hora de actualización de la entrada en la wiki debe ser antes de la fecha/hora de entrega.

---

### Criterios de evaluación

#### Wiki

- En la wiki del repositorio se detallan las 5 funcionalidades bajo pruebas con la información solicitada. **[2 puntos]**  NOTA: si quieren definir más funcionalidades lo pueden hacer. El mínimo de funcionalides es 5.

- En la wiki del repositorio se describen los 20 escenarios de pruebas con la información solicitada. **[3 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Estos deben ser coherentes con las características de las herramientas. **[15 puntos]**

#### Pruebas con la primera herramienta (Cypress/Puppeteer/Playwright):

- El Release del repositorio cuenta con el código para ejecutar los 20 escenarios de prueba utilizando la primera herramienta seleccionada. **[3 puntos]**

- El README del release detalla las instrucciones para ejecutar los escenarios de prueba. **Estas instrucciones deben llevar el paso a paso para la su instalación y ejecución. De lo contrario, no se darán los puntos en el siguiente criterio**. **[2 puntos]**

- Los escenarios de prueba se ejecutan exitosamente. Cada prueba debe contar con el identificador asociado al escenario de prueba **[20 puntos]**

- Los escenarios de prueba construidos con la primera herramienta deben usar los dos patrones vistos.  **[15 puntos]**

#### Pruebas con Kraken:

- El Release del repositorio cuenta con el código para ejecutar los 20 escenarios de prueba creados con Kraken. **[3 puntos]**

- El README del release detalla las instrucciones para ejecutar los escenarios de prueba. **Estas instrucciones deben llevar el paso a paso para la su instalación y ejecución. De lo contrario, no se darán los puntos en el siguiente criterio**. **[2 puntos]**

- Los escenarios de prueba se ejecutan exitosamente. Cada prueba debe contar con el identificador asociado al escenario de prueba **[20 puntos]**

- Los escenarios de prueba construidos con Kraken deben usar los dos patrones vistos.  **[15 puntos]**

 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
