const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener una tabla con nombres y edades', () => {
    const filePath = path.join(__dirname, '../03-tablas/03-tablas-01/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<table>/);
    expect(html).toMatch(/<th>Nombre<\/th>/);
    expect(html).toMatch(/<th>Edad<\/th>/);
    expect(html).toMatch(/<td>Juan<\/td>/);
    expect(html).toMatch(/<td>30<\/td>/);
    expect(html).toMatch(/<td>María<\/td>/);
    expect(html).toMatch(/<td>25<\/td>/);
});