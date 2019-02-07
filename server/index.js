const express = require('express');
const { json } = require('body-parser');
const port = 3010;
const app = express()
const cors = require('cors');
const mysql = require('promise-mysql');
// var mysql=require('mysql');
const { getUser } = require('./controller/peepApi');

app.use(json());
app.use(cors());


mysql.createConnection({
  connectionLimit: 10,
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
  // port: 3306
})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(`Danger! Backend error: ${ error }`)
});

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host: '192.168.0.7',
//   user: 'root',
//   password: '',
//   database: 'mydb'
// });


// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

////  User Endpoint
app.get('/api/user', getUser)


//// Listen to Backend Server
app.listen(port, () => {
  console.log(`Server is UP and listen to port ${ port }`)
});