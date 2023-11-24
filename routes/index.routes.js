const express = require('express');
const router = express.Router();
const { authenticate } = require('../helpers/middlewares');
const User = require('../models/user.model');
const usersData = require('../data/users.json');

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isAuthenticated = authenticate(username, password);
    if (isAuthenticated) {
        res.send('Logged in successfully');
    } else {
        res.status(401).send('Authentication failed');
    }
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const existingUser = User.getUserByUsername(username, usersData);
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }
    const newUser = User.createUser(username, password, usersData);

    // Save updated usersData back to users.json
    User.saveUsersToFile(usersData);

    res.send('User registered successfully');
});

module.exports = router;
