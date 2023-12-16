const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');
const tasksData = require('../data/tasks.json');
const { requireAuth } = require('../helpers/middlewares');

router.use(requireAuth);

router.get('/', (req, res) => {
    const userTasks = Task.getAllTasks(tasksData, req.user.id);
    res.json(userTasks);
});

router.post('/', (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTask = Task.createTask(req.user.id, title, description, dueDate, tasksData);
    res.json(newTask);
});

router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const result = Task.updateTaskById(taskId, updatedTask, tasksData, req.user.id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).send('Task not found');
    }
});

router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const deletedTask = Task.deleteTaskById(taskId, tasksData, req.user.id);
    if (deletedTask) {
        res.json(deletedTask);
    } else {
        res.status(404).send('Task not found');
    }
});

router.patch('/:id/status', (req, res) => {
    const taskId = req.params.id;
    const { status } = req.body;
    const updatedTask = Task.updateTaskStatus(taskId, status, tasksData, req.user.id);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).send('Task not found');
    }
});

module.exports = router;
