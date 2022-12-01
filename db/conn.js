const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado')
}catch(err) {
    console.log('Erro: ', err)
}

module.exports = sequelize