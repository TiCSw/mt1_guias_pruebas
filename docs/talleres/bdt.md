# Taller: BDD con Gherkin y Cucumber

_Behavior-driven development_ (BDD) especifica el software por su comportamiento, con ejemplos
concretos escritos en un lenguaje que entienden tanto el negocio como el equipo técnico. En este
taller especificarán comportamientos de la tienda EverShop en [Gherkin](https://cucumber.io/docs/gherkin/)
y los automatizarán con [Cucumber](https://cucumber.io/docs/cucumber/) y
[Playwright](https://playwright.dev).

A través de este taller:

- Escribirán especificaciones ejecutables en Gherkin: `Feature`, `Background`, `Scenario Outline`
  con `Examples` y _tags_.
- Implementarán _step definitions_ reutilizables sobre Playwright.
- Convertirán una regla de negocio de una aplicación real en escenarios verificables.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres instalado y EverShop en ejecución).

El taller está en `talleres/behavior-driven-development/` de su repositorio:

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencias (Cucumber y Playwright) y scripts del taller |
| `cucumber.js` | Configuración de Cucumber: features, código de soporte y reportes |
| `features/admin-sign-in.feature` | Feature base (sección 2) |
| `features/support/world.js` | Contexto de cada escenario (_World_) y _hooks_ |
| `features/step_definitions/` | Pasos de la feature base |
| `README.md` | Secciones para documentar su trabajo |

## 2. Implementación base

La feature base especifica el inicio de sesión en la administración de EverShop:

```gherkin
Feature: Admin sign in
  Background:
    Given I am on the admin sign in page

  Scenario: Sign in with valid credentials
    When I sign in as "admin@test.com" with password "admin123"
    Then I see the admin dashboard

  Scenario Outline: Sign in is rejected
    When I sign in as "<email>" with password "<password>"
    Then I see the message "<message>"

    Examples:
      | email           | password | message                   |
      | nobody@test.com | admin123 | Invalid email or password |
      # …otras filas
```

Cada paso se implementa con Playwright:

```javascript
When("I sign in as {string} with password {string}", async function (email, password) {
  // this.page es la página de Playwright del escenario; this.url(ruta) arma la URL de la tienda
  // llena el formulario y hace clic en "Sign in"
});

Then("I see the message {string}", async function (message) {
  await expect(this.page.getByText(message)).toBeVisible(); // la aserción espera a que se cumpla
});
```

El _World_ (`features/support/world.js`) crea un contexto de navegador nuevo para cada escenario
(sin cookies, carrito ni sesión de otros escenarios), adjunta una captura al reporte cuando un
escenario falla y escribe `results/summary.json` con el estado, los _tags_ y las páginas visitadas
de cada escenario.

Con la tienda en ejecución, desde `talleres/behavior-driven-development/`:

```bash
npm test
HEADED=1 npm test
```

El reporte queda en `results/report.html`.

## 3. Actividad

El equipo docente le asignó un tipo (A, B, C o D) en el archivo `asignacion.json` de la raíz de su
repositorio. Escriba **una feature con al menos 5 escenarios** sobre la regla de negocio de su tipo:

| Tipo | Regla de negocio | Páginas que cada escenario debe visitar |
|---|---|---|
| A | Búsqueda de productos: resultados por palabra clave y búsquedas sin resultados. | Resultados de búsqueda (`/search`) |
| B | Productos con variantes: elegir el color de un producto y agregarlo al carrito. | Página de un producto (`/accessories/<producto>`) |
| C | Carrito de compras: contenido, cantidades, subtotal y eliminación de productos. | Carrito (`/cart`) |
| D | Cuentas de cliente: registro, validaciones del formulario e inicio de sesión. | Páginas de cuenta (`/account/...`) |

Explore primero la regla en la tienda para saber qué comportamiento especificar. Condiciones:

- La feature está en `features/actividad.feature` y tiene el _tag_ `@tipo-<su tipo>` (por ejemplo,
  `@tipo-B`).
- Tiene al menos 5 escenarios, incluido al menos un `Scenario Outline` con `Examples` (cada fila de
  `Examples` cuenta como un escenario).
- Los pasos nuevos van en `features/step_definitions/` y pueden reutilizar los de la base.
- Los escenarios son declarativos (en términos del negocio, no de la interfaz), independientes entre
  sí y verifican resultados observables con aserciones de Playwright.

Describa en el `README.md` del taller la regla y cómo la observó en la tienda.

## 4. Entrega

Cree el _tag_ `taller-behavior-driven-development` sobre el _commit_ que se debe evaluar y súbalo a
su repositorio (`git push origin taller-behavior-driven-development`) antes de la fecha límite.

## 5. Evaluación

La evaluación es automática. El taller cuenta si el _tag_ se entregó a tiempo y pasa todas las
verificaciones de `npm run evaluate -- behavior-driven-development`, que puede ejecutar desde la raíz
de su repositorio. El resultado queda en
`talleres/behavior-driven-development/results/grade.json`.

1. `npm run evaluate` del taller termina sin errores (todos los escenarios pasan) y genera
   `results/summary.json`.
2. Existe `features/actividad.feature` con el _tag_ de su tipo.
3. La feature tiene al menos un `Scenario Outline` con `Examples`.
4. La feature tiene al menos 5 escenarios y todos pasan.
5. Cada escenario de la feature visita las páginas de su tipo.
