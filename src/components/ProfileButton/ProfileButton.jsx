import React, { useState, useContext } from 'react'
import {BiUser} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import './ProfileButtonStyles.css'
function User() {
    const [user, setUser] = useState(1)
    //si user esta en 0, no esta logueado, no tiene q cargar el nombre
    return (
        <NavLink className="userBox"  to='/LogRegScreen' >
        {user ?
            <>
                        < BiUser className='userIcon'/>
                        <p className='usertext'>giuli</p>
            </>
            :
            <>
                < BiUser className='userIcon'/>
            </>
        }
        </NavLink>
    )
}

export default User