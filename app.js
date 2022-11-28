require('dotenv').config();
const cors = require('cors');
const routes = require('./src/routes');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const PORT = process.env.DEV_PORT;
const MONGO_URL = process.env.MONGO_URL;

const mongoClient = new MongoClient(MONGO_URL);

app.use(express.json());
app.use(cors());
app.use('/api/todos', routes);

process.on('SIGINT', async () => {
  await mongoClient.close();
  console.log(PORT);
  console.log('Application has complited');
  process.exit();
});
app.listen(PORT);
