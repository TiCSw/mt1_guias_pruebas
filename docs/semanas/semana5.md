# Proyecto · Semana 5: Pruebas de extremo a extremo (E2E)

> **Resumen.** El equipo automatiza cuarenta escenarios E2E distintos sobre la **versión base** de la
> ABP: veinte en una herramienta basada en scripts y veinte en Kraken, con los patrones _Page Object_
> y _Given-When-Then_. Entrega un _release_ del repositorio (`semana-5`) y un reporte de resultados.
> Las [reglas de juego](reglas) del proyecto aplican a esta semana.

## Contexto

Las pruebas exploratorias y de reconocimiento de las semanas anteriores dejaron un conocimiento de
la ABP y una estrategia de pruebas, pero su ejecución depende de las personas: cambia de una
ejecución a otra y no deja un registro sistemático de resultados. _TSDC_ necesita escenarios
funcionales que se ejecuten de forma repetible y quiere comparar dos enfoques de automatización E2E
antes de adoptar uno.

## Objetivos de aprendizaje

1. Diseñar escenarios E2E con un resultado esperado verificable a partir de las funcionalidades de
   la estrategia de pruebas.
2. Implementar escenarios en una herramienta basada en scripts y en una herramienta de
   _Behavior-Driven Testing_ (Kraken).
3. Aplicar los patrones _Page Object_ y _Given-When-Then_.
4. Comparar las dos herramientas con base en los resultados de ejecución.

## Preparación

1. Levante la ABP desde la raíz del repositorio con `npm run abp:up`. Esta semana se usa la
   **versión base**, publicada en la URL `ABP_URL` del archivo `.env`.
2. Agregue los dos módulos con el _workflow_ **Setup Frameworks Automatización** del repositorio
   (_Actions → Run workflow_):
   - una herramienta basada en scripts: `cypress`, `playwright` o `puppeteer`;
   - `kraken`.
3. Instale y prepare cada módulo desde la raíz del repositorio: `npm run <módulo>:install` y
   `npm run <módulo>:prepare`.
4. Lea el `README.md` de cada módulo: explica cómo las pruebas obtienen la URL y las credenciales de
   la ABP del archivo `.env` y cómo se ejecutan.

## Actividades

1. **Funcionalidades.** Seleccione cinco funcionalidades de su estrategia de pruebas e identifíquelas
   como `FUN-01` a `FUN-05`.
2. **Escenarios.** Defina cuarenta escenarios distintos, cada uno asociado a una de las cinco
   funcionalidades y con un resultado esperado verificable. Identifíquelos como `ESC-01` a `ESC-20`
   (herramienta basada en scripts) y `ESC-21` a `ESC-40` (Kraken). El inicio de sesión no es un
   escenario cuando su único propósito es habilitar otro: es una precondición.
3. **Herramienta basada en scripts.** Implemente los escenarios `ESC-01` a `ESC-20`. El nombre de
   cada prueba empieza con su identificador (por ejemplo, `ESC-07 Crear una publicación con
   etiqueta`).
4. **Kraken.** Implemente los escenarios `ESC-21` a `ESC-40`. El nombre de cada escenario empieza con
   su identificador.
5. **Patrones.** En las dos herramientas:
   - **_Page Object_**: las pruebas no usan selectores. Toda interacción con la interfaz se hace a
     través de clases ubicadas en la carpeta `pages/` del módulo.
   - **_Given-When-Then_**: cada escenario tiene exactamente un bloque _Given_ (precondiciones), uno
     _When_ (acciones) y uno _Then_ (validaciones), en ese orden. En la herramienta basada en scripts,
     el cuerpo de la prueba se divide con los comentarios `// Given`, `// When` y `// Then`. En Kraken
     son los pasos del escenario; `And` y `But` continúan el bloque anterior.
6. **Configuración.** Las pruebas obtienen la URL y las credenciales de la ABP del archivo `.env` del
   repositorio, como indica el `README.md` de cada módulo. Ningún otro archivo contiene esos valores.
7. **Ejecución.** Ejecute los cuarenta escenarios sobre la versión base. Cada prueba debe terminar
   como **exitosa** (el oráculo confirmó el resultado esperado) o **fallida** (el oráculo detectó un
   resultado distinto del esperado). Una prueba que no puede ejecutarse completa (error de sintaxis,
   selector inexistente, tiempo de espera agotado) está mal implementada: corríjala antes de
   entregar. Cada prueba fallida señala un posible defecto de la ABP: confírmelo y repórtelo en los
   _issues_ del repositorio con la plantilla **Reporte Incidencia**, indicando el identificador del
   escenario. Los escenarios deben detectar al menos cinco defectos de la ABP.
8. **Documentación.** Actualice el `README.md` de cada módulo con los comandos que ejecutan sus
   escenarios. No es necesario describir cómo se despliega la ABP.
