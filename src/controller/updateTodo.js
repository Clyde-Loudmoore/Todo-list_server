const mongoose = require('mongoose');
const Todo = require('../db/models/schemeTodo');
const config = require('../config');

const updateTodo = async (req, res) => {
  const todoValue = req.body.value;
  const todoStatus = req.body.statys;
  try {
    await mongoose.connect(config.mongoUrl);
    // const _id = Todo._id;
    const result = await Todo.updateOne({
      value: todoValue, status: todoStatus
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = updateTodo;
