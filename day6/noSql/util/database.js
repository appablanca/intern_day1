const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'rootPassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
