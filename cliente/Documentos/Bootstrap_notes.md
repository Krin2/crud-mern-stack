# Notas acerca de Bootstrap

ver [documentacion oficial](https://getbootstrap.com/): 

para poder usar bootstrapt, en este proyecto usamos el link:

 `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`

colocado en el archivo `index.html` antes de cerrar el head

# Filas y Columnas
Bootstrap permite la division de la pagina en hasta 12 columnas.

La cantidad de columnas que ocupa cada elemento se define mediante las etiquetas de clase.

Ejemplo:
```javascript
     <div className='container'>
        <div className='row'>
            <h2 className='mt-4'> Crear un nuevoo usuario</h2>
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Nombre</label>
                    <input type='text' className='form-control'> </input>
                </div>

                ...

                <button onClick={ agregarUsuario } className='btn btn-success'>Guardar usuario</button>

            </div>
        </div>
    </div>
```
Referencias:
- `col-sm-6`: col hace referencia a que trata un estilo referente a la columnas. sm hace referencia a 'small' referido a dispositivos pequeños. 6 es la cantidad de columnas que va a ocupar
- ` offset-3`: offset hace reeferencia a la cantidad de columnas desde la izquierda que se va a desplazar antes de colocar el elemento
- `mt-4`: es la abrebiatura de margin-top, es el margen que se deja desde la parte de arriba del elemento para colocar el contenido
- `mb-3`: es la abrebiatura de margin-bottom, es el margen que se deja desde la parte de abajo del elemento para colocar el contenido
- `form-label`: es una etiqueta de bootstrap
- `form-control`: es una etiqueta de bootstrap
- `btn`:  le da formato al boton
- `btn-success`: le da el color verde al boton

