const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener una tabla con nombres, edades, grados y correos electrónicos', () => {
    const filePath = path.join(__dirname, '../03-tablas/03-tablas-02/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<table>/);
    expect(html).toMatch(/<caption>Lista de Estudiantes<\/caption>/);
    expect(html).toMatch(/<thead>/);
    expect(html).toMatch(/<th>Nombre<\/th>/);
    expect(html).toMatch(/<th>Edad<\/th>/);
    expect(html).toMatch(/<th>Grado<\/th>/);
    expect(html).toMatch(/<th>Correo Electrónico<\/th>/);
    expect(html).toMatch(/<tbody>/);
    expect(html).toMatch(/<td>Juan<\/td>/);
    expect(html).toMatch(/<td>30<\/td>/);
    expect(html).toMatch(/<td>10<\/td>/);
    expect(html).toMatch(/<td>juan@example.com<\/td>/);
    expect(html).toMatch(/<td>María<\/td>/);
    expect(html).toMatch(/<td>25<\/td>/);
    expect(html).toMatch(/<td>12<\/td>/);
    expect(html).toMatch(/<td>maria@example.com<\/td>/);
    expect(html).toMatch(/<td>Carlos<\/td>/);
    expect(html).toMatch(/<td>28<\/td>/);
    expect(html).toMatch(/<td>11<\/td>/);
    expect(html).toMatch(/<td>carlos@example.com<\/td>/);
});