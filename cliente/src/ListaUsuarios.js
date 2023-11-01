import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'

function ListaUsuarios() {

    // Hooks
    const [dataUsuario, setDataUsuario] = useState([])

    useEffect(() => {
        axios.get('/api/usuario/obtenerusuarios')
            .then( response => {
                console.log(response.data)
            })
            .catch( error => console.log(error))
    }, [])

    return (
        <div>
            <h2> Lista de usuarios</h2>
            <UsuarioIndividual/>
        </div>
    )
}

export default ListaUsuarios