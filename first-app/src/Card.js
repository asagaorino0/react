import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <table>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.date}</td>
            </table>

        </div>
    );
};

export default Card;
