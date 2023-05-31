const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const User = require('./models/User')

const PORT = 3000
const hostname = 'localhost'

// config express
app.set(express.urlencoded({extended:true}))
app.set(express.json())
app.set(express.static('public'))

// config express-handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Rotas
app.get('/',(req,res)=>{
    res.render('home')
})

// ===============================================================

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch(()=>{
    console.log(`O servidor não está rodando`)
})

