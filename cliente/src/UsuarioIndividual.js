import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function UsuarioIndividual({ usuario }) {

    const navigate = useNavigate()

    function borrarUsuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', { idusuario })
            .then( () => {
                alert('Usuario borrado')
                navigate(0)
            })
            .catch( error => {
                console.log(error)
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{ usuario.idusuario }</li>
                        <li className='list-group-item'>{ usuario.nombre }</li>
                        <li className='list-group-item'>{ usuario.email }</li>
                        <li className='list-group-item'>{ usuario.telefono }</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar </li></Link>
                    <button className='btn btn-danger' onClick={ () => borrarUsuario(usuario.idusuario)}>Borrar</button>
                    <hr className='mt-4' /> 
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual