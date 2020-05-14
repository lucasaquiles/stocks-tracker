const db = require("../../../db")

exports.listAll = async function () {
    const stocks = await db('stocks');
    return stocks;
}
