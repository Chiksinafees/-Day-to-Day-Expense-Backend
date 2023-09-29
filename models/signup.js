const Sequelize = require("sequelize");
const sequelize = require("../utils/Database");

const SignupTable = sequelize.define("signup-table", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = SignupTable;
