const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

const router = express.Router();
const saltRounds = 10;

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send("Error hashing password.");
    }

    const checkUserQuery = `SELECT * FROM users WHERE username = ? OR email = ?`;
    db.query(checkUserQuery, [username, email], (err, result) => {
      if (err) {
        return res.status(500).send("Database error.");
      }

      if (result.length > 0) {
        return res.status(400).send({ msg: "Username or Email Already Present" });
      }

      const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(insertUserQuery, [username, email, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).send("Error inserting user.");
        }
        res.status(201).send({ msg: "User registered successfully!" });
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { uniqueID, password } = req.body;
  console.log(req.body);
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uniqueID);
  const query = isEmail ? "SELECT * FROM users WHERE email = ?" : "SELECT * FROM users WHERE username = ?";
  db.query(query, [uniqueID], (err, result) => {
    if (err) {
      return res.status(500).send("Database error.");
    }

    if (result.length === 0) {
      return res.status(404).send({ login: false, msg: "User Not Exists" });
    }

    const user = result[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        return res.status(500).send("Error comparing passwords.");
      }

      if (!match) {
        return res.status(401).send({ login: false, msg: "Wrong Password" });
      }

      const token = jwt.sign({ username: user.username, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      });

      res.cookie('token', token, { httpOnly: true });
      res.send({ login: true });
    });
  });
});


module.exports = router;