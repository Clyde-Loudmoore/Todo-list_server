const Todo = require('../schemeTodo');

const createTodo = async (req, res) => {
  if (!req.body.todoValue) {
    return res.sendStatus(400);
  }
  const { todoValue } = req.body;
  try {
    const todo = await Todo.create({ value: todoValue, status: false });
    await res.json(todo);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = createTodo;
