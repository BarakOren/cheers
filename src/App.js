import logo from './logo.svg';
import './App.css';
import { info } from './info';
import { useState } from 'react';

function App() {

  const [current, setCurrent] = useState({name: "hello" , type: "hello"})

  const Shuffle = () => {
    const num = Math.floor( Math.random() * (61 - 0) + 0)
    console.log(num)
    const random = info[num] || {name: "err" , type: "err"}
    setCurrent(random)
  }

  return (
    <div className="App">
        <h1 style={{fontSize: '52px'}}>Mixer</h1>
        
        <div className="content">
        <h1 class="name">{current.name}</h1>
        <h1 class="type">{current.type}</h1>
        <button onClick={() => Shuffle()}>Shuffle</button>
        </div>
    </div>
  );
}

export default App;
