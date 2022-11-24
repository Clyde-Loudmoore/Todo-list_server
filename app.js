const routes = require('./routes');

const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', routes);

process.on('SIGINT', async () => {
  await mongoClient.close();
  console.log('Приложение завершило работу');
  process.exit();
});

app.listen(PORT);
