const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// установка схемы
const todoScheme = new Schema({
  value: String,
  status: Boolean,
});
// определяем модель User
const Todo = mongoose.model('Todo', todoScheme);
// создаем объект модели User
const todo = new Todo({ value: 'Make homework', status: false });

const main = async () => {
  // подключемся к базе данных
  await mongoose.connect('mongodb://127.0.0.1:27017/usersdb'); // сохраняем модель user в базу данных
  await todo.save();
  console.log('Сохранен объект', todo); // отключаемся от базы данных
  await mongoose.disconnect();
};
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log);

// module.export = Todo;
