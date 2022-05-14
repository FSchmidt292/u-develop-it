const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Ickl#Lkcjhw3bn4jklCJKSfh3kj43k*FD',
  database: 'election'
});

module.exports = db;
