const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bye there')
});

app.listen(8080, () => {
    console.log('Listining on port 8080');
});

