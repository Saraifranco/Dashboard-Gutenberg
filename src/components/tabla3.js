import React from "react";
//import PropTypes from "prop-types";


function Tabla3({id,titulo,autor,description,endpoint}){
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>{autor.nombres}</td>
                <td>{autor.apellidos}</td>
                <td>{description}</td>
                <td>{endpoint}</td>
            </tr>
        </tbody>
    )
}

export default Tabla3;