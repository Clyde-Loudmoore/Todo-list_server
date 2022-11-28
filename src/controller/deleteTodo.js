const objectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');

// const Todo = require('../schemeTodo');

const deleteTodo = async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const id = new objectId(req.params._id);
    const result = await collection.deleteOne({ _id: id });
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
