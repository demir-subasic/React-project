import React, {useState} from 'react'

const BUTTON = ({text}) => {
     
    const sendText = () => {
        const data = 'Hello from child'
        text(data)
    }
   
  return (
    <div>
      <button onClick={sendText}>Send Data to Parent</button>
    </div>
  )
}

export default BUTTON
