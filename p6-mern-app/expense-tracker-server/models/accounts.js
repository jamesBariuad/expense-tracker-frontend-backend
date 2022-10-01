const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema(
    {
        name: String,
        value: String
    }
);

module.exports = mongoose.model("Accounts", accountsSchema);