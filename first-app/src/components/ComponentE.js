import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, AHO, CLICK } from '../actions/index';
import ComponentA from './ComponentA';

const ComponentE = () => {
    const value = useContext(Store);
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

    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decriment}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={aho}>３の倍数で</button>
            <h1>ComponentA.js</h1>
            <ComponentA />

        </div >
    );
};
export default ComponentE;
