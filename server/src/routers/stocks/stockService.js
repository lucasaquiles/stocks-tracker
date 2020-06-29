
const cheerio = require("cheerio")

exports.listAll = async function () {
    const stocks = await [];
    return stocks;
}

exports.extract =  function (response) {

    const html = response;
    const $ =  cheerio.load(html);

    const base = $("#informations--indexes .item").text().split("\n");

    const cotacaoWrapperInfo = $("#quotations--infos-wrapper");
    const valorCotacao = cotacaoWrapperInfo.find($('.quotation')).text().split("\n");
    
    const yeldValue = Number.parseFloat(base[1].trim().replace("R$", "").replace(",", ".").trim());
    const dividendos = Number.parseFloat(base[4].trim().replace("R$", "").replace(",", ".").trim());
    const stockValue = Number.parseFloat(valorCotacao[2].trim().replace(",","."));

    return {
        dividendYeld: yeldValue,
        lastDividend: dividendos,
        value: stockValue
    };
}