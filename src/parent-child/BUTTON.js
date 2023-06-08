import React, {useState} from 'react'

const BUTTON = ({onButtonClick}) => {

  const [inputText, setInputText] = useState('');

  const handleClick = () => {
    onButtonClick(inputText);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={handleClick}>Send Text</button>
    </div>
  );
}

export default BUTTON
