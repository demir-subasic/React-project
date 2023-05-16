import React, {useState} from 'react';
export default function ColorPicker() {

    const [field, setField] = useState('')

    const selectColor = (e) => {
        setField(e.target.value)
    }

  return (
    <div className='color-picker'>
    <div className='picker'>
        <label>Odaberite boju : </label>
        <select value={field} onChange={selectColor}>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
        </select>
    </div>


    <div className='color-select'>
        <p className='select-text'>Odabrana boja : {field}</p>
    </div>
      
    </div>
  )
}
