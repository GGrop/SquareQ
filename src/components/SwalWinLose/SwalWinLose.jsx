import Swal from "sweetalert2"
import {useNavigate} from  'react-router-dom'
import { useAuth } from "../../context/authContext"
import './swalStyles.css'


export const SwalWinLose = (prop) => {
    const navigate= useNavigate()
    const {user,level,reset}=useAuth()

    {prop==="win" &&(
        Swal.fire({
            icon:'success',
            title:"Congratulation!!!",
            text:"You´ve got the max score: 50",
            confirmButtonText: "Menu",
            width:"40%",
            timer:80000,
        })
        .then((result)=>{
                navigate("/")
        })
        )
    }
    {prop==="lose" &&(
        Swal.fire({
            icon:"error",
            title:`Nice try!
            New Score: ${level}`,
            text:`Your Highscore: ${user.highscore}`,
            confirmButtonText: "Retry",
            showDenyButton: true,
            denyButtonText:"Menu",
            width:"40%",
        })
        .then((result)=>{
            if (result.isConfirmed) {
                reset()
            } else if (result.isDenied) {
                navigate("/")
            }
        })
        )
    }
}
