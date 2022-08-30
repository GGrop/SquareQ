import React from 'react'
import Level from './Win'
import Wrong from './Wrong'

const Square = (props) => {
  const {myArray, levelUp, level, difficult, setLoss, setIndex,index}=props
  console.log(myArray)
  console.log(index)

  return(
      <div className={(index == 3) ? "square" : ((index == 8) ? "square9" : "square16")} style={{backgroundColor: `hsl(${myArray.colorH},${myArray.colorS}%,${myArray.colorL}%)`}}>
        { myArray.win ?
          <Level levelUp={levelUp} level={level} difficult={difficult}/>
        :
          <Wrong setLoss={setLoss} setIndex={setIndex}/>
        }
      </div>
  )
}

export default Square