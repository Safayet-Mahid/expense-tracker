const model = require("../models/model")

// post:http://localhost:8080/api/catagories
async function create_catagories(req, res) {
    const Create = await new model.Catagories({
        type: "Investment",
        color: "#FCBE44" //dark
    })

    Create.save(function (err) {
        if (!err) return res.json(Create)
        return res.status(400).json({ message: `Error while making catagories : ${err}` })
    })
}

// get:http://localhost:8080/api/catagories
async function get_catagories(req, res) {
    let data = await model.Catagories.find({})

    let filter = data.map(singleData => Object.assign({ type: singleData.type, color: singleData.color }))

    return res.json(filter)
}


// post:http://localhost:8080/api/transaction
async function create_transactions(req, res) {
    if (!req.body) res.status(400).json({ message: "Post HTTP Data not provided" })
    let { name, type, amount } = req.body
    const Create = await new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
    })
    Create.save(function (err) {
        if (!err) return res.json(Create)
        return res.status(400).json({ message: `Error while creating transactions : ${err}` })
    })
}



// get:http://localhost:8080/api/transaction
async function get_transactions(req, res) {
    let data = await model.Transaction.find({})

    return res.json(data)
}

// delete:http://localhost:8080/api/transaction
async function delete_transaction(req, res) {
    if (!req.body) res.status(400).json({ message: "Request body not found" })

    await model.Transaction.deleteOne(req.body, function (err) {
        if (!err) res.json("Record Deleted ...!")
    }).clone().catch(function (err) {
        res.json("Error while deleting")
    })
}

module.exports = {
    create_catagories,
    get_catagories,
    get_transactions,
    create_transactions,
    delete_transaction
}