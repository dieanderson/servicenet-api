const router = require('express').Router()

const UsersController = require('../controllers/users')

router.get('/users/:name?', UsersController.get)
router.post('/users', UsersController.post)
router.put('/users/:id', UsersController.put)
router.delete('/users/:id', UsersController.remove)

module.exports = router