9. **Entrega.** Publique un
   [_release_](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
   del repositorio con el _tag_ `semana-5` y elabore el reporte de resultados.

## Entregables

| Entregable | Formato | Contenido |
|---|---|---|
| Código de las pruebas | _Release_ `semana-5` del repositorio del equipo | Los dos módulos agregados por el _workflow_, con sus escenarios y sus `README.md` actualizados |
| Reporte de resultados | PDF | Ver [Contenido del reporte](#contenido-del-reporte) |

El repositorio contiene solo el código necesario para ejecutar las pruebas, en archivos de texto
plano: ni documentos, ni imágenes, ni videos, ni dependencias, ni resultados de ejecución.

### Contenido del reporte

1. Integrantes del equipo.
2. Funcionalidades: identificador (`FUN-##`), nombre y descripción de cada una de las cinco.
3. Tabla de escenarios, con una fila por cada uno de los cuarenta: identificador (`ESC-##`),
   herramienta, funcionalidad, descripción, resultado esperado y resultado obtenido (exitoso o
   fallido).
4. Evidencia de ejecución de cada herramienta: una captura de la salida de la ejecución (terminal o
   reporte de la herramienta) en la que se ven sus veinte escenarios y su resultado.
5. Defectos: los defectos de la ABP encontrados (al menos cinco), cada uno con el identificador del
   escenario que lo detectó y el enlace a su incidencia.
6. Análisis comparativo de las dos herramientas: ventajas, desventajas y conclusión.

## Criterios de evaluación

### 1. Herramienta basada en scripts [40 puntos]

- **1.1 Escenarios [20 puntos, 1 por escenario].** El nombre de cada uno de los veinte escenarios
  (`ESC-01` a `ESC-20`) empieza con su identificador, por ejemplo `ESC-07 Crear una publicación con
  etiqueta`. Cada escenario valida su resultado esperado con al menos una aserción y termina como
  exitoso, o como fallido con su defecto reportado como incidencia.
- **1.2 _Page Object_ [10 puntos, 0,5 por escenario].** Los veinte escenarios interactúan con la
  interfaz solo a través de clases de la carpeta `pages/`: los archivos de las pruebas no contienen
  selectores.
- **1.3 _Given-When-Then_ [10 puntos, 0,5 por escenario].** El cuerpo de cada uno de los veinte
  escenarios tiene exactamente un bloque `// Given`, uno `// When` y uno `// Then`, en ese orden.

### 2. Kraken [40 puntos]

- **2.1 Escenarios [20 puntos, 1 por escenario].** El nombre de cada uno de los veinte escenarios
  (`ESC-21` a `ESC-40`) empieza con su identificador. Cada escenario valida su resultado esperado en
  un paso _Then_ y termina como exitoso, o como fallido con su defecto reportado como incidencia.
- **2.2 _Page Object_ [10 puntos, 0,5 por escenario].** Las definiciones de los pasos de los veinte
  escenarios interactúan con la interfaz solo a través de clases de la carpeta `pages/`: no contienen
  selectores.
- **2.3 _Given-When-Then_ [10 puntos, 0,5 por escenario].** Los pasos de cada uno de los veinte
  escenarios forman exactamente un bloque _Given_, uno _When_ y uno _Then_, en ese orden.

### 3. Reporte de resultados [20 puntos]

- **3.1 Funcionalidades [5 puntos, 1 por funcionalidad].** Las cinco funcionalidades tienen
  identificador (`FUN-##`), nombre y descripción.
- **3.2 Tabla de escenarios [5 puntos].** La tabla contiene los cuarenta escenarios con todos sus
  campos diligenciados y con los mismos identificadores del código. Cada escenario ausente,
  incompleto o con un identificador distinto al del código resta 1 punto de este criterio, sin bajar
  de 0.
- **3.3 Evidencia de ejecución [2 puntos].**
  - **[1 punto]** El reporte incluye una captura de la salida de la ejecución de la herramienta
    basada en scripts (terminal o reporte de la herramienta) en la que se ven los veinte escenarios y
    su resultado.
  - **[1 punto]** El reporte incluye una captura de la salida de la ejecución de Kraken (terminal o
    reporte de la herramienta) en la que se ven los veinte escenarios y su resultado.
- **3.4 Defectos [5 puntos, 1 por defecto].** El reporte presenta cinco defectos de la ABP detectados
  por escenarios fallidos. Cada defecto indica el identificador del escenario que lo detectó y enlaza
  su incidencia en el repositorio, reportada con la plantilla **Reporte Incidencia**.
- **3.5 Análisis comparativo [3 puntos].**
  - **[1 punto]** El análisis presenta dos ventajas de cada herramienta, observadas al implementar o
    ejecutar sus escenarios.
  - **[1 punto]** El análisis presenta dos desventajas de cada herramienta, observadas al implementar
    o ejecutar sus escenarios.
  - **[1 punto]** La conclusión recomienda una de las dos herramientas para _TSDC_ y la justifica con
    los resultados del reporte.

Además, aplican las _fatalities_ F1 a F7 de las [reglas de juego](reglas#fatalities).
