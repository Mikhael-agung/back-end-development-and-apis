import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { inputCleaner, inputValidator } from './middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/form');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static('public'));

app.post('/submit', inputCleaner, inputValidator, (req, res) => {
    res.send(`Username: ${req.body.username}, Comment: ${req.body.comment}`);
});

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});