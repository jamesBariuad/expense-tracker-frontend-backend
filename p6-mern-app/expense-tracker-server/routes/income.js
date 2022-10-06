const express = require("express");
const router = express.Router();

const Income = require("../models/income");

//get all income data
router.get("/", (request, response) => {
  Income.find().then((incomeData) => {
    response.send(incomeData);
  });
});

//get one income data
router.get("/:id", (request, response) => {
  Income.findById({ _id: request.params.id }).then((data) => {
    data===null?(response.status(404), response.send({message: `income with id: ${request.params.id} does not exist!`})) : 
    response.send(data)
   
  });
});

//add an income
router.post("/", (request, response) => {
  const newincome = new Income(request.body);
  newincome.save().then((data) => {
    data._id
      ? response.send({ success: "income added succesfully!" })
      : response.send({ error: "failed to add income!" });
  });
});

//edit an income
router.put("/:id", (request, response) => {
  Income.updateOne({ _id: request.params.id }, [{ $set: request.body }]).then(
    (data) => {
      data.modifiedCount === 1
        ? response.send({ message: "income updated!" })
        : response.send({
            message: "Error updating income! Data already updated",
          });
    }
  );
});

//delete an income
router.delete("/:id", (request, response) => {
  Income.deleteOne({ _id: request.params.id }).then((data) => {
    data.deletedCount === 1
      ? response.send({ message: "income deleted!" })
      : (response.status(400),
        response.send({
          error: `income with id: ${request.params.id} does not exist!`,
        }));
  });
});


module.exports = router;
