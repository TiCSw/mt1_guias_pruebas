# Taller: BDD con Gherkin y Cucumber

_Behavior-driven development_ (BDD) especifica el software por su comportamiento, con ejemplos
concretos escritos en un lenguaje que entienden tanto el negocio como el equipo técnico. En este
taller especificarán comportamientos de la tienda EverShop en [Gherkin](https://cucumber.io/docs/gherkin/)
y los automatizarán con [Cucumber](https://cucumber.io/docs/cucumber/) y
[Playwright](https://playwright.dev).

A través de este taller:

- Escribirán especificaciones ejecutables en Gherkin: `Feature`, `Background`, `Scenario Outline` con
  `Examples`, tablas de datos y _tags_.
- Implementarán _step definitions_ reutilizables sobre Playwright.
- Descubrirán reglas de negocio de una aplicación real explorándola, y las convertirán en escenarios.
- Evaluarán si sus escenarios detectan cambios de comportamiento.

## 1. Preparación

Requisito: el [Taller 0](evershop) (repositorio de talleres y EverShop en ejecución).

El taller vive en `talleres/bdt/` de su repositorio de talleres. Cree estos archivos:

**`talleres/bdt/package.json`**

```json
{
  "name": "taller-bdt",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24"
  },
  "scripts": {
    "setup": "playwright install chromium",
    "test": "cucumber-js",
    "evaluate": "cucumber-js"
  },
  "devDependencies": {
    "@cucumber/cucumber": "~13.3.0",
    "@playwright/test": "~1.63.0"
  }
}
```

**`talleres/bdt/cucumber.js`**

```javascript
export default {
  paths: ["features/**/*.feature"],
  import: ["features/support/**/*.js", "features/step_definitions/**/*.js"],
  format: ["progress", "html:results/report.html"],
};
```

Instale las dependencias y el navegador desde `talleres/bdt/`:

```bash
npm install
npm run setup
```

`npm install` genera `package-lock.json`; inclúyalo en el repositorio.

## 2. Implementación base

La base especifica el inicio de sesión en la administración de EverShop.

**`talleres/bdt/features/admin-sign-in.feature`**

```gherkin
Feature: Admin sign in
  As a store administrator
  I want to sign in to the admin panel
  So that only authorized people can manage the store

  Background:
    Given I am on the admin sign in page

  Scenario: Sign in with valid credentials
    When I sign in as "admin@test.com" with password "admin123"
    Then I see the admin dashboard

  Scenario Outline: Sign in is rejected
    When I sign in as "<email>" with password "<password>"
    Then I see the message "<message>"
    And I stay on the sign in page

    Examples:
      | email           | password | message                                     |
      | nobody@test.com | admin123 | Invalid email or password                   |
      | not-an-email    | admin123 | Please enter a valid email address          |
      | admin@test.com  | 12345    | Password must be at least 6 characters long |
      |                 |          | Email is required                           |
```

El _World_ es el contexto de cada escenario. Aquí abre un navegador para toda la ejecución y un
contexto nuevo (sin cookies ni sesión) para cada escenario, adjunta una captura de pantalla al
reporte cuando un escenario falla y escribe el resumen de la ejecución.

**`talleres/bdt/features/support/world.js`**

```javascript
import { mkdirSync, writeFileSync } from "node:fs";
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Status,
  World,
  setDefaultTimeout,
  setWorldConstructor,
} from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(30_000);

class StoreWorld extends World {
  baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

  url(path) {
    return new URL(path, this.baseUrl).href;
  }
}
setWorldConstructor(StoreWorld);

let browser;
const scenarios = [];

BeforeAll(async function () {
  browser = await chromium.launch({ headless: process.env.HEADED !== "1" });
});

// Every scenario gets a new browser context: no cookies, cart or session from other scenarios.
Before(async function () {
  this.context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  this.page = await this.context.newPage();
});

After(async function ({ pickle, result }) {
  if (result.status === Status.FAILED) {
    this.attach(await this.page.screenshot({ fullPage: true }), "image/png");
  }
  scenarios.push({ feature: pickle.uri, scenario: pickle.name, status: result.status });
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
  const failed = scenarios.filter((scenario) => scenario.status !== Status.PASSED);
  mkdirSync("results", { recursive: true });
  const summary = { scenarios: scenarios.length, passed: scenarios.length - failed.length, failed };
  writeFileSync("results/summary.json", `${JSON.stringify(summary, null, 2)}\n`);
});
```

Los pasos traducen cada frase de Gherkin en acciones y aserciones de Playwright. Las aserciones de
`expect` de Playwright esperan a que la condición se cumpla, por lo que no hacen falta esperas
fijas.

**`talleres/bdt/features/step_definitions/admin.steps.js`**

```javascript
import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I am on the admin sign in page", async function () {
  await this.page.goto(this.url("/admin/login"));
});

When("I sign in as {string} with password {string}", async function (email, password) {
  await this.page.locator('input[name="email"]').fill(email);
  await this.page.locator('input[name="password"]').fill(password);
  await this.page.getByRole("button", { name: "Sign in" }).click();
});

Then("I see the admin dashboard", async function () {
  await expect(this.page).toHaveURL(this.url("/admin"));
  await expect(this.page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

Then("I see the message {string}", async function (message) {
  await expect(this.page.getByText(message)).toBeVisible();
});

Then("I stay on the sign in page", async function () {
  await expect(this.page).toHaveURL(this.url("/admin/login"));
});
```

Ejecute las pruebas con la tienda en ejecución:

```bash
npm test
HEADED=1 npm test
```

El reporte queda en `results/report.html` y el resumen en `results/summary.json`.

## 3. Actividad

### 3.1 Reglas de negocio

Explore la tienda como cliente y como administrador, e identifique **al menos 8 reglas de negocio**
verificables en su instancia de EverShop sobre búsqueda, productos con variantes, carrito y cuentas
de cliente. Por ejemplo: qué pasa al agregar un producto con variantes sin elegir una, cómo cambia el
total al modificar cantidades, qué valida el registro de clientes. Registre cada regla en el README
con un identificador, su descripción y la evidencia que la sustenta (captura o pasos para
observarla).

### 3.2 Especificación

Escriba features para esas reglas:

- Al menos 4 archivos `.feature` y 12 escenarios, cada uno etiquetado con la regla que verifica
  (por ejemplo, `@R03`). Toda regla debe tener al menos un escenario.
- Use `Background`, al menos dos `Scenario Outline` con `Examples` y al menos una tabla de datos
  (`DataTable`).
- Escriba los escenarios de forma declarativa, en términos del negocio («agrego 2 unidades del termo
  amarillo al carrito»), no de la interfaz («hago clic en el botón con clase X»).
- Los escenarios son independientes: ninguno depende del orden de ejecución ni de datos creados por
  otro.

Opcional (bonificación): una feature de _checkout_ completa. Los datos de ejemplo no tienen métodos
de envío ni de pago, así que la feature debe configurarlos desde la administración.

### 3.3 Implementación

Implemente los pasos con estas condiciones:

- Pasos parametrizados y reutilizados entre features; sin pasos duplicados que hagan lo mismo.
- Cada `Then` verifica un resultado observable con una aserción de Playwright (no basta con que la
  página cargue).
- Sin esperas fijas (`waitForTimeout`).
- Selectores robustos (roles, etiquetas, textos o atributos estables), centralizados si los reutiliza.

### 3.4 ¿Sus escenarios detectan cambios?

Unas pruebas que pasan siempre no sirven. Elija 3 de sus reglas y, para cada una, provoque un cambio
de comportamiento en su instancia de EverShop (por ejemplo, desde la administración: cambiar un
precio, deshabilitar un producto, dejar un producto sin inventario). Ejecute sus pruebas y registre
en el README qué escenarios fallaron y cuáles deberían haber fallado y no lo hicieron. Corrija los
escenarios débiles.

## 4. Entrega

Entregue el enlace a su repositorio de talleres y un _tag_ `taller-bdt` sobre el _commit_ que se
debe evaluar. El repositorio debe contener en `talleres/bdt/`:

- Las features, los pasos, el _World_, `package.json` y `package-lock.json`.
- `npm run evaluate`: ejecuta todas las features y escribe `results/summary.json` (el formato de la
  implementación base). Todos los escenarios deben pasar contra la tienda recién iniciada.
- `README.md` con:
  - cómo ejecutar las pruebas;
  - la tabla de reglas de negocio con su evidencia y los escenarios que las verifican;
  - el resultado de la sección 3.4;
  - **Uso de IA**: qué partes generó o sugirió un asistente de IA, qué errores tenía lo generado y
    cómo verificó el resultado.

El equipo docente ejecutará `npm run evaluate -- bdt` desde la raíz del repositorio y, además,
ejecutará sus features contra versiones de EverShop con cambios de comportamiento que ustedes no
conocen. Un escenario bien escrito falla cuando la regla que verifica deja de cumplirse.

## 5. Criterios de evaluación

| Criterio | Puntos |
|---|---|
| `npm run evaluate -- bdt` termina sin intervención y todos los escenarios pasan contra la tienda recién iniciada. | 10 |
| Las reglas de negocio son correctas para EverShop y su evidencia permite observarlas. | 15 |
| Las features usan Gherkin de forma correcta y declarativa, con `Background`, `Scenario Outline`, tablas de datos y _tags_ por regla. | 20 |
| Los pasos son reutilizables, verifican resultados observables y no usan esperas fijas. | 15 |
| Cambios de comportamiento inyectados por el equipo docente que sus escenarios detectan (proporcional). | 25 |
| El README permite ejecutar todo sin ambigüedad, la sección 3.4 se sustenta en ejecuciones reales y la sección de uso de IA es concreta. | 15 |
| Bonificación: feature de _checkout_ completa e independiente. | +5 |
