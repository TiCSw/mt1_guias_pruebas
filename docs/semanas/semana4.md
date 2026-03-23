# Proyecto Pruebas automatizadas

## Semana 4: Pruebas de reconocimiento con Monkeys y Rippers

## Descripción de la semana

En esta semana del proyecto *TSDC*, el equipo aplicará técnicas de **pruebas de reconocimiento (exploración automática)** utilizando herramientas basadas en _Monkeys_ y _Rippers_ sobre la Aplicación Bajo Pruebas (ABP). El propósito es que el equipo:

- Ejecute pruebas automatizadas sin intervención humana para identificar comportamientos inesperados.
- Compare dos enfoques de exploración automática: generación aleatoria de eventos (_Monkey_) y exploración estructurada del DOM (_Ripper_).
- Analice el valor práctico de estas herramientas dentro de una estrategia de pruebas.
- Integre los hallazgos y aprendizajes en la estrategia de pruebas definida en semanas anteriores.

Al finalizar la semana, el equipo debe haber ejecutado ambos tipos de pruebas, documentado sus resultados de manera reproducible y actualizado su estrategia de pruebas con base en evidencia.


## Resumen de las actividades

> [!NOTE]
> Todas las pruebas deben ejecutarse sobre la misma versión de la ABP utilizada en semanas anteriores.

> [!NOTE]
> Los resultados reportados deben ser reproducibles. Para esto, es obligatorio el uso de semillas (_seeds_) en todas las ejecuciones.

