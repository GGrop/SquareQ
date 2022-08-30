import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert2'
import ErrorAlert from '../ErrorAlert/ErrorAlert'
import LossAlert from '../LossAlert/LossAlert'
import WinAlert from '../WinAlert/WinAlert'
import "./AlertStyles.css"
function Alert() {
    const [alert, setAlert] = useState("error")
    return (
    // <div className='animacion alert'>
    //     {alert==="error"?
    //     <Swal/>
    //         :
    //         alert==="win"?
    //         <WinAlert/>
    //         :
    //         <LossAlert/>
    //     }
    // </div>
    )
}

export default Alert