const express = require('express')
const router = express.Router()

const stockController = require('./StockController')

router.get('/', stockController.listAll);
router.post('/', stockController.addNew);

module.exports = router;
