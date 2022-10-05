const express = require("express");
const router = express.Router();

const Expense = require("../models/expense");

//get all expense data
router.get("/", (request, response) => {
  Expense.find().then((expenseData) => {
    response.send(expenseData);
  });
});

//get one expense data
router.get("/:id", (request, response) => {
  Expense.findById({ _id: request.params.id }).then((data) => {
    data===null?(response.status(404), response.send({message: `expense with id: ${request.params.id} does not exist!`})) : 
    response.send(data)
  });
});

//add an expense
router.post("/", (request, response) => {
  const newExpense = new Expense(request.body);
  newExpense.save().then((data) => {
    data._id
      ? response.send({ success: "expense added succesfully!" })
      : response.send({ error: "failed to add expense!" });
  });
});

//edit an expense
router.put("/:id", (request, response) => {
  Expense.updateOne({ _id: request.params.id }, [{ $set: request.body }]).then(
    (data) => {
      data.modifiedCount === 1
        ? response.send({ message: "Expense updated!" })
        : response.send({
            message: "Error updating expense! Data already updated",
          });
    }
  );
});

//delete an expense
router.delete("/:id", (request, response) => {
  Expense.deleteOne({ _id: request.params.id }).then((data) => {
    data.deletedCount === 1
      ? response.send({ message: "Expense deleted!" })
      : (response.status(400),
        response.send({
          error: `Expense with id: ${request.params.id} does not exist!`,
        }));
  });
});

module.exports = router;
