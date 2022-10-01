const express = require("express");
const router = express.Router();

const Budgets = require("../models/budgets");

router.get("/", (request, response) => {
  Budgets.find().then((budgetsData) => {
    response.send(budgetsData);
  });
});

module.exports = router;
