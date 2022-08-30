import React from 'react'
import { NavLink } from 'react-router-dom'

function WinAlert({level}) {
    return (
        <div className='Loss'>
            <div className='LossText'>
                <label className='lossTitle'>You Win!</label>
                <label>Perfect Score: {level}</label>
            </div>
            <div className='buttonAlertContainer'>
                <NavLink className="navLink button retryMenu2"  to='/Menu' >
                    <button className="menu1">Menu</button>
                </NavLink>
            </div>
        </div>
    )
}

export default WinAlert