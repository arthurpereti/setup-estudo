const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('bd_d', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log(`Banco de Dados conectado`)
// }).catch(()=>{
//     console.error(`Banco de Dados não foi conectado`)
// })

module.exports = sequelize