import React, { useState } from 'react';

import classes from './cards/CardTest.module.css';

function Button(props) {
    var btn_sytle;

    switch (props.btn_sytle) {
        case 'positiv':
            btn_sytle = classes.positiv;
            break;
        case 'negativ':
            btn_sytle = classes.negativ;
            break;
        case 'grey':
            btn_sytle = classes.grey;
            break;
    }

    return (
        <div >
            <button className={btn_sytle} onClick={props.onClickHandler}>{props.text}</button>
        </div>
    );
}

export default Button;