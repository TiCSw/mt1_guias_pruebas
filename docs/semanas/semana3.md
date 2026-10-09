# Proyecto · Semana 3: Estrategia de pruebas

> **Resumen.** El equipo diseña la primera versión de la estrategia de pruebas de la ABP para 8
> semanas: funcionalidades, objetivos, técnicas, niveles y tipos de prueba (TNT), presupuesto y
> distribución del esfuerzo. Entrega la estrategia y un video que justifica sus decisiones. Las
> [reglas de juego](reglas) del proyecto aplican a esta semana.

## Contexto

Con lo aprendido al explorar la ABP y al investigar las prácticas del sector, _TSDC_ necesita
organizar el proceso de pruebas en una estrategia formal: qué se va a probar, con qué objetivos,
con qué técnicas, cuánto cuesta y cómo se distribuye el esfuerzo en el tiempo. La estrategia debe
ser realista frente a las restricciones de tiempo, personas y presupuesto de la compañía.

## Objetivos de aprendizaje

1. Definir las funcionalidades de la ABP que se van a probar y modelar su contexto, sus datos y su
   interfaz.
2. Formular objetivos de pruebas SMART.
3. Seleccionar técnicas, niveles y tipos de prueba (TNT) y relacionarlos con los objetivos.
4. Estimar el presupuesto de los recursos computacionales, humanos y de _outsourcing_.
5. Distribuir el esfuerzo de pruebas en el tiempo.

## Conceptos clave

- **Objetivo SMART.** Un objetivo de pruebas es válido cuando cumple los cinco atributos:
  - **específico**: indica qué se prueba;
  - **medible**: tiene una métrica y un valor meta;
  - **alcanzable**: se puede cumplir con los recursos de la estrategia;
  - **relevante**: se relaciona con al menos una funcionalidad de la estrategia;
  - **acotado en el tiempo**: tiene una fecha dentro de las 8 semanas.
- **TNT (técnicas, niveles y tipos de prueba).**
  - **Niveles de prueba**: unitario, integración, sistema o aceptación.
  - **Tipos de prueba**, en tres grupos: positivo, negativo o mixto; funcional o no funcional (en
    este proyecto, la única prueba no funcional es la de usabilidad); y regresión.
  - **Técnicas de prueba**: la forma de diseñar y ejecutar las pruebas (por ejemplo, pruebas
    exploratorias o pruebas E2E automatizadas), alineada con el nivel y el tipo en que se aplica.
  - **Tabla TNT**: cada fila combina una técnica, un nivel y un tipo de prueba. Una técnica, un nivel
    o un tipo pueden aparecer en varias filas, pero una misma combinación de técnica, nivel y tipo
    aparece una sola vez.
