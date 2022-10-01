const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Int32 = require("mongoose-int32");

const expenseSchema = new Schema({
  description: String,
  category: String,
  value: Int32,
  date: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
