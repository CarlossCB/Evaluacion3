import React, { useEffect, useState } from 'react'

const usuariosPorDefecto = [
    { nombre: "Pepe Lota", like: true, saludo: false, mensaje: "Todo bien" },
    { nombre: "Tulio Triviño", like: false, saludo: false, mensaje: "Aqui les envio un saludo" }
]

const Enviarmensaje = () => {
    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    useEffect(() => {
        let copiaUsuarios = [...usuarios]
        const nuevoUsuario = {
            nombre: "Patana Triviño",
            like: true,
            saludo: true,
            mensaje: "Olis"
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }
    
    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleMandarMensaje = (evento) => {
        const nuevoUsuario = {
            nombre: nombre,
            like: like,
            saludo: saludo,
            mensaje: mensaje
        }

        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)  
    }

    return (
        <>
            <div className="row">
                <h1>Enviar Mensaje</h1>
                <div className="col-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        value={nombre}
                        onChange={handleNombre}
                        name="nombre"
                        id="nombre"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        className="form-control"
                        type="text"
                        value={mensaje}
                        onChange={handleMensaje}
                        name="mensaje"
                        id="mensaje"
                        rows="3"
                    />
                </div>
            </div> 

            <div className="row mt-4">
                <div className="col-4">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={like}
                            onChange={handleLike}
                            name="like"
                            id="like"
                        />
                        <label className="form-check-label" htmlFor="like">
                            Dar Like 👍​​
                        </label>
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={saludo}
                            onChange={handleSaludo}
                            name="saludo"
                            id="saludo"
                        />
                        <label className="form-check-label" htmlFor="saludo">
                            Enviar Saludo 👋​
                        </label>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-4">
                        <div className="col-12 justify-content-start mt-3">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleMandarMensaje}
                            >Enviar</button>
                        </div>
                    </div>
                </div>
            </div> 
            <hr />
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Reacciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                    <tr>
                                        <td>{usuario.nombre}</td>
                                        <td>
                                            {usuario.like && '👍'}
                                            {usuario.saludo && '👋​​'}
                                            {!usuario.like && !usuario.saludo && '<Ninguno>'}
                                        </td>
                                        <td>{usuario.mensaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Enviarmensaje