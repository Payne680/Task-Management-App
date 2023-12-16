
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');
// const taskRoutes = require('./routes/task.routes');

app.use(express.json());

// Routes setup
app.use('/', indexRoutes);
// app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
