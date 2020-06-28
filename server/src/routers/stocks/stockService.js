
const cheerio = require("cheerio")

exports.listAll = async function () {
    const stocks = await [];
    return stocks;
}

exports.extract =  function (response) {

    const html = response;
    const $ =  cheerio.load(html);

    const base = $("#informations--indexes .item").text().split("\n");
    const yeldValue = Number.parseFloat(base[1].trim().replace("R$", "").replace(",", ".").trim());
    const dividendos = Number.parseFloat(base[4].trim().replace("R$", "").replace(",", ".").trim());
    const stockValue = Number.parseFloat(base[10].trim().replace("R$", "").replace(",", ".").trim());

    return {
        dividendYeld: yeldValue,
        lastDividend: dividendos,
        value: stockValue
    };
}