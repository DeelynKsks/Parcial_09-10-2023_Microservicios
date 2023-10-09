const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', async (req, res) => {
    try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        res.json({
            dolarOficial: data.oficial,
            dolarBlue: data.blue
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los datos');
    }
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});
