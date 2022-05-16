const puppeter = require('puppeteer');

const iniciarNavegador = async () => {

    let navegador;

    try {
        console.log("abriendo el navegador");
        navegador = await puppeter.launch(
            {
                headless: false, //headless: true -> sin interfaz
                args:[
                    "--disable-setuid-sandbox"
                ],
                ignoreHTTPSErrors:true
            }
        );
    } catch (error) {
        console.log('No se ha podido iniciar el navegador',error)
    }

    return navegador;

}

module.exports = {
    iniciarNavegador
}