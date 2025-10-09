
# Proyecto Pruebas automatizadas

## Semana 4: ¿Monkeys? ¿Rippers?

Con nuestro CTO ya estamos revisando su estrategia de pruebas propuesta. Gracias de nuevo por toda su ayuda. Nuestros asesores de The Software Design Lab nos han sugerido que una buena forma de iniciar con automatización de pruebas es hacer pruebas de reconocimiento, dado que estas no requieren intervención humana.  

### Resumen de las actividades


No entendimos muy bien las diferencias entre los _Monkeys_ y los _Rippers_, por lo tanto, nos gustaría que ejecuten pruebas de reconocimiento en la _Aplicación Bajo Pruebas_ (_ABP_) con esos dos tipos de herramientas. Del mismo modo, a partir de su experiencia, nos gustaría que actualice la estrategia que entregaron la semana pasada, y que incluyan un análisis de los pros y contras de estas herramientas. La entrega se debe realizar a través de Coursera en las fechas indicadas. Nuestros amigos de The Software Design Lab nos sugieren usar las herramientas [monkey-cypress](https://github.com/Uniandes-MISW4103/proyecto-monkey-base) y [RIPuppet](https://github.com/Uniandes-MISW4103/proyecto-ripper-base) (ver detalles de la entrega).

### Detalles de la entrega

La entrega debe ser realizada utilizando el repositorio de trabajo dado por el equipo docente (en caso de no poder acceder a la organización del curso, [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), contacten al equipo docente). Su equipo debe crear un _release_ en el repositorio (ver [cómo crear un release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)) con los siguientes elementos:

- La carpeta `./reconocimiento` con el código fuente _Monkeys_ y los _Rippers_ (leer el archivo `./reconocimiento/README.md` de la carpeta para entender cómo configurar las herramientas).
    - Las pruebas realizadas con estas herramientas deben ser reproducibles por el equipo docente, es decir, deben utilizar semillas (seeds) de ejecución.
    - En caso de modificar el código fuente, los cambios deben estar incluidos en el _release_, y los README de `./reconocimiento/misw-4103-monkey` y `./reconocimiento/misw-4103-ripper` deben ser actualizados de ser necesario.

- El archivo `./actividades/actividad-semana-4` debe tener tener como mínimo:
    - Información de los integrantes que participaron en la actividad.
    - Resultados de ejecución de cada una de las herramientas. Debe incluir, como mínimo, las semillas (seeds) de ejecución,enlaces a evidencias (videos, reportes, etc.), y enlaces a las nuevas incidencias identificadas.
    - El resumen de los pros y los contras de cada una de las herramientas para pruebas de reconocimiento.
    

Por otra parte, en la actividad de Coursera deberán enviar:
- La estrategia de pruebas _(*)_, la cual debe incluir el uso de pruebas de reconocimiento y las mejoras a partir de la retroalimentación recibida de la estrategia anterior.
- Enlace al video _(*)_, el cual debe incluir los ajustes a la estrategia de pruebas, al igual que el análisis de los pros y contras de las herramientas usadas.

> _(*)_ Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (Google drive, OneDrive, Youtube, etc), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.


### Criterios de evaluación

0. _"Fatalities"_.

    _Nota: el incumplimiento de cualquiera de los aspectos mencionados a continuación puede incurrir en una penalización sobre la calificación de la actividad_.
    
    - El repositorio del equipo (org [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/)) **NO** cuenta con un release, creado dentro del plazo establecido, en donde se incluyen todos los entregables de la actividad. **[-15 puntos]**
    - Las pruebas de reconocimiento con _Monkey_ **NO** no utiliza el código fuente indicado en el archivo `./reconocimiento/README.md`. **[-30 puntos]**
    - Las pruebas de reconocimiento con _Ripper_ **NO** no utiliza el código fuente indicado en el archivo `./reconocimiento/README.md`. **[-30 puntos]**
    - Uno o más documentos realizados por el equipo se encuentran en formatos distintos a `.pdf`. **[-10 puntos]**
    - El enlace al video **NO** es público, o **NO** permite el acceso a cuentas de la universidad. [-10 puntos]
  
1. Pruebas de Reconocimiento con _Monkey_. **[30 puntos]**
    - El código entregado (`./reconocimiento/misw-4103-monkey`) permite la ejecución y reproducción de los resultados obtenidos. El README de la herramienta es actualizado para indicar los cambios realizados por el equipo, y se explican los pasos para la ejecución de la herramienta. **[15 puntos]**
    - El reporte de resultados de ejecución se encuentran en el repositorio del equipo (`./actividades/actividad-semana-4`), e incluyen las semillas (seeds) de ejecución, enlaces a las incidencias, y enlaces a evidencias. **[10 puntos]**
    - El resumen de los pros y los contras se encuentran en el repositorio del equipo (`./actividades/actividad-semana-4`), y es coherente con la herramienta. **[5 puntos]**
  
2. Pruebas de Reconocimiento con _Ripper_. **[30 puntos]**
    - El código entregado (`./reconocimiento/misw-4103-ripper`) permite la ejecución y reproducción de los resultados obtenidos. El README de la herramienta es actualizado para indicar los cambios realizados por el equipo, y se explican los pasos para la ejecución de la herramienta. **[15 puntos]**
    - Los resultados de ejecución se encuentran en el repositorio del equipo (`./actividades/actividad-semana-4`), e incluyen las semillas (seeds) de ejecución, enlaces a las incidencias, y enlaces a evidencias. **[10 puntos]**
    - El resumen de los pros y los contras se encuentran en el repositorio del equipo (`./actividades/actividad-semana-4`), y es coherente con la herramienta. **[5 puntos]**

3. Estrategia de Pruebas. **[30 puntos]**
    - Se actualiza la estrategia de pruebas con la retroalimentación de la entrega anterior. **[15 puntos]**
    - La estrategia de pruebas incluye el uso de pruebas de reconocimiento. La estrategia es coherente respecto a los objetivos, el presupuesto, el TNT, y la distribución de esfuerzo. **[15 puntos]**

4. Video. **[10 puntos]**
    - El video incluye los ajustes a la estrategia de pruebas. La explicación de la estrategia es coherente. **[5 puntos]**
    - El video incluye análisis de los pros y contras de las herramientas de pruebas de reconocimiento, y es coherente con la características de las herramientas. **[5 puntos]**


**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
