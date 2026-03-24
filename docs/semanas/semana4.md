# Proyecto Pruebas automatizadas

## Semana 4: Pruebas de reconocimiento con Monkeys y Rippers

## Descripción de la semana

En esta semana del proyecto *TSDC*, el equipo aplicará técnicas de **pruebas de reconocimiento (exploración automática)** utilizando herramientas basadas en _Monkeys_ y _Rippers_ sobre la Aplicación Bajo Pruebas (ABP).

El propósito es que el equipo:

- Ejecute pruebas automatizadas sin intervención humana para identificar comportamientos inesperados.
- Compare dos enfoques de exploración automática: generación aleatoria de eventos (_Monkey_) y exploración estructurada del DOM (_Ripper_).
- Analice el valor práctico de estas herramientas dentro de una estrategia de pruebas.
- Integre los hallazgos obtenidos en la actualización de la estrategia de pruebas.


## Resumen de las actividades

1. Configure y ejecute pruebas de reconocimiento utilizando la herramienta [monkey-cypress](https://github.com/Uniandes-MISW4103/proyecto-monkey-base). Debe seguir las instrucciones del repositorio, garantizar la reproducibilidad mediante el uso de semillas y documentar la configuración y parámetros utilizados en cada ejecución. En caso de realizar modificaciones al código base, estas deben quedar registradas.

2. Configure y ejecute pruebas de reconocimiento utilizando la herramienta [RIPuppet](https://github.com/Uniandes-MISW4103/proyecto-ripper-base). Debe garantizar la correcta configuración, ejecución reproducible mediante semillas y la documentación de cualquier modificación realizada sobre el código base.

3. Recolecte y documente los resultados de ejecución de ambas herramientas. Para cada herramienta, registre las semillas utilizadas, evidencias de ejecución (videos o reportes) y las incidencias nuevas identificadas o, en su defecto, una justificación argumentada de su ausencia.

4. Realice un análisis comparativo entre _Monkey_ y _Ripper_, identificando ventajas y desventajas de cada herramienta con base en la experiencia obtenida durante la ejecución y en los resultados observados.

5. Actualice la estrategia de pruebas definida en la semana anterior, incorporando el uso de pruebas de reconocimiento, los ajustes derivados de la retroalimentación recibida y decisiones explícitas sustentadas en los resultados obtenidos durante la ejecución.

6. Elabore un video en el que se expliquen los cambios realizados a la estrategia de pruebas y el análisis comparativo entre las herramientas utilizadas. El video debe tener una duración máxima de **15 minutos**.


## Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

La entrega debe realizarse mediante un _release_ en el repositorio asignado por el equipo docente en la organización [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/), siguiendo la guía [Crear un release en GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).

El _release_ debe incluir la carpeta `./reconocimiento` con el código fuente funcional de las herramientas _Monkey_ y _Ripper_, asegurando que las ejecuciones sean reproducibles mediante el uso de semillas, así como los archivos `README.md` actualizados cuando se hayan realizado modificaciones, incluyendo instrucciones claras de instalación, configuración y ejecución.

Adicionalmente, el _release_ debe incluir **dos documentos en formato `.pdf`**, uno para cada herramienta (`reporte-monkey.pdf` y `reporte-ripper.pdf`). Cada uno de estos documentos debe incluir la siguiente información:

- Resultados de ejecución de la herramienta correspondiente, incluyendo semillas utilizadas
- Enlaces a evidencias y enlaces a incidencias nuevas identificadas o su respectiva justificación.
- Análisis de ventajas y desventajas de la herramienta, basado en la experiencia obtenida durante la ejecución.

Por otra parte, en la plataforma del curso se debe entregar la estrategia de pruebas actualizada en formato `.pdf`, la cual debe reflejar la incorporación de pruebas de reconocimiento, los ajustes derivados de la retroalimentación previa y la coherencia con los objetivos, el presupuesto, el TNT y la distribución de esfuerzo. También se debe entregar el enlace al video, el cual debe estar alojado en una plataforma externa y ser accesible públicamente o mediante cuentas institucionales.

---

## Criterios de evaluación

> [!NOTE]
> La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.

### 0. Fatalities

- No se crea un _release_ en el repositorio dentro del plazo establecido con todos los entregables requeridos. **[-15 puntos]**
- La implementación de _Monkey_ no utiliza el código base indicado en `./reconocimiento/README.md`. **[-30 puntos]**
- La implementación de _Ripper_ no utiliza el código base indicado en `./reconocimiento/README.md`. **[-30 puntos]**
- Se incluyen archivos multimedia, dependencias o documentos no permitidos dentro del repositorio. **[-20 puntos]**
- Algún documento entregado no está en formato `.pdf`. **[-10 puntos]**
- El video no es accesible públicamente o no permite acceso institucional. **[-10 puntos]**


### 1. Pruebas de reconocimiento con Monkey **[30 puntos]**

- El código en `./reconocimiento/misw-4103-monkey` permite la ejecución correcta y la reproducción de resultados mediante semillas documentadas. **[10 puntos]**
- El archivo `README.md` describe de forma completa los pasos de instalación, configuración, ejecución y los parámetros utilizados. **[5 puntos]**
- El documento `reporte-monkey.pdf` incluye resultados de ejecución con semillas, evidencias y enlaces a incidencias o su justificación. **[10 puntos]**
- El análisis de ventajas y desventajas en `reporte-monkey.pdf` es coherente con los resultados obtenidos durante la ejecución. **[5 puntos]**


### 2. Pruebas de reconocimiento con Ripper **[30 puntos]**

- El código en `./reconocimiento/misw-4103-ripper` permite la ejecución correcta y la reproducción de resultados mediante semillas documentadas. **[10 puntos]**
- El archivo `README.md` describe de forma completa los pasos de instalación, configuración, ejecución y los parámetros utilizados. **[5 puntos]**
- El documento `reporte-ripper.pdf` incluye resultados de ejecución con semillas, evidencias y enlaces a incidencias o su justificación. **[10 puntos]**
- El análisis de ventajas y desventajas en `reporte-ripper.pdf` es coherente con los resultados obtenidos durante la ejecución. **[5 puntos]**


### 3. Estrategia de pruebas **[30 puntos]**

- La estrategia incorpora pruebas de reconocimiento indicando su propósito, alcance y relación con los objetivos del proyecto. **[10 puntos]**
- Se evidencia la incorporación de la retroalimentación de la semana anterior mediante cambios explícitos y trazables. **[10 puntos]**
- Las decisiones incluidas en la estrategia están justificadas con base en los resultados obtenidos durante la ejecución. **[10 puntos]**


### 4. Video **[10 puntos]**

- El video presenta de forma estructurada los cambios realizados a la estrategia de pruebas. **[5 puntos]**
- El video incluye el análisis comparativo entre _Monkey_ y _Ripper_ alineado con los resultados obtenidos. **[5 puntos]**
