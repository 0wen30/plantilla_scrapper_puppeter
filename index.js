const { iniciarNavegador } = require('./navegador');
const { escrapearPagina } = require('./pagina.controlador')

console.clear()

let navegador = iniciarNavegador();

escrapearPagina(navegador)
