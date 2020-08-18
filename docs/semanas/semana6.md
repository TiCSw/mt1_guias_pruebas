
# Proyecto Pruebas automatizadas

## Semana  6: Pruebas de regresión visual

Estimado equipo de pruebas. Tenemos una nueva versión de GHOST. El código de esta versión se puede descargar **http:/sdasd.adsd.ads**. Esta nueva versión tiene mejoras al desempeño de la aplicación, calidad interna del código y algunos ajustes en la hoja de estilos y la GUI. No hay nuevas funcionalidades implementadas, por lo tanto, este es un buen momento para probar GHOST usando Cypress y Kraken, dado que no es necesario crear pruebas para nuevas funcionalidades. Podemos, entonces, dedicar nuestro presupuesto de pruebas en crear escenarios para las funcionalidades existentes. Nuestros objetivos de pruebas son, por un lado, medir que la calidad de la nueva versión no ha disminuido y, por otro, asegurar que la GUI es exactamente igual a la de la versión original.

### Resumen de las actividades

Su equipo debe entonces:

1. Implemente nuevas pruebas para 5 funcionalidades que no se probaron la semana pasada. Tiene libertad para implementar los escenarios de pruebas usando Cypress, Kraken, o una combinación de ambos. En total debe tener, incluyendo las pruebas de la semana pasada, un total de 30 escenarios.

2. Ejecute los 30 escenarios en ambas versiones y reporte los defectos encontrados en la wiki del repo, detallando en cuál versión fue encontrado cada error. Al momento de reportar el defecto siga el formato **FFFFFFFF**.

3. Seleccione 10 escenarios (5 en Cypress, 5 en Kraken) pertenecientes a funcionalidades diferentes para que sean ejecutados en modo de regresión visual a nivel de paso ejecutado. Es decir, para cada paso en cada escenario, para ambas versiones bajo pruebas, se deben tomar screenshots y hacer la respectiva comparación visual.

4. Construya un reporte HTML, de forma automática, que analice los resultados de cada paso y describa los pasos, los screenshots en ambas versiones y las diferencias visuales.

5. Si encuentra diferencias por favor repórtelas en el repositorio (una incidencia por diferencia encontrada).

### Hitos de la semana
Detalles de la entrega:  La fecha límite para entrega de resultados es el día XX/XX/XXX a las XX:XX hora Colombia. Se deben entregar en el repositorio (i) los artefactos de código para las 30 pruebas, incluyendo los cambios para soportar pruebas de regresión visual, (ii) el reporte de regresión visual, (iii) las incidencias reportadas. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de las incidencias debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada.

 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
