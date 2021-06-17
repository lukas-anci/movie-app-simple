const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

router.get('/api/todos', (req, res) => {
  Todo.find()
    .then((foundTodos) => res.json(foundTodos))
    .catch((err) => res.status(500).json({ success: false, err }));
});

router.post('/api/todos/new', (req, res) => {
  console.log('i posta gauta ', req.body);
  const newTodo = new Todo(req.body);

  // req.body = {
  // title:"Buy milk"
  //}
  newTodo
    .save()
    .then((result) => {
      res.json({ success: true, result: result });
    })
    .catch((err) => res.status(500).json({ success: false, err }));
});

router.delete('/api/todos/:id', async (req, res) => {
  // Todo.findByIdAndDelete(req.params.id)
  //   .then((result) => res.json({ success: true, deleted: result }))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true, deleted: result });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// do un do
router.patch('/api/todos/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});
// this is edit
router.patch('/api/todos/edit/:id', async (req, res) => {
  console.log('patch to edit endpoint', req.params.id, req.body.isEditOn);
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true, result });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
