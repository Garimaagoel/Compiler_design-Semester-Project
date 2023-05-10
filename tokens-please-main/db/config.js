const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mini_project",
});

conn.connect((e) => {
  if (e) {
    console.error(e);
  } else {
    console.log("connected to db");
  }
});

module.exports = conn;
//for multiple export: module.exports = {obj1, obj2,....,obj2}
