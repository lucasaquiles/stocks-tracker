
const api = require('axios-cache-adapter').setup()

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

        const content = stockService.extract(response.data);
        res.send(content);
    }).catch((errors) => {  

        res.status(errors.response.status)
        res.send({
            "code": errors.response.status,
            "message": errors.response.statusText
        }) 
    })
}

exports.addNew = function (req, res) {

    const requestedURL = "https://fiis.com.br/"  + req.body.name;
    const contentData = { data: null }

    console.log("request to " + requestedURL);

    api.get(requestedURL, {
        cache: {
            maxAge: 2 * 60 * 1000,
            exclude: { query: false }
        }
    }).then((response) => {

        const content = stockService.extract(response.data);
        contentData.data = content.value;
        res.send(contentData);
    }).catch((errors) => {
        res.status(errors.response.status)
        res.send({
            "code": errors.response.status,
            "message": errors.response.statusText
        }) 
    })
}
