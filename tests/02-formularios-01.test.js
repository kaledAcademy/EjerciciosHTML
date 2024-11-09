const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener un formulario con campos de texto y email', () => {
    const filePath = path.join(__dirname, '../02-formularios/02-formularios-01/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<form>/);
    expect(html).toMatch(/<label for="nombre">Nombre:<\/label>/);
    expect(html).toMatch(/<input type="text" id="nombre" name="nombre">/);
    expect(html).toMatch(/<label for="email">Email:<\/label>/);
    expect(html).toMatch(/<input type="email" id="email" name="email">/);
    expect(html).toMatch(/<button type="submit">Enviar<\/button>/);
});