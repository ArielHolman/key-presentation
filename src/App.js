import React, {useState} from 'react';
import './App.css';
import MapPoop from './components/mapPoop';



let countingPoop = 0
let poopArr = []

function App() {
  

  const [poopValue, setPoop] = useState({
    poop: []
  })
  
  const consoleDef = () => {
    if (countingPoop < 5) {
      console.log("Keys help React identify which items have changed, are added, or are removed. REACH 5 POOPS! Then hit Key Slides.")
    } else if (countingPoop === 5) {
      console.log(`Keys should be given to the elements inside the array to give the elements a stable identity. Poop again then hit key slides again.`)
    } else if (countingPoop === 6) {
      console.log(`The keys in this example are poopId, which I am creating with App.js and send it over to get translated in the map function to the key. `)
    } else if (countingPoop === 7) {
      console.log('Thats a lot in one day, you should probably see a doctor')
    }
  }

  const handlePoop = (event) => {
    poopArr.push({
      poopKey:"poop",
      poopId: countingPoop++
  })
    if (countingPoop === 1) {
      console.log("Good Start!")
    }

    if (countingPoop === 2) {
      console.log("Stay strong!")
    }
    if (countingPoop === 3) {
      console.log("Halfway there!")
    }
    if (countingPoop === 4) {
      console.log("Almost there! Keep going!")
    }    

    if (countingPoop === 5) {
      console.log("YOU CAN STOP NOW YOU MANIAC")
      console.log(poopArr)
    }
    setPoop({...poopValue, poop: poopArr})
  }

  const removePoop = (poopPassed) => {
    const updatedPoop = poopValue.poop.filter((poop) => poop.poopId !== poopPassed);
    setPoop({...poopValue, poop: updatedPoop});
    poopArr = updatedPoop
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HOW WAS YOUR POOP TODAY?
        </h1>
        <button onClick={consoleDef}>Key Slides</button>
        <button onClick={handlePoop}>
          Make Poop
        </button>
        <MapPoop poop={poopValue.poop} method={(i) => removePoop(i)}/>
      </header>
    </div>
  );
}

export default App;

// https://dev.to/francodalessio/understanding-the-importance-of-the-key-prop-in-react-3ag7
// https://medium.com/@adhithiravi/why-do-i-need-keys-in-react-lists-dbb522188bbb
// https://reactjs.org/docs/lists-and-keys.html
