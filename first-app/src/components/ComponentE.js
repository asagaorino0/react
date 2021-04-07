import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, AHO } from '../actions/index';
import Button from 'react-bootstrap/Button'

const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () => {
        setGlobalState({
            type: INCREMENT
        });
    };
    const decriment = () => {
        setGlobalState({
            type: DECREMENT
        });
    };
    const reset = () => {
        setGlobalState({
            type: RESET
        });
    };
    const aho = () => {
        setGlobalState({
            type: AHO
        });
    };
    const get = () => {
        console.log(globalState, 'in componentE');
    }

    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decriment}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={aho}>３の倍数で</button>
            <h1>ComponentA.js</h1>
            <Button onClick={get}>Get!</Button>{' '}
        </div >
    );
};
export default ComponentE;
