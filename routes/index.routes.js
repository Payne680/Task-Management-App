const express = require('express');
const fs = require('fs');
const router = express.Router();
const { authenticate } = require('../helpers/middlewares');
const User = require('../models/user.model');
const usersData = require('../data/users.json');

// Simulated login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isAuthenticated = authenticate(username, password);
    if (isAuthenticated) {
        res.send('Logged in successfully');
    } else {
        res.status(401).send('Authentication failed');
    }
});

// Signup route for user registration
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const existingUser = User.getUserByUsername(username, usersData);
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }
    const newUser = new User(username, password);
    User.createUser(newUser, usersData);

    // Save updated usersData back to users.json
    fs.writeFile('./data/users.json', JSON.stringify(usersData), err => {
        if (err) {
            return res.status(500).send('Error saving user data');
        }
        res.send('User registered successfully');
    });
});

module.exports = router;
