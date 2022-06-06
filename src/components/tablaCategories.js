import {useState, useEffect} from "react";
import Tabla4 from "./tabla4";

let datos = [
    {
        nombre: "Ninguna información",
        count:"Ninguna información",
    }
]

function TablaCategories(){
    let [generos, setGeneros] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3001/api/total-por-genero")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setGeneros(array)
        })
        
    },[])
    return (
       
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>NOMBRE DEL GENERO</th>
                                <th>CANTIDAD DE LIBROS POR GENERO</th>
                            </tr>
                        </thead>
                        {generos.map((dato,i)=>

                            <Tabla4 key={i} 
                                nombre= {dato.nombre}
                                count= {dato.count}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default TablaCategories;