import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
// import Card from './Card';



function App() {

  // const na0 = 'ho'
  const [na0, setText] = useState("ho")
  const [count, setCount] = useState(0)



  const yokiyoki = () => {
    setCount(count + 1);
    console.log(count);
  };

  const bubu = () => {
    setCount(count - 1);
    console.log(count);
  };

  const zero = () => {
    setCount(0);
    console.log(count);
  };

  const add = () => {
    setText(na0 + na0);
    console.log(na0);
  }







  return (
    <div >

      <p>
        <button onClick={yokiyoki}>いいね。</button>
        <button onClick={bubu}>よくないね。</button>
        <button onClick={zero}>リセット</button>{count}
      </p>
      <p>
        <button onClick={add}>add</button>{na0}
      </p>
      <Router>
        <Switch>
          <Route exact path="/" component={ComponentA} />
          <Route exact path="/componentb" component={ComponentB} />
          <Route exact path="/componentc" component={ComponentC} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
