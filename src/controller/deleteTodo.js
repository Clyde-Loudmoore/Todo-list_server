const objectId = require('mongodb').ObjectId;
const Todo = require('../db/models/schemeTodo');

const deleteTodo = async (req, res) => {
  try {
    const _id = objectId(req.params.todoId);
    await Todo.deleteOne(_id);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

module.exports = deleteTodo;
