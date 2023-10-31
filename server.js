const express = require('express')
const app = express()

// Importar conexion con MongoDB
const archivoBD = require('./conexion')


const PUERTO = 5000
// Especificar la ruta de inicio

app.get('/', (req,res) => {
    res.end('Ruta de inicio del backend')
})
// configurar servidor basico
app.listen(PUERTO, function(){
    console.log(`El servidor Node esta corriendo correctamente en el puerto ${PUERTO}`)
})