import React, { useState, useEffect } from 'react';
import TodoItem from './components/todoItem';
import todosData from './todosData'

function App() {
  const [todos, setTodos] = useState(todosData);

  useEffect(() => {
    console.log(todos)
  }, [])

  const handleChange = (id) => {

    const newTodo = todos.map(val => {
       val._id === id ? val.completed = !val.completed : val.completed = val.completed
       return val
    })

    console.table(newTodo)
    setTodos(newTodo)

    console.log('checked', id)
  }


  const todosItem = todos.map(val => <TodoItem key={val._id} item={val} handleChange={() => handleChange(val._id)} />)
  return (
    <div className="todo-list">
      {
        todosItem
      }
    </div>
  );
}

export default App;
