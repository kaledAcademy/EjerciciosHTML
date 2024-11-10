const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../03-tablas/03-tablas-01/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener una tabla', () => {
        test('El archivo debe tener <table>', () => {
            expect(html).toMatch(/<table>/);
        });
    });

    describe('Debe contener un encabezado de tabla para nombres', () => {
        test('El archivo debe tener <th>Nombre<\/th>', () => {
            expect(html).toMatch(/<th>Nombre<\/th>/);
        });
    });

    describe('Debe contener un encabezado de tabla para edades', () => {
        test('El archivo debe tener <th>Edad<\/th>', () => {
            expect(html).toMatch(/<th>Edad<\/th>/);
        });
    });

    describe('Debe contener una celda con el nombre Juan', () => {
        test('El archivo debe tener <td>Juan<\/td>', () => {
            expect(html).toMatch(/<td>Juan<\/td>/);
        });
    });

    describe('Debe contener una celda con la edad 30', () => {
        test('El archivo debe tener <td>30<\/td>', () => {
            expect(html).toMatch(/<td>30<\/td>/);
        });
    });

    describe('Debe contener una celda con el nombre María', () => {
        test('El archivo debe tener <td>María<\/td>', () => {
            expect(html).toMatch(/<td>María<\/td>/);
        });
    });

    describe('Debe contener una celda con la edad 25', () => {
        test('El archivo debe tener <td>25<\/td>', () => {
            expect(html).toMatch(/<td>25<\/td>/);
        });
    });
});
