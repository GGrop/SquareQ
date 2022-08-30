import React from 'react'
import './Top10Styles.css'
function Top10(cuentas) {

        return (
            <tr>
                <td>{cuentas.index+1}</td>
                <td>{cuentas.userName}</td>
                <td>{cuentas.highScore}</td>
            </tr>
    )
}

export default Top10