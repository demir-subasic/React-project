import React, { useState } from 'react';


function Text() {
    const [field, setField] = useState("")

  const inputType = (e) => {
    setField(e.target.value)
  }


  return(
    <div className='Text'>

    <input type='text' onChange={inputType}/>
     <p>Uneli ste : {field}</p>

    </div>
  )
}

export default Text;