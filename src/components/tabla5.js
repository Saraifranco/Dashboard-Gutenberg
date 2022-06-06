import React from "react";
//import PropTypes from "prop-types";


function Tabla5({titulo,count}){
    return (
        <tbody>
            <tr>
                <td>{titulo}</td>
                <td>{count}</td>
            </tr>
        </tbody>
    )
}

export default Tabla5;