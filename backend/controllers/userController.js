const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;

