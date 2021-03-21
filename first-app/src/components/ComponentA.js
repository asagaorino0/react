import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ComponentA = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        console.log('useEfefectが呼び出されました。');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
                console.log(res.data, 'res check')
            })
    }, false);

    const increment = () => {
        setCount(count + 1);
    };



    return (
        <>
            <div>ComponentA</div>

            <Button onClick={() => setDisplay(!display)}>Get!</Button>{' '}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                {display &&
                    <tbody>
                        {
                            data.map(element => {
                                return (
                                    <tr>
                                        <td>{element.userId}</td>
                                        <td>{element.id}</td>
                                        <td>{element.title}</td>
                                        <td>{element.body}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>}

            </Table>

            <Link to="componentb">ComponentBへ移動</Link>
            <button onClick={increment}>+</button>
            <div>count : {count}</div>
        </>
    )
}

export default ComponentA;
