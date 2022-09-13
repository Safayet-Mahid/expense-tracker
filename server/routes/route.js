const routes = require('express').Router()
const controller = require('../controller/controller')

routes.route("/api/catagories").get(controller.create_catagories)

module.exports = routes