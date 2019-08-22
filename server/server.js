const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));

app.get('/api', (req, res) => {
    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.APIKEY}`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});
module.exports = app;
