const pagina = {
    url:'https://owen.w3spaces.com/prueba/',
    async scrapear(nav){
        let page = await nav.newPage();
        console.log(`Navegando a ${this.url}`);
        await page.goto(this.url);
    }    
}

module.exports = {
    pagina
};