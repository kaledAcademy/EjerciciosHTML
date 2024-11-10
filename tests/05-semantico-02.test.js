const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../05-semantico/05-semantico-02/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener un header', () => {
        test('El archivo debe tener <header>', () => {
            expect(html).toMatch(/<header>/);
        });
    });

    describe('Debe contener un nav', () => {
        test('El archivo debe tener <nav>', () => {
            expect(html).toMatch(/<nav>/);
        });
    });

    describe('Debe contener un aside', () => {
        test('El archivo debe tener <aside>', () => {
            expect(html).toMatch(/<aside>/);
        });
    });

    describe('Debe contener un section', () => {
        test('El archivo debe tener <section>', () => {
            expect(html).toMatch(/<section>/);
        });
    });

    describe('Debe contener un article', () => {
        test('El archivo debe tener <article>', () => {
            expect(html).toMatch(/<article>/);
        });
    });

    describe('Debe contener un footer', () => {
        test('El archivo debe tener <footer>', () => {
            expect(html).toMatch(/<footer>/);
        });
    });

    describe('Debe contener un encabezado h1', () => {
        test('El archivo debe tener <h1>Encabezado Principal</h1>', () => {
            expect(html).toMatch(/<h1>Encabezado Principal<\/h1>/);
        });
    });

    describe('Debe contener un encabezado h2 para la barra lateral', () => {
        test('El archivo debe tener <h2>Barra Lateral</h2>', () => {
            expect(html).toMatch(/<h2>Barra Lateral<\/h2>/);
        });
    });

    describe('Debe contener un párrafo en la barra lateral', () => {
        test('El archivo debe tener <p>Contenido de la barra lateral.</p>', () => {
            expect(html).toMatch(/<p>Contenido de la barra lateral.<\/p>/);
        });
    });

    describe('Debe contener un encabezado h2 para el artículo 1', () => {
        test('El archivo debe tener <h2>Artículo 1</h2>', () => {
            expect(html).toMatch(/<h2>Artículo 1<\/h2>/);
        });
    });
});
