const express = require('express');
const mysql = require('mysql');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes=require('./routes/auth');
const profileRoutes=require('./routes/profile')
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();
const router = express.Router();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  key: 'userId',
  secret: 'Ashwani',
  resave: false,
  saveUninitialized: false,
}));
app.use("/auth", authRoutes);
app.use("/get", profileRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});