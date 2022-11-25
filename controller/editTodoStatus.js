const objectId = require('mongodb').ObjectId;

const editTodoStatus = async (req, res) => {
  const collection = req.app.locals.collection;

  const id = new objectId(req.params.id);

  try {
    const todo = await collection.findOne({ _id: id });
    const result = await collection.updateOne(
      { _id: id },
      { $set: { completed: !todo.completed } }
    );
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = editTodoStatus;
