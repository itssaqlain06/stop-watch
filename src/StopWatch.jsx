import React, { useState } from 'react'
import './App.css';

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [elapsed, setElapsedTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const ms = (milliseconds % 1000).toString().padStart(3, '0');
    
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${ms}`;
      };

    const start = (() => {
        if (!intervalId) {
            const startTime = Date.now() - elapsed;
            const timeId = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                setTime(elapsedTime);
                setElapsedTime(elapsedTime);
            }, 10);
            setIntervalId(timeId);
        }

    });
    const stop = (() => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    });
    const reset = (() => {

        clearInterval(intervalId);
        setElapsedTime(0);
        setIntervalId(null);
        setTime(0);
    });
    return (
        <>
            <div className="container">
                <div className="content">
                    <span className='milisec'>{formatTime(time)}</span>
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => start()}>Start</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </>
    )
}
