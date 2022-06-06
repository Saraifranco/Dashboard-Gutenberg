import React from "react";
//import PropTypes from "prop-types";


function Tabla4({nombre,count}){
    return (
        <tbody>
            <tr>
                <td>{nombre}</td>
                <td>{count}</td>
            </tr>
        </tbody>
    )
}

export default Tabla4;