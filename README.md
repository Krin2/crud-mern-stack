# crud-mern-stack
Curso para crear aplicacion usando MERN.

- M MongoDB
- E Express
- R React
- N Node

# Estructura del proyecto
El proyecto estara estructurado en dos carpetas principales, una para el cliente y otra para el servidor
```
|__ CRUD-MERN-STACK
|        |___ cliente/
|___ servidor

```
# Instalacion de dependencias
## Cliente
Para usar los comandos de React es necesario instalar la dependencia `create-react-app`
```
npm install -g create-react-app
```

Para usar las rutas de react, es necesario instalar la dependencia `react-router-dom`
```
npm install react-router-dom
```
## Servidor
Se instalaron las siguientes dependencias:
- *nodemon*: permite que la aplicacion se reinicie automaticamente cada vez que se detecta un cambio en el codigo
- *express*: permite crear un servidor web
- *mongoose*: permite la conexion con una base de datos de mongoDB  

```
npm install mongoose express
npm install -D nodemon
```
# Creacion del cliente usando React
Para autogenerar la estructura del cliente usando React, ejecutar
´´´
npx create-react-app cliente
´´´

# Conexion servidor
Para crear una conexion web usamos express
```javascript
const express = require('express')
const app = express()

const PUERTO = 5000

// ruta inicial
app.get('/', (req,res) => {
    res.end('Ruta de inicio del backend')
})

// configurar servidor basico
app.listen(PUERTO, function(){
    console.log(`El servidor Node esta corriendo correctamente en el puerto ${PUERTO}`)
})
```
En este codigo vemos los requisitos minimos como para generar una conexion de servidor.

Los pasos son los siguientes:
1. crear instancia de express
2. definir la ruta inicial 
3. hacer que la instancia creada escuche algun puerto
