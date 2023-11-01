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

# Hooks
 se crean uno por elemento que necesita manejar su estado.
 en el caso de agregar usuario, se manejan tres hooks, uno para el nombre, otro para el email y otro para el telefono

 cuando se define un hook, se usa la siguiente sintaxis

 ```javascript
 const [nombre, setNombre] = useState('')
 ```
En el ejemplo anterior, el primer elemento (nombre), es el nombre de la variable que se va a usar, el segundo elemento (setNombre), es la funcion que se va a usar para alterar el estado de la variable, y el tercer elemento ('') es el valor inicial de la variable anterior.

Para hacer referencia a estos elementos, se usa el valor `value` y los eventos del elemento para colocar el contenido. En este caso el evento es `onChange`
```jsx
<input type='text' className='form-control' value={ nombre }  onChange={ (e) => setNombre(e.target.value) }/>
```
El evento `onChange` hace que react capte los cambios en el campo input y que a cada cambio llame a la funcion setNombre para actualizar su valor. el parametro enviado es `e` que hace referencia al elemento input, y `e.target.value` hace referencia al valor contenido en el campo input

# Comunicacion con el backend
Para poder comunicarse con el backend, la aplicacion cliente necesita establecer en el `package.json` el `proxy`. Este proxy es la ruta que va a usar el frontend para comunicarse con el backend
```json
{
  ...
  "proxy": "http://localhost:5000/"
}
```