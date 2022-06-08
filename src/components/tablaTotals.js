import React, { useState, useEffect } from "react";
import Tabla5 from "./tabla5" ;

function TablaTotals(){
    
    let [libros, setLibros] = useState("No dispone");
    let [usuarios, setUsuarios] = useState("Sin usuarios");
    let [generos, setGeneros] = useState("No dispone")

    let datos = [
        {
           titulo: "Total Libros",
           count: libros
        },
        {
           titulo: "Total Usuarios",
           count: usuarios
        },
        {
            titulo: "Total Generos",
            count: generos
        }
    ]
    

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setLibros(dataProduct.meta.count)
        })

        fetch("http://localhost:3001/api/users")
        .then(resultado => resultado.json())
        .then(dataUsers => {
            setUsuarios(dataUsers.meta.count)
        })

        fetch("http://localhost:3001/api/generos")
        .then(resultado => resultado.json())
        .then(dataGeneros => {
            setGeneros(dataGeneros.meta.count)
        })
    }, [])

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <thead className="totales">TOTALES
                    <table className="table table-bordered" id="dataTable" width="230%" cellSpacing="0">
                        {datos.map((dato,i)=>

                            <Tabla5 key={i} 
                                titulo= {dato.titulo}
                                count= {dato.count}
                            />
                        )}
                    </table>
                    </thead>
                </div>
            </div>
        </div>
    )
}



export default TablaTotals;