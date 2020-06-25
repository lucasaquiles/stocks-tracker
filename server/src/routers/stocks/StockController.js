
const api = require('axios-cache-adapter').setup()
const cheerio = require("cheerio")

const stockService = require('./stockService')

exports.listAll = function (req, res) {

    const allStocks = []

    res.json(
        allStocks
    )
};

exports.find = function (req, res) {

    const requestedURL = "https://fiis.com.br/" + req.params.code;
    console.log("request to " + requestedURL);

    api.get(requestedURL, {
        cache: {
            maxAge: 5 * 60 * 1000,
            exclude: { query: false }
        }
    }).then((response) => {

        const html = response.data;
        const $ = cheerio.load(html);

        const base = $("#informations--indexes .item").text().split("\n");
        const yeldValue = Number.parseFloat(base[1].trim().replace("R$", "").replace(",", ".").trim());
        const dividendos = Number.parseFloat(base[4].trim().replace("R$", "").replace(",", ".").trim());
        const stockValue = Number.parseFloat(base[10].trim().replace("R$", "").replace(",", ".").trim());

        res.send(
            {
                dividendYeld: yeldValue,
                lastDividend: dividendos,
                value: stockValue
            }
        );
    }).catch((errors) => {
        console.log("errors: " + errors)
    })
}

exports.addNew = function (req, res) {

    const requestedURL = "https://www.fundsexplorer.com.br/funds/" + req.body.name;
    const contentData = { data: null }

    console.log("request to " + requestedURL);

    api.get(requestedURL, {
        cache: {
            maxAge: 2 * 60 * 1000,
            exclude: { query: false }
        }
    }).then((response) => {

        const html = response.data;
        const $ = cheerio.load(html);
        const yeldValue = $("span.indicator-value").text().split("\n")[3].trim();
        const parsedNumber = Number.parseFloat(yeldValue.replace("R$", "").replace(",", ".").trim())

        contentData.data = parsedNumber;
        res.send(contentData);
    }).catch((errors) => {
        console.log("errors: " + errors)
    })
}
