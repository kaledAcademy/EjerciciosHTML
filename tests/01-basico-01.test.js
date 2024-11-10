const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
    const filePath = path.join(__dirname, '../01-basico/basico-01/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Estructura básica de HTML', () => {
        test('Debe contener el DOCTYPE', () => {
    expect(html).toMatch(/<!DOCTYPE html>/);
        });

        test('Debe contener la etiqueta <html> con el atributo lang="es"', () => {
    expect(html).toMatch(/<html lang="es">/);
        });

        test('Debe contener la etiqueta <head>', () => {
    expect(html).toMatch(/<head>/);
        });

        test('Debe contener la etiqueta <meta charset="UTF-8">', () => {
    expect(html).toMatch(/<meta charset="UTF-8">/);
        });

        test('Debe contener la etiqueta <title> dentro del head con el texto "Ejercicio Básico"', () => {
    expect(html).toMatch(/<title>Ejercicio Básico<\/title>/);
        });

        test('Debe contener la etiqueta <body>', () => {
    expect(html).toMatch(/<body>/);
        });

        test('Debe contener la etiqueta <h1> dentro de body con el texto "Hola Mundo"', () => {
    expect(html).toMatch(/<h1>Hola Mundo<\/h1>/);
        });
    });
});