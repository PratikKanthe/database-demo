const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "testdb",
});


app.get("/users", (re, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.get("/", (re, res) => {
  return res.json("Hi from backend 👋");
});


app.listen(8081, () => {
  console.log("sun raha hu bhai me 👍");
});
