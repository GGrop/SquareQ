import React from 'react'
import { NavLink } from 'react-router-dom'

function LossAlert({reset, level}) {
    return (
            <div className='Loss'>
                <div className='LossText'>
                    <label className='lossTitle'>You Loss!   :(</label>
                    <label>Your Score: {level}</label>
                    <label>Personal Record: ??</label>
                </div>
                <div className='buttonAlertContainer'>
                    <button className="button retryMenu" onClick={reset}>
                        Retry
                    </button>
                    <NavLink className="navLink button retryMenu2"  to='/Menu' >
                        <button className="menu1">Menu</button>
                    </NavLink>
                </div>
            </div>
    )
}

export default LossAlert