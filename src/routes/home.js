const router = require('express').Router()

router.get('/', function (request, response) {
    response.send("hello world")
})

module.exports = router;
