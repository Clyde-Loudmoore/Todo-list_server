const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const db = require('./queries');

const PORT = process.env.DEV_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/todos', db.getAllTodos);
app.get('/api/todos/:id', db.getTodoById);
app.post('/api/todos', db.createTodo);
app.patch('/api/todos/:id', db.editTodo);
app.delete('/api/todos/:id', db.deleteTodo);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
