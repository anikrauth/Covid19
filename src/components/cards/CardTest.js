import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Timer from './Timer';

import classes from './CardTest.module.css';
import axios from 'axios';



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


    useEffect(() => {     getAllData();}, []);

    const [persons, getPersons] = useState('');
    // API call
    const  url = "http://shinycar24.de/data-tb/api.php";

    const getAllData = () => {
        axios.get(`${url}?sId=A786b.a23w&locationId=1`)
        .then((response) => {

            const covidCard = response.data.persons.getAllData;

        })
        .catch(error => this.setState({ loading: false, error: error.response.data }));
    }

    console.log(getAllData);


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