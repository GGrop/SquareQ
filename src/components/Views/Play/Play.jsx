import React, { useEffect, useState } from 'react'
import Squares from '../../Squares/Squares'
import Timer from '../../Timer/Timer'
import { NavLink } from 'react-router-dom'
import { SkipArrow } from '../../SkipArrow/SkipArrow'
import './PlayStyles.css'
import { useAuth } from '../../../context/authContext'
import Alert from '../../Alert/Alert'

const SquareArray=[
    {
        id:'0',
        class:"square",
        win:0,
    },
    {
        id:'1',
        class:"square",
        win:0,
    },
    {
        id:'2',
        class:"square",
        win:0,
    },
    {
        id:'3',
        class:"square",
        win:0,
    },
    {
        id:'4',
        class:"square",
        win:0,
    },
    {
        id:'5',
        class:"square",
        win:0,
    },
    {
        id:'6',
        class:"square",
        win:0,
    },
    {
        id:'7',
        class:"square",
        win:0,
    },
    {
        id:'8',
        class:"square",
        win:0,
    },
    {
        id:'9',
        class:"square",        
        win:0,
    },
    {
        id:'10',
        class:"square",        
        win:0,
    },
    {
        id:'11',
        class:"square",
        win:0,
    },
    {
        id:'12',
        class:"square",
        win:0,
    },
    {
        id:'13',
        class:"square",
        win:0,
    },
    {
        id:'14',
        class:"square",
        win:0,
    },
    {
        id:'15',
        class:"square",
        win:0,
    },
]

const Play = () => {
    const {lose,level,difficult,winIndex,setIndex,setWin,user}=useAuth()
    const[squares,setSquares]=useState([])
    const randomNumberInRange=(min, max)=>{return Math.floor(Math.random()*(max - min + 1)) + min;}
    
    let rColorH=randomNumberInRange(1, 999);
    let rColorS=randomNumberInRange(50, 99);
    let rColorL=randomNumberInRange(10, 80);
    useEffect(()=>{
        console.log(user)
        {level>49 && setWin(1)}
        if(level){
            SquareArray.forEach(square=>{
                square.win=0
                if(square){
                    square.colorS=rColorS                   //random col
                    square.colorH=rColorH                   //random col
                    square.colorL=rColorL                   //random col
                }
                if(square.id==winIndex){
                    square.win=1;                           //set prop win in a random square
                    square.colorS=square.colorS-difficult;  //and set a different saturation in color
                }
            })
            if(level<=10){
                setSquares(SquareArray.filter(square=> square.id<4))        //Im pulling 4 squares of the array
                setIndex(3)                                                //upgrade index to randomize well
            }else if(level>=10 && level<20){
                setSquares(SquareArray.filter(square=> square.id<9))        //Im pulling 9 squares of the array
                setIndex(8)                                                //upgrade index to randomize well
            }else if(level>=20){
                setSquares(SquareArray.filter(square=> square.id<16))       //Im pulling 16 squares of the array
                setIndex(14)                                                //upgrade index to randomize well
            }
        }
        }, [level]);                                                        //level update the process

    return (
    <div className="content">
        <div className='SquareGame'>
            <NavLink to='/Menu' >
                <SkipArrow/>
            </NavLink>
            <div className='hud'>
                <label className='level'>level: {level}</label>
                <Timer/>
            </div>
                <div className="SqContainer">
                <Squares myArray={squares}/>
            </div>
            { lose ?
                // SwalAlert("lose")
                <Alert lose={"lose"}/>
                :
                <div className='WinSupp'>
                    { level>49 ?
                        <Alert lose={"win"}/>
                        :
                        <></>
                    }
                </div>
            }
        </div>
    </div>
    )
}

export default Play

