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
├── talleres/            # su trabajo: un proyecto npm por taller, con su implementación base
│   ├── monkey-testing/
│   ├── behavior-driven-development/
│   ├── visual-regression-testing/
│   └── end-to-end-testing/
├── asignacion.json      # su tipo (A, B, C o D), asignado por el equipo docente
├── compose.yml          # EverShop 2.1.1, PostgreSQL 16 y el proxy de la versión release
├── evershop/            # configuración del proxy y archivos de la versión release
├── scripts/             # instalación, app:up, app:down, app:reset, evaluate y verificaciones
└── .github/             # CODEOWNERS y el flujo que evalúa los talleres
```

Solo modifique archivos dentro de `talleres/<taller>/`. El resto del repositorio pertenece al equipo
docente (`.github/CODEOWNERS`), y la evaluación usa su propia copia de esos archivos.

`asignacion.json` contiene su **tipo** (A, B, C o D). Cada taller tiene una sola actividad; en los
talleres con variantes, el tipo indica la que le corresponde (por ejemplo, qué regla de negocio
especificar o qué página comparar).

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

## 4. Cómo se ejecuta y se evalúa un taller

Cada taller es un proyecto npm independiente en `talleres/<taller>/`, con su implementación base,
sus scripts y un `README.md` para documentar su trabajo. Los talleres se califican de forma
automática con un único comando desde la raíz del repositorio:

```bash
npm run evaluate -- <taller>
```

Este comando reinicia EverShop desde cero, ejecuta en la carpeta del taller `npm ci`,
`npm run setup` (si existe) y `npm run evaluate`, luego las verificaciones automáticas del taller
según su tipo, y detiene EverShop. El resultado de cada verificación queda en
`talleres/<taller>/results/grade.json`. Un taller cuenta si se entregó a tiempo (con el _tag_ que
indica su enunciado) y pasa todas las verificaciones; el `README.md` no se califica.

Además, en cada _push_ que modifica un taller, el flujo de GitHub Actions del repositorio ejecuta lo
mismo en Linux para ese taller: si falla allí, también fallará cuando lo evaluemos.

Para que un taller siga siendo evaluable:

- Mantengan `package.json` y `package-lock.json` (si agregan dependencias con `npm install`, ambos
  cambian y se versionan).
- No cambien los nombres de los scripts ni de los archivos que menciona cada enunciado; en
  particular, `evaluate` ejecuta el taller completo sin intervención.
- Tomen la URL de la tienda de la variable de entorno `BASE_URL` (y `RELEASE_URL` para la versión
  release), como hace la implementación base.
- `evaluate` debe generar `results/summary.json`, como hace la implementación base. La carpeta
  `results/` no se versiona.

## 5. Solución de problemas

- **El puerto 3000 o 3001 está en uso**: detengan la aplicación que lo usa, por ejemplo el EverShop
  de otro repositorio (`npm run app:down` en esa carpeta).
- **`npm run app:up` falla en `docker compose`**: verifiquen que Docker esté en ejecución
  (`docker info`) y que tenga memoria suficiente.
- **La tienda muestra errores después de varias pruebas**: `npm run app:reset`.
