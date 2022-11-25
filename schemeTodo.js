const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoScheme = new Schema(
  {
    value: { type: String, require: true },
    status: { type: Boolean, require: true },
  },
  { versionKey: false }
);

const Todo = mongoose.model('Todo', todoScheme);

module.exports = Todo;
