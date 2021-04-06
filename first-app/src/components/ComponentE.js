import React, { useContext, useState } from 'react';
import { Store, Store0 } from '../store/index';
import { INCREMENT, DECREMENT, RESET, AHO, CLICK } from '../actions/index';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useEffect } from 'react'

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

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     console.log('useEfefectが呼び出されました。');
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => {
    //             setData(res.data)
    //             console.log(res.data, 'res check')
    //         })
    // }, []);
    // const { globalState, setGlobalState } = useContext(Store);
    // const click = () => {
    //     setGlobalState({
    //         type: CLICK
    //     });
    // };

    console.log(globalState);
    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decriment}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={aho}>３の倍数で</button>
            {/* <Button onClick={click}>Get!!!</Button> */}
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        globalState.map(element => {
                            return (
                                <tr key={element.id}>
                                    <td>{element.userId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.title}</td>
                                    <td>{element.body}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table> */}


















        </div >
    );
};
export default ComponentE;
