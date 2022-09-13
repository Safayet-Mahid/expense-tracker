const mongoose = require("mongoose")

const Schema = mongoose.Schema

//catagories => fields => ["type","color"]
const catagories_model = new Schema({
    type: { type: String, default: "Investmant" },
    color: { type: String, default: "#FCBE44" }
})

//transactions => fields => ["name","type","amount","date"]

const transaction_model = new Schema({
    name: { type: String, default: "Anonymous" },
    type: { type: String, default: "Investment" },
    amount: { type: Number },
    date: { type: Date, default: Date.now }
})

const Catagories = mongoose.model("catagories", catagories_model)
const Transaction = mongoose.model("transactions", transaction_model)


exports.default = Transaction

module.exports = {
    Catagories,
    Transaction
}