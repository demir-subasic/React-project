import React, {useState} from "react";
import "./counter.css"

function Counter() {


    const [count, setCounter] = useState(0)

  const handleCounter = () => {
    setCounter(count + 1)
  }
  const handleCounterr = () => {
    setCounter(count - 1)
  }
  const resetCounter = () => {
    setCounter(0)
  }

    return(
        <div>
     <p>Dodati godine:  {count}</p>
     <button className='btn' style = {{backgroundColor: 'red'}} onClick={handleCounter}>Click to +</button>
     <button className='btn' style = {{backgroundColor: 'gray'}}onClick={resetCounter}>Reset</button>
     <button className='btn' style = {{backgroundColor: 'yellow'}} onClick={handleCounterr}>Click to -</button> 
     </div>
    )
}

export default Counter;