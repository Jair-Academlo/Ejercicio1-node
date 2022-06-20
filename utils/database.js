const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'registration',
  logging: false,
});

module.exports = { db };
