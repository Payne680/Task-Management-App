const fs = require('fs');
const { generateId } = require('../helpers/helper');

function createUser(username, password, usersData) {
    const newUser = {
        id: generateId(),
        username,
        password,
    };
    usersData.push(newUser);
    return newUser; // Return the new user without saving to file here
}

function getUserByUsername(username, usersData) {
    return usersData.find(user => user.username === username);
}

function saveUsersToFile(usersData) {
    fs.writeFile('data/users.json', JSON.stringify(usersData, null, 2), 'utf8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Users saved to file successfully!');
    });
}

module.exports = {
    createUser,
    getUserByUsername,
    saveUsersToFile,
};