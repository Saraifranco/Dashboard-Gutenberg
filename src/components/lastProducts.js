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
                setLibros(array)
            })

    }, [])

    return (

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>

                            <th>ID</th>
                            <th>TITULO</th>
                            <th>AUTOR</th>
                            <th>FORMATO</th>
                            <th>MEDIO</th>
                            <th>IDIOMA</th>
                            <th>RESENA</th>
                            <th>GENERO</th>
                            <th>ENDPONT</th>

                        </thead>
                        {libros.map((dato, i) =>

                            <Tabla3 key={i}
                                id={dato.id}
                                titulo={dato.titulo}
                                autor={dato.autores}
                                formato={dato.formatos}
                                medio={dato.medios}
                                idioma={dato.idiomas}
                                description={dato.description}
                                genero={dato.generos}
                                endpoint={dato.endpoint}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}


export default LastProducts;