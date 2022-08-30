import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'


import PlayButton from './MenuButtons/PlayButton'
import LogRegButton from './MenuButtons/LogRegButton'
import HighScoresButton from './MenuButtons/HighScoresButton'
import LogoutButton from './MenuButtons/LogoutButton'
import Title from '../Title'

import './MenuStyles.css'
import { useAuth } from '../../../context/authContext'
import {onAuthStateChanged} from "firebase/auth";

const Menu = () => {

  const {user,upToFirebase,CambioSession}=useAuth()

  const [first, setfirst] = useState(null)
  // console.log(user.email)

  
  useEffect(()=>{
    CambioSession();
    async function fetchTareas(){
      const tareas= await upToFirebase(user.uid)
      setfirst(tareas)
    }
  },[])
  
  return (
    <header>
        <Title/>
        <nav className='navMargin animacion2'>
          <NavLink className="navLink"  to='/Play' >
            <PlayButton/> 
          </NavLink>
          <NavLink className="navLink"  to='/Menu' >
              <LogoutButton/>
          </NavLink>
                <NavLink className="navLink"  to='/LogRegScreen'>
                  <LogRegButton/>
                </NavLink>
          <NavLink className="navLink"  to='/HighScores'>
            <HighScoresButton/>
          </NavLink>
        </nav>
    </header>
  )
}

export default Menu