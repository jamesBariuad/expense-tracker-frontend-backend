const { response } = require("express");
const express = require("express");
const port = 8080;
const app = express();
const mongoose = require("mongoose");


app.listen(port, () => {
  console.log(`express server running on port ${port}`);
});

mongoose.connect(
  "mongodb+srv://test123:test123@expensetrackerdb.xzdy8u5.mongodb.net/expensetrackerdb"
);

const accountsRouter = require("./routes/accounts");
const budgetsRouter = require("./routes/budgets");
const expenseRouter = require("./routes/expense");
const incomeRouter = require("./routes/income");

const Expense = require("./models/expense");

app.get("/", (request,response)=>{
    console.log(Expense)
})

app.use("/api/v1/accounts", accountsRouter);
app.use("/api/v1/budgets", budgetsRouter);
app.use("/api/v1/expense",expenseRouter);
app.use("/api/v1/income",incomeRouter);
