
const api = require('axios-cache-adapter').setup()
const cheerio = require("cheerio")

exports.listAll = function (req, res) {

    res.send(
        [
            {
                code: "IBOV",
                amount: 6,
                value: 671.0
            },
            {
                code: "XPXPEY",
                amount: 2,
                value: 671.0
            },
            {
                code: "XPCAGY2",
                amount: 2,
                value: 671.0
            }
        ]
    )
};

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
