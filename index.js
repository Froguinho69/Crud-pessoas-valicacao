const express = require('express')
const app = express()

app.use(express.json())

const pessoas = require('./routes/pessoas')
app.use(pessoas)

app.listen(3000, () =>{
    console.log("Aplicação crud pessoas rodando em http://localhost:3000")
    
})