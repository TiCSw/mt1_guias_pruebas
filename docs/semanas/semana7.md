
# Proyecto Pruebas automatizadas

## Semana  7: Llegó la hora

Los resultados obtenidos la semana pasada nos convencen más de que debemos continuar con nuestro proyecto para automatizar las pruebas de GHOST. Ahora queremos avanzar en evaluar los mecanismos de validación de datos en nuestros formularios y el manejo de entradas inválidas. Por lo tanto, queremos que construyan escenarios de validación de datos haciendo uso de estrategias y herramientas para generación de datos.

### Resumen de las actividades
En particular, queremos que usen las siguientes estrategias: (i) pool de datos a-priori, (ii) pool de datos (pseudo) aleatorio dinámico y (iii) escenario aleatorio.

Para esto, usen el modelo de dominio creado cuando realizaron las pruebas exploratorias. Con base en la información del modelo, creen 300 escenarios diferentes de validación que usen las estrategias de generación de datos mencionadas anteriormente. Noten que pueden reusar escenarios existentes, siempre y cuando estos puedan ser adaptados a las estrategias de generación de datos.

Su equipo tiene libertad para construir los escenarios usando cualquiera de las herramientas para pruebas  E2E que han utilizado, y cualquiera de las herramientas existentes para generación de datos. No olviden generar un documento que describa las estrategias de generación de datos usadas para la automatización de los 300 escenarios


### Detalles de la entrega:
Se deben entregar en el repositorio (i) los artefactos de código que generan los 300 escenarios, (iii) la descripción de cómo los 300 escenarios son generados, en una entrada en la wiki, y (iii) reporte (en el sistema de registro) de las incidencias encontradas. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias y la entrada en la wiki deben ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

## Criterios de evaluación:

- Código de los escenarios de prueba que usan las estrategias de generación y de datos y permiten generar 300 escenarios diferentes. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. **[60 puntos]**

- Descripción de las estrategias usadas y cómo se integran estas estrategias en los escenarios de pruebas. Se debe evidenciar en la descripción que  se usan las tres estrategias solicitadas: pool de datos a-priori, pool de datos (pseudo) aleatorio dinámico y escenario aleatorio. **[20 puntos]**

- Se reportan, en el sistema de registro de incidencias, por lo menos 10 defectos por manejo de datos inválidos. **[20 puntos]**


**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
