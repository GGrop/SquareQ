import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorAlert() {
    return (
            <div className="">
                <div>
                    <label className='lossTitle'>You Loss!   :(</label>
                    <label>Your Score:</label>
                    <label>Personal Record: ??</label>
                </div>
                <div className='buttonAlertContainer'>
                    <button className="button retryMenu">
                        Retry
                    </button>
                    <NavLink className="navLink button retryMenu2"  to='/Menu' >
                        <button className="menu1">Menu</button>
                    </NavLink>
                </div>
            </div>
    )
}

export default ErrorAlert