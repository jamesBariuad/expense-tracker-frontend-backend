const express = require("express");
const router = express.Router();

const Expense = require("../models/expense");

router.get("/", (request, response) => {
  Expense.find().then((expenseData) => {
    response.send(expenseData);
  });
});

module.exports = router;