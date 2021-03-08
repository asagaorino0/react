import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <table>
                {/* <h1>Card</h1> */}
                <h1>{props.id}</h1>
                <h1>{props.name}</h1>
                <h1>{props.date}</h1>
            </table>
        </div>
    );
};

export default Card;
