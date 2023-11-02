import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

function AgregarUsuario() {

    // Hooks
    // - Definimos uno por elemento
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')


    function agregarUsuario() {
        // Creo el usuario con los datos del formulario
        const usuario = {
            nombre,
            email,
            telefono,
            idusuario: uniqid()
        }

        // Envio los datos al servidor para que los guarde en la base de datos
        axios.post('/api/usuario/agregarusuario', usuario)
            .then( response => {
                // Muestro los datos en una ventana emergente
                alert(response.data)
            })
            .catch( error => {
                console.log(error)
            })
    }
    
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'> Crear un nuevo usuario</h2>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value={ nombre } onChange={ (e) => setNombre(e.target.value) }/>
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>E-mail</label>
                        <input type='email' className='form-control' value={ email } onChange={ (e) => setEmail(e.target.value) }/>
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>Telefono</label>
                        <input type='text' className='form-control' value={ telefono } onChange={ (e) => setTelefono(e.target.value) }/>
                    </div>

                    <button onClick={ agregarUsuario } className='btn btn-success'>Guardar usuario</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuario