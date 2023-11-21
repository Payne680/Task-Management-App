# Task Management Application

This is a simple Task Management Application built with Node.js and Express.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Task Management Application is a web-based platform allowing users to manage tasks by creating, viewing, updating, and deleting them. It provides basic user authentication and stores task data in memory.

## Features
- User authentication for session-based login.
- Create, view, update, and delete tasks with a title, description, due date, and status.
- Task status can be toggled between completed and pending.
- All data is stored in memory and is non-persistent.

## Setup
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Usage
- Access the application via a web browser at `http://localhost:3000`.
- Register or log in to create, view, update, or delete tasks.

## Routes
- **POST** `/register`: Register a new user.
- **POST** `/login`: Log in to the application.
- **POST** `/logout`: Log out from the current session.
- **GET** `/tasks`: View all tasks for the logged-in user.
- **POST** `/tasks`: Create a new task.
- **PUT** `/tasks/:taskId`: Update an existing task.
- **DELETE** `/tasks/:taskId`: Delete a task.
- **PATCH** `/tasks/:taskId/status`: Toggle task status between completed and pending.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).
