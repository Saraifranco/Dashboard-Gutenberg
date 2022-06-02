import React from "react";
//import PropTypes from "prop-types";


function Tabla3({id,titulo,autor,formato,medio,idioma,description,genero,endpoint}){
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>{autor}</td>
                <td>{formato}</td>
                <td>{medio}</td>
                <td>{idioma}</td>
                <td>{description}</td>
                <td>{genero}</td>
                <td>{endpoint}</td>
            </tr>
        </tbody>
    )
}

export default Tabla3;