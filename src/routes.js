const router = require('express').Router()
const controller = require('./controller')

router.get("/", controller.welcome)
router.post("/", controller.send_email)

module.exports = router