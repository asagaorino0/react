import axios from 'axios';
import React, { useState, useContext } from 'react'
import { Store } from '../store/index';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { GET } from '../actions/index';

const ComponentA = () => {
    const [data, setData] = useState([]);
    const { globalState, setGlobalState } = useContext(Store);
    const click = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
                setGlobalState({
                    type: GET,
                    data: res.data
                })
            })
    }
    const newdata = data.filter(function (userId, id, title, body) {
        return id % 2 == 0;
    })
    console.log(newdata);

    return (
        <>
            <div>ComponentA</div>
            <Link to="componentb">ComponentBへ移動</Link>
            <Link to="componentc">ComponentCへ移動</Link>

            <Button onClick={click}>Get!!!</Button>{' '}
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
                        newdata.map(element => {
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
        </>
    )
}


export default ComponentA;
