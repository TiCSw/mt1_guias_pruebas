# Proyecto Pruebas automatizadas

## Semana 1: Necesitamos ayuda para automatizar pruebas

Hola. Bienvenido a su primera semana de trabajo en *TSDC*. Para iniciar el proceso de automatización de las pruebas, el primer paso natural es conocer la aplicación, no solo desde el punto de vista funcional y sus atributos de calidad esperados, sino también desde el punto de vista de la arquitectura y tecnologías usadas para construir la aplicación.

Desafortunadamente, en *TSDC* no tenemos dentro de nuestro flujo de trabajo la práctica de actualización continua de la documentación. Por lo tanto, usted debe adquirir conocimiento de la aplicación bajo pruebas (ABP) por su propia cuenta, es decir, explorando la ABP. Hemos visto en algunos blogs de expertos en el área que, en estos casos, el conocimiento se puede adquirir mediante:

- la ejecución de pruebas exploratorias
- el análisis del código de la ABP para entender su arquitectura

Recuerde que durante las pruebas exploratorias es de vital importancia documentar el inventario de pruebas ejecutadas y crear modelos/diagramas que describan el conocimiento adquirido. **Este entregable debe ser realizado con su equipo de trabajo.** Adicionalmente, las pruebas exploratorias también tienen como objetivo encontrar defectos en la ABP. Para ello, el equipo docente proporcionará un **repositorio en GitHub** donde usted deberá registrar las incidencias encontradas.


## Resumen de las actividades

1. Instalar la aplicación bajo prueba (ABP) en su ambiente local y verificar su correcto funcionamiento.

2. Revisar el código fuente de la aplicación con el objetivo de identificar los lenguajes usados, la estructura de directorios, y los patrones arquitectónicos y de diseño presentes en la ABP.

3. Explorar rápidamente la aplicación (no más de 10 minutos) para identificar la estrategia de navegación (menús, pestañas, botones, enlaces, etc.) y reconocer las principales funcionalidades del sistema.

4. Ejecutar y documentar pruebas exploratorias sobre las funcionalidades identificadas. Como resultado, el equipo debe construir un inventario con mínimo 30 pruebas exploratorias (2 por cada funcionalidad), utilizando el formato proporcionado en el siguiente enlace: [Inventario de pruebas exploratorias](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/inventario-pruebas-exploratorias.xlsx). Cada prueba debe incluir obligatoriamente: identificador, fecha, autor, ID de la funcionalidad, tipo de requerimiento (funcional o no funcional), tipo de prueba (positiva, negativa o mixta), título y una descripción corta.

5. Para cada prueba exploratoria registrada, se debe incluir un video que evidencie su ejecución. El video debe estar alojado en una plataforma externa (por ejemplo, OneDrive Uniandes, o  YouTube) y el enlace debe estar incluido en el inventario de pruebas.

6. Reportar los defectos encontrados durante la ejecución de las pruebas exploratorias en el repositorio de GitHub proporcionado. Cada defecto debe seguir los lineamientos establecidos y puede consultar el siguiente recurso de apoyo: [Reporte de incidencias](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/pguOv/reporte-de-incidencias). Cada defecto debe estar asociado explícitamente a la prueba exploratoria que lo detectó mediante su identificador. Se espera un mínimo de 10 defectos reportados.

7. A medida que se explora la aplicación, el equipo debe documentar el conocimiento adquirido mediante un listado de funcionalidades, un modelo de GUI (interfaces y transiciones) y un modelo de dominio (entidades y relaciones). Puede apoyarse en los siguientes recursos:  
[Tips de la semana](https://www.coursera.org/learn/pruebas-automatizadas-software/supplement/xjgTI/para-tener-en-cuenta-esta-semana)

> [!NOTE]  
> Para los puntos 2 en adelante usted cuenta con un presupuesto de pruebas que incluye máximo 6 horas de dedicación hora/persona. 
> Si al hacer clic en un enlace no se abre el archivo, utilice las opciones del menú que aparece al usar CTRL+click derecho.


## Detalles de la entrega

La entrega se debe realizar a través de Coursera en las fechas indicadas. El objetivo es consolidar la evidencia del proceso de exploración, pruebas y modelado realizado por el equipo durante la semana.

Se deben entregar los siguientes archivos:

- **1 PDF** con el listado de funcionalidades identificadas.  
- **1 PDF** con el inventario de pruebas exploratorias (incluyendo los enlaces a los videos de cada prueba).  
- **1 archivo (PDF o imagen)** con el modelo de GUI.  
- **1 archivo (PDF o imagen)** con el modelo de dominio.  

Adicionalmente, el inventario de pruebas debe permitir identificar claramente la relación entre pruebas exploratorias y los defectos reportados en el repositorio de GitHub.

---

## Criterios de evaluación

> [!NOTE]
> La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y el cumplimiento exacto de los criterios definidos.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.

### 1. Listado de funcionalidades [15 puntos]

- Se evaluarán máximo 15 funcionalidades. Cada funcionalidad equivale a 1 punto y debe incluir: una descripción clara en lenguaje natural, ser distinguible de otras funcionalidades, y corresponder a una capacidad observable de la aplicación. **[15 puntos]**

### 2. Inventario de pruebas exploratorias [65 puntos]

- Registro de pruebas (30 pruebas): Se evaluarán 30 pruebas exploratorias (2 por funcionalidad). Cada prueba debe incluir todos los campos requeridos (identificador, fecha, autor, ID de la funcionalidad, tipo de requerimiento, tipo de prueba, título y descripción). Cada prueba correctamente registrada equivale a 1 punto. **[30 puntos]**

- Evidencia en video: Cada una de las 30 pruebas debe contar con un enlace funcional a un video que evidencie su ejecución. Cada video correctamente enlazado equivale a 0.33 puntos. **[10 puntos]**

- Defectos e incidencias: Se evaluarán hasta 10 defectos. Cada defecto equivale a 1 punto y debe: estar correctamente reportado en el repositorio de GitHub, seguir los lineamientos establecidos, y estar asociado explícitamente a una prueba exploratoria mediante su identificador. **[10 puntos]**

- Calidad de la ejecución de las pruebas: Cada prueba exploratoria debe estar correctamente ejecutada en un ambiente de pruebas funcional. Si una prueba falla debido a configuraciones incompletas, errores del entorno o mala preparación del escenario (y no por un defecto real de la aplicación), se considerará incorrecta. Se evaluará que cada prueba esté correctamente orientada a validar la funcionalidad correspondiente. **[15 puntos]**

### 3. Modelos del sistema [20 puntos]

- Modelo de GUI: Debe representar correctamente las interfaces principales del sistema y sus transiciones. Se evaluará completitud y coherencia. **[10 puntos]**

- Modelo de dominio: Debe identificar correctamente las entidades principales del sistema y sus relaciones. Se evaluará completitud y coherencia. **[10 puntos]**
