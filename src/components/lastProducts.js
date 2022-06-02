import React, { useState, useEffect } from "react";
import Tabla3 from "./tabla3";

function LastProducts() {
    let datos = [
        {
            id: "Ninguna información",
            titulo: "Ninguna información",
            imagen: "Ninguna infomación",
            endpoint: "Ninguna infomación"
        }
    ]
    let [libros, setLibros] = useState(datos);

    useEffect(() => {
        fetch("http://localhost:3001/api/lastProducts")
            .then(res => res.json())
            .then(data => {
                let array = data.data
                console.log(array)
                setLibros(array)
            })

    }, [])

    return (

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITULO</th>
                                <th>AUTOR</th>
                                <th>RESENA</th>
                                <th>ENDPONT</th>
                            </tr>
                        </thead>
                        {libros.map((dato, i) => {

                            return < Tabla3 key = { i }
                                        id = { dato.id }
                                        titulo = { dato.titulo }
                                        autorName = {dato.autor.nombres}
                                        description = { dato.description }
                                        endpoint = { dato.endpoint }
                                    />
                        }
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}


export default LastProducts;