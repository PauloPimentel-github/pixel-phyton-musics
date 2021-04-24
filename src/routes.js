const express = require('express')
const routes = express.Router()

routes.get('/', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/index.html`);
});

module.exports = routes