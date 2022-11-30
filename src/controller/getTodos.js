const mongoose = require('mongoose');
const config = require('../config');
const Todo = require('../db/models/schemeTodo');

const getTodos = async (req, res) => {
  try {
    await mongoose.connect(config.mongoUrl);
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = getTodos;
