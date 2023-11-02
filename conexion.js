require('dotenv').config()
const mongoose = require('mongoose');

// crea la conexion
// mongodb+srv://pokedex_user:contrasenia1@pokedexcluster.idzqtd4.mongodb.net/
mongoose.connect(process.env.CONEXION_MONGO);

const objetoBd = mongoose.connection

// Verifico que la conexion se haya realizado
objetoBd.on('connected', () => {
    console.log('MongoDB conectado a traves de mongoose')
})

// En caso de error envio un mensaje de fallo de conexion
objetoBd.on('error', () => {
    console.log('Error en la conexion con mongoDB')
})

module.exports = mongoose
