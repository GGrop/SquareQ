import {BiUser} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import React from 'react'
import './ProfileButtonStyles.css'

function ProfileButton() {

    const {user}=useAuth()
    return (
        <>
            {user ?
                <div className='userBox'>
                    < BiUser className='userIcon'/>
                    <p className='usertext'>{user.username}</p>
                </div>
                :
                <NavLink className="navLink"  to='/LogRegScreen' >
                    <div className='userBox'>
                        < BiUser className='userIcon'/>
                        <p className='usertext'>user</p>
                    </div>
                </NavLink>
            }
        </>
    )
}
export default ProfileButton