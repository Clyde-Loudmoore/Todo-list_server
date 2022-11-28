const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');

const createTodo = async (req, res) => {
  try {
    await mongoClient.connect();

    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');

    const todoValue = req.body.value;
    const todo = { value: todoValue, status: false };

    const result = await collection.insertOne(todo);
    await res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  } finally {
    await mongoClient.close();
  }
};

module.exports = createTodo;
