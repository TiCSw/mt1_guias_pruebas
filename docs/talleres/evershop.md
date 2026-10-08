# Taller 0: Entorno de los talleres con EverShop

Todos los talleres del curso prueban la misma aplicación: [EverShop](https://evershop.io), una
tienda en línea de código abierto (Node.js, React y PostgreSQL). Este taller prepara el repositorio
y el entorno que usarán los demás. No tiene entrega.

Al terminar tendrán:

- Su repositorio de talleres, creado desde la plantilla
  [talleres-base](https://github.com/Uniandes-MISW4103/talleres-base).
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

## 2. Crear el repositorio de talleres

1. En [talleres-base](https://github.com/Uniandes-MISW4103/talleres-base), usen **Use this template**
   para crear su repositorio.
2. Clónenlo **fuera** de la carpeta del repositorio del proyecto del curso. Si un taller queda dentro
   de las carpetas `e2e/`, `vrt/` o `reconocimiento/` de ese repositorio, npm lo trata como parte de
   sus _workspaces_ y sus dependencias pueden entrar en conflicto con las de los módulos del
   proyecto.
3. Si el repositorio es privado, den acceso de lectura al equipo docente.

La plantilla contiene:

```plaintext
talleres-base/
├── compose.yml          # EverShop 2.1.1, PostgreSQL 16 y el proxy de la versión release
├── evershop/            # configuración del proxy y archivos de la versión release
├── scripts/             # app:up, app:down, app:reset y evaluate
├── talleres/            # un proyecto npm independiente por taller
│   ├── monkey/
│   ├── bdt/
│   ├── vrt/
│   └── e2e-cypress/
└── .github/workflows/   # evalúa cada taller en cada push
```

## 3. Iniciar EverShop

Desde la raíz del repositorio:

```bash
nvm use
npm run app:up
```

La primera ejecución descarga las imágenes de Docker (unos 1,5 GB), crea la base de datos, carga los
datos de ejemplo (productos, categorías, colecciones) y crea el usuario administrador. Las siguientes
ejecuciones solo inician los contenedores.

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

Cada taller es un proyecto npm independiente en `talleres/<taller>/`. El equipo docente evalúa cada
taller con un único comando desde la raíz del repositorio:

```bash
npm run evaluate -- <taller>
```

Este comando reinicia EverShop desde cero, ejecuta en la carpeta del taller `npm ci`,
`npm run setup` (si existe) y `npm run evaluate`, y detiene EverShop. Además, el flujo de GitHub
Actions del repositorio ejecuta lo mismo en Linux en cada _push_: si su taller falla allí, también
fallará cuando lo evaluemos.

Para que un taller sea evaluable, su carpeta debe tener:

- `package.json` con:
  - `"engines": { "node": ">=24" }` y las dependencias del taller en `devDependencies`;
  - el script `setup` (opcional), para descargar lo que necesite, por ejemplo el navegador;
  - el script `evaluate`, que ejecuta el taller completo sin intervención.
- `package-lock.json` en el repositorio, para que `npm ci` instale exactamente las mismas versiones.
- La URL de la tienda tomada de la variable de entorno `BASE_URL` (y `RELEASE_URL` para la versión
  release), con `http://localhost:3000` (y `http://localhost:3001`) por defecto.
- `results/summary.json`, generado por `evaluate`, con el formato que indica cada enunciado. La
  carpeta `results/` no se versiona.
- `README.md` con lo que pide cada enunciado.

Cada enunciado indica cómo entregar: el enlace al repositorio y un _tag_ sobre el _commit_ que se
debe evaluar.

## 5. Solución de problemas

- **El puerto 3000 o 3001 está en uso**: detengan la aplicación que lo usa, por ejemplo el EverShop
  de otro proyecto (`npm run app:down` en esa carpeta).
- **`npm run app:up` falla en `docker compose`**: verifiquen que Docker esté en ejecución
  (`docker info`) y que tenga memoria suficiente.
- **La tienda muestra errores después de varias pruebas**: `npm run app:reset`.
