const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../02-formularios/02-formularios-02/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener un formulario', () => {
        test('El archivo debe tener <form>', () => {
            expect(html).toMatch(/<form>/);
        });
    });

    describe('Debe contener una etiqueta label para el nombre', () => {
        test('El archivo debe tener <label for="nombre">Nombre:<\/label>', () => {
            expect(html).toMatch(/<label for="nombre">Nombre:<\/label>/);
        });
    });

    describe('Debe contener un campo de texto para el nombre', () => {
        test('El archivo debe tener <input type="text" id="nombre" name="nombre" required>', () => {
            expect(html).toMatch(/<input type="text" id="nombre" name="nombre" required>/);
        });
    });

    describe('Debe contener una etiqueta label para el email', () => {
        test('El archivo debe tener <label for="email">Email:<\/label>', () => {
            expect(html).toMatch(/<label for="email">Email:<\/label>/);
        });
    });

    describe('Debe contener un campo de email', () => {
        test('El archivo debe tener <input type="email" id="email" name="email" required>', () => {
            expect(html).toMatch(/<input type="email" id="email" name="email" required>/);
        });
    });

    describe('Debe contener una etiqueta label para la contraseña', () => {
        test('El archivo debe tener <label for="password">Contraseña:<\/label>', () => {
            expect(html).toMatch(/<label for="password">Contraseña:<\/label>/);
        });
    });

    describe('Debe contener un campo de contraseña', () => {
        test('El archivo debe tener <input type="password" id="password" name="password" required>', () => {
            expect(html).toMatch(/<input type="password" id="password" name="password" required>/);
        });
    });

    describe('Debe contener una etiqueta label para la edad', () => {
        test('El archivo debe tener <label for="edad">Edad:<\/label>', () => {
            expect(html).toMatch(/<label for="edad">Edad:<\/label>/);
        });
    });

    describe('Debe contener un campo de número para la edad', () => {
        test('El archivo debe tener <input type="number" id="edad" name="edad" min="1" max="100">', () => {
            expect(html).toMatch(/<input type="number" id="edad" name="edad" min="1" max="100">/);
        });
    });

    describe('Debe contener una etiqueta label para el género', () => {
        test('El archivo debe tener <label for="genero">Género:<\/label>', () => {
            expect(html).toMatch(/<label for="genero">Género:<\/label>/);
        });
    });
});
