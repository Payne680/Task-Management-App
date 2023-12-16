const { generateId } = require('../helpers/helper');

class Task {
    constructor(userId, title, description, dueDate) {
        this.id = generateId();
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = 'pending';
    }

    static getAllTasks(tasksData, userId) {
        return tasksData.filter(task => task.userId === userId);
    }

    static getTaskById(taskId, tasksData, userId) {
        return tasksData.find(task => task.id === taskId && task.userId === userId);
    }

    static createTask(newTask, tasksData) {
        tasksData.push(newTask);
    }

    static updateTaskById(taskId, updatedTask, tasksData, userId) {
        const index = tasksData.findIndex(task => task.id === taskId && task.userId === userId);
        if (index !== -1) {
            tasksData[index] = { ...tasksData[index], ...updatedTask };
            return tasksData[index];
        }
        return null;
    }

    static deleteTaskById(taskId, tasksData, userId) {
        const index = tasksData.findIndex(task => task.id === taskId && task.userId === userId);
        if (index !== -1) {
            const deletedTask = tasksData.splice(index, 1);
            return deletedTask[0];
        }
        return null;
    }

    static updateTaskStatus(taskId, status, tasksData, userId) {
        const task = tasksData.find(task => task.id === taskId && task.userId === userId);
        if (task) {
            task.status = status;
            return task;
        }
        return null;
    }
}

module.exports = Task;
