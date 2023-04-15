import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 5050;
const __filename = fileURLToPath(import.meta.url);


app.use( express.static('./public/roadtrip/') );

app.get('/', (req, res) => {
    res.sendFile(dirname(__filename) + '/public/roadtrip/index.html');
});

app.get('/generic', (req, res) => {
    res.sendFile(dirname(__filename) + '/public/roadtrip/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(dirname(__filename) + '/public/roadtrip/elements.html');
});

app.get('*', (req, res) => {
    res.sendFile(dirname(__filename) + '/public/404.html');
});

app.listen(port, () => {
    console.log(`The server is running on the port ${'http://localhost:' + port}`);
});