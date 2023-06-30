import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchTodos, createTodo } from '../api'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const [change, setChange] = useState('')


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetchTodos
    //         setTodos(data)
    //     }

    //     fetchData();
    // }, [])

    const handleCreateTodo = async () => {
        const newTodo = {title: change}
        const createdTodo = await createTodo(newTodo);
        setTodos([...todos, createdTodo]);
      };


  return (
    <div>
        <input type="text" value={change} onChange={(e) => {
        setChange(e.target.value)
        }}/>
      <button onClick={handleCreateTodo}>Add todo</button>
      <ul>
        {todos.map ((todo)=> (
            <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
