const mongoose = require('mongoose');
const objectId = require('mongodb').ObjectId;
const Todo = require('../db/models/schemeTodo');
const config = require('../config');

const updateTodo = async (req, res) => {
  const { value, status } = req.body;

  try {
    await mongoose.connect(config.mongoUrl);
    const _id = objectId(req.params.todoId);
    const result = await Todo.findByIdAndUpdate(_id, {
      value,
      status,
    });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = updateTodo;
