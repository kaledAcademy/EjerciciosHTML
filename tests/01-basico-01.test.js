const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener una estructura básica de HTML', () => {
    const filePath = path.join(__dirname, '../01-basico/basico-01/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<!DOCTYPE html>/);
    expect(html).toMatch(/<html lang="es">/);
    expect(html).toMatch(/<head>/);
    expect(html).toMatch(/<meta charset="UTF-8">/);
    expect(html).toMatch(/<title>Ejercicio Básico<\/title>/);
    expect(html).toMatch(/<body>/);
    expect(html).toMatch(/<h1>Hola Mundo<\/h1>/);
});