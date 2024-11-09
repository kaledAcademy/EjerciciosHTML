const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener una imagen y un video', () => {
    const filePath = path.join(__dirname, '../04-multimedia/04-multimedia-01/index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    expect(html).toMatch(/<img src="imagen.jpg" alt="Descripción de la imagen">/);
    expect(html).toMatch(/<video controls>/);
    expect(html).toMatch(/<source src="video.mp4" type="video\/mp4">/);
});