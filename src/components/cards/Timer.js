import React, { useEffect, useState } from 'react';

import classes from './Timer.module.css';

const timerInMinutes = 12;

function Timer(props) {
    const [timeOver, setTimeOver] = useState(false);
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    function getTime() {
        const now = new Date();
        const createdAt = new Date(props.created);
        const different = (now.getTime() - createdAt.getTime()) / 1000;
        const minutes = parseInt(different / 60);
        const seconds = parseInt(different % 60);

        if (minutes >= timerInMinutes) {
            setTimeOver(true);
            setTimerMinutes('00');
            setTimerSeconds('00');
        } else {
            startTimer(minutes, seconds);
        }
    }


    function startTimer(minutes, seconds) {
        var minutesLeft;
        var secondsLeft;

        minutesLeft = (timerInMinutes - minutes) - 1;
        secondsLeft = 60 - seconds;

        if (minutesLeft < 10) {
            setTimerMinutes('0' + minutesLeft);
        } else {
            setTimerMinutes(minutesLeft);
        }

        if (secondsLeft < 10) {
            setTimerSeconds('0' + secondsLeft);
        } else {
            setTimerSeconds(secondsLeft);
        }
        setTimeOver(false);
    }

    useEffect(() => {
        setInterval(function () {
            getTime();
        }, 1000);
        props.timesOverHandler(timeOver);
    }, [timeOver]);

    return (
        <div className={timeOver ? classes.timeOver : classes.time}>
            <h1>{timerMinutes}</h1>
            <h2>:</h2>
            <h3>{timerSeconds}</h3>
        </div>



    );

}

export default Timer;