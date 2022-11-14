
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Tenemos una nueva versión de GHOST. Usted junto con su grupo deben instalar una versión diferente a la que está usando con el fin de ayudarnos a garantizar la calidad de la aplicación a lo largo del tiempo.

Para esto existen dos casos:
1. Si junto con su grupo estan haciendo uso de una versión de ghost mayor a la 4.0.0, deberan instalar la versión 3.42. Esto se puede realizar mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

//Esto desplegará en la siguiente dirección la versión de Ghost Admin:

//Ghost 3.42
http://localhost:3001/ghost
```

2. Si junto con su grupo estan haciendo uso de una versión de ghost menor a la 4.0.0, deberan instalar la versión 4.44. Esto se puede realizar mediante los comandos de docker:

```
docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0

//Esto desplegará en la siguiente dirección la versión de Ghost Admin:

//Ghost 4.44.0
http://localhost:3002/ghost
```

EstaS versiones tiene algunos cambios tanto de interfaz como de funcionamiento, sin embargo, la persona que diseño estos cambios no realizo ninguna documentación y ahora no sabemos como se veran impactadas las pruebas. Por lo tanto, necesitamos que:  
 1. Modifique sus scripts de pruebas para la toma de screenshots durante su ejecución.
 2. Ejecutar las pruebas sobre la nueva versión y medir el impacto en terminos de pruebas fallidas y exitosas.
 3. Generar la versión de los scripts de pruebas para su ejecución en la nueva versión de GHOST
 4. Realizar pruebas VRT sobre los screenshots tomados en ambas versiones usando las herramientas ResembleJS  y BackstopJS.

 ## Nota: Esta entrega se debe realizar en grupos de 4 personas.

### Resumen de las actividades

Su equipo debe entonces:

1. Implementar la toma de screenshots al interior de las pruebas ya existentes. Tengan en cuenta que el objetivo final de esta fase es realizar comparación de dichos screenshots por lo tanto, los scrennshots se deben tomar después de cada paso ejecutado.

2. Ejecutar los 40 escenarios modificados en la versión de Ghost actual.

3. Seleccionar 10 escenarios y ejecutelos en la nueva versión instalada preferiblemente pertenecientes a funcionalidades diferentes, para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado.

4. Construir un reporte HTML mediante un script en el lenguaje de su preferencia, que de forma automática, dadas dos carpetas de ejecución de pruebas, analice los resultados de cada paso y presente: los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentran diferencias visuales,repórtenlas en el sistema de registro de incidencias (una incidencia por diferencia encontrada).

 No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.

### Detalles de la entrega
Se deben entregar en el repositorio (i) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar pruebas de regresión visual; (ii) los artefactos de código para los 40 escenarios de pruebas implementando los cambios para soportar su correcta ejecución en la nueva versión de ghost; (iii) el reporte HTML de regresión visual;  (iv) las incidencias reportadas en el sistema de registro de incidencias; (v) link a un video explicando el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de VRT. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

### Criterios de evaluación:

- Descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana. **[1 punto]**

- El repositorio tiene el código de los 40 escenarios de prueba de la semana pasada modificados para la toma de screenshots. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[45 puntos]**

- El repositorio tiene el código de los 10 escenarios de prueba modificados para su correcta ejecución en la nueva versión de GHOST. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos.  **[20 puntos]**

- El código del reporte HTML, que realiza automaticamente la comparación de dos carpetas de resultados de ejecución de pruebas. La comparación visual se debe hacer al nivel de cada paso de los escenarios. **[9 puntos]**

- Se reportan por lo menos 5 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. **[10 puntos]**

- En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. **[15 puntos]**

- Link a video de explicación de procedimiento realizado en la semana para habilitar la toma de pantallazos, las decisiones tomadas respecto a la construcción del reporte y breve explicación de los resultados obtenidos en la semana. **[10 puntos]**

 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
