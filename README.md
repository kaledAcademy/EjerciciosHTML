# 👨‍💻 Bienvenido a Kaled Academy 👨‍💻

¡Bienvenidos! 🚀 Este proyecto contiene una serie de ejercicios básicos de HTML para ayudarte a aprender y practicar tus habilidades en el desarrollo web. 🌐

## Instrucciones para ejecutar el proyecto y los tests

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias necesarias ejecutando el siguiente comando:

```sh
npm install
```

### Ejecución de los tests

Para ejecutar los tests, utiliza el siguiente comando:
```sh
npm test
```

### Ejercicio 1: Estructura básica de HTML

1. Navega al directorio 01-basico/basico-01.
2. Abre el archivo index.html.
3. Asegúrate de que el archivo contiene la estructura básica de HTML:

```html
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Básico</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>
```
### Ejercicio 2: Estructura básica de HTML con contenido adicional

1. Navega al directorio `01-basico/basico-02`.
2. Abre el archivo `index.html`.
3. Asegúrate de que el archivo contiene la siguiente estructura básica de HTML con contenido adicional:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Básico 2</title>
</head>
<body>
    <header>
        <h1>Bienvenido a Kaled Academy</h1>
    </header>
    <main>
        <h2>Introducción a HTML</h2>
        <p>HTML es el lenguaje estándar para crear páginas web.</p>
        <ul>
            <li>HTML significa HyperText Markup Language</li>
            <li>HTML describe la estructura de una página web</li>
            <li>HTML consiste en una serie de elementos</li>
            <li>Los elementos HTML le dicen al navegador cómo mostrar el contenido</li>
        </ul>
    </main>
</body>
</html>
```
### En todos los demas Ejercicios apartir del ejercicios 2,3,4,5
1. Navega a cada directorio y busca cada ejercicio 01-02 .
2. Abre el archivo `index.html`.
3. Asegúrate de que el archivo debe contener siempre la extructura  básica de HTML con contenido adicional, siguiendo cada test.

### Ayuda para resolver cada ejercicio
1. Mirar la informacion que muestra el test.
2. Analiza los 2 primeros test y revisa como pasaron.
2. Examina cada peticion en la carpeta test/**-**-01.test.js y test/**-**-02.test.js y valida cada requerimiento que esta pidiendo que sea colocado en el archivo index.html del ejercicio.

```javascript
describe('Debe contener un formulario', () => {
    test('El archivo debe tener <form>', () => {
        expect(html).toMatch(/<form>/);
    });
});

describe('Debe contener una etiqueta label para el nombre', () => {
    test('El archivo debe tener <label for="nombre">Nombre:</label>', () => {
        expect(html).toMatch(/<label for="nombre">Nombre:<\/label>/);
    });
});
 describe('Debe contener un campo de texto para el nombre', () => {
        test('El archivo debe tener <input type="text" id="nombre" name="nombre">', () => {
            expect(html).toMatch(/<input type="text" id="nombre" name="nombre">/);
        });
    });
```