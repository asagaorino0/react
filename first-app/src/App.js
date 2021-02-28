import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const hc = () => {
    window.alert('Hello world')
  }
  const name2 = 'eriko';

  const [count, setCount] = useState(0)
  const name = "ho"
  const text = ""

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

  const add = () => {
    setCount(count + name);
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
          {/* <h4>Hello world</h4> */}


          {/* <button>button</button>

          <button
            onClick={() => window.alert("Hello world2")}
          >button2</button>

          <button onClick={increment}>up</button>
          <input type="text" />
          <a href="#">a タグ</a>
          {name} */}

          <h4>Normal課題</h4>
          <p>
            <button onClick={yokiyoki}>いいね。</button>
            <button onClick={badB}>よくないね。</button>
            <button onClick={zero}>リセット。</button>
            {count}
          </p>

          <h4>Extra課題(く、くるしい、、、、)</h4>
          <p>
            <button onClick={add}>add</button>
            {count + name}
          </p>

        </div>

      </header>
    </div>
  );
}

export default App;