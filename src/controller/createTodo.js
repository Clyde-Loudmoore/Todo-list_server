const mongoose = require('mongoose');
const objectId = require('mongodb').ObjectId;
const Todo = require('../db/models/schemeTodo');
const config = require('../config');

const createTodo = async (req, res) => {
  const todoValue = req.body.value;
  const todoStatus = req.body.status;

  try {
    await mongoose.connect(config.mongoUrl);
    const id = new objectId(req.params.id);
    const todo = new Todo({ _id: id, value: todoValue, status: todoStatus });
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = createTodo;
