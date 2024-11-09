const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener un formulario con campos de texto, email, contraseña, número y selección', () => {
    const filePath = path.join(__dirname, '../02-formularios/02-formularios-02/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<form>/);
    expect(html).toMatch(/<label for="nombre">Nombre:<\/label>/);
    expect(html).toMatch(/<input type="text" id="nombre" name="nombre" required>/);
    expect(html).toMatch(/<label for="email">Email:<\/label>/);
    expect(html).toMatch(/<input type="email" id="email" name="email" required>/);
    expect(html).toMatch(/<label for="password">Contraseña:<\/label>/);
    expect(html).toMatch(/<input type="password" id="password" name="password" required>/);
    expect(html).toMatch(/<label for="edad">Edad:<\/label>/);
    expect(html).toMatch(/<input type="number" id="edad" name="edad" min="1" max="100">/);
    expect(html).toMatch(/<label for="genero">Género:<\/label>/);
    expect(html).toMatch(/<select id="genero" name="genero">/);
    expect(html).toMatch(/<option value="masculino">Masculino<\/option>/);
    expect(html).toMatch(/<option value="femenino">Femenino<\/option>/);
    expect(html).toMatch(/<option value="otro">Otro<\/option>/);
    expect(html).toMatch(/<button type="submit">Enviar<\/button>/);
});