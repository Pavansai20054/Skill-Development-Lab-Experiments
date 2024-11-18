### Here is the 9th Experiment of Skill Development Lab:

## Here is the question :

#### Develop an express web application that can interact with REST API to perform CRUD operations on student data. (Use Postman)


# Student API

A simple Express-based API that allows CRUD operations for managing student data.

## Features

- Add a student (POST)
- View all students (GET)
- Update a student's information (PUT)
- Delete a student (DELETE)

## Technologies Used

- Node.js
- Express.js

## Setup and Installation

### Prerequisites
- Node.js installed on your machine.

### Steps to Run the API Locally

1. **Clone the repository** (or create your own project folder):
   ```bash
   git clone https://github.com/your-username/student-api.git 
   ```

2. **Navigate to the project folder:** 
    ```bash
    cd student-api
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the server:**
    ```bash
    node server.js
    ```

This will start the API server on http://localhost:3000.

## API Endpoints

1. **GET /students Get all students.**
    ```bash
    Example Request:GET
    http://localhost:3000/students

   Response:
   [
     {
       "id": 1,
       "name": "John Doe",
       "age": 20
     }
   ]
   ```

2. **POST /students Add a new student.**
    ```bash
    Example Request:
    POST http://localhost:3000/students

   Request Body:
   {
     "id": 1,
     "name": "Pavansai",
     "age": 19
   }

   Response:
   {
     "id": 2,
     "name": "Sanjana",
     "age": 20
   }
    ```

3. **PUT /students/:id Update a student's information by ID.**
    ```bash
   Example Request:
   PUT http://localhost:3000/students/1

   Request Body:
   {
     "name": "John Doe Updated",
     "age": 21
   }

   Response:
   {
     "id": 1,
     "name": "John Doe Updated",
     "age": 21
   }
    ```

4. **DELETE /students/:id Delete a student by ID.**
    ```bash
   Example Request:
   DELETE http://localhost:3000/students/1

   Response:
   [
     {
       "id": 1,
       "name": "John Doe",
       "age": 20
     }
   ]
    ```

## Error Handling:
- If the required fields (id, name, and age) are not provided when adding a student, you will receive a 400 status with an error message:
```bash
  {
    "error": "Please provide id, name, and age for the student."
  }
```
- If a student is not found while updating or deleting, you will receive a 404 status with the message:
  {
    "error": "Student not found."
  }

## Contribution:
Feel free to fork the repository and submit pull requests for improvements, bug fixes, or feature additions.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact:
Gmail: pavansai87654321@gmail.com


### Key Features of the Updated `README.md`:
- **Professional Formatting**: Clean layout using Markdown, with headings, code blocks, and clear sections.
- **Easy Navigation**: Divided into logical sections such as `Features`, `Technologies Used`, and `Setup and Installation`.
- **Code Highlighting**: Proper formatting of code snippets (using triple backticks for code blocks).
- **Readable Structure**: Makes it easier for other developers to follow the setup process and understand the API.

You can copy this directly into your `README.md` file. Let me know if you need further adjustments!


