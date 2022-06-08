import React, {useState, useEffect} from "react";
import Tabla2 from "./tabla2";
let datos = [
    {
        id: "Ninguna información",
        nombres:"Ninguna información",
        apellidos: "Ninguna información",
        email:"Ninguna infomación",
        endpoint: "Ninguna infomación"
    }
]
function TablaUsers(){

    let [usuarios, setUsuarios] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setUsuarios(array)
        })
        
    },[])
    
    return (
       
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>USUARIOS
                            <tr className="liston4">
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>APELLIDO</th>
                                <th>EMAIL</th>
                                <th>DETALLE</th>
                            </tr>
                        </thead>
                        {usuarios.map((dato,i)=>

                            <Tabla2 key={i} 
                                id= {dato.id}
                                nombres= {dato.nombres}
                                apellidos={dato.apellidos}
                                email= {dato.email}
                                endpoint= {dato.endpoint}
                            />
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}



export default TablaUsers;