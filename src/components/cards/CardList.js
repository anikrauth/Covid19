import React from 'react';

import classes from './CardList.module.css';
import CustomSwiper from '../layout/CustomSwiper';







const DUMMY_DATA = [
    {
        id: 60,
        first_name: 'Alvaro',
        last_name: 'Rodriguez',
        created: '2021-11-27 13:25'
    },
    {
        id: 61,
        first_name: 'Petar',
        last_name: 'Müller',
        created: '2021-11-19 17:00'
    },
    {
        id: 62,
        first_name: 'Hassan',
        last_name: 'Sassan',
        created: '2021-11-19 13:10'
    },
    {
        id: 63,
        first_name: 'Alvaro',
        last_name: 'Rodriguez',
        created: '2021-11-19 16:50'
    },
    {
        id: 64,
        first_name: 'Petar',
        last_name: 'Müller',
        created: '2021-11-18 14:23'
    },
    {
        id: 65,
        first_name: 'Hassan',
        last_name: 'Sassan',
        created: '2021-11-17 14:23'
    }
]


function CardList(props) {
    return (
        <div className={classes.container}>
            <CustomSwiper persons={DUMMY_DATA} />
        </div >
    );
}

export default CardList;