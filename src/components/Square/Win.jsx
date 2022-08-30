import React from 'react'

const Level = ({levelUp,level, difficult}) => {
    const suma=()=>{
        if(level<50){
            levelUp(level, difficult)
        }
    }
    return (
        <button className='buttonlevel' onClick={suma}></button>
    )
}

export default Level