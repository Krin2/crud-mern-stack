const express = require('express')
const router = express.Router()

// Definicion del modelo
const mongoose = require('mongoose')
const esquema = mongoose.Schema

const esquemaUsuario = new esquema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', esquemaUsuario)

module.exports = router

// Definicion de rutas
// Agregar usuario
router.post('/agregarusuario', (req, res) => {
    const { nombre, email, telefono, idusuario } = req.body

    // Cargo los datos del modelo
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario,
    })

    // Guardo los datos en MongoDB
    nuevoUsuario.save().then(() => {
        res.send('Usuario agregado correctamente')
    }).catch((error) => {
        res.send(`El usuario no pudo ser agregado: ${error}`)
    })
})

// Obtener usuarios
router.get('/obtenerusuarios', (req, res) => {
    const usuarios = ModeloUsuario.find({})
        .then( docs => {
            res.send(docs)
        })
        .catch( error => res.send(error))
})

// Ruta de prueba
router.get('/hola-mundo', (req, res) => {
    res.end('Hola desde rutas de usuarios')
})
