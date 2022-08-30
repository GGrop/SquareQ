import Swal from "sweetalert2"

export const swal = (prop) => {
    {prop==="error" &&(
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
            timer:8000,
        }))
    }
    
    {prop==="win" &&(
        Swal.fire({
            title:"Ganaste hijo de puta!",
            text:"asdsad",
            confirmButtonText: "Menu",
            width:"40%",
            timer:8000,
        }))
    }
    {prop==="lose" &&(
        Swal.fire({
            icon:"error",
            title:"Correo en uso",
            text:"Por favor registrese con un correo que no este en uso",
            confirmButtonText: "Aceptar",
            width:"40%",
            timer:8000,
        }))
    }
}
