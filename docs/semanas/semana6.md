
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Tenemos una nueva versión de GHOST. Usted junto con su grupo deben instalar una versión diferente a la que está usando con el fin de ayudarnos a garantizar la calidad de la aplicación a lo largo del tiempo.

Para esto existen dos casos:
1. Si junto con su grupo estan haciendo uso de una versión de ghost mayor a la 4.0.0, deberan instalar la versión 3.42.

2. Si junto con su grupo estan haciendo uso de una versión de ghost menor a la 4.0.0, deberan instalar la versión 5.82.

Estas versiones tienen algunos cambios tanto de interfaz como de funcionamiento, sin embargo, la persona que diseño estos cambios no realizo ninguna documentación y ahora no sabemos como se veran impactadas las pruebas. Por lo tanto, necesitamos que:  
 1. Modifique sus scripts de pruebas para la toma de screenshots durante su ejecución.
 2. Ejecute las pruebas sobre la nueva versión y realice mediciones sobre el impacto en terminos de pruebas fallidas y exitosas.
 3. Implemente la versión de scripts de pruebas para la ejecución de la nueva versión de GHOST
 4. Realice pruebas VRT sobre los screenshots tomados en ambas versiones utilizando las siguientes herramientas `ResembleJS` y `BackstopJS`.

## Nota: Esta entrega se debe realizar en grupos de 4 personas.  

## Las dos versiones deben estar desplegadas.

### Resumen de las actividades

Su equipo debe entonces:

1. Implementar la toma de screenshots al interior de las pruebas ya existentes. Tengan en cuenta que el objetivo final de esta fase es realizar comparación de dichos screenshots por lo tanto, los scrennshots se deben tomar después de cada paso ejecutado.

2. Ejecutar los 40 escenarios modificados en la versión de Ghost actual.

3. Seleccionar 10 escenarios y ejecutarlos en la nueva versión instalada. Preferiblemente, los escenarios deben pertenecer a funcionalidades diferentes, para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado.

4. Construir un reporte HTML mediante un script en el lenguaje de su preferencia. Este script, dadas dos carpetas de ejecución de pruebas, debe analizar de forma automática los resultados de cada paso y presentar un reporte con: los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentran diferencias visuales, estas deben ser reportadas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

6. Redactar un resumen de los pros y los contras de cada herramienta. Este resumen lo debe ser visible como una página en la wiki del repositorio.



### Detalles de la entrega
Se deben entregar en el repositorio los siguientes elementos

1. Un Release con (i) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar pruebas de regresión visual, (ii) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar su correcta ejecución en la nueva versión de ghost, y (iii) el reporte HTML de regresión visual. Lo anterior debe estar completamente documentado, debe contar con por lo menos un archivo README donde se detallen las versiones, al igual que los pasos de instalación y ejecución de los artefactos y el script del reporte.

2. Las incidencias reportadas en el sistema de registro de incidencias. En caso de que el sistema utilizado esté por fuera del repositorio, se debe incluir el link dentro del README.

3. Una wiki con (i) el resumen de los pros y los contras de cada herramienta, (ii) descripción de las funcionalidades de la ABP que se incluyen esta semana.

4. El link al video explicando el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de VRT.

Solo se calificará el último Release hecho antes de la fecha/hora de entrega. Del mismo modo, la hora de actualización de la entrada en la wiki y de las incidencias debe ser antes de la fecha/hora de entrega. El readme del repo debe tener los nombres y correos uniandes de los estudiantes.




### Criterios de evaluación:

- En la wiki se encuentra la descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana. **[1 punto]**

- El Release del repositorio tiene el código de los 40 escenarios de prueba de la semana pasada modificados para la toma de screenshots. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[45 puntos]**

- El Release del repositorio tiene el código de los 10 escenarios de prueba modificados para su correcta ejecución en la nueva versión de GHOST. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[20 puntos]**

- El Release del repositorio tiene el código del reporte HTML, que realiza automáticamente la comparación de dos carpetas de resultados de ejecución de pruebas. La comparación visual se debe hacer al nivel de cada paso de los escenarios. **[9 puntos]**

- Se reportan por lo menos 5 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. **[15 puntos]**

- Link a video de explicación de procedimiento realizado en la semana para habilitar la toma de capturas de pantalla, las decisiones tomadas respecto a la construcción del reporte y breve explicación de los resultados obtenidos en la semana. **[10 puntos]**

 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
