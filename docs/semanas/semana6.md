
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Uno de nuestros más antiguos clientes nos ha pedido que le ayudemos agregando unas funcionalidades especificas para la versión de la aplicación que el tiene instalada. Desafortunadamente, él actualmente está usando una versión del año pasado y los desarrolladores que planeamos incluir en ese proceso de mejora no están familiarizados con esa versión. Afortunadamente, si están familizarizados con las pruebas E2E que ustedes desarrollaron, por lo tanto, necesitamos que nos ayuden verificando si las pruebas que crearon siguen funcionando para dicha versión de la herramienta.

Nuestros objetivos es poder ver la funcionalidades que no están disponibles en esa versión antigua, y poder ver los cambios de GUI que la app ha pasado. Por lo tanto, para empezar, debe instalar la versión 3.3.0 de la aplicación. Para esto, debe en una carpeta distinta a la que contiene actualmente su versión de ghost, ejecutar el siguiente comando:

``` ghost install 3.3.0 --local```

Esto instalara y desplegara la versión de la aplicación que el cliente esta usando.

### Resumen de las actividades

Su equipo debe entonces:

1. Implemente nuevas pruebas para 5 funcionalidades que no se probaron la semana pasada y que tienen en común ambas versiones del software. En esta semana deben implementar 4 escenarios para cada una de las 5 funcionalidades "nuevas" seleccionadas. Tiene libertad para implementar los escenarios de pruebas usando Kraken, otra herramienta de su preferencia, o una combinación de herramientas. En total debe tener, incluyendo  las 10 pruebas de la semana pasada, un total de 30 escenarios.

2. Ejecute los 30 escenarios en ambas versiones de GHOST y reporte los defectos encontrados en la wiki del repo, detallando en cuál versión fue encontrado cada error.

3. Seleccione 10 escenarios pertenecientes a funcionalidades diferentes para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado. Es decir, para cada paso en cada escenario, para ambas versiones bajo pruebas, se deben tomar screenshots y hacer la respectiva comparación visual.

4. Construya un reporte HTML, de forma automática, que analice los resultados de cada paso y describa los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentra diferencias por favor repórtelas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

 No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.

### Detalles de la entrega
Se deben entregar en el repositorio (i) los artefactos de código para las 30 pruebas, incluyendo los cambios a las pruebas E2E de la semana anterior para soportar pruebas de regresión visual; (ii) scripts para la ejecución de VRT; (iii) el reporte HTML de regresión visual;  (iv) las incidencias reportadas en el sistema de registro de incidencias. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

### Criterios de evaluación:

- Descripción de las 5 funcionalidades de GHOST que se incluyen en las pruebas de esta semana. **[1 punto]**

- El repositorio tiene el código de los 20 escenarios de prueba nuevos. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[45 puntos]**

- El repositorio tiene el código de los 10 escenarios de prueba en modo de regresión visual. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[20 puntos]**

- El código tiene un script para ejecución de los 10 escenarios habilitados para regresión visual. El script permite ejecutar los escenarios en las dos versiones de GHOST. Como resultado de la ejecución, se presenta un reporte HTML generado automáticamente, con los resultados de la comparación visual. La comparación visual se debe hacer al nivel de cada paso de los escenarios. **[9 puntos]**

- Se reportan por lo menos 10 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. **[15 puntos]**


 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
