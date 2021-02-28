import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const hc = () => {
    window.alert('Hello world')
  }
  const name = 'eriko';

  const [count, setCount] = useState(1000);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const yokiyoki = () => {
    setCount(count + 1);
    console.log(count);
  };
  const badB = () => {
    setCount(count - 1);
    console.log(count);
  };
  const zero = () => {
    setCount(0);
    console.log(count);
  };



  return (
    <div className="App">
      <header className="App-header">

        <button
          onClick={hc}> Hello world!</button>


        <div>
          <h1>Hello world</h1>
          <h2>Hello world</h2>
          <h3>Hello world</h3>
          <h4>Hello world</h4>

          <button>button</button>

          <button
            onClick={() => window.alert("Hello world2")}
          >button2</button>

          <button onClick={increment}>up</button>

          <button onClick={yokiyoki}>いいね。</button>
          <button onClick={badB}>よくないね。</button>
          <button onClick={zero}>リセット。</button>
          <p>現在の数字は{count}です</p>


          <input type="text" />
          <a href="#">a タグ</a>
          {name}
        </div>




      </header>
    </div>
  );
}

export default App;