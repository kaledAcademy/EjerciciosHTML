const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../02-formularios/02-formularios-01/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

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

    describe('Debe contener una etiqueta label para el email', () => {
        test('El archivo debe tener <label for="email">Email:</label>', () => {
            expect(html).toMatch(/<label for="email">Email:<\/label>/);
        });
    });

    describe('Debe contener un campo de email', () => {
        test('El archivo debe tener <input type="email" id="email" name="email">', () => {
            expect(html).toMatch(/<input type="email" id="email" name="email">/);
        });
    });

    describe('Debe contener un botón de envío', () => {
        test('El archivo debe tener <button type="submit">Enviar</button>', () => {
            expect(html).toMatch(/<button type="submit">Enviar<\/button>/);
        });
    });
});