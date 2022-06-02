import React from "react";
//import PropTypes from "prop-types";


function Tabla1({id,titulo,genero,endpoint}) {
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{titulo}</td>
                <td>
                    <ul>
                        <li>{genero}</li>
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


export default Tabla1;