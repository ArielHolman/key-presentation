import React, {useState} from 'react';
import './App.css';
import MapPoop from './components/mapPoop';



let counter = 1
let poopArr = []

function App() {

  const [poopValue, setPoop] = useState({
    poop: []
  })

  const handlePoop = (event) => {
    poopArr.push({
      poopKey:"poop",
      poopId: counter++
  })
    setPoop({...poopValue, poop: poopArr})
  }

   const removeTodo = (i) => {
    poopArr.splice(i, 1)
    setPoop({...poopValue, poop: poopArr})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HOW WAS YOUR POOP TODAY?
        </h1>
        <button onClick={handlePoop}>
          Make Poop
        </button>
        <MapPoop poop={poopValue.poop} method={(i) => removeTodo(i)}/>
      </header>
    </div>
  );
}

export default App;

// https://dev.to/francodalessio/understanding-the-importance-of-the-key-prop-in-react-3ag7
// https://medium.com/@adhithiravi/why-do-i-need-keys-in-react-lists-dbb522188bbb
