const Sequelize = require('sequelize');
function registerUser(req, res, next) {
  const dbInstance = req.app.get('db');
  
  dbInstance.registerNewUser(req.body.username, req.body.password)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((error) => console.log(`Danger! Can't register new user`));
}

function getAllUser(req, res, next) {
  // const dbInstance = req.app.get('db');
  console.log('HIT getAllUser');
  // dbInstance.getAllUsernameList()
  // .then((response) => {
  //   res.status(200).send(response)
  // })
  // .catch((error) => console.log(`Danger! Can't fetch list of users`));
}


module.exports = {
  getAllUser,
  registerUser
}