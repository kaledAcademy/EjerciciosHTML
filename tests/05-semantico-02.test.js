const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener elementos semánticos de HTML5 incluyendo un sidebar', () => {
    const filePath = path.join(__dirname, '../05-semantico/05-semantico-02/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<header>/);
    expect(html).toMatch(/<nav>/);
    expect(html).toMatch(/<aside>/);
    expect(html).toMatch(/<section>/);
    expect(html).toMatch(/<article>/);
    expect(html).toMatch(/<footer>/);
    expect(html).toMatch(/<h1>Encabezado Principal<\/h1>/);
    expect(html).toMatch(/<h2>Barra Lateral<\/h2>/);
    expect(html).toMatch(/<p>Contenido de la barra lateral.<\/p>/);
    expect(html).toMatch(/<h2>Artículo 1<\/h2>/);
    expect(html).toMatch(/<p>Contenido del artículo 1.<\/p>/);
    expect(html).toMatch(/<h2>Artículo 2<\/h2>/);
    expect(html).toMatch(/<p>Contenido del artículo 2.<\/p>/);
    expect(html).toMatch(/<p>Pie de página<\/p>/);
});