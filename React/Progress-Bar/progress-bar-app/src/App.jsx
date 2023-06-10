import './App.css';
import React,{useState} from 'react';

function App() {
  const[progress, setProgress] = useState(0);

  const handleIncrease = () => {
    if(progress <= 90) {
      setProgress(progress+10)
    } else {
      setProgress(100)
    }   
  }
  const handleDecrease = () => {
    if(progress <= 10) {
      setProgress(0)
    } else {
      setProgress(progress-10)
    }
  }
  const handleReset = () => {
    setProgress(0)
  }
  const handleColor = () => {
    if(progress<40) {
      return '#ff0000'
    } else{
      return '#00cc00'
    }
  }
  return (
   <>
   <div id='container'>
   <div id='progress-bar'>
    <div id='progress-bar-child' style={{width:`${progress}%`, background:handleColor()}}></div>
   </div>
   <h3 id='progress-percent'>{progress}%</h3>
   <button onClick={handleIncrease}>Increase</button>
   <button onClick={handleDecrease}>Decrease</button>
   <button onClick={handleReset}>Reset</button>
   </div>
   
   </>
  );
}

export default App;
