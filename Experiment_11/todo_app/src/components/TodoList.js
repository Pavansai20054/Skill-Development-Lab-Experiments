import React, { useState } from 'react'; 
import TodoItem from './TodoItem.js';  // Import TodoItem component

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false }
  ]);

  const [text, setText] = useState('');  // Track input text for adding a task

  function addTask(text) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);  // Add new task
    setText('');  // Clear the input field
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));  // Remove task by ID
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleCompleted={toggleCompleted} 
        />
      ))}
      <input 
        value={text}
        onChange={e => setText(e.target.value)}  // Update text state
      />
      <button onClick={() => addTask(text)}>Add</button>  {/* Add task button */}
    </div>
  );
}

export default TodoList;
