const { pagina } = require("./paginaScraper");

const escrapearPagina = async (navegador_instancia) => {

    let navegador;

    try {
        navegador = await navegador_instancia;
        await pagina.scrapear(navegador);
    } catch (error) {
        console.log(`No se ha podido iniciar el scraper del sitio: ${error}`)
    }

}

module.exports = { escrapearPagina };