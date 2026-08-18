// server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  let dateObj;

  if (!date) {
    // Empty parameter -> current time
    dateObj = new Date();
  } else if (/^\d+$/.test(date)) {
    // Unix timestamp (all digits) -> must be parsed as a number, in ms
    dateObj = new Date(parseInt(date, 10));
  } else {
    // Otherwise let Date try to parse it directly (e.g. "2015-12-25")
    dateObj = new Date(date);
  }

  if (dateObj.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString()
  });
});

const listener = app.listen(process.env.PORT || 8000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});