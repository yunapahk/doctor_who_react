import React from 'react';

const Tardis = (props) => {
    const { name, caps } = props.tardis;

    return (
        <div>
            <h2>T.A.R.D.I.S. - Time and Relative Dimension in Space</h2>
            <p>Name: {name}</p>
            <p>Caps: {caps.toString()}</p>
        </div>
    );
};

export default Tardis;
