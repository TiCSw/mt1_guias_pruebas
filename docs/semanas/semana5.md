
# Proyecto Pruebas automatizadas

## Semana  5: Pruebas E2E

Ya tenemos más claro cómo funcionan las pruebas de reconocimiento. Nos parece que son una herramienta súper útil para detectar “crashes”, excepciones y errores inesperados sin intervención humana. Entendemos que este tipo de pruebas requieren la disponibilidad de máquinas para su ejecución por varias horas y que se espera que se usen como complemento a pruebas funcionales. Sin embargo, consideramos que esto no es suficiente para evaluar la calidad de GHOST.  

Por ejemplo, para GHOST hacemos pruebas manuales funcionales con un enfoque de E2E, es decir de “extremo a extremo”. Sin embargo, re-ejecutar los escenarios de pruebas de forma manual puede llevar a errores en la ejecución de la prueba y, lamentablemente, nuestros ingenieros suelen no documentarlos. Por lo tanto, como parte de su labor queremos que automatice las pruebas E2E de GHOST. Con base en una revisión de blogs hemos encontrado que Cypress es una herramienta ampliamente usada para hacer pruebas E2E basadas en scripts. Por otro lado, nuestros amigos de The Software Design Lab nos recomendaron usar su herramienta Kraken que permite hacer pruebas E2E, pero usando escenarios escritos en un estilo BDT (es decir, Behavior Driven Testing).

### Resumen de las actividades
Creemos entonces que una buena forma de empezar es implementar, usando Cypress y Kraken, algunos de los escenarios de pruebas exploratorias que crearon para la semana 1. En particular, les solicitamos que seleccionen 5 funcionalidades de las exploradas antes e implementen, tanto con Kraken como con Cypress, por lo menos 10 de los escenarios probados. Para tal efecto creen un repositorio público en GitHub donde van a almacenar los artefactos generados de las pruebas.  Los escenarios de pruebas deben ser ejecutados en la app, con el fin de asegurar que están bien construidos. En el readme del repositorio detallen las funcionalidades y escenarios probados. No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.



### Hitos de la semana
Detalles de la entrega:  La fecha límite para entrega de resultados es el día XX/XX/XXX a las XX:XX hora Colombia. Se debe entregar el enlace al repositorio que debe incluir (i) código de los 10 escenarios de prueba hechos tanto con Cypress como con Kraken, (ii) listado de funcionalidades y escenarios seleccionados para pruebas, (iii) resumen de pros y contras en la wiki del repo. Solo se calificará el último commit hecho antes de la fecha/hora de entrega. La hora de actualización de la entrada en la wiki debe ser antes de la fecha/hora de entrega; de lo contrario esta parte no será calificada. El readme del repo debe tener los nombres y correos uniandes de los estudiantes.

 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
