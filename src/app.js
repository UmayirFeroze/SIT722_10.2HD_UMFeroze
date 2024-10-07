const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY || 'default-key';

app.get('/', (req, res) => {
    res.send(`Hello World! The API key is: ${API_KEY}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});