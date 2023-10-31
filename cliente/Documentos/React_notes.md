# Notas acercva de React

## Bases
El uso de react consiste en la creacion de componentes

Cada componente se define como una funcion la cual debe serr exportada como default

```js
import React from 'react'
import UsuarioIndividual from './UsuarioIndividual'

function ListaUsuarios() {
    return (
        <div>
            <h2> Lista de usuarios</h2>
            <UsuarioIndividual/>
        </div>
    )
}

export default ListaUsuarios
```
Cada componente puede incorporar otros componentes

# Rutas con react-router-dom
Para poder definir rutas con esta dependencia debemos importar los siguientes elementos

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

Luego, podemos usar estos elementos para definir las rutas poco sigue

```js
function App() {
  return (
    <div className="App">
      <h1> CRUD MERN STACK</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <ListaUsuarios/> } exact></Route>
                    <Route path='/agregarusuario' element={ <AgregarUsuario/> } exact></Route>
                    <Route path='/editarusuario' element={ <EditarUsuario/> } exact></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}
```
En la misma, se usa el `BrowserRouter` para indicar que dentro de el estaran definidas las rutas todas las rutas de la pagina.

Luego se debe colocar el componente `Routes` que es el que contendrá todas las rutas

Y finalmente, se usa el componente `Route` para nombrar cada ruta. En el mismo, se definen los siguientes parametros:
- `path`: es la direccion relativa al elemento de esta ruta
- `element`: es el elemento que se cargará en diche ruta
- `exact`: no estoy seguro, pero creo que especifica que la ruta debe ser exacta

NOTAS:
- En este punto se puede ver que la aplicacion corriendo posee un titulo h1 que no cambia y luego, el contenido dentro del BrowserRoute va a ir variando segun el endpoint que se cargue