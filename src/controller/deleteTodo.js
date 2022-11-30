const mongoose = require('mongoose');
const Todo = require('../db/models/schemeTodo');
const config = require('../config');

const deleteTodo = async (req, res) => {
  try {
    await mongoose.connect(config.mongoUrl);
    const _id = Todo._id;
    const result = await Todo.deleteOne(_id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = deleteTodo;
