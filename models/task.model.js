const fs = require('fs');
const { generateId } = require('../helpers/helper');

function getAllTasks(tasksData, userId) {
    return tasksData.filter(task => task.userId === userId);
}

function getTaskById(taskId, tasksData, userId) {
    return tasksData.find(task => task.id === taskId && task.userId === userId);
}

function createTask(userId, title, description, dueDate, tasksData) {
    const newTask = {
        id: generateId(),
        userId,
        title,
        description,
        dueDate,
        status: 'pending',
    };
    tasksData.push(newTask);
    saveTasksToFile(tasksData);
    return newTask;
}

function updateTaskById(taskId, updatedTask, tasksData, userId) {
    const index = tasksData.findIndex(task => task.id === taskId && task.userId === userId);
    if (index !== -1) {
        tasksData[index] = { ...tasksData[index], ...updatedTask };
        saveTasksToFile(tasksData);
        return tasksData[index];
    }
    return null;
}

function deleteTaskById(taskId, tasksData, userId) {
    const index = tasksData.findIndex(task => task.id === taskId && task.userId === userId);
    if (index !== -1) {
        const deletedTask = tasksData.splice(index, 1);
        saveTasksToFile(tasksData);
        return deletedTask[0];
    }
    return null;
}

function updateTaskStatus(taskId, status, tasksData, userId) {
    const task = tasksData.find(task => task.id === taskId && task.userId === userId);
    if (task) {
        task.status = status;
        saveTasksToFile(tasksData);
        return task;
    }
    return null;
}

function saveTasksToFile(tasksData) {
    fs.writeFile('data/tasks.json', JSON.stringify(tasksData, null, 2), 'utf8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Tasks saved to file successfully!');
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
    updateTaskStatus,
};
