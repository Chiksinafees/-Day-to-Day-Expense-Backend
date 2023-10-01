const Sequalize = require("sequelize");

const sequelize = require("../utils/Database");

const ExpenseTable = sequelize.define("expense-table", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  expense: {
    type: Sequalize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = ExpenseTable;
