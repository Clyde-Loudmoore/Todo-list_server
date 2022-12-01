const mongoose = require('mongoose');
const objectId = require('mongodb').ObjectId;
const Todo = require('../db/models/schemeTodo');
const config = require('../config');

const deleteTodo = async (req, res) => {
  try {
    await mongoose.connect(config.mongoUrl);
    const _id = objectId(req.params.todoId);
    await Todo.deleteOne(_id);
    console.log(_id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = deleteTodo;
