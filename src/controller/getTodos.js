const Todo = require('../db/models/schemeTodo');

const getTodos = async (_, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

module.exports = getTodos;
