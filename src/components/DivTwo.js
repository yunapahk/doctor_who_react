import React from 'react';
import DivThree from './DivThree';

function DivTwo(props) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.name}</h3>
            <DivThree />
        </div>
    );
};

export default DivTwo;