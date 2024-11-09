const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener una estructura básica de HTML con contenido adicional', () => {
    const filePath = path.join(__dirname, '../01-basico/basico-02/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<!DOCTYPE html>/);
    expect(html).toMatch(/<html lang="es">/);
    expect(html).toMatch(/<head>/);
    expect(html).toMatch(/<meta charset="UTF-8">/);
    expect(html).toMatch(/<title>Ejercicio Básico 2<\/title>/);
    expect(html).toMatch(/<body>/);
    expect(html).toMatch(/<header>/);
    expect(html).toMatch(/<h1>Bienvenido a Kaled Academy<\/h1>/);
    expect(html).toMatch(/<main>/);
    expect(html).toMatch(/<h2>Introducción a HTML<\/h2>/);
    expect(html).toMatch(/<p>HTML es el lenguaje estándar para crear páginas web.<\/p>/);
    expect(html).toMatch(/<ul>/);
    expect(html).toMatch(/<li>HTML significa HyperText Markup Language<\/li>/);
    expect(html).toMatch(/<li>HTML describe la estructura de una página web<\/li>/);
    expect(html).toMatch(/<li>HTML consiste en una serie de elementos<\/li>/);
    expect(html).toMatch(/<li>Los elementos HTML le dicen al navegador cómo mostrar el contenido<\/li>/);
});