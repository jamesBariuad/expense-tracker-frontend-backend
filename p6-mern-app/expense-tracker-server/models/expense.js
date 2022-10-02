const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  description: String,
  category: String,
  value: Number,
  date: String,
});

module.exports = mongoose.model("Expense", expenseSchema, "expense");
