import PlayButton from './MenuButtons/PlayButton'
import LogRegButton from './MenuButtons/LogRegButton'
import HighScoresButton from './MenuButtons/HighScoresButton'
import LogoutButton from './MenuButtons/LogoutButton'
import Title from './Title'
import ProfileButton from '../../ProfileButton/ProfileButton'

import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import './MenuStyles.css'
import 'react-loading-skeleton/dist/skeleton.css'

const Menu = () => {

  const {user}=useAuth()
  console.log(user)
  
  return (
    <div className="content">
    <ProfileButton/>
      <header>
          <Title/>
          <nav className='navMargin animacion2'>
            {user?
              <>
                <NavLink className="navLink"  to='/Play' >
                  <PlayButton/>
                </NavLink>
                <NavLink className="navLink"  to='/LogRegScreen' >
                  <LogoutButton/>
              </NavLink>
              </>
            :
              <>
              <NavLink className="navLink"  to='/LogRegScreen' >
                <PlayButton/>
              </NavLink>
                <NavLink className="navLink"  to='/LogRegScreen' >
                  <LogRegButton/>
                </NavLink>
              </>
            }
            <NavLink className="navLink"  to='/HighScores'>
              <HighScoresButton/>
            </NavLink>
          </nav>
      </header>
    </div>
  )
}
export default Menu