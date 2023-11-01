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
                setDataUsuario(response.data)
            })
            .catch( error => console.log(error))
    }, [])

    // Mapear lista de usuarios en objeto usuario
    const listaUsuarios = dataUsuario.map( usuario => {
        return (
            <div>
                <UsuarioIndividual usuario={ usuario } />
            </div>
        )
    })

    return (
        <div>
            <h2> Lista de usuarios</h2>
            { listaUsuarios }
        </div>
    )
}

export default ListaUsuarios