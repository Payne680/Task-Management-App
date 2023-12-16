const { generateId } = require('../helpers/helper');

class User {
    constructor(username, password) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }

    static createUser(newUser, usersData) {
        usersData.push(newUser);
    }

    static getUserByUsername(username, usersData) {
        return usersData.find(user => user.username === username);
    }
}

module.exports = User;
