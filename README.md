# React-Node-MySQL Authentication App

This is a simple authentication app built using React for the front end, Node.js and Express for the back end, and MySQL as the database.

## Features

- User registration
- User login
- Secure password storage

## Technologies Used

- **Front End**: React
- **Back End**: Node.js, Express
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)

## Setup and Installation

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/react-node-mysql-authentication.git
cd react-node-mysql-authentication
```

2. Install dependencies for the back end:

```sh
cd backend
npm install
```

3. Configure the back end by creating a `.env` file with your MySQL and JWT settings.

4. Start the back end server:

```sh
npm start
```

5. Install dependencies for the front end:

```sh
cd ../frontend
npm install
```

6. Start the front end server:

```sh
npm start
```

The app should now be running on `http://localhost:3000`.

## Basic Usage

1. Register a new user.
2. Log in with the registered credentials.
3. Access protected routes after logging in.
