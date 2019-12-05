const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const mongoose = require("mongoose")


const app = express()
let port = process.env.PORT || 3000

app.listen(port,() => {
    console.log('Servidor rodando na porta ' +  port)
})

mongoose.connect("mongodb+srv://api-node3:!123456@cluster0-wu7pw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false })

app.use(bodyParser.json())
app.use(cors())

const users ={
}




app.use("/", require("./src/routes.js"))