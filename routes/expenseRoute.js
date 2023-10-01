const express = require("express");

const expenseController = require("../controllers/expenses");
const router = express.Router();

router.post("/insert", expenseController.insertNewExp);
router.get("/all", expenseController.getAllExpenses);
router.delete("/all/:id", expenseController.deleteExpense);

module.exports = router;
