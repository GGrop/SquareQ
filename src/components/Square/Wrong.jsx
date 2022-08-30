import React from 'react'

function Wrong(props) {
    const{setLoss,setIndex}=props

    const youLose=()=>{
        setLoss(1)
    }
    return (
        <button className='buttonWrong' onClick={youLose}></button>
    )
}

export default Wrong