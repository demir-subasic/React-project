import React, { useState } from 'react';
import './App.css'
import axios from 'axios'
import BUTTON from './components/BUTTON';


function App() {

  const [paragraph, setParagraph] = useState('')

  const change = (data) => {
    setParagraph(data)
  }
  return(
    <div>
     <p> Ovde dodaj tekst : {paragraph} </p>
     <BUTTON text={change}/>
    </div>
  )
}
export default App;
