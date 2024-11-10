const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../04-multimedia/04-multimedia-01/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener una imagen', () => {
        test('El archivo debe tener <img src="imagen.jpg" alt="Descripción de la imagen">', () => {
            expect(html).toMatch(/<img src="imagen.jpg" alt="Descripción de la imagen">/);
        });
    });

    describe('Debe contener un video', () => {
        test('El archivo debe tener <video controls>', () => {
            expect(html).toMatch(/<video controls>/);
        });
    });

    describe('Debe contener una fuente de video', () => {
        test('El archivo debe tener <source src="video.mp4" type="video/mp4">', () => {
            expect(html).toMatch(/<source src="video.mp4" type="video\/mp4">/);
        });
    });
});
