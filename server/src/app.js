

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const api = require('axios-cache-adapter').setup()

const cheerio = require("cheerio")
const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())




app.post('/stocks', (req, res) => {
    const requestedURL = "https://www.fundsexplorer.com.br/funds/" + req.body.name;
    const contentData = { data: null }

    console.log("request to " + requestedURL);

    api.get(requestedURL, {
        cache: {
            maxAge: 2 * 60 * 1000,
            exclude: { query: false }
        }
    })
        .then((response) => {

            const html = response.data;
            const $ = cheerio.load(html);
            const yeldValue = $("span.indicator-value").text().split("\n")[3].trim();
            const parsedNumber = Number.parseFloat(yeldValue.replace("R$", "").replace(",", ".").trim())

            contentData.data = parsedNumber;
            res.send(contentData);
        })
        .catch((errors) => {
            console.log("errors: " + errors)
        })


});

app.get('/stocks', (req, res) => {

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
})

app.listen(process.env.PORT || 8081)
