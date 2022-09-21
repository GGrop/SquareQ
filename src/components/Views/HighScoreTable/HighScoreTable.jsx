import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Top10 from '../../Top10/Top10'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Skeleton from 'react-loading-skeleton'
import { SkipArrow } from '../../SkipArrow/SkipArrow'
import './HighScoreTableStyles.css'

function HighScoresTable() {

    const [userList, setUserList] = useState('')
    const db=getFirestore()
    const queryCollection=collection(db, 'users')
    const [loading, setLoading] = useState(false)
    const pedro=1

    useEffect(()=>{
        getDocs(queryCollection)
        .then(resp=>setUserList(resp.docs.map(user=>({id: user.id, ...user.data()} ) )))
        .finally(()=> setLoading(true))
    },[])

    if(loading)
    userList.sort((a,b)=>{
        return b.highscore-a.highscore;
    })


    return (
        <div className='content'>
            <div className='tableBoxing'>
                <NavLink to='/Menu' >
                    <SkipArrow/>
                </NavLink>
                <div>
                    <h2>HighScores!</h2>
                    <div id='table'>
                        <div className='thead'>
                                <h3>#</h3>
                                <h3>User</h3>
                                <h3>Score</h3>
                        </div>
                        { loading?(
                            <div className='tbody'>
                            {userList.map((cuenta, index)=>
                                <Top10
                                    index={index}
                                    key={cuenta.id}
                                    userName={cuenta.username}
                                    highscore={cuenta.highscore}
                                />
                                    )}
                            </div>
                            ):(
                                <div className='gridi'>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                    <Skeleton className='skeleton'/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default HighScoresTable