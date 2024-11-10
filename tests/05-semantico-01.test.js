const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../05-semantico/05-semantico-01/index.html');
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
});
