const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('/api/todos', cors(), routes);

(async () => {
  try {
    await mongoose.connect(config.mongoUrl);
  } catch (err) {
    return console.log(err);
  }
})();

module.exports = app;
