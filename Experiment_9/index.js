const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = [];

// Root Route
app.get('/', (req, res) => res.send('Welcome to the Student API. Use /students for CRUD operations.'));

// CRUD Operations
app.route('/students')
    .get((req, res) => res.json(students))  // Get all students
    .post((req, res) => {
        const { id, name, age } = req.body;
        if (!id || !name || !age) return res.status(400).json({ error: 'Please provide id, name, and age.' });
        students.push(req.body);
        res.status(201).json(req.body);
    });

app.route('/students/:id')
    .put((req, res) => {
        const index = students.findIndex(s => s.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).send('Student not found.');
        students[index] = { ...students[index], ...req.body };
        res.json(students[index]);
    })
    .delete((req, res) => {
        const index = students.findIndex(s => s.id === parseInt(req.params.id));
        if (index === -1) return res.status(404).send('Student not found.');
        res.json(students.splice(index, 1));
    });

// Server running
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
