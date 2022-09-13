const routes = require('express').Router()
const controller = require('../controller/controller')

routes.route("/api/catagories")
    .post(controller.create_catagories)
    .get(controller.get_catagories)

routes.route("/api/transactions")
    .get(controller.get_transactions)
    .post(controller.create_transactions)
    .delete(controller.delete_transaction)

module.exports = routes