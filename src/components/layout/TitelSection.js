import React from 'react';

import classes from './TitelSection.module.css';

import settings_icon from '../img/setting_icon.png';

function TitelSection(props) {
    return (
        <div className={classes.main_div}>
            <div className={classes.titel_div}>
                <h3 className={classes.titel}>Checkpoint Schnelltest - {props.streetName}</h3>
            </div>
            <div className={classes.icon}>
                <img src={settings_icon} alt="settings" />
            </div>
        </div>
    );
}

export default TitelSection;