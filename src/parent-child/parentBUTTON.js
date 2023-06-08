import React, {useState} from 'react'
import BUTTON from './BUTTON'

const ParentBUTTON = () => {
    
const [text, setText] = useState('');

  const handleButtonClick = (textFromChild) => {
    setText(textFromChild);
  };

  return (
    <div>
    <p>Type something: {text}</p>
    <BUTTON onButtonClick={handleButtonClick} />
    </div>
  );
}

export default ParentBUTTON
