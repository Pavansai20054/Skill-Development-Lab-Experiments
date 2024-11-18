import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);  // Toggle task completion status
  }

  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}  // Toggle completion status when clicked
      />
      <p className={task.completed ? 'completed' : ''}>{task.text}</p>  {/* Strike-through completed tasks */}
      <button onClick={() => deleteTask(task.id)}> X </button>  {/* Delete task button */}
    </div>
  );
}

export default TodoItem;
