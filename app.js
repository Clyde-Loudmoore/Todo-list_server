const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

const app = express();
const PORT = 3000;

const jsonParser = express.json();

const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');

app.get('/api/todos', async (_, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const result = await collection.find({}).toArray();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/api/todos', jsonParser, async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');

    const todoValue = req.body.value;
    const todoStatus = req.body.status;
    const todo = { value: todoValue, status: todoStatus };
    const result = await collection.insertOne(todo);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const id = new objectId(req.params.id);
    const result = await collection.deleteOne({ _id: id });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.patch('/api/todos/:id', jsonParser, async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db('todosdb');
    const collection = db.collection('todos');
    const todoValue = req.body.value;
    const todoStatus = req.body.status;
    const id = new objectId(req.params.id);

    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $set: { value: todoValue, status: todoStatus } },
      { returnDocument: 'after' }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

process.on('SIGINT', async () => {
  await mongoClient.close();
  console.log('Приложение завершило работу');
  process.exit();
});

app.listen(PORT);
