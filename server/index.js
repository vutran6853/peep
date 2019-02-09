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
// massive.connectSync({ connectionString: url })
// .then((dbInstance) => {
//   console.log('Connet to Database...', dbInstance);
//   app.set('db', dbInstance)
// })
// .catch((error) => console.log(`Danger unable to connect to Database`));
// console.log(massive);

massive('postgres://oesrnqnohtgkxj:142ab8760cd3d878c5f170325ab0bf1875d89516386cdcc7d744d730ebbcd81d@ec2-54-163-246-159.compute-1.amazonaws.com:5432/d6om9fi9vc9ekq?ssl=true')
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