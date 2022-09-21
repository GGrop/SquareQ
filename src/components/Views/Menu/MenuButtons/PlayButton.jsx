import React from 'react'
import { useAuth } from '../../../../context/authContext'

function PlayButton() {

  const {reset}=useAuth()
  return (
    <>
      <button className='button' onClick={reset}>Play</button>
    </>
  )
}

export default PlayButton