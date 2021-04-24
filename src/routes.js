const express = require('express')
const routes = express.Router()

routes.get('/sounds/background-music', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/background-music.html`);
});

module.exports = routes