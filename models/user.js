// const User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// });

const { Sequelize } = require("sequelize")

// module.exports = User;

module.exports = function(sequelize) {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  });
  User.sync({force: true})
  return User;
}