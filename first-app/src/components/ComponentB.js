import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap'
import { ADD_EVENT, ALL_RESET, CYOI_RESET, KORE_RESET } from '../actions';
import reducer from '../reducers/index';

const ComponentB = () => {

    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [comment, setComment] = useState('');
    const [checkedItems, setCheckedItems] = useState({})

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_EVENT,
            title,
            body,
            comment,
        });
        setTitle('');
        setBody('');
        setComment('');
    };

    const zenkeshi = (r) => {
        r.preventDefault();
        dispatch({
            type: ALL_RESET,
        });
    };

    const korekeshi = (k) => {
        k.preventDefault();
        dispatch({
            type: KORE_RESET,
        });
    };

    const handleChange = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.id]: e.target.checked,
        })
        console.log('checkedItems:', checkedItems)
    }

    const erandayatura = Object.entries(checkedItems).reduce((pre, [id, value]) => {
        pre.push(id);
        return pre
    }, []);
    console.log('erandayatura', erandayatura);


    return (
        <>
            <div>ComponentB</div>
            <Link to="componentc">ComponentCへ移動</Link>

            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleClick}>
                    イベント作成
                 </Button>
                <Button variant="danger" onClick={zenkeshi}>
                    イベント全削除
                 </Button>
                <Button variant="info" onClick={korekeshi}>
                    イベント複数削除
                 </Button>

            </Form>

            <h1>Table</h1>
            <div class='float-left'>
                <Table striped bordered hover align="left">
                    <thead>
                        <tr>
                            <th>check</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                            <th>comment</th>
                            <th>val</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((data, index) => {
                            //　↓フィルタして消すためのidを取得
                            const cyoikeshi = (e) => {
                                e.preventDefault();
                                dispatch({
                                    type: CYOI_RESET,
                                    id: data.id,
                                });
                            };
                            //　↑フィルタして消すためのidを取得

                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox"
                                            id={data.id}
                                            onChange={handleChange}
                                        // onCheck={Val = 1}
                                        />

                                    </td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                    <td>{data.comment}</td>
                                    <td>{data.val}</td>
                                    <td>
                                        <Button variant="danger" onClick={cyoikeshi}>
                                            削除
                                    </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default ComponentB
