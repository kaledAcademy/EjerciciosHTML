const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../01-basico/basico-02/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener el DOCTYPE', () => {
        test('El archivo debe tener <!DOCTYPE html>', () => {
            expect(html).toMatch(/<!DOCTYPE html>/);
        });
    });

    describe('Debe contener la etiqueta html con el atributo lang', () => {
        test('El archivo debe tener <html lang="es">', () => {
            expect(html).toMatch(/<html lang="es">/);
        });
    });

    describe('Debe contener la etiqueta head', () => {
        test('El archivo debe tener <head>', () => {
            expect(html).toMatch(/<head>/);
        });
    });

    describe('Debe contener la etiqueta meta charset', () => {
        test('El archivo debe tener <meta charset="UTF-8">', () => {
            expect(html).toMatch(/<meta charset="UTF-8">/);
        });
    });

    describe('Debe contener la etiqueta title', () => {
        test('El archivo debe tener <title>Ejercicio Básico 2</title>', () => {
            expect(html).toMatch(/<title>Ejercicio Básico 2<\/title>/);
        });
    });

    describe('Debe contener la etiqueta body', () => {
        test('El archivo debe tener <body>', () => {
            expect(html).toMatch(/<body>/);
        });
    });

    describe('Debe contener la etiqueta header', () => {
        test('El archivo debe tener <header> dentro de body', () => {
            expect(html).toMatch(/<header>/);
        });
    });

    describe('Debe contener la etiqueta h1', () => {
        test('El archivo debe tener <h1>Bienvenido a Kaled Academy</h1> dentro de header', () => {
            expect(html).toMatch(/<h1>Bienvenido a Kaled Academy<\/h1>/);
        });
    });

    describe('Debe contener la etiqueta main', () => {
        test('El archivo debe tener <main>', () => {
            expect(html).toMatch(/<main>/);
        });
    });

    describe('Debe contener la etiqueta h2 dentro de main', () => {
        test('El archivo debe tener <h2>Introducción a HTML</h2>', () => {
            expect(html).toMatch(/<h2>Introducción a HTML<\/h2>/);
        });
    });
});