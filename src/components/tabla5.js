import React from "react";
//import PropTypes from "prop-types";


function Tabla5({titulo,count}){
    return (
        <tbody>
            <tr className="totalesLista">
                <td>{titulo}</td>
                <td className="tdCount">{count}</td>
            </tr>
        </tbody>
    )
}

export default Tabla5;