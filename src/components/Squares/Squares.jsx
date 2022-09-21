import React from 'react'
import Square from '../Square/Square'

const Squares = ({myArray}) => {

    return (
        (myArray.length >0) && myArray.map((myArray)=>
            <Square key={myArray.id} myArray={myArray}/>
        )
    )
}

export default Squares
