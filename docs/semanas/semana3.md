# Proyecto Pruebas automatizadas

## Semana 3: Estrategia de pruebas  

### Descripción de la semana

En esta semana del proyecto de *TSDC*, el objetivo es diseñar una **primera versión de la estrategia de pruebas** para la **Aplicación Bajo Pruebas (ABP)**, integrando los aprendizajes obtenidos en las semanas anteriores.

Como resultado del análisis previo, se ha identificado la necesidad de estructurar el proceso de pruebas a través de una estrategia formal que permita organizar de manera coherente los esfuerzos del equipo. Para ello, deberán construir una estrategia considerando restricciones reales de tiempo, capacidad y recursos.

La estrategia debe contemplar obligatoriamente las siguientes condiciones:

- **Duración de la estrategia:** 8 semanas calendario, incluyendo planeación y ejecución.
- **Recursos humanos:** cada integrante del equipo dispone de **12 horas semanales**. Adicionalmente, estos recursos deben ser valorados económicamente, asumiendo un costo por hora basado en referencias del mercado laboral (por ejemplo, estimaciones obtenidas de plataformas como [LinkedIn](https://www.linkedin.com/)).
- **Recursos computacionales:** se permite el uso de herramientas, infraestructura y servicios tecnológicos (por ejemplo, computadores, dispositivos móviles, herramientas de automatización y servicios en la nube como [Amazon Web Services](https://aws.amazon.com/)). Estos recursos no tienen restricción presupuestaria, pero su uso debe ser estimado y reportado en términos de costo.
- **Outsourcing de pruebas:** se dispone de un presupuesto máximo de **500 USD** para contratar servicios externos de testing (equipos, empresas o especialistas). Este presupuesto es independiente de los recursos computacionales y debe ser detallado en términos de actividades específicas contratadas.

**Importante:** Todos los tipos de recursos (humanos, computacionales y outsourcing) deben incluir una **estimación presupuestaria explícita**, expresada en términos de costo total y, cuando aplique, costo por unidad (por ejemplo, costo por hora, por servicio o por consumo). Estas estimaciones deben estar soportadas mediante supuestos, cálculos o referencias explícitas.

La estrategia debe ser coherente, justificable y trazable, alineando: Funcionalidades de la ABP, objetivos de pruebas, técnicas, niveles y tipos de pruebas (TNT), recursos (humanos, computacionales y outsourcing), y distribución del esfuerzo en el tiempo. Adicionalmente, deberán comunicar las decisiones tomadas mediante un video explicativo.


### Resumen de las actividades

1. Elaborar la estrategia de pruebas para la ABP utilizando la plantilla oficial disponible en el siguiente enlace:  
   [Plantilla estrategia de pruebas](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/estrategia-pruebas.docx), cubriendo las 8 semanas de planeación y ejecución.

2. Definir **al menos 5 funcionalidades core** de la ABP, asegurando que cada funcionalidad incluya un título y una descripción clara, verificable y consistente con el alcance del sistema. Complementar esta definición con los modelos requeridos: diagrama de contexto, modelo de datos y modelo GUI.

3. Establecer objetivos de pruebas que cumplan completamente con el criterio SMART, garantizando que cada objetivo pueda medirse y evaluarse dentro del periodo de 8 semanas.

4. Definir las técnicas, niveles y tipos de pruebas (TNT), especificando para cada uno su propósito y alcance, e incluir una **relación explícita entre TNT y objetivos de pruebas** mediante un mecanismo verificable (por ejemplo, tabla o matriz de trazabilidad).

5. Construir el presupuesto de pruebas incluyendo recursos humanos, computacionales y outsourcing, asegurando que:
   - Cada tipo de recurso tenga unidad de medida (por ejemplo, hora, servicio o consumo)
   - Se especifique el costo por unidad
   - Se calcule el costo total
   - Se incluyan los supuestos, cálculos o referencias que soportan las estimaciones

6. Distribuir el esfuerzo de pruebas a lo largo de las 8 semanas mediante una **tabla o cronograma semanal**, indicando la asignación de recursos y su relación con las actividades del TNT.

7. Grabar un video de máximo **15 minutos** en el que se expliquen las decisiones tomadas en la estrategia, asegurando coherencia con el documento entregado.


### Detalles de la entrega

> [!NOTE]  
> Los videos y documentos que incluyan en su entrega deben estar alojado en algún gestor de contenido (OneDrive Uniandes, Youtube), deben ser públicos o deben permitir el acceso a cuentas de la Universidad de Los Andes (`@uniandes.edu.co`). Para el caso de documentos, estos deben estar en formato `.pdf`.

La entrega debe reflejar de manera completa la estrategia de pruebas diseñada, incluyendo la estimación presupuestaria de todos los recursos involucrados y la evidencia de trazabilidad entre sus componentes. Todos los elementos deben estar integrados en un documento formal y acompañados de un recurso audiovisual. Se debe entregar:

- Un archivo en formato **.pdf** que contenga la estrategia de pruebas completa, desarrollada sobre la plantilla oficial.
- Un enlace a un video (máximo 15 minutos) alojado en una plataforma accesible (Google Drive, YouTube, Dropbox u otra equivalente), con permisos de visualización habilitados.

---

### Criterios de evaluación

> [!NOTE]
> La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.
> Entregas por fuera del horario establecido puede incurrir en una penalización sobre la calificación final de la actividad.

#### 0. Fatalities

El incumplimiento de cualquiera de las siguientes condiciones genera penalizaciones directas:

- Entregar uno o más documentos en un formato diferente a **.pdf**. **[-15 puntos]**
- El enlace al video no es accesible públicamente o no permite acceso a cuentas institucionales. **[-10 puntos]**


#### 1. Aplicación Bajo Pruebas (ABP) **[25 puntos]**

- Se definen al menos 5 funcionalidades core, cada una con título y descripción clara, específica y verificable. **[15 puntos]**  
- El diagrama de contexto incluye todas las entidades externas relevantes que interactúan con la ABP. **[2 puntos]**  
- El modelo de datos incluye entidades y relaciones correctamente representadas y consistentes con las funcionalidades. **[3 puntos]**  
- El modelo GUI describe el flujo completo de navegación e interacciones principales del usuario. **[5 puntos]**


#### 2. Contexto de la estrategia de pruebas **[65 puntos]**

- Se definen objetivos de pruebas que cumplen completamente con el criterio SMART. **[8 puntos]**  
- Se especifica la duración total (8 semanas) y su organización en fases o iteraciones. **[4 puntos]**  
- El presupuesto diferencia explícitamente recursos humanos, computacionales y outsourcing. **[4 puntos]**  
- Los **recursos humanos** incluyen costo por hora referenciado al mercado y cálculo del costo total, con soporte explícito. **[8 puntos]**  
- Los **recursos computacionales** incluyen costos estimados, modelo de consumo y supuestos documentados. **[6 puntos]**  
- El **outsourcing** describe actividades específicas, costos detallados y cumplimiento del límite de 500 USD. **[5 puntos]**  
- Se definen técnicas, niveles y tipos de pruebas (TNT) indicando su propósito y alcance. **[15 puntos]**  
- Se establece una relación explícita y verificable entre TNT y objetivos de pruebas (por ejemplo, matriz de trazabilidad). **[5 puntos]**  
- Se presenta una distribución del esfuerzo en formato tabular o cronograma semanal, alineada con recursos, presupuesto y TNT. **[10 puntos]**


#### 3. Video **[10 puntos]**

- El video explica de forma clara y coherente las decisiones de la estrategia (objetivos, TNT, presupuesto y distribución del esfuerzo), manteniendo consistencia con el documento entregado. **[10 puntos]**


**La evaluación se realizará con base en la completitud, coherencia interna, trazabilidad explícita y evidencia verificable de cada uno de los criterios definidos en esta rúbrica.**
