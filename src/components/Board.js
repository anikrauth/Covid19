import React from 'react';

import classes from './Board.module.css';

function Board(props) {
    return (
        <div className={classes.glas}>
            {props.children}
        </div>
    );
}

export default Board;