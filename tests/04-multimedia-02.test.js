const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener múltiples imágenes, un video y un audio', () => {
    const filePath = path.join(__dirname, '../04-multimedia/04-multimedia-02/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<h1>Galería Multimedia<\/h1>/);
    expect(html).toMatch(/<img src="imagen1.jpg" alt="Descripción de la imagen 1">/);
    expect(html).toMatch(/<img src="imagen2.jpg" alt="Descripción de la imagen 2">/);
    expect(html).toMatch(/<video controls>/);
    expect(html).toMatch(/<source src="video1.mp4" type="video\/mp4">/);
    expect(html).toMatch(/<audio controls>/);
    expect(html).toMatch(/<source src="audio1.mp3" type="audio\/mp3">/);
});