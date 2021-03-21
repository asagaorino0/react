import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

const ComponentB = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('useEfefectが呼び出されました。');


        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setData(res.data)
                console.log(res.data, 'res check')
            })
    }, []);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(element => {
                            return (
                                <tr>
                                    <td>{element.userId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.title}</td>
                                    <td>{element.completed}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>

            <div>ComponentB</div>
            <Link to="componentc">ComponentCへ移動</Link>
        </>
    )
}

export default ComponentB
