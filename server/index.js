////  define environment variable
require('dotenv').config()

////  Express middleware
const express = require('express');

////  JSON middleware
const { json } = require('body-parser');

////  cors for http/all origins 
const cors = require('cors');

////  Massive middleware for PostgreSQL
const massive = require('massive');
const port = 3010;
const monitor = require('pg-monitor');
////  define express on app
const app = express()
app.use(json());
app.use(cors());

////  Endpoint callback fuction controller
const { getAllUser, registerUser } = require('./controller/peepApiController');

//// Connect to PostgreSQL Database and define 'db' on app
massive(process.env.DB_CONNECT_STRING)
.then(dbInstance => {
  // console.log(`copy of DB:`, dbInstance)
  app.set('db', dbInstance)
  monitor.attach(dbInstance.driverConfig);
});


////  User Endpoint RESTFull API
app.get('/api/allUser', getAllUser)
app.post('/api/register', registerUser)

//// Listen to Backend Server
app.listen(port, () => {
  console.log(`Server is UP and listen to port ${ port }`)
});