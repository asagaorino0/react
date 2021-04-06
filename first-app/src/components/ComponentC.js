import React, { useReducer } from 'react'
import { Link } from 'react-router-dom';
import reducer from '../reducers/index';
import ComponentD from './ComponentD';


const initialCount = {
    count: 0
};

const ComponentC = () => {
    const [state, dispatcher] = useReducer(reducer, initialCount);

    const incrment = () => {
        console.log('increment')
        dispatcher({
            type: 'INCREMENT'
        });
    };

    const decrment = () => {
        console.log('decrement')
        dispatcher({
            type: 'DECREMENT'
        });
    };

    const reset = () => {
        console.log('reset')
        dispatcher({
            type: 'RESET'
        });
    };



    return (
        <>
            <div>ComponentC</div>
            <Link to="/">ComponentAへ移動</Link>
            <button onClick={incrment}>+</button>
            <button onClick={decrment}>-</button>
            <button onClick={reset}>reset</button>
            <h1>{state.count}</h1>
            <ComponentD />
        </>
    );
};

export default ComponentC
