import React, { useEffect, useState } from 'react'
import Level from '../../Square/Win'
import LossAlert from '../../LossAlert/LossAlert'
import Squares from '../../Squares/Squares'
import Timer from '../../Timer/Timer'
import { NavLink } from 'react-router-dom'
import WinAlert from '../../WinAlert/WinAlert'
import { SkipArrow } from '../../SkipArrow/SkipArrow'

import './PlayStyles.css'
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

const SquareGame = () => {
const [loss, setLoss] = useState(0)

    const randomNumberInRange=(min, max)=>{return Math.floor(Math.random()*(max - min + 1)) + min;}
    let rColorH=randomNumberInRange(1, 999);
    let rColorS=randomNumberInRange(50, 100);
    let rColorL=randomNumberInRange(10, 80);

    const[squares,setSquares]=useState([])
    const[level,setLevel]=useState(1)
    const [winIndex, setwinIndex] = useState(1);
    const [index, setIndex] = useState(3);
    const [difficult, setDifficult] = useState(49);

    const [seconds, setSeconds] = useState(15);
    const [isActive, setIsActive] = useState(true);

    const reset=()=>{
        setSeconds(15);
        setLevel(1)
        setLoss(0)
        setwinIndex(randomNumberInRange(0, index));
    }
    const resetT=()=>{
        setSeconds(15);
    }

    const levelUp =(level, difficult)=>{                //im using SquareCo like a aux var
        setwinIndex(randomNumberInRange(0, index));     //give a random value for index
        setLevel(level+1)                                 //set levelUP
        setDifficult(difficult-1)
        setSeconds(15);
    }

    useEffect(()=>{
        if(level){
            SquareArray.forEach(square=>{
                square.win=0
                if(square){
                    square.colorH=rColorH                   //random col
                    square.colorS=rColorS                   //random col
                    square.colorL=rColorL                   //random col
                }
                if(square.id==winIndex){
                    square.win=1;                           //set prop win in a random square
                    square.colorS=square.colorS-difficult;  //and set a different saturation in color
                }
            })
            if(level<=2){
                setSquares(SquareArray.filter(square=> square.id<4))        //Im pulling 4 squares of the array
                setIndex(3)                                                //upgrade index to randomize well
            }else if(level>=2 && level<6){
                setSquares(SquareArray.filter(square=> square.id<9))        //Im pulling 9 squares of the array
                setIndex(8)                                                //upgrade index to randomize well
            }else if(level>=6){
                setSquares(SquareArray.filter(square=> square.id<16))       //Im pulling 16 squares of the array
                setIndex(14)                                                //upgrade index to randomize well
            }
        }
        }, [level]);                                                        //level update the process
        // console.log(squares)
        // console.log(level)
        // console.log(winIndex)

    return (
    <div className='SquareGame'>
        <NavLink to='/Menu' >
            <SkipArrow/>
        </NavLink>
        <div className='hud'>
            <label>level: {level}</label>
            <Timer
                setLoss={setLoss}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
                setIsActive={setIsActive}
                reset={reset}
            />
        </div>
        {/* <div className={(index == 3) ? "SqContainer" : ((index == 8) ? "SqC9" : "SqC16")}>
            <Squares
                myArray={squares}
                levelUp={levelUp}
                level={level}
                difficult={difficult}
                setLoss={setLoss}
                setIndex={setIndex}
                index={index}
            />
        </div> */}
            <div className="SqContainer">
            <Squares
                myArray={squares}
                levelUp={levelUp}
                level={level}
                difficult={difficult}
                setLoss={setLoss}
                setIndex={setIndex}
                index={index}
            />
        </div>
        { loss ?
        <div className='LossAlert animacion'>
            <div className='backGround'></div>
            <LossAlert reset={reset} level={level}/>
        </div>
        :
        <div className='WinSupp'>
            { level>49 ? 
            <div className='WinAlert animacion'>
                <div className='backGround'></div>
                {/* <LossAlert reset={reset} level={level}/> */}
                <WinAlert reset={reset} level={level}/>
            </div>
            :
            <div></div>
            }
        </div>
        }
    </div>
    )
}

export default SquareGame

