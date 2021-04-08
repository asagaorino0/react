import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET, AHO } from '../actions/index';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

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
    const value = globalState.data.filter(function (userId, id, title, body) {
        return id % 2 !== 0;
    });
    console.log(value, '偶数のみ')
    console.log(globalState.data, '100個')

    return (
        <div>
            <h1>ComponentE.js</h1>
            <button onClick={handleClick}>+1</button>
            <button onClick={decriment}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={aho}>３の倍数で</button>
            <h1>ComponentA.js</h1>
            <Button onClick={get}>Get!</Button>{' '}
            <div>
                <Table striped bordered hover>
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
                            value.map(element => {
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
                </Table>
            </div>
        </div >
    );
};
export default ComponentE;
