const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');
const objectId = require('mongodb').ObjectId;

const editTodo = async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const todoValue = req.body.value;
    const todoStatus = req.body.status;
    const id = new objectId(req.params._id);

    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $set: { value: todoValue, status: todoStatus } },
      { returnDocument: 'after' }
    );
    res.header('Access-Control-Allow-Origin', '*');
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = editTodo;
