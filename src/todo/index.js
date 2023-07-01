import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchTodos, createTodo, deleteTodo } from '../api'

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

    


    const handleDeleteTodo = async (todoId) => {
        const success = await deleteTodo(todoId);
        if (success) {
          const removeItem = todos.filter((todo) => todo.id !== todoId)
          setTodos(removeItem)
        }
      };
      


  return (
    <div>
        <input type="text" value={change} onChange={(e) => {
        setChange(e.target.value)
        }}/>
      <button onClick={handleCreateTodo}>Add todo</button>
      <ul>
        {todos.map ((todo)=> (
            <div>
                <li key={todo.id}>{todo.title}</li>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>

        ))}
      </ul>


    </div>
  )
}

export default TodoList
