const fs = require('fs');
const path = require('path');

describe('Pruebas del archivo index.html', () => {
    let html;

    beforeAll(() => {
        const filePath = path.join(__dirname, '../04-multimedia/04-multimedia-02/index.html');
        html = fs.readFileSync(filePath, 'utf8');
    });

    describe('Debe contener un encabezado h1', () => {
        test('El archivo debe tener <h1>Galería Multimedia</h1>', () => {
            expect(html).toMatch(/<h1>Galería Multimedia<\/h1>/);
        });
    });

    describe('Debe contener la primera imagen', () => {
        test('El archivo debe tener <img src="imagen1.jpg" alt="Descripción de la imagen 1">', () => {
            expect(html).toMatch(/<img src="imagen1.jpg" alt="Descripción de la imagen 1">/);
        });
    });

    describe('Debe contener la segunda imagen', () => {
        test('El archivo debe tener <img src="imagen2.jpg" alt="Descripción de la imagen 2">', () => {
            expect(html).toMatch(/<img src="imagen2.jpg" alt="Descripción de la imagen 2">/);
        });
    });

    describe('Debe contener un video', () => {
        test('El archivo debe tener <video controls>', () => {
            expect(html).toMatch(/<video controls>/);
        });
    });

    describe('Debe contener una fuente de video', () => {
        test('El archivo debe tener <source src="video1.mp4" type="video/mp4">', () => {
            expect(html).toMatch(/<source src="video1.mp4" type="video\/mp4">/);
        });
    });

    describe('Debe contener un audio', () => {
        test('El archivo debe tener <audio controls>', () => {
            expect(html).toMatch(/<audio controls>/);
        });
    });

    describe('Debe contener una fuente de audio', () => {
        test('El archivo debe tener <source src="audio1.mp3" type="audio/mp3">', () => {
            expect(html).toMatch(/<source src="audio1.mp3" type="audio\/mp3">/);
        });
    });
});
