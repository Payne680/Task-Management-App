const usersData = require('../data/users.json');
let loggedInUser = null;

function authenticate(username, password) {
    // Simulating basic authentication
    const user = usersData.find(
        user => user.username === username && user.password === password
    );
    if (user) {
        loggedInUser = user;
        return true;
    }
    return false;
}

function requireAuth(req, res, next) {
    if (!loggedInUser) {
        return res.status(401).send('Unauthorized');
    }
    req.user = loggedInUser;
    next();
}

module.exports = {
    authenticate,
    requireAuth,
};
