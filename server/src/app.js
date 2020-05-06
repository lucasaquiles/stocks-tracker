const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express() 
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.get('/stocks', (req, res) => {

    res.send(
        [
            {
                code: "IBOV",
                amount: 6
            },
            {
                code: "XPXPEY",
                amount: 2
            },
            {
                code: "XPCAGY2",
                amount: 2
            }
        ]
    )
})

app.listen(process.env.PORT || 8081)
