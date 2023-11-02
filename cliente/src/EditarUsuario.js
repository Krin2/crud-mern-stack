import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditarUsuario() {
    // Hooks
    // Obtengo los parametros de la request
    const params = useParams()

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatosusuario', { idusuario: params.idusuario })
            .then( response => {
                const { nombre, email, telefono } = response.data[0]
                setNombre(nombre)
                setEmail(email)
                setTelefono(telefono)
            })
    }, [params.idusuario])

    function editarUsuario () {
        const usuario = {
            nombre,
            email,
            telefono,
            idusuario: params.idusuario
        }

        axios.patch('/api/usuario/actualizarusuario', {
            nombre,
            email,
            telefono,
            idusuario: params.idusuario
        }).then( response => {
                alert(response.data)
            })
            .catch( error => {
                console.log(error)
            })
    }

    return (
        <div className='container'>
        <div className='row'>
            <h2 className='mt-4'> Editar usuario</h2>
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

                <button onClick={ editarUsuario } className='btn btn-success'>Guardar usuario</button>
            </div>
        </div>
    </div>
    )
}

export default EditarUsuario