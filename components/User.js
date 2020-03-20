import React from 'react';

const user = (props) => {
    return (
        <dib>
            <h1>{props.name}</h1>
            <p>Age {props.age}</p>
        </dib>
    );
};

export default user;