const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../03-tablas/03-tablas-02/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener una tabla', () => {
        test('El archivo debe tener <table>', () => {
            expect(html).toMatch(/<table>/);
        });
    });

    describe('Debe contener un título de tabla', () => {
        test('El archivo debe tener <caption>Lista de Estudiantes<\/caption>', () => {
            expect(html).toMatch(/<caption>Lista de Estudiantes<\/caption>/);
        });
    });

    describe('Debe contener un encabezado de tabla', () => {
        test('El archivo debe tener <thead>', () => {
            expect(html).toMatch(/<thead>/);
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

    describe('Debe contener un encabezado de tabla para grados', () => {
        test('El archivo debe tener <th>Grado<\/th>', () => {
            expect(html).toMatch(/<th>Grado<\/th>/);
        });
    });

    describe('Debe contener un encabezado de tabla para correos electrónicos', () => {
        test('El archivo debe tener <th>Correo Electrónico<\/th>', () => {
            expect(html).toMatch(/<th>Correo Electrónico<\/th>/);
        });
    });

    describe('Debe contener un cuerpo de tabla', () => {
        test('El archivo debe tener <tbody>', () => {
            expect(html).toMatch(/<tbody>/);
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

    describe('Debe contener una celda con el grado 10', () => {
        test('El archivo debe tener <td>10<\/td>', () => {
            expect(html).toMatch(/<td>10<\/td>/);
        });
    });

    describe('Debe contener una celda con el correo electrónico juan@example.com', () => {
        test('El archivo debe tener <td>juan@example.com<\/td>', () => {
            expect(html).toMatch(/<td>juan@example.com<\/td>/);
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

    describe('Debe contener una celda con el grado 12', () => {
        test('El archivo debe tener <td>12<\/td>', () => {
            expect(html).toMatch(/<td>12<\/td>/);
        });
    });

    describe('Debe contener una celda con el correo electrónico maria@example.com', () => {
        test('El archivo debe tener <td>maria@example.com<\/td>', () => {
            expect(html).toMatch(/<td>maria@example.com<\/td>/);
        });
    });

    describe('Debe contener una celda con el nombre Carlos', () => {
        test('El archivo debe tener <td>Carlos<\/td>', () => {
            expect(html).toMatch(/<td>Carlos<\/td>/);
        });
    });

    describe('Debe contener una celda con la edad 28', () => {
        test('El archivo debe tener <td>28<\/td>', () => {
            expect(html).toMatch(/<td>28<\/td>/);
        });
    });

    describe('Debe contener una celda con el grado 11', () => {
        test('El archivo debe tener <td>11<\/td>', () => {
            expect(html).toMatch(/<td>11<\/td>/);
        });
    });

    describe('Debe contener una celda con el correo electrónico carlos@example.com', () => {
        test('El archivo debe tener <td>carlos@example.com<\/td>', () => {
            expect(html).toMatch(/<td>carlos@example.com<\/td>/);
        });
    });
});
