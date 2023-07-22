import React from 'react';

function DivOne(props) {
    return <div><h3 onClick={props.name}>{props.name}</h3></div>
}

export default DivOne;