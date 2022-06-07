import React, {useState, useEffect} from "react";
import Tabla1 from "./tabla1";
let datos = [
    {
        id: "Ninguna información",
        titulo:"Ninguna información",
        genero:"Ninguna infomación",
        endpoint: "Ninguna infomación"
    }
]

function TablaProducts(){

    let [libros, setLibros] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setLibros(array)
        })
        
    },[])
    
    return (
       
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr className="liston">
                                <th>ID</th>
                                <th>TÍTULO</th>
                                <th>GÉNERO</th>
                                <th>ENDPOINT</th>
                            </tr>
                        </thead>
                        {libros.map((dato,i)=>

                            <Tabla1 key={i} 
                                id= {dato.id}
                                titulo= {dato.titulo}
                                genero= {dato.genero.nombre}
                                endpoint= {dato.endpoint}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default TablaProducts;