const express = require('express')
const router = express.Router()

const stockController = require('./StockController')

router.get('/', stockController.listAll);
router.get('/:code', stockController.find);
router.post('/', stockController.addNew);

module.exports = router;
