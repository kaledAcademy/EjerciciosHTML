const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener elementos semánticos de HTML5', () => {
    const filePath = path.join(__dirname, '../05-semantico/05-semantico-01/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<header>/);
    expect(html).toMatch(/<nav>/);
    expect(html).toMatch(/<section>/);
    expect(html).toMatch(/<article>/);
    expect(html).toMatch(/<footer>/);
});