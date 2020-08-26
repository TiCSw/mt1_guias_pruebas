
# Proyecto Pruebas automatizadas

## Semana  5: Pruebas E2E

Ya tenemos más claro cómo funcionan las pruebas de reconocimiento. Nos parece que son una herramienta súper útil para detectar “crashes”, excepciones y errores inesperados sin intervención humana. Entendemos que este tipo de pruebas requieren la disponibilidad de máquinas para su ejecución por varias horas y que se espera que se usen como complemento a pruebas funcionales. Sin embargo, consideramos que esto no es suficiente para evaluar la calidad de GHOST.  

Por ejemplo, para GHOST hacemos pruebas manuales funcionales con un enfoque de E2E, es decir de “extremo a extremo”. Sin embargo, re-ejecutar los escenarios de pruebas de forma manual puede llevar a errores en la ejecución de la prueba y, lamentablemente, nuestros ingenieros suelen no documentarlos. Por lo tanto, como parte de su labor queremos que automatice las pruebas E2E de GHOST. Con base en una revisión de blogs hemos encontrado que [Cypress](https://www.cypress.io) es una herramienta ampliamente usada para hacer pruebas E2E basadas en scripts. Por otro lado, nuestros amigos de The Software Design Lab nos recomendaron usar su herramienta [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/) que permite hacer pruebas E2E, pero usando escenarios escritos en un estilo BDT (es decir, Behavior Driven Testing). También nos hablaron de [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev).

### Resumen de las actividades
Creemos entonces que una buena forma de empezar, es implementar algunos de los escenarios de pruebas exploratorias que crearon para la semana 1, usando Kraken y algunas de las otras tres herramienta ([Cypress](https://www.cypress.io), [Puppeteer](https://pptr.dev) y [Playwright](https://playwright.dev)). En particular, les solicitamos que seleccionen 5 funcionalidades e implementen, tanto con Kraken como con la otra herramienta de su elección, por lo menos 10 de los escenarios probados. Para tal efecto creen un repositorio público en GitHub donde van a almacenar los artefactos generados de las pruebas.  Los escenarios de pruebas deben ser ejecutados en la app, con el fin de asegurar que están bien construidos. En el readme del repositorio detallen las funcionalidades y escenarios probados. No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.



### Detalles de la entrega
Se debe entregar el enlace al repositorio que debe incluir (i) código de los 10 escenarios de prueba hechos tanto con Cypress como con Kraken, (ii) listado de funcionalidades y escenarios seleccionados para pruebas, (iii) resumen de pros y contras (de las herramientas)en la wiki del repo. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de la entrada en la wiki debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada. El readme del repo debe tener los nombres y correos uniandes de los estudiantes.


### Criterios de evaluación

- El readme del repositorio detalla las 5 funcionalidades bajo pruebas. **[2 puntos]**

- El readme del repositorio describe los 10 escenarios de Pruebas. **[3 puntos]**


- En la wiki del repo se decriben los pros y contras de las dos herramientas utilizadas.  **[15 puntos]**


- El repositorio tiene el código de los 10 escenarios de pruebas. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[40 puntos]**



- El repositorio tiene el código para ejecutar los 10 escenarios creados con la segunda herramienta seleccionada. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[40 puntos]**




 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
