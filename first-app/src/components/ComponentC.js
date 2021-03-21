import React from 'react'
import { Link } from 'react-router-dom';

const ComponentC = () => {


    // class Hello extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = { msg: 'Hello!' };
    //     }

    //     render() {
    //         return (
    //             <div>
    //                 <h1>{this.state.msg}</h1>
    //                 <button onClick={() => this.setState({ msg: 'Bye!' })}>Click</button>
    //             </div>
    //         );
    //     }
    // }

    return (
        <>

            <div>ComponentC</div>
            <Link to="/">ComponentAへ移動</Link>



        </>
    )




}

export default ComponentC
