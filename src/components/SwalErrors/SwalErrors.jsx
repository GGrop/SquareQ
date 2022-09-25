import Swal from "sweetalert2"
import './SwalErrors.css'
export const SwalErrors = (prop) => {
    {prop==="errorRegister" &&(
        Swal.fire({
            icon:"error",
            title:"Correo en uso",
            text:"Por favor registrese con un correo que no este en uso",
            confirmButtonText: "Aceptar",
            width:"40%",
            timer:8000,
        }))
    }
    {prop==="errorLogin" &&(
        Swal.fire({
            icon:"error",
            title:"Datos incorrectos",
            text:"Por favor ingrese bien su credencial",
            confirmButtonText: "Aceptar",
            width:"40%",
            className: "swal-back",
            timer:8000,
            customClass: "swal2-popup2"
        }
        ))
    }
}
