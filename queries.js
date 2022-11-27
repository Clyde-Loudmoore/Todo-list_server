const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'Denis',
  port: 5432,
});

const getAllTodos = async (req, res) => {
  const id = req.params.id;

  pool.query('SELECT * FROM todos ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
    res.send(id);
  });
};

const getTodoById = (req, res) => {
  const id = req.params.id;

  pool.query('SELECT * FROM todos WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

const createTodo = async (req, res) => {
  const { value } = req.body;
  pool.query(
    'INSERT INTO todos (value) VALUES ($1) RETURNING *',
    [value],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Todo added width ID ${results.insertId}`);
    }
  );
};

const editTodo = async (req, res) => {
  const { id, value } = req.body;

  pool.query;
  'UPDATE todos SET value = $1 WHERE ID = $3 RETURNING *',
    [value, id],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Todo modified with ID: ${id}`);
    };
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  pool.query('DELETE FROM todos WHERE id = $1', [id], (error) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Todo deleted with ID: ${id}`);
  });
};

module.exports = {
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getTodoById,
};
