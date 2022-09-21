import React from 'react'
import { useAuth } from '../../context/authContext'

function Wrong() {

    const {youLose}=useAuth()

    return (
        <button className='buttonWrong' onClick={youLose}></button>
    )
}

export default Wrong