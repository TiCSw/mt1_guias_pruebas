
# Proyecto Pruebas automatizadas

## Semana 1: Necesitamos ayuda para automatizar pruebas

Hola. Bienvenido a su primera semana de trabajo en TSDC. Para iniciar el proceso de automatización de las pruebas, el primer paso natural es conocer la aplicación, no solo desde el punto de vista funcional y sus atributos de calidad esperados, si no también desde el punto de vista de la arquitectura y tecnologías usadas para construir la aplicación.  Desafortunadamente, en TSDC no tenemos dentro de nuestro flujo de trabajo la práctica de actualización continua de la documentación. Por lo tanto, usted debe adquirir conocimiento de la aplicación bajo pruebas (ABP) por su propia cuenta, es decir explorando la ABP. Hemos visto en unos blogs de expertos en el área que, en estos casos, el conocimiento de la ABP se puede adquirir mediante la (i) ejecución de pruebas exploratorias y (ii) análisis del código de la ABP para entender su arquitectura. Recuerde que durante las pruebas exploratorias es de vital importancia documentar el inventario de pruebas ejecutadas y crear modelos/diagramas que describen el conocimiento adquirido. **Este entregable debe ser realizado con su equipo de trabajo.**


Recuerde que las pruebas exploratorias también tienen como objetivo encontrar defectos en la ABP, por lo tanto, estos deben ser gestionados a través de un sistema de registro/rastreo de incidencias (a.k.a., “issue tracker” en inglés). Tal vez usted ya este familiarizado con estos sistemas. Algunos muy conocidos son JIRA, Mantis, Bugzilla y GitHub.  


### Resumen de las actividades

**NOTA: Si al hacer clic en el enlace no se abre el archivo, hágalo con las opciones del menú que aparece al usar CTRL+click derecho.**
En resumen, las actividades que debe realizar durante esta semana como parte de su proyecto de automatización son la siguientes. **Para los puntos 2 en adelante usted cuenta con un presupuesto de pruebas que incluye máximo 6 horas de dedicación hora/persona:**


1. Instalar la última versión (**5.X**) de la aplicación bajo pruebas "Ghost" en su ambiente local de pruebas. Para esto consulte el CodeLab [_"Desplegar Ghost usando Docker"_](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-docker-deployment/index.html#0) y el siguiente [link](https://ghost.org/docs/ghost-cli/#ghost-install)

2. Configurar un sistema de registro de incidencias. Puede hacer uso de cualquier sistema que se encuentre disponible de forma pública en línea o puede instalar alguno de forma local, pero debe asegurar que este se pueda acceder de forma remota. Si tiene dudas acerca de cómo reportar incidencias hemos preparado para usted una guia que muestra [¿Cómo reportar incidencias en Github y Jira?](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/i1b1t/como-reportar-incidencias-en-gh-jira-y-mantis).

3. Revisar el código fuente de la aplicación con el objetivo de identificar: lenguajes usados en la aplicación, estructura de directorios, patrones arquitectónicos y de diseño usados en la Aplicación Bajo Prueba (ABP).

4. Explorar rápidamente la aplicación con el objetivo de identificar la estrategia de navegación usada (menús, pestañas, botones, enlaces, etc.) y las funcionalidades de la ABP. Dedique no más de 10 minutos a esto.

5. Ejecutar, para cada una de las funcionalidades, varios escenarios de pruebas positivas y negativas, y registrarlos en el formato proporcionado en este enlace: [inventario de pruebas exploratorias](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/inventario-pruebas-exploratorias.xlsx). No olvide que las pruebas exploratorias (PE) deben quedar documentadas a través de un video que muestre los pasos realizados. Si se encuentra un defecto en alguna PE no olvide reportarlo en el sistema de incidencias que usted seleccionó. Se espera que como resultado de la sesión de PE se reporten mínimo 10 defectos.

6. A medida que va explorando la aplicación, no olvide documentar su conocimiento a través de los siguientes artefactos: (i) listado de funcionalidades, (ii) modelo de GUI (Graphic User Interface), y (iii) modelo de dominio.  

7. Construir un reporte de PE que detalle todo el proceso. El formato es libre.


### Detalles de la entrega
Se debe entregar un archivo.zip que incluya el reporte de resultados, el listado de funcionalidades identificadas, el inventario de pruebas, las imágenes/PDFs (con buena resolución) de los modelos/diagramas construidos, así como el enlace y el usuario para acceder al sistema de registro de incidencias.  La entrega se debe realizar a través de Coursera en las fechas indicadas y  debe incluir todos los elmentos mencionados en la siguiente sección.


### Criterios de evaluación

- Sistema para registro de incidencias en línea. En caso de ser necesario, se debe crear un usuario que pueda ser usado por los tutores del curso para acceder al sistema. En la medida de lo posible, debe utilizarse un sistema que permita el acceso público, de lo contrario el usuario y password debe ser informado como parte de la entrega. **[5 puntos]**

- Listado de funcionalidades identificadas. Se debe incluir una descripción breve en lenguaje natural de cada funcionalidad identificada. El listado debe incluir mínimo 15 funcionalidades. **[10 puntos]**

- Inventario de pruebas en el formato proporcionado. Mínimo 2 escenarios por funcionalidad descrita con toda la información del formato. Dado que usted entrego 15 funcionalidades en el item anterior, se espera que su entrega cuente con 30 videos cortos. **[20 puntos]**

- Cada prueba exploratoria debe estar documentada con un video. Los videos deben estar alojados en algún gestor de contenido como Google drive, Youtube, Vimeo, etc. Los enlaces a los videos deben estar en el inventario de pruebas **[20 puntos]**

- 10 defectos reportados en el sistema de registro de incidencias. Recuerde que las incidencias deben seguir un formato establecido. Puede visitar el tutorial [Reporte de incidencias](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/pguOv/reporte-de-incidencias) para más información. **[10 puntos]**

- Modelo de GUI del sistema (interfaces y transiciones). Puede encontrar una breve descripción en los [Tips de la semana](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/xjgTI/para-tener-en-cuenta-esta-semana) **[15 puntos]**

- Modelo de dominio (tipos de datos, entidades). Puede encontrar una breve descripción en los [Tips de la semana](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/xjgTI/para-tener-en-cuenta-esta-semana) **[10 puntos]**

- Reporte en formato PDF que incluye toda la información anterior o tiene enlaces al respectivo archivo. **[10 puntos]**




 **La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
