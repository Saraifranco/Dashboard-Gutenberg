import React from "react";
//import PropTypes from "prop-types";


function Tabla2({id,nombres,apellidos,email,endpoint}) {
    return (
        <tbody className="tablaUsuarios">
            <tr className="listaUsuarios">
                <td>{id}</td>
                <td>{nombres}</td>
                <td>{apellidos}</td>
                <td>
                    <ul>
                        <li className="emailUsuarios">{email}</li>
                    </ul>
                </td>
                <td>{endpoint}</td>
            </tr>
        </tbody>    
    )
}

//InfoTable.propTypes ={
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     subcategory: PropTypes.string.isRequired,
//     stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
// }
// InfoTable.defaultProps = {
//     name: "Sin nombre",
//     description: "Sin descripción",
//     price: "",
//     subcategory: "",
//     colors:[""]
// }


export default Tabla2;