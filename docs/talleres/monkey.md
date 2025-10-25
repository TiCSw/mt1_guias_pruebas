# Monkey Testing para Aplicaciones Web

Este taller está diseñada para explorar técnicas avanzadas de pruebas automatizadas. El objetivo es desarrollar un *monkey tester* que simule interacciones aleatorias de usuarios en una aplicación web, lo cual es una técnica valiosa para descubrir errores inesperados y problemas de robustez en las interfaces de usuario.

A través de esta actividad:
- Aprenderás a implementar pruebas de tipo *monkey testing* utilizando Playwright
- Desarrollarás un bot que realiza acciones aleatorias pero controladas en una interfaz web
- Practicarás el manejo de eventos asíncronos y errores en pruebas automatizadas
- Explorarás diferentes tipos de interacciones con elementos web (clicks, inputs, selects)

## 1. (Base) Monkey con Playwright

En esta parte desarrollaremos nuestro propio *Monkey* que visitará la página de [losestudiantes](https://losestudiantes.co), buscará todos los links y hará click en uno de ellos al azar. Esto se repetirá hasta que un cierto número de links hayan sido clickeados.

### 1.1 Implementación inicial del Monkey

Comencemos por crear nuestro archivo de pruebas con Playwright. Primero, cree un nuevo directorio vacío e inicialice un proyecto de Node.js:

```bash
mkdir monkey-testing
cd monkey-testing
npm init -y
```

Luego, instale Playwright y sus dependencias:

```bash
npm init playwright@latest
```

Durante la instalación, seleccione Javascript como el lenguaje de programación, y para las demás opciones pueden utilizar los valoes por defecto cuando se le pregunte. Una vez instalado, cree un nuevo archivo llamado `monkey.spec.js` en la carpeta `./tests` del proyecto. El contenido del archivo es el siguiente:

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Los estudiantes under monkeys', () => {
    test('visits los estudiantes and survives monkeys', async ({ page }) => {
        await page.goto('https://losestudiantes.com');
        await page.waitForTimeout(1000);
        await randomClick(page, 10);
    });
});

async function randomClick(page, monkeysLeft) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    if (monkeysLeft > 0) {
        const links = await page.$$('a');
        if (links.length > 0) {
            const randomLink = links[getRandomInt(0, links.length)];
            const isVisible = await randomLink.isVisible();
            
            if (isVisible) {
                try {
                    await randomLink.click();
                    monkeysLeft = monkeysLeft - 1;
                } catch (error) {
                    console.log('Could not click on element:', error);
                }
            }
            
            await page.waitForTimeout(1000);
            await randomClick(page, monkeysLeft);
        }
    }
}
```

En el método ``randomClick`` es donde hacemos click en un link al azar. Comenzamos por buscar todos los links de la página actual usando el método [`page.$$`](https://playwright.dev/docs/api/class-page#page-locator) de Playwright, que nos devuelve un array con todos los elementos que coinciden con el selector 'a'. Con este array de elementos, seleccionamos uno al azar usando `getRandomInt`. Luego, verificamos si el elemento está visible usando el método [`isVisible()`](https://playwright.dev/docs/api/class-locator#locator-is-visible) del ElementHandle. Si el elemento está visible, intentamos hacer click en él usando el método [`click()`](https://playwright.dev/docs/api/class-locator#locator-click). Utilizamos un bloque try-catch para manejar posibles errores durante el click, ya que el elemento podría volverse no interactuable entre la verificación de visibilidad y el intento de click. Después de cada intento de click (exitoso o no), esperamos 1 segundo usando [`page.waitForTimeout()`](https://playwright.dev/docs/api/class-page#page-wait-for-timeout) y luego hacemos un llamado recursivo a la misma función con el número de monkeys actualizado.

En el bloque ``describe`` al inicio del archivo es donde definimos nuestra prueba. Lo que hacemos es quitar el modal inicial haciendo click en el botón Cerrar y luego llamamos a nuestro método ``randomClick`` con 10 monkeys.

### 1.2 Ejecución de la Prueba

Para ejecutar la prueba, abra una terminal en el directorio del proyecto y ejecute el siguiente comando:

```bash
npx playwright test monkey.spec.js
```

Playwright ejecutará la prueba en un navegador Chromium por defecto. Si desea ver la ejecución de la prueba en tiempo real, puede agregar la bandera `--headed`:

```bash
npx playwright test monkey.spec.js --headed
```

Si hay un error al ejecutar la prueba, no se alarme. Habrá veces en las que Playwright no logrará hacer click en un elemento seleccionado al azar. Esto es normal, ya que el elemento pudo haber desaparecido de la página o estar en un estado no interactuable. El código incluye manejo de errores para estos casos.

## 2. Actividad

Ahora usted deberá crear una nueva función `randomEvent()` que toma por parámetro la cantidad de eventos que se desean lanzar secuencialmente al igual que en el método `randomClick`. Para cada evento, la función `randomEvent()` deberá ejecutar los siguientes pasos:

1. Seleccionar aleatoriamente uno de los eventos indicados a continuación:
    * Hacer click en un link al azar
    * Llenar un campo de texto al azar
    * Seleccionar un combo al azar
    * Hacer click en un botón al azar
2. Ejecutar el evento. En caso de que se genere algún error, este no debe detener la prueba
3. Hacer un llamado recursivo a esta misma función hasta que no queden más eventos por realizar.

**Aclaración:** El evento al azar es seleccionado por la **función**, no por usted.

### 1.4 Detalles de la entrega

Se debe entregar un archivo **.zip** con los siguientes archivos.

- La carpeta `./test` con el archivo de prueba `monkey.spec.js`
- El archivo de configuración `playwright.config.js`
- El archivo `package.json` con las dependencias necesarias. NO deben incluir el `package-lock.json` ni el directorio `./node_modules`
- Un archivo `README.md` con:
  - Los pasos de instalación de Playwright y sus dependencias
  - Las instrucciones para ejecutar las pruebas
  - Cualquier consideración adicional necesaria

### 1.5 Criterios de evaluación:

- El zip tiene un archivo README completo y el código solicitado está correctamente estructurado. **[5 puntos]**
- El método `randomEvent()` funciona de acuerdo con la especificación dada y utiliza correctamente la API de Playwright. **[45 puntos]**
- El monkey es funcional, maneja los errores apropiadamente y sigue las mejores prácticas de Playwright. **[50 puntos]**

**La evaluación tendrá en cuenta la inclusión de la totalidad de componentes solicitados y la calidad de cada uno de acuerdo con la rúbrica establecida.**
