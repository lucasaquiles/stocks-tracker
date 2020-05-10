

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
const stockRouters = require('./routers/stocks')

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.use('/stocks', stockRouters);

app.listen(process.env.PORT || 8081)
