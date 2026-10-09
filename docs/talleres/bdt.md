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

| Archivo | Contenido | ¿Se edita? |
|---|---|---|
| `features/` | Features (`.feature`) y _step definitions_ (`.js`), incluida la base (sección 2) | Sí |
| `README.md` | Documentación de su trabajo | Sí |
| `runner/world.js` | Runner: _World_, navegador por escenario y resumen | No |
| `cucumber.js` | Configuración de Cucumber | No |
| `package.json`, `package-lock.json` | Dependencias (Cucumber y Playwright) y scripts | No |

## 2. Implementación base

La feature base (`features/admin-sign-in.feature`) especifica el inicio de sesión en la
administración de EverShop:

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

Cada paso se implementa con Playwright (`features/step_definitions/`):

```javascript
When("I sign in as {string} with password {string}", async function (email, password) {
  // this.page es la página de Playwright del escenario; this.url(ruta) arma la URL de la tienda
  // llena el formulario y hace clic en "Sign in"
});

Then("I see the message {string}", async function (message) {
  await expect(this.page.getByText(message)).toBeVisible(); // la aserción espera a que se cumpla
});
```

El runner (`runner/world.js`) crea para cada escenario un contexto de navegador nuevo (sin cookies,
carrito ni sesión de otros escenarios) con `this.context`, `this.page` y `this.url(ruta)`, adjunta
una captura al reporte cuando un escenario falla y escribe `results/summary.json` con el resultado,
los _tags_ y las páginas visitadas de cada escenario. Cucumber carga todos los `.feature` y `.js` de
`features/`.

Con la tienda en ejecución, desde `talleres/behavior-driven-development/`:

```bash
npm test
HEADED=1 npm test
```

El reporte HTML queda en `results/report.html`.

## 3. Actividad

Escriba en `features/` **al menos 5 escenarios** sobre la regla de negocio de su tipo (`type` en
`asignacion.json`):

| Tipo | Regla de negocio | Páginas que cada escenario debe visitar |
|---|---|---|
| A | Búsqueda de productos: resultados por palabra clave y búsquedas sin resultados. | Resultados de búsqueda (`/search`) |
| B | Productos con variantes: elegir el color de un producto y agregarlo al carrito. | Página de un producto (`/accessories/<producto>`) |
| C | Carrito de compras: contenido, cantidades, subtotal y eliminación de productos. | Carrito (`/cart`) |
| D | Cuentas de cliente: registro, validaciones del formulario e inicio de sesión. | Páginas de cuenta (`/account/...`) |

Explore primero la regla en la tienda para saber qué comportamiento especificar. Condiciones:

- Los escenarios de la actividad tienen el _tag_ `@tipo-<su tipo>` (por ejemplo, `@tipo-B`); puede
  ponerlo en la `Feature` para que lo hereden todos.
- Al menos uno viene de un `Scenario Outline` con `Examples` (cada fila de `Examples` cuenta como un
  escenario).
- Puede escribir los escenarios en inglés o en español (`# language: es`) y organizarlos en los
  archivos que prefiera dentro de `features/`.
- Los escenarios son declarativos (en términos del negocio, no de la interfaz), independientes entre
  sí y verifican resultados observables con aserciones de Playwright.

Describa en el `README.md` del taller la regla y cómo la observó en la tienda.

## 4. Entrega

Cree el _tag_ `taller-behavior-driven-development` sobre el _commit_ que se debe evaluar y súbalo a
su repositorio (`git push origin taller-behavior-driven-development`) a más tardar el día de la fecha
límite.

## 5. Evaluación

La evaluación es automática (ver el [Taller 0](evershop)). Además de las condiciones generales de
entrega, el equipo docente ejecuta todas las features con el runner sobre una tienda recién iniciada
y verifica en el resumen que:

1. Todos los escenarios pasan, incluidos los de la feature base.
2. Hay al menos 5 escenarios con el _tag_ de su tipo.
3. Al menos uno de ellos viene de un `Scenario Outline`.
4. Cada escenario de su tipo visita las páginas de su tipo.
