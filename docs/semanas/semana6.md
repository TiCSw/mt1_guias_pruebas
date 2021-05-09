
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Tenemos una nueva versión de GHOST. Para esto usted debe instalar la versión 3.42.5 de Ghost. Esta versión tiene algunos cambios tanto de interfaz como de funcionamiento, sin embargo, la persona que diseño estos cambios no realizo ninguna documentación y ahora no sabemos como se veran impactadas las pruebas. Por lo tanto, necesitamos que:
 1) Modifique sus scripts de pruebas para la toma de screenshots durante su ejecución. 
 2) Ejecutar las pruebas sobre la nueva versión y medir el impacto en terminos de pruebas fallidas y exitosas. 
 3) Generar la versión de los scripts de pruebas para su ejecución en la nueva versión de GHOST 
 4) Realizar pruebas VRT sobre los screenshots tomados en ambas versiones.

### Resumen de las actividades

Su equipo debe entonces:

1. Implemente la toma de screenshots al interior de las pruebas ya existentes. Tenga en cuenta que el objetivo final de esta fase es realizar comparación de dichos screenshots por lo tanto, los scrennshots se deben tomar después de cada paso ejecutado.

2. Ejecute los 40 escenarios en la nueva versión de Ghost y reporte los defectos encontrados en la wiki del repo.

3. Seleccione 10 escenarios, preferiblemente pertenecientes a funcionalidades diferentes, para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado.

4. Construya un reporte HTML, que de forma automática, dadas dos carpetas de ejecución de pruebas, analice los resultados de cada paso y presente los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentra diferencias repórtelas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

 No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.

### Detalles de la entrega
Se deben entregar en el repositorio (i) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar pruebas de regresión visual; (ii) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar su correcta ejecución en la nueva versión de ghost; (iii) el reporte HTML de regresión visual;  (iv) las incidencias reportadas en el sistema de registro de incidencias. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

### Criterios de evaluación:

- Descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana. **[1 punto]**

- El repositorio tiene el código de los 40 escenarios de prueba de la semana pasada modificados para la toma de screenshots. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[45 puntos]**

- El repositorio tiene el código de los 40 escenarios de prueba modificados para su correcta ejecución en la nueva versión de GHOST. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[20 puntos]**

- El código del reporte HTML, que realiza automaticamente la comparación de dos carpetas de resultados de ejecuciónde pruebas. La comparación visual se debe hacer al nivel de cada paso de los escenarios. **[9 puntos]**

- Se reportan por lo menos 5 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. **[15 puntos]**


 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
