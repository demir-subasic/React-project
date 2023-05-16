import React, {useState} from 'react'
import "./todo.css"

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItems] = useState("")

    const addItems = () => {
        if (newItem !== "") {
            setItems([...items, newItem]);
            setNewItems("")
        }
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems)
    }

  return (
    <div>
      <h2>Todo List</h2>
      <input type='text' value={newItem} onChange={(e) => setNewItems(e.target.value)}/>
      <button onClick={addItems}>Add Item</button>
      <ul className='todo-ul'>
        {items.map((item, index) => (
            <li className='todo-li' key={index}>
                {item}
                <button className='remove-button' onClick={() => removeItem(index)}>X</button>
                
            </li>
        ))}
      </ul>
    </div>
  )
}
