# Taller 0: Entorno de los talleres con EverShop

Todos los talleres del curso prueban la misma aplicación: [EverShop](https://evershop.io), una
tienda en línea de código abierto (Node.js, React y PostgreSQL). Este taller prepara el repositorio
y el entorno que usarán los demás. No tiene entrega.

Al terminar tendrán:

- Su repositorio de talleres clonado e instalado.
- EverShop 2.1.1 ejecutándose en Docker con datos de ejemplo y un usuario administrador.
- Claro cómo se ejecuta y se evalúa cada taller.

## 1. Requisitos

- Node.js 24. Recomendamos [nvm](https://github.com/nvm-sh/nvm) (o
  [nvm-windows](https://github.com/coreybutler/nvm-windows)): `nvm install 24`.
- [Docker Desktop](https://docs.docker.com/get-started/get-docker/) con al menos 4 GB de memoria
  asignados.
- Git y una cuenta de GitHub.

Ninguna herramienta de los talleres se instala de forma global (`npm install -g`). Cada taller
declara sus dependencias en su propio `package.json` y las ejecuta con `npm run` o `npx`. Una
instalación global puede quedar en una versión distinta de la que usa cada proyecto y causar errores
difíciles de diagnosticar en otros talleres o en el proyecto del curso.

## 2. Repositorio de talleres

El equipo docente crea para cada estudiante un repositorio privado de talleres en la organización
del curso. Clónelo **fuera** de la carpeta del repositorio del proyecto del curso: si un taller queda
dentro de las carpetas `e2e/`, `vrt/` o `reconocimiento/` de ese repositorio, npm lo trata como parte
de sus _workspaces_ y sus dependencias pueden entrar en conflicto con las de los módulos del
proyecto.

```plaintext
├── talleres/            # un proyecto npm por taller, con su runner y su implementación base
│   ├── monkey-testing/
│   ├── behavior-driven-development/
│   ├── visual-regression-testing/
│   └── end-to-end-testing/
├── asignacion.json      # su nombre, su correo y su tipo; lo escribe el equipo docente
├── compose.yml          # EverShop 2.1.1, PostgreSQL 16 y el proxy de la versión release
├── evershop/            # configuración del proxy y archivos de la versión release
└── scripts/             # instalación de los talleres y app:up, app:down, app:reset
```

`asignacion.json` contiene su nombre (`name`), su correo (`email`) y su **tipo** (`type`: A, B, C o
D). Cada taller tiene una sola actividad; en los talleres con variantes, el tipo indica la que le
corresponde (por ejemplo, qué regla de negocio especificar o qué página comparar). No lo modifique.

Cada taller tiene un **runner** (`runner/`) que ejecuta su trabajo y escribe el resumen de la
ejecución en `results/summary.json`. Solo puede editar los archivos que indica cada enunciado; el
runner, la configuración, las dependencias y el resto del repositorio pertenecen al equipo docente
(`.github/CODEOWNERS`).

## 3. Instalar e iniciar EverShop

Desde la raíz del repositorio:

```bash
nvm use
npm install
npm run app:up
```

`npm install` instala las dependencias de todos los talleres y los navegadores que usan (Chromium de
Playwright y Cypress). `npm run app:up` inicia EverShop; la primera vez descarga las imágenes de
Docker (unos 1,5 GB), crea la base de datos, carga los datos de ejemplo (productos, categorías,
colecciones) y crea el usuario administrador.

| URL | Contenido |
|---|---|
| <http://localhost:3000> | Tienda |
| <http://localhost:3000/admin> | Administración: usuario `admin@test.com`, contraseña `admin123` |
| <http://localhost:3001> | Versión _release_ de la tienda, usada en el taller de regresión visual |

Recorran la tienda y la administración antes de empezar los talleres: categorías, búsqueda, página
de un producto con variantes de color, carrito y _checkout_. Los datos de ejemplo no incluyen métodos
de envío ni de pago; se configuran en **Settings** de la administración.

| Comando | Qué hace |
|---|---|
| `npm run app:up` | Inicia EverShop (y la primera vez carga los datos de ejemplo). |
| `npm run app:down` | Detiene EverShop sin borrar los datos. |
| `npm run app:reset` | Borra los datos y vuelve a iniciar EverShop desde cero. |

Las pruebas de los talleres crean y modifican datos (productos, carritos, configuración). Ejecuten
`npm run app:reset` cuando necesiten partir del estado inicial.

## 4. Cómo se ejecuta, se entrega y se evalúa un taller

Cada taller indica en su enunciado el comando que ejecuta su runner (por ejemplo,
`npm run monkey` desde `talleres/monkey-testing/`). El runner escribe `results/summary.json` con los
parámetros de la ejecución y sus resultados; ese archivo es una salida: no se edita ni se versiona.

Cada taller se entrega con un _tag_ `taller-<taller>` (por ejemplo, `taller-monkey-testing`) sobre el
_commit_ que se debe evaluar:

```bash
git tag taller-monkey-testing
git push origin taller-monkey-testing
```

La evaluación es automática y la ejecuta el equipo docente: descarga el _commit_ del _tag_, ejecuta el
runner del taller con sus propios parámetros sobre una tienda recién iniciada y revisa el resumen.
Una entrega cuenta si se cumple todo lo siguiente; en otro caso, su nota es 0:

- El _tag_ se subió a más tardar el día de la fecha límite (hora de Colombia).
- El repositorio solo contiene archivos de texto: ningún resultado (`results/`), captura, imagen ni
  otro archivo binario. El `.gitignore` los excluye; no los agregue a la fuerza.
- Los archivos que no se pueden editar, incluido `asignacion.json`, son iguales a los que recibió.
- El resumen cumple los criterios de la sección «Evaluación» del enunciado.

## 5. Solución de problemas

- **El puerto 3000 o 3001 está en uso**: detengan la aplicación que lo usa, por ejemplo el EverShop
  de otro repositorio (`npm run app:down` en esa carpeta).
- **`npm run app:up` falla en `docker compose`**: verifiquen que Docker esté en ejecución
  (`docker info`) y que tenga memoria suficiente.
- **La tienda muestra errores después de varias pruebas**: `npm run app:reset`.
