const objectId = require('mongodb').ObjectId;
const Todo = require('../schemeTodo');

const deleteTodo = async (req, res) => {
  const id = new objectId.ObjectId(req.query._id);
  try {
    const result = await Todo.findOneAndRemove({ _id: id });
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = deleteTodo;
