import React from 'react'
import Square from '../Square/Square'


const Squares = ({myArray, levelUp,level,difficult,setLoss,setIndex,index}) => {

    return (
        (myArray.length >0) && myArray.map((myArray)=>
        <Square
            key={myArray.id}
            myArray={myArray}
            levelUp={levelUp}
            level={level}
            difficult={difficult}
            setLoss={setLoss}
            setIndex={setIndex}
            index={index}
        />
        )
    )
}

export default Squares
