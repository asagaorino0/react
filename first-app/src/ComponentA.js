import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Cardtable from './Card';
import './ComponentA.css';

const sampleArray = [
    { id: 1, name: 'aaa', date: 19920527, biko: '-', },
    { id: 2, name: 'bbb', date: 19920528, biko: '-' },
    { id: 3, name: 'ccc', date: 19920529, biko: '-' },
    { id: 4, name: 'ddd', date: 19920531, biko: '-' },
    { id: 5, name: 'eee', date: 19920501, biko: '-' },
    { id: 6, name: 'aaa', date: 19920527, biko: '-' },
    { id: 7, name: 'bbb', date: 19920528, biko: '-' },
    { id: 8, name: 'ccc', date: 19920529, biko: '-' },
    { id: 9, name: 'ddd', date: 19920531, biko: '-' },
    { id: 10, name: 'aiai', date: 19920501, biko: '-' },
    { id: 11, name: 'asef', date: 19920527, biko: '-' },
    { id: 12, name: 'emxk', date: 19920528, biko: '-' },
    { id: 13, name: 'dlel', date: 19920529, biko: '-' },
    { id: 14, name: 'hoek', date: 19920531, biko: '-' },
    { id: 15, name: 'ekal', date: 19920501, biko: '-' },
    { id: 16, name: 'vjej', date: 19920527, biko: '-' },
    { id: 17, name: 'z.sk', date: 19920528, biko: '-' },
    { id: 18, name: 'were', date: 19920529, biko: '-' },
    { id: 19, name: 'sum', date: 19920531, biko: '-' },
    { id: 20, name: 'prop', date: 19920501, biko: '-' },
    { id: 21, name: 'asdf', date: 19920527, biko: '-' },
    { id: 22, name: 'qqqq', date: 19920528, biko: '-' },
    { id: 23, name: 'wwww', date: 19920529, biko: '-' },
    { id: 24, name: 'erkf', date: 19920531, biko: '-' },
    { id: 25, name: 'rjlb', date: 19920501, biko: '-' },
    { id: 26, name: 'sldoe', date: 19920527, biko: '-' },
    { id: 27, name: 'leoejg', date: 19920528, biko: '-' },
    { id: 28, name: 'dmfoeffff', date: 19920529, biko: '-' },
    { id: 29, name: 'ddd=kasdjf', date: 19920531, biko: '-' },
    { id: 30, name: 'ちょっと長めのやつをnameをとして登録しておきます。', date: 19920501, biko: '-' },
];

const ComponentA = () => {
    return (
        <>
            <div><h1>Menu</h1></div>
            <Link to="/"><ul><li><h4>Home</h4></li></ul></Link>
            <Link to="componentb"><ul><li><h4>ComponentB</h4></li></ul></Link>
            <Link to="componentc"><ul><li><h4>ComponentC</h4></li></ul></Link>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>date</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleArray.map((data) => {
                        return <Cardtable key={data.id} id={data.id} name={data.name} date={data.date} A={data.biko} />;
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default ComponentA;
