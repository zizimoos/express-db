const mysql = require("mysql");
const logger = require("./logger");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    logger.info(" 🟡  Connected to DB".yellow);
  }
});

// db.query("SELECT * FROM users", (err, data) => {
//   console.log(data);
// });

module.exports = db;
