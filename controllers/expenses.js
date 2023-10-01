const ExpenseTable = require("../models/expenseModel");

exports.insertNewExp = async (req, res, next) => {
  try {
    if (!req.body.description && req.body.expense) {
      throw new Error("expense & description is mandatory");
    }
    const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;

    const data = await ExpenseTable.create({
      expense: expense,
      description: description,
      category: category,
    });
    res.status(201).json({ newExpenseDetail: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.getAllExpenses = async (req, res, next) => {
  try {
    const exp = await ExpenseTable.findAll();
    res.status(200).json({ allExpense: exp });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteExpense = async (req, res, next) => {
  const prodId = req.params.id;

  try {
    await ExpenseTable.destroy({
      where: {
        id: prodId,
      },
    });
    res.status(204).json({ msg: `this id=${prodId} is deleted` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
