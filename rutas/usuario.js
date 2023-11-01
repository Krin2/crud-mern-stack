const express = require('express')
const router = express.Router()

// Definicion del modelo
const mongoose = require('mongoose')
const esquema = mongoose.Schema

const esquemaUsuario = new esquema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model('usuarios', esquemaUsuario)

module.exports = router

// Definicion de rutas
router.get('/hola-mundo', (req, res) => {
    res.end('Hola desde rutas de usuarios')
})
