import Wrong from './Wrong'
import Level from './Win'

import { useAuth } from '../../context/authContext'
import React from 'react'

import './SquareStyles.css'

const Square = (props) => {
  const {myArray}=props
  const {levelUp,level,difficult,setIndex,index}=useAuth()

  return(
      <div className={(index == 3) ? "square" : ((index == 8) ? "square9" : "square16")} style={{backgroundColor: `hsl(${myArray.colorH},${myArray.colorS}%,${myArray.colorL}%)`}}>
        { myArray.win ?
          <Level levelUp={levelUp} level={level} difficult={difficult}/>
        :
          <Wrong setIndex={setIndex}/>
        }
      </div>
  )
}

export default Square