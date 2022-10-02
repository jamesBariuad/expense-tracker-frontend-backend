const express = require("express");
const router = express.Router();

const Accounts = require("../models/accounts");

router.get("/", (request, response) => {
  Accounts.find().then((accountsData) => {
    response.send(accountsData);
  });
});

module.exports = router;
