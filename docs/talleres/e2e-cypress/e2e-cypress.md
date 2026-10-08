# Pruebas E2E con Cypress

Este taller está diseñado para explorar técnicas de pruebas automatizadas end-to-end (E2E) utilizando **Cypress** sobre una aplicación web de E-commerce real.

A través de esta actividad:

* Aprenderá a configurar Cypress en un proyecto independiente
* Implementará pruebas E2E reales sobre una aplicación web
* Practicará la selección de elementos, el manejo de formularios y navegación entre páginas

---

# 1. Preparación del Entorno

Requisito: el [Taller 0](../evershop) (repositorio de talleres instalado y EverShop en ejecución).
EverShop queda disponible en `http://localhost:3000` y su administración en
`http://localhost:3000/admin`, con el usuario `admin@test.com` y la contraseña `admin123`.

![alt text](img/image-1.png)

El taller está en `talleres/end-to-end-testing/` de su repositorio. Cypress es una dependencia del
proyecto, no una instalación global.

| Archivo | Contenido |
|---|---|
| `package.json` | Dependencia de Cypress y scripts del taller |
| `cypress.config.js` | Configuración de Cypress; `baseUrl` toma la URL de la tienda de `BASE_URL` |
| `scripts/evaluate.js` | Ejecuta las pruebas en orden y escribe `results/summary.json` |
| `cypress/e2e/admin-setup.cy.js` | Configuración inicial de la tienda (sección 2) |
| `cypress/e2e/admin-product.cy.js` | Prueba base: creación de un producto (sección 3) |
| `cypress/e2e/customer-checkout.cy.js` | Prueba de la actividad, por implementar (sección 4) |
| `README.md` | Secciones para documentar su trabajo |

---

# 2. Configuración Inicial del Sistema

Antes de crear productos y realizar pruebas de checkout, es necesario configurar los métodos de pago y envío en EverShop. `cypress/e2e/admin-setup.cy.js` lo hace desde la administración:

```javascript
describe("Admin Panel - Initial Setup", () => {
  beforeEach(() => {
    // inicia sesión como administrador y espera el Dashboard
  });

  it("configures store settings for checkout", () => {
    // Settings > Payment: activa "Cash On Delivery"
    // Settings > Shipping: crea la zona "United States Zone" (New York)
    //   y el método "Standard Shipping" con costo de $10
  });
});
```

**Importante:** este test modifica la configuración de la tienda, por lo que se ejecuta **una sola vez** sobre una tienda recién reiniciada (`npm run app:reset`) y antes que los demás. `npm run evaluate` lo hace en ese orden.

---

# 3. Implementación Base de la Prueba E2E

`cypress/e2e/admin-product.cy.js` contiene el login del administrador y la creación de un producto, como referencia de cómo estructurar sus pruebas:

```javascript
describe("Admin Panel - Product Management", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
    cy.get('input[name="email"]').type("admin@test.com");
    // … contraseña, clic en el botón y espera del Dashboard
  });

  it("creates a new product successfully", () => {
    // Catalog > Products > New Product
    // llena nombre ("Cypress Test Product"), precio, SKU único, inventario, Tax Class, URL Key…
    cy.contains("button", "Save").click();
    cy.contains("Product created successfully", { timeout: 10000 }).should("be.visible");
    // vuelve a la lista y verifica que el producto aparece
  });
});
```

Puede consultar más ejemplos de pruebas E2E con Cypress en [Cypress Ghost Examples](https://github.com/TheSoftwareDesignLab/Software-engineering-examples/tree/main/Cypress-ghost-examples).

Para ejecutar las pruebas con la interfaz de Cypress, desde `talleres/end-to-end-testing/`:

```bash
npm run cypress
```

Seleccione **E2E Testing**, un navegador y luego el archivo `admin-product.cy.js`. Asegúrese de que EverShop esté ejecutándose (`npm run app:up` desde la raíz del repositorio).

---

# 4. Actividad

Ahora deberá implementar en `cypress/e2e/customer-checkout.cy.js` (que hoy contiene una prueba pendiente) el **flujo completo de compra desde la perspectiva del cliente**.

## 4.1 Especificación del Test

Su archivo debe incluir:

1. **Un `beforeEach()`** que:
   - Visite la página de inicio de la tienda (`cy.visit("/")`)
   - Espere a que la página cargue correctamente

2. **Un test que ejecute los siguientes pasos secuencialmente**:
   - Hacer click en el botón de búsqueda (Search) en la página principal
   - Escribir "Cypress Test Product" en la barra de búsqueda que se abre
   - Hacer click en el producto que aparece en los resultados
   - Agregar el producto al carrito
   - Navegar al carrito
   - Proceder al checkout
   - Llenar el formulario de checkout con información del cliente:
     - Email
     - Nombre completo
     - Dirección de envío
     - Ciudad
     - Código postal
     - País
   - Verificar que se llegó a la página de confirmación o pago


# 5. Detalles de la Entrega

Cree el _tag_ `taller-end-to-end-testing` sobre el _commit_ que se debe evaluar y súbalo a su
repositorio (`git push origin taller-end-to-end-testing`) antes de la fecha límite. Describa su
implementación en el `README.md` del taller.

---

# 6. Evaluación

La evaluación es automática. El taller cuenta si el _tag_ se entregó a tiempo y pasa todas las
verificaciones de `npm run evaluate -- end-to-end-testing`, que puede ejecutar desde la raíz de su
repositorio. El resultado queda en `talleres/end-to-end-testing/results/grade.json`.

1. `npm run evaluate` del taller termina sin errores y genera `results/summary.json`.
2. `admin-setup.cy.js` y `admin-product.cy.js` pasan.
3. `customer-checkout.cy.js` tiene al menos una prueba, todas pasan y ninguna queda pendiente.
