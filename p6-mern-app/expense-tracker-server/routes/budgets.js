const express = require("express");
const router = express.Router();

const Budgets = require("../models/budgets");

router.get("/", (request, response) => {
  Budgets.find().then((budgetsData) => {
    response.send(budgetsData);
  });
});

//get all budget data
router.get("/", (request, response) => {
  Budgets.find().then((budgetData) => {
    response.send(budgetData);
  });
});

//get one budget data
router.get("/:id", (request, response) => {
  Budgets.findById({ _id: request.params.id }).then((data) => {
    data===null?(response.status(404), response.send({message: `budget with id: ${request.params.id} does not exist!`})) : 
    response.send(data)
  
  });
});

//add a budget
router.post("/", (request, response) => {
  const newBudget = new Budgets(request.body);
  newBudget.save().then((data) => {
    data._id
      ? response.send({ success: "budget added succesfully!" })
      : response.send({ error: "failed to add budget!" });
  });
});

//edit a budget
router.put("/:id", (request, response) => {
  Budgets.updateOne({ _id: request.params.id }, [{ $set: request.body }]).then(
    (data) => {
      data.modifiedCount === 1
        ? response.send({ message: "budget updated!" })
        : response.send({
            message: "Error updating budget! Data already updated",
          });
    }
  );
});

//delete a budget
router.delete("/:id", (request, response) => {
  Budgets.deleteOne({ _id: request.params.id }).then((data) => {
    data.deletedCount === 1
      ? response.send({ message: "budget deleted!" })
      : (response.status(400),
        response.send({
          error: `budget with id: ${request.params.id} does not exist!`,
        }));
  });
});

module.exports = router;
