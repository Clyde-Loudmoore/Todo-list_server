const express = require('express');
const controller = require('./controller/index.js');

const routes = express.Router();

routes.get('/todos', controller.getAllTodos);
routes.post('/todos', controller.createTodo);
routes.delete('/todos/:id', controller.deleteTodo);
routes.patch('/todos/:id', controller.editTodo);

module.exports = routes;
