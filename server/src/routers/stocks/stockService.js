
const cheerio = require("cheerio")

exports.listAll = async function () {
    const stocks = await [];
    return stocks;
}

function parseFloat(value) {
    return Number.parseFloat(value.trim().replace("R$", "").replace(",", ".").trim());
}

function parseStringToFloatPercentage(value) {
    return Number.parseFloat(value.trim().replace("%$", "").replace(",", ".").trim());
}

exports.extract =  function (response) {

    const html = response;
    const $ =  cheerio.load(html);
    const base = $("#informations--indexes .item").text().split("\n");
    
    const cotacaoWrapperInfo = $("#quotations--infos-wrapper");
    const valorCotacao = cotacaoWrapperInfo.find($('.quotation')).text().split("\n");
    
    const wrapperInfo = $("#informations--basic .wrapper .item")[1]
    const tipoFII = $(wrapperInfo).find('.value').text()

    const sumary = findRendimentosUltimos12Meses($)
    const yeldValue = parseFloat(base[1].trim().replace("R$", "").replace(",", ".").trim());
    const dividendos = parseFloat(base[4].trim().replace("R$", "").replace(",", ".").trim());
    const stockValue = parseFloat(valorCotacao[2].trim().replace(",","."));

    return {
        dividendYeld: yeldValue,
        lastDividend: dividendos,
        value: stockValue,
        fiiType: tipoFII,
        sumary: sumary
    };
}

function findRendimentosUltimos12Meses($) {

    const tableRendimentosBase = $("#last-revenues--table tbody tr");
    const dividendLast12Months = [];

    tableRendimentosBase.each((index, element) => {
        const splitedElement = $(element).find("td");
        const item = {
            base: $(splitedElement.get(0)).text(),
            paymentDate: $(splitedElement.get(1)).text(),
            stockValue: parseFloat($(splitedElement.get(2)).text()),
            yeldPercentage: parseStringToFloatPercentage($(splitedElement.get(3)).text()),
            rendimento: parseFloat($(splitedElement.get(4)).text())
        };
        dividendLast12Months.push(item);
    });



    const sumary = {
        median: calcMedian(dividendLast12Months),
        average: calcAvergate(dividendLast12Months),
        dividendLast12Months: dividendLast12Months
    }

    return sumary
}

function calcAvergate(itens) {

    if(itens.length == 0){
        return 0.0
    }

    const sum =  itens.reduce((total, item) => {
        return total + ((item.rendimento))
    }, 0)

    return ((sum) / itens.length).toFixed(2)
    
}

function calcMedian(itens) {

    itens.sort((a,b) => {
        return a.rendimento > b.rendimento
    });

    const indiceCentral = itens.length / 2;
    if(itens.length % 2 == 0) {
        const sumCentralElements = itens[indiceCentral].rendimento + itens[indiceCentral + 1].rendimento;
        return ((sumCentralElements) / 2).toFixed(2)
    }
        
    return itens[indiceCentral].rendimento.toFixed(2)
}