import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SkipArrow } from '../../../SkipArrow/SkipArrow'

import Login from '../Login/Login'
import Register from '../Register/Register'

import '../Auth.css'

const LoginRegister=()=>{
    const [log, setLog] = useState(1)

    return (
    <div className='boxing'>
        <NavLink className="navLink"  to='/Menu' >
            <SkipArrow/>
        </NavLink>
        <div>
            <button onClick={e=>setLog(1)}>
                <p className={log ?'logRegContainButton colorButton':'logRegContainButton'}>Login</p>
            </button>
            <button className='logReg-'>|</button>
            <button onClick={e=>setLog(0)}>
                <p className={log ?'logRegContainButton':'logRegContainButton colorButton'}>Register</p>
            </button>
        </div>
        {log ? 
            <Login/>
        :
            <Register/>
        }
    </div>
    )
}
export default LoginRegister