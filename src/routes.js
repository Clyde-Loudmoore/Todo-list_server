const express = require('express');
const controller = require('./controller/index');

const routes = express.Router();

routes.get('/', controller.getTodos);
routes.post('/', controller.createTodo);
routes.patch('/:todoId', controller.updateTodo);
routes.delete('/:todoId', controller.deleteTodo);

module.exports = routes;
