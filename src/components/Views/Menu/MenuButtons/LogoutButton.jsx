import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../../../context/authContext';
const LogoutButton = () => {


    const {logout}=useAuth()

    const navigate =useNavigate();

    const handleLogout=async()=>{
        await logout()
        navigate('/')
    }

    return (
    <>
        <button className='button' onClick={handleLogout}>Log out</button>
    </>
    )
}

export default LogoutButton