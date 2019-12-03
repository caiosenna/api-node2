const express = require('express')
const bodyParser = require("body-parser")

const mongoose = require("mongoose")


const app = express()
let port = 3000

app.listen(port,() => {
    console.log('Servidor rodando na porta ' +  port)
})

mongoose.connect("mongodb+srv://api-node3:!123456@cluster0-wu7pw.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())

const users ={
}


const User = require("./src/models/User")

app.post('/',async (req,res) => {

    const { nome , cidade , idade } = req.body
    const user = await User.create({ nome,cidade,idade})

    return res.json({user})
})
