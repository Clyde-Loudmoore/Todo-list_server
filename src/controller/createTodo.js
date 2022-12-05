const objectId = require('mongodb').ObjectId;
const Todo = require('../db/models/schemeTodo');

const createTodo = async (req, res) => {
  const todoValue = req.body.value;

  try {
    const id = new objectId(req.params.id);
    const todo = new Todo({ _id: id, value: todoValue, status: false });
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = createTodo;
