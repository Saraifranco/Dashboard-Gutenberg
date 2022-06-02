import React from "react";
//import PropTypes from "prop-types";


function Tabla3({id,titulo,autorName,description,endpoint}){
    console.log(autorName)
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{titulo}</td>
                {/* <td>{autorName.nombres}</td> */}
                <td>{description}</td>
                <td>{endpoint}</td>
            </tr>
        </tbody>
    )
}

export default Tabla3;