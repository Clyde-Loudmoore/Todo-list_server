const express = require('express');
const controller = require('./controller/index');

const routes = express.Router();

routes.get('/', controller.getTodos);
routes.post('/', controller.createTodo);
routes.delete('/:todoId', controller.deleteTodo);
routes.patch('/:todoId', controller.updateTodo);

module.exports = routes;
