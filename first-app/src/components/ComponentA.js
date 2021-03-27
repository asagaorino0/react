import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ComponentA = () => {
    const [data, setData] = useState([]);


    const Click = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
    }

    const newdata = data.filter(function (userId, id, title, body) {
        return id % 2 == 0;
    })
    console.log(newdata);


    return (
        <>
            <div>ComponentA</div>
            <Button onClick={Click}>Get!</Button>{' '}

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

            <Link to="componentb">ComponentBへ移動</Link>
        </>
    )
}


export default ComponentA;
