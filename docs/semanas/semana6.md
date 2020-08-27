
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Tenemos una nueva versión de GHOST. El código de esta versión se puede descargar de **https://github.com/TheSoftwareDesignLab/GHOST2.0**. Esta nueva versión tiene mejoras al desempeño de la aplicación, calidad interna del código y algunos ajustes en la hoja de estilos y la GUI. No hay nuevas funcionalidades implementadas, por lo tanto, este es un buen momento para probar GHOST usando Kraken y otra herramientas para pruebas E2E. Es una buena  idea  entonces, dedicar nuestro presupuesto de pruebas en crear escenarios para las funcionalidades existentes. Nuestros objetivos de pruebas son, por un lado, medir que la calidad de la nueva versión no ha disminuido y, por otro, asegurar que la GUI es exactamente igual a la de la versión original.

### Resumen de las actividades

Su equipo debe entonces:

1. Implemente nuevas pruebas para 5 funcionalidades que no se probaron la semana pasada. En esta semana deben implementar 4 escenarios para cada una de las 5 funcionalidades "nuevas" seleccionadas. Tiene libertad para implementar los escenarios de pruebas usando Kraken, otra herramienta de su preferencia, o una combinación de herramientas. En total debe tener, incluyendo  las 10 pruebas de la semana pasada, un total de 30 escenarios.

2. Ejecute los 30 escenarios en ambas versiones de GHOST (1.0  y 2.0) y reporte los defectos encontrados en la wiki del repo, detallando en cuál versión fue encontrado cada error. Al momento de reportar el defecto siga el formato [Reporte de defecto](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/reporte-defecto.docx).

3. Seleccione 10 escenarios pertenecientes a funcionalidades diferentes para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado. Es decir, para cada paso en cada escenario, para ambas versiones bajo pruebas, se deben tomar screenshots y hacer la respectiva comparación visual.

4. Construya un reporte HTML, de forma automática, que analice los resultados de cada paso y describa los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentra diferencias por favor repórtelas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

 No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.

### Detalles de la entrega
Se deben entregar en el repositorio (i) los artefactos de código para las 30 pruebas, incluyendo los cambios  a las pruebas E2E de la semana anterior para soportar pruebas de regresión visual; (ii) sripts para la ejecución de VRT; (iii) el reporte HTML de regresión visual;  (iv) las incidencias reportadas en el sistema de registro de incidencias. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

### Criterios de evaluación:

- Descripción de las 5 funcionalidades de GHOST que se incluyen en las pruebas de esta semana. **[1 punto]**

- El repositorio tiene el código de los 20 escenarios de prueba nuevos. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[45 puntos]**

- El repositorio tiene el código de los 10 escenarios de prueba en modo de regresión visual. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[20 puntos]**

- El código tiene un script para ejecución de los 10 escenarios habilitados para regresión visual. El script permite ejecutar los escenarios en las dos versiones de GHOST. Como resultado de la ejecución, se presenta un reporte HTML generado automáticamente, con los resultados de la comparación visual. La comparación visual se debe hacer al nivel de cada paso de los escenarios. **[9 puntos]**

- Se reportan por lo menos 10  diferencias  visuales en el sistema de registro de incidencia del grupo, siguiente el formato solicitado. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. **[15 puntos]**


 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
