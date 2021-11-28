import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Timer from './Timer';

import classes from './CardTest.module.css';
import axios from 'axios';

const  baseURL = "http://shinycar24.de/data-tb/api.php?sId=A786b.a23w&locationId=1";


function CardTest(props) {

    const [timerStyle, setTimerStyle] = useState('time');
    const [cardStyle, setCardStyle] = useState(classes.card);

    

    function timesOverHandler(timeOver) {



        if (timeOver) {
            setTimerStyle('timeOver');
            setCardStyle(classes.card_timeOver)
        } else {
            setTimerStyle('time');
            setCardStyle(classes.card)
        }
    }


    function onClickHandler() { }


    let [people, setPeople] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPeople(response.data);
        });
      }, []);
    
      if (!people) return "Nothing Found";

    //convert into JSON format
    let peopleJSON = JSON.parse(people);
    console.log(typeof(peopleJSON));
    
    // end api 
      

    return (
        
        <div className={cardStyle}>
            <div className={classes.id}>
                <p>{props.id}</p>
            </div>
            <div className={classes.name}>
                {props.first_name} {props.last_name}
            </div>
            <div>
                <Timer created={props.created} timesOverHandler={timesOverHandler} />
            </div>
            <div className={classes.btn_div}>
                {timerStyle === 'timeOver' ? <>
                    < Button onClickHandler={onClickHandler} text='positiv' btn_sytle='positiv' />
                    <Button text='negativ' btn_sytle='negativ' />
                </> : <>
                    <Button text='positiv' btn_sytle='grey' />
                    <Button text='negativ' btn_sytle='grey' />
                </>}
            </div>
        </div >
    );
}

export default CardTest;