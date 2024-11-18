### Here is the 11th Experiment of Skill Development Lab:

## Here is the question :

#### Create a TODO application in react with necessary components and deploy it into github.

# Todo List App

A simple and functional Todo List app built with React. This app allows you to add, delete, and toggle the completion status of tasks.

## Features

- Add a task
- Delete a task
- Mark a task as completed or incomplete
- Simple UI and responsive design

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **useState**: React hook for managing state
- **CSS**: Basic styling for the app

## Getting Started

Follow the instructions below to set up and run the app locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)

### Steps to Run the Project

#### Step 1: Set Up the Project

1. **Create a React App**:  
   Open your terminal and navigate to your preferred directory. Run the following command to generate a new React app. Replace "todo-app" with your desired project name:

   ```bash
   npx create-react-app todo-app
    ```
This command will create a directory named "todo-app" with all the initial code required for a React app.

2. **Navigate to the Project Directory:**
Change your working directory to the "todo-app" folder:

    ```bash
    cd todo-app
    ```

3. **Start the Development Server:**
Launch the development server with the following command:

    ```bash
    npm start
    ```

This will open your React app, and you’ll see the default React starter page in your web browser at [localhost:3000](http://localhost:3000)

### Step 2: Create the App Component

Go inside todo_app folder and open src folder there you will find App component/ App.js.

The App component serves as the entry point to the Todo List application.

    ```javascript
    import React from 'react';
    import TodoList from './components/TodoList';

    function App() {
    return (
        <div className="App">
        <TodoList />
        </div>
    );
    }

    export default App;
    ```

### Step 3: TodoList Component

### First create a new directory/folder inside the src folder name the folder as "components"

The TodoList component manages the list of tasks and contains functions for adding, deleting, and toggling tasks.

In components directory add these two files:

## First file: TodoList.js
```javascript
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
```

## Second file TodoItems.js

```javascript
import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;
```

### Step 4: Styling

You can style the Todo List to enhance its visual appeal. Below is an example of how to style the todo items in the App.css file which is present in src folder:

```App.css
.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.todo-item p {
  color: #888;
  text-decoration: line-through;
}
```

## Conclusion
This Todo List application is a basic React app that demonstrates how to work with state, handle events, and manage user input. You can further extend this app by adding more features like task editing, persisting data, or categorizing tasks.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contact
**Gmail:** pavansai87654321@gmail.com