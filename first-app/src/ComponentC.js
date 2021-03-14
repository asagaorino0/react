import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ComponentC = () => {
    const history = useHistory()
    const backPage = () => {
        history.push("/componentb")
    }
    return (
        <>
            <div>ComponentB</div>
            <button onClick={backPage}>componentBへ戻る</button>
            <div>ComponentA</div>
            <Link to="/">ホームへ移動</Link>
        </>
    )
}

export default ComponentC
