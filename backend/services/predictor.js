const { PythonShell } = require('python-shell');
const fs = require('fs');
const sharp = require('sharp');

class Predictor {
    async identifyImage(image) {
        let result = "";
    
        const imageData = image.replace(/^data:image\/png;base64,/, '');
        
        const resizedImageData = await sharp(Buffer.from(imageData, 'base64')).resize(28, 28).toBuffer();
        
        fs.writeFile('./Images/test.png', resizedImageData, 'base64', function(err) {
            if (err) {
                console.error('Ошибка при сохранении изображения:', err);
                return { error: 'Произошла ошибка при сохранении изображения на сервере' };
            } else {
                console.log('Изображение успешно сохранено на сервере');
                return { message: 'Изображение успешно сохранено на сервере' };
            }
        });
        
        const options = {
            pythonPath: './.venv/Scripts/python'
        };

        await PythonShell.run('./services/test.py', options).then((messages) => {
            result = messages[2]
        });

        return result;
    }
}


module.exports = Predictor;