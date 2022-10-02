const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  description: String,
  category: String,
  value: Number,
  date: String,
});

module.exports = mongoose.model("Income", incomeSchema, "income");
