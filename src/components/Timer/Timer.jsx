import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import './TimerStyles.css'
const Timer = () => {
    const [isActive, setIsActive] = useState(true);
    const {youLose,countdown,timer,lose,youWin,win}=useAuth()


    useEffect(() => {
        let interval = null;
        if(win !==1){
            if(lose !== 1){
                if (isActive) {
                    interval = setInterval(() => {
                        if(timer>0){
                            countdown()
                        }else{
                            youLose()
                        }
                    }, [1000]);
                } else if (!isActive && timer !== 0) {
                    clearInterval(interval);
                }
            }
        }else{
            youWin()
        }
            return () => clearInterval(interval);
    }, [isActive, timer]);

    return (
        <div className="time">
            <label className="">
                {timer}s
            </label>
        </div>
    );
};

export default Timer;