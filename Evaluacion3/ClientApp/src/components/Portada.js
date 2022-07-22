import React, { useState, useEffect } from 'react'
import imagenPerfil from '../assets/images/imagen.jpg'

const Portada = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img src={imagenPerfil} class="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Analista Programador</h5>
                            <p className="card-text">
                                Técnico en Ingeniería de Sistemas de Telecomunicación
                                <br></br>
                                Universidad Tecnológica de Chile - Inacap
                                <br></br>
                                2020-2022
                                <br></br>
                                Calama, Chile
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6 text-center">
                    <h1>Carlos Calcina</h1>
                    <p>
                        Técnico en informática con más de 5 años de experiencia en industrias de tecnología.Especializado en
                        brindar apoyo y asesoría técnica a empresas con más de 500 empleados y en mantener un índice de 
                        satisfacción del usuario de 9,5. Busco brindar la misma calidad de atención y optimizar el rendimiento de 
                        los sistemas informáticos de Land Lord Technologies.  
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <h1>Habilidades</h1>
                    <ul className="list-group">
                        <li className="list-group-item">Resolución de problemas</li>
                        <li className="list-group-item">Trabajo bajo presión</li>
                        <li className="list-group-item">Atención al usuario</li>
                        <li className="list-group-item">Aprendizaje rápido</li>
                    </ul>

                </div>
            </div>
        </>
    )
}
export default Portada