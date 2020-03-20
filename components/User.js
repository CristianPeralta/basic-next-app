import React from 'react';

const user = (props) => {
    return (
        <dib>
            <h1>{props.name}</h1>
            <p>Age {props.age}</p>
            <style jsx>{`
                div {
                    border: 1px soled #eee;
                    box-shadow: 0 2p 3px #ccc;
                    padding: 20px;
                    text-align: center;
                }
            `}
            </style>
        </dib>
    );
};

export default user;