- **Presupuesto.** Se compone de tres tipos de recurso:
  - **recursos computacionales**: equipos y servicios tecnológicos, por ejemplo computadores
    portátiles, dispositivos móviles, herramientas de automatización y servicios en la nube como
    [Amazon Web Services](https://aws.amazon.com/);
  - **recursos humanos**: el personal propio de _TSDC_, es decir, los integrantes del equipo;
  - **_outsourcing_**: empresas externas que prestan servicios de pruebas o de consultoría en
    pruebas.

## Actividades

1. **Plantilla.** Elabore la estrategia en la
   [plantilla de estrategia de pruebas](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/estrategia-pruebas.docx),
   respetando las [restricciones de la estrategia](#restricciones-de-la-estrategia).
2. **Funcionalidades.** Defina cinco funcionalidades de la ABP, identificadas como `FUN-01` a
   `FUN-05`, con nombre y descripción. **Estas son las funcionalidades que el equipo prueba en las
   semanas siguientes**: los escenarios de reconocimiento, E2E, regresión visual y generación de datos
   se asocian a ellas.
3. **Modelos.** Elabore el diagrama de contexto, el modelo de datos y el modelo de GUI de la ABP.
4. **Objetivos.** Formule los objetivos SMART de pruebas, identificados como `OBJ-01`, `OBJ-02`, …
5. **TNT.** Elabore la tabla TNT. Para cada combinación de técnica, nivel y tipo de prueba, indique su
   propósito, los objetivos que apoya (`OBJ-##`) y las funcionalidades que cubre (`FUN-##`).
6. **Presupuesto.** Estime el costo de los recursos computacionales, humanos y de _outsourcing_. Para
   cada recurso indique la unidad de medida (hora, servicio o consumo), el costo por unidad, la
   cantidad, el costo total y los supuestos, cálculos o referencias que sustentan cada valor.
7. **Distribución del esfuerzo.** Elabore una tabla o cronograma de las 8 semanas que indique, para
   cada semana, las pruebas de la tabla TNT que se ejecutan y los recursos asignados.
8. **Video.** Grabe un video de máximo 15 minutos que justifique las decisiones de la estrategia.

### Restricciones de la estrategia

- **Duración**: 8 semanas calendario, que incluyen la planeación y la ejecución.
- **Recursos computacionales**: no tienen límite de presupuesto, pero su costo se estima y se reporta.
- **Recursos humanos**: todos los integrantes del equipo, cada uno con 12 horas semanales. Su costo
  por hora se estima con referencias del mercado laboral (por ejemplo,
  [LinkedIn](https://www.linkedin.com/)).
- **_Outsourcing_**: presupuesto máximo de 500 USD, independiente del de los recursos
  computacionales, detallado por actividad contratada.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Estrategia de pruebas | PDF, elaborado en la plantilla | Las secciones de la plantilla con los resultados de las actividades 2 a 7 |
| Video | Enlace, máximo 15 minutos | La justificación de las decisiones de la estrategia |

Los enlaces deben abrirse sin solicitar permisos: públicos o con acceso para cuentas
`@uniandes.edu.co`. El contenido del video posterior al minuto 15 no se evalúa.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Aplicación bajo pruebas [25 puntos]

- **1.1 Funcionalidades [15 puntos, 3 por funcionalidad].** Las cinco funcionalidades tienen
  identificador (`FUN-##`), nombre y una descripción que indica qué hace el usuario y qué resultado
  observable obtiene.
- **1.2 Diagrama de contexto [2 puntos].** El diagrama muestra la ABP como un solo sistema y sus
  entidades externas (roles de usuario y sistemas externos), con cada interacción etiquetada.
- **1.3 Modelo de datos [3 puntos].** El modelo muestra las entidades con sus atributos y las
  relaciones con su cardinalidad, e incluye los datos que usan las cinco funcionalidades.
- **1.4 Modelo de GUI [5 puntos].** El modelo muestra las pantallas que recorren las cinco
  funcionalidades y las transiciones entre ellas, cada una etiquetada con la acción del usuario.

### 2. Estrategia de pruebas [65 puntos]

- **2.1 Objetivos [8 puntos].** Los objetivos de pruebas (`OBJ-##`) cumplen los cinco atributos
  SMART.
- **2.2 Duración y fases [4 puntos].** La estrategia cubre las 8 semanas y las organiza en fases o
  iteraciones con sus actividades.
- **2.3 TNT [15 puntos].**
  - **[5 puntos]** Cada fila de la tabla TNT combina una técnica, un nivel válido y un tipo de prueba
    de los grupos definidos, sin combinaciones repetidas.
  - **[10 puntos]** Cada fila de la tabla TNT indica su propósito, los objetivos que apoya (`OBJ-##`)
    y las funcionalidades que cubre (`FUN-##`).
- **2.4 Cobertura de los objetivos [5 puntos].** La tabla TNT cubre todos los objetivos: cada objetivo
  aparece en al menos una de sus filas.
- **2.5 Presupuesto [23 puntos].**
  - **[8 puntos]** Cada recurso computacional tiene unidad de medida, costo por unidad, consumo
    estimado, costo total y la fuente o el supuesto de su costo.
  - **[9 puntos]** Los recursos humanos incluyen a todos los integrantes del equipo, cada uno con su
    costo por hora y su referencia de mercado, y sus horas (12 horas × 8 semanas), y el costo total
    del equipo.
  - **[6 puntos]** El _outsourcing_ describe cada actividad contratada a una empresa externa con su
    costo, y el total no supera 500 USD.
- **2.6 Distribución del esfuerzo [10 puntos].** La tabla o el cronograma asigna, para cada una de las
  8 semanas, las pruebas de la tabla TNT que se ejecutan y los recursos asignados, y sus totales
  coinciden con el presupuesto.

### 3. Video [10 puntos]

- **3.1 Justificación de las decisiones [10 puntos].** Cada justificación debe coincidir con el
  documento de la estrategia; la que lo contradice no suma puntos.
  - **[3 puntos]** El video justifica la selección de las funcionalidades y de los objetivos con
    hallazgos concretos de las semanas 1 y 2 (pruebas exploratorias, defectos encontrados o
    resultados de la encuesta).
  - **[3 puntos]** El video justifica por qué las combinaciones de la tabla TNT son adecuadas para los
    objetivos y menciona al menos una técnica que se descartó y por qué.
  - **[2 puntos]** El video justifica cómo se reparte el presupuesto entre recursos computacionales,
    humanos y _outsourcing_, incluido qué se contrata a empresas externas y por qué.
  - **[2 puntos]** El video explica cómo la distribución del esfuerzo permite cumplir los objetivos
    en las 8 semanas e identifica un riesgo del plan con su mitigación.
