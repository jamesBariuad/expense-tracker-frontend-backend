const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetsSchema = new Schema({
  amount: Number,
  category: String,
  timeFrame: String,
});

module.exports = mongoose.model("Budgets", budgetsSchema);
