const express = require('express');
const controller = require('./controller/index');

const routes = express.Router();

routes.get('/', controller.getAllTodos);
routes.post('/', controller.createTodo);
routes.delete('/:_id', controller.deleteTodo);
routes.patch('/:_id', controller.editTodo);

module.exports = routes;
