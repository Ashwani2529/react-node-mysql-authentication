const express = require("express");
const authenticateToken = require("../middleware/auth");
const db = require("../config/db");

const router = express.Router();

router.get("/profile", authenticateToken, (req, res) => {
  const findUserQuery = `SELECT username, email FROM users WHERE username = ?`;
  db.query(findUserQuery, [req.user.username], (err, result) => {
    if (err) {
      return res.status(500).send("Database error.");
    }

    if (result.length === 0) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.send({ login: true, user: result[0] });
  });
});

module.exports = router;
