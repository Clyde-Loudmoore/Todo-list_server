const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoScheme = new Schema({
  value: String,
  status: Boolean,
});

const Todo = mongoose.model('Todo', todoScheme);

const todo = new Todo({ value: 'Make homework', status: false });

const main = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
  await todo.save();
  console.log('Сохранен объект', todo);
  await mongoose.disconnect();
};

main().catch(console.log);
