import React from 'react'

function Top10(cuentas) {
        return (
            <>
                <h5>{cuentas.index+1}</h5>
                <h5>{cuentas.userName}</h5>
                <h5>{cuentas.highscore}</h5>
            </>
    )
}

export default Top10