1. Configure y ejecute pruebas de reconocimiento utilizando la herramienta [monkey-cypress](https://github.com/Uniandes-MISW4103/proyecto-monkey-base). Asegúrese de seguir las instrucciones del archivo `README.md` provisto, utilizar semillas para garantizar reproducibilidad y, en caso de realizar modificaciones al código base, documentarlas explícitamente.

2. Configure y ejecute pruebas de reconocimiento utilizando la herramienta [RIPuppet](https://github.com/Uniandes-MISW4103/proyecto-ripper-base). Debe garantizar la correcta configuración, ejecución reproducible mediante semillas y la documentación de cualquier cambio realizado sobre el código base.

3. Recolecte y documente los resultados de ejecución de ambas herramientas. Para cada herramienta, registre como mínimo: semillas utilizadas, evidencia de ejecución (videos o reportes), y enlaces a las incidencias nuevas identificadas en la ABP.

4. Analice comparativamente las herramientas _Monkey_ y _Ripper_, identificando ventajas y desventajas de cada una en el contexto de pruebas de reconocimiento. El análisis debe basarse en la experiencia obtenida durante la ejecución.

5. Actualice la estrategia de pruebas definida en la semana anterior, incorporando:
   - El uso de pruebas de reconocimiento.
   - Ajustes derivados de la retroalimentación recibida.
   - Justificación del uso (o no uso) de estas herramientas dentro de la estrategia.

6. Elabore un video en el que se expliquen los cambios realizados a la estrategia de pruebas y el análisis comparativo entre las herramientas utilizadas.


## Detalles de la entrega

La entrega debe realizarse mediante el repositorio asignado por el equipo docente en la organización [Uniandes-MISW4103](https://github.com/orgs/Uniandes-MISW4103/). El equipo debe crear un _release_ siguiendo la guía oficial: [Crear un release en GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).

El _release_ debe incluir obligatoriamente los siguientes elementos:

- Carpeta `./reconocimiento`:
  - Código fuente funcional de las herramientas _Monkey_ (`misw-4103-monkey`) y _Ripper_ (`misw-4103-ripper`).
  - Configuración necesaria para ejecutar las pruebas.
  - Uso explícito de semillas (_seeds_) para permitir la reproducción de resultados.
  - Archivos `README.md` actualizados cuando se hayan realizado modificaciones, incluyendo instrucciones claras de ejecución paso a paso.

- Carpeta `./actividades/actividad-semana-4`:
  - Documento en formato `.pdf` que incluya:
    - Integrantes que participaron en la actividad.
    - Resultados de ejecución por cada herramienta, incluyendo:
      - Semillas utilizadas.
      - Enlaces a evidencias (videos, reportes, logs externos).
      - Enlaces a incidencias nuevas registradas.
    - Análisis comparativo de pros y contras entre _Monkey_ y _Ripper_.

Adicionalmente, en la plataforma del curso se debe entregar:

- Estrategia de pruebas actualizada en formato `.pdf`, que incluya:
  - Incorporación de pruebas de reconocimiento.
  - Ajustes derivados de retroalimentación previa.
  - Coherencia con objetivos, presupuesto, TNT y distribución de esfuerzo.

- Enlace a un video donde:
  - Se expliquen los cambios realizados a la estrategia.
  - Se presente el análisis comparativo de las herramientas.

> Todos los archivos deben estar alojados en plataformas externas (e.g. OneDrive o YouTube) y deben ser públicos o accesibles para cuentas institucionales (`@uniandes.edu.co`).

---

## Criterios de evaluación

### 0. Fatalities

El incumplimiento de cualquiera de las siguientes condiciones genera penalizaciones automáticas:

- No se crea un _release_ en el repositorio dentro del plazo establecido con todos los entregables requeridos. **[-15 puntos]**
- La implementación de _Monkey_ no utiliza el código base indicado en `./reconocimiento/README.md`. **[-30 puntos]**
- La implementación de _Ripper_ no utiliza el código base indicado en `./reconocimiento/README.md`. **[-30 puntos]**
- Se incluyen archivos multimedia, dependencias o documentos no permitidos dentro del repositorio (por ejemplo: videos, `.pdf`, `node_modules`). **[-20 puntos]**
- Algún documento entregado no está en formato `.pdf`. **[-10 puntos]**
- El video no es accesible públicamente o no permite acceso institucional. **[-10 puntos]**


### 1. Pruebas de reconocimiento con Monkey **[30 puntos]**

- El código en `./reconocimiento/misw-4103-monkey` ejecuta correctamente y permite reproducir resultados mediante semillas documentadas. **[10 puntos]**
- El archivo `README.md` describe de forma completa los pasos de configuración, ejecución y cambios realizados (si aplica). **[5 puntos]**
- Se reportan resultados de ejecución que incluyen semillas, evidencias y enlaces a incidencias nuevas. **[10 puntos]**
- El análisis de pros y contras es consistente con los resultados obtenidos en la ejecución. **[5 puntos]**


### 2. Pruebas de reconocimiento con Ripper **[30 puntos]**

- El código en `./reconocimiento/misw-4103-ripper` ejecuta correctamente y permite reproducir resultados mediante semillas documentadas. **[10 puntos]**
- El archivo `README.md` describe de forma completa los pasos de configuración, ejecución y cambios realizados (si aplica). **[5 puntos]**
- Se reportan resultados de ejecución que incluyen semillas, evidencias y enlaces a incidencias nuevas. **[10 puntos]**
- El análisis de pros y contras es consistente con los resultados obtenidos en la ejecución. **[5 puntos]**


### 3. Estrategia de pruebas **[30 puntos]**

- La estrategia incorpora explícitamente pruebas de reconocimiento, indicando objetivo, alcance y tipo de herramientas utilizadas. **[10 puntos]**
- Se evidencia la incorporación de la retroalimentación de la semana anterior mediante cambios concretos y trazables. **[10 puntos]**
- La estrategia mantiene coherencia interna entre objetivos, presupuesto, TNT y distribución de esfuerzo. **[10 puntos]**


### 4. Video **[10 puntos]**

- El video explica de forma clara y estructurada los cambios realizados a la estrategia de pruebas. **[5 puntos]**
- El video presenta un análisis comparativo entre _Monkey_ y _Ripper_ basado en evidencia obtenida durante la ejecución. **[5 puntos]**


**La evaluación se realizará verificando la completitud, trazabilidad y reproducibilidad de los artefactos entregados, así como la coherencia entre ejecución, análisis y estrategia de pruebas.**
