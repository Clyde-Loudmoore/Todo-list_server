const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');

const getAllTodos = async (_, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const result = await collection.find({}).toArray();
    res.header('Access-Control-Allow-Origin', '*');
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

module.exports = getAllTodos;
