# Proyecto · Semana 3: Estrategia de pruebas

> **Resumen.** El equipo diseña la primera versión de la estrategia de pruebas de la ABP para 8
> semanas: funcionalidades, objetivos, técnicas, niveles y tipos de prueba (TNT), presupuesto y
> distribución del esfuerzo. Entrega la estrategia y un video que explica sus decisiones. Las
> [reglas de juego](reglas) del proyecto aplican a esta semana.

## Contexto

Con lo aprendido al explorar la ABP y al investigar las prácticas del sector, _TSDC_ necesita
organizar el proceso de pruebas en una estrategia formal: qué se va a probar, con qué objetivos,
con qué técnicas, cuánto cuesta y cómo se distribuye el esfuerzo en el tiempo. La estrategia debe
ser realista frente a las restricciones de tiempo, personas y presupuesto de la compañía.

## Objetivos de aprendizaje

1. Definir las funcionalidades core de la ABP y modelar su contexto, sus datos y su interfaz.
2. Formular objetivos de pruebas SMART.
3. Seleccionar técnicas, niveles y tipos de prueba (TNT) y relacionarlos con los objetivos.
4. Estimar el presupuesto de los recursos humanos, computacionales y de _outsourcing_.
5. Distribuir el esfuerzo de pruebas en el tiempo.

## Actividades

1. **Plantilla.** Elabore la estrategia en la
   [plantilla de estrategia de pruebas](https://thesoftwaredesignlab.github.io/AutTestingCourseraBook/templates/estrategia-pruebas.docx),
   respetando las [restricciones de la estrategia](#restricciones-de-la-estrategia).
2. **Funcionalidades.** Defina cinco funcionalidades core de la ABP, identificadas como `FUN-01` a
   `FUN-05`, con nombre y descripción. Estas funcionalidades se usan en las semanas siguientes.
3. **Modelos.** Elabore el diagrama de contexto, el modelo de datos y el modelo de GUI de la ABP.
4. **Objetivos.** Formule los objetivos de pruebas. Cada objetivo es SMART: específico (qué se
   prueba), medible (una métrica y un valor meta), alcanzable con los recursos de la estrategia,
   relevante (se relaciona con al menos una funcionalidad core) y acotado en el tiempo (una fecha
   dentro de las 8 semanas).
5. **TNT.** Defina las técnicas, los niveles y los tipos de prueba, con el propósito y el alcance de
   cada uno, y relaciónelos con los objetivos en una matriz de trazabilidad.
6. **Presupuesto.** Estime el costo de cada tipo de recurso: unidad de medida (hora, servicio o
   consumo), costo por unidad, cantidad, costo total, y los supuestos, cálculos o referencias que
   sustentan cada valor.
7. **Distribución del esfuerzo.** Elabore una tabla o cronograma de las 8 semanas que indique, para
   cada semana, las actividades de TNT y los recursos asignados.
8. **Video.** Grabe un video de máximo 15 minutos que explique las decisiones de la estrategia.

### Restricciones de la estrategia

- **Duración**: 8 semanas calendario, que incluyen la planeación y la ejecución.
- **Recursos humanos**: los integrantes del equipo, cada uno con 12 horas semanales. Su costo por hora
  se estima con referencias del mercado laboral (por ejemplo,
  [LinkedIn](https://www.linkedin.com/)).
- **Recursos computacionales**: herramientas, infraestructura y servicios tecnológicos (por ejemplo,
  computadores, dispositivos móviles, herramientas de automatización y servicios en la nube como
  [Amazon Web Services](https://aws.amazon.com/)). No tienen límite de presupuesto, pero su costo se
  estima y se reporta.
- **_Outsourcing_**: servicios externos de pruebas (equipos, empresas o especialistas), con un
  presupuesto máximo de 500 USD, independiente del de recursos computacionales.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Estrategia de pruebas | PDF, elaborado en la plantilla | Las secciones de la plantilla con los resultados de las actividades 2 a 7 |
| Video | Enlace, máximo 15 minutos | Las decisiones de la estrategia: objetivos, TNT, presupuesto y distribución del esfuerzo |

Los enlaces deben abrirse sin solicitar permisos: públicos o con acceso para cuentas
`@uniandes.edu.co`. El contenido del video posterior al minuto 15 no se evalúa.

## Criterios de evaluación

La evaluación sigue las [reglas de juego](reglas) del proyecto, incluidas sus _fatalities_.

### 1. Aplicación bajo pruebas [25 puntos]

- **1.1 Funcionalidades [15 puntos, 3 por funcionalidad].** Las cinco funcionalidades core tienen
  identificador (`FUN-##`), nombre y una descripción que indica qué hace el usuario y qué resultado
  observable obtiene.
- **1.2 Diagrama de contexto [2 puntos].** El diagrama muestra la ABP como un solo sistema y sus
  entidades externas (roles de usuario y sistemas externos), con cada interacción etiquetada.
- **1.3 Modelo de datos [3 puntos].** El modelo muestra las entidades con sus atributos y las
  relaciones con su cardinalidad, e incluye los datos que usan las cinco funcionalidades.
- **1.4 Modelo de GUI [5 puntos].** El modelo muestra las pantallas que recorren las cinco
  funcionalidades y las transiciones entre ellas, cada una etiquetada con la acción del usuario.

### 2. Estrategia de pruebas [65 puntos]

- **2.1 Objetivos [10 puntos, 2 por atributo SMART].** Los objetivos de pruebas son específicos,
  medibles, alcanzables, relevantes y acotados en el tiempo, como los define la actividad 4. Cada
  atributo suma sus puntos cuando lo cumplen todos los objetivos.
- **2.2 Duración y fases [4 puntos].** La estrategia cubre las 8 semanas y las organiza en fases o
  iteraciones con sus actividades.
- **2.3 TNT [15 puntos, 5 por dimensión].** La estrategia define las técnicas, los niveles y los tipos
  de prueba, cada uno con su propósito y su alcance (las funcionalidades que cubre).
- **2.4 Trazabilidad [5 puntos].** La matriz de trazabilidad relaciona cada objetivo con al menos una
  técnica, nivel o tipo de prueba, y cada uno de estos con al menos un objetivo.
- **2.5 Presupuesto [23 puntos].**
  - **[9 puntos]** Los recursos humanos tienen costo por hora con su referencia de mercado, la
    cantidad de horas (integrantes × 12 horas × 8 semanas) y el costo total.
  - **[8 puntos]** Cada recurso computacional tiene unidad de medida, costo por unidad, consumo
    estimado, costo total y la fuente o el supuesto de su costo.
  - **[6 puntos]** El _outsourcing_ describe cada actividad contratada con su costo, y el total no
    supera 500 USD.
- **2.6 Distribución del esfuerzo [8 puntos].** La tabla o el cronograma asigna, para cada una de las
  8 semanas, actividades de TNT y recursos, y sus totales coinciden con el presupuesto.

### 3. Video [10 puntos]

- **3.1 Decisiones de la estrategia [10 puntos].**
  - **[4 puntos]** El video explica los objetivos y la selección de TNT.
  - **[3 puntos]** El video explica el presupuesto y sus supuestos.
  - **[3 puntos]** El video explica la distribución del esfuerzo.
