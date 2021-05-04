const express = require('express')
const routes = express.Router()

routes.get('/sounds/title', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/title.html`);
});

routes.get('/sounds/item-coletado', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/item-coletado.html`);
});

routes.get('/sounds/risada-malvada', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/risada-malvada.html`);
});

routes.get('/sounds/porta-entrar', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/porta-entrar.html`);
});

routes.get('/sounds/porta-sair', (req, resp) => {
    return resp.sendFile(`${__dirname}/views/sound/porta-sair.html`);
});

module.exports = routes