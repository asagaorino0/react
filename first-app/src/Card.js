import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <tr className="wrapper">


            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.A}</td>

        </tr>
    );
};

export default Card;
