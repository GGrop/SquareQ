import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const{setLoss,seconds,setSeconds,setIsActive,isActive,reset}=props

    // const [seconds, setSeconds] = useState(15);
    // const [isActive, setIsActive] = useState(true);

    // function toggle() {
        // setIsActive(!isActive); 
    // }

    // function reset() {
    //     setSeconds(15);
    //     setIsActive(false);
    // }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if(seconds>0){
                    setSeconds(seconds =>seconds+1)
                }else{
                    setLoss(1)
                }
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
    <div className="time">
        <label className="">
            {seconds}s
        </label>
    </div>
    );
};

export default Timer;