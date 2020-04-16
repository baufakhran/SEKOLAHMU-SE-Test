const router = require('express').Router()

const UserController = require('../controller/UserController')
//for register user
router.post('/user/register', UserController.register)

//for login using password
router.post('/user/loginPassword', UserController.loginPassword)

//for generate token and send it to email for login
router.post('/user/generateOTP', UserController.getOTP)

//verify OTP from email for login
router.post('/user/verifyOTP', UserController.loginOTP)

//for change password
router.patch('/user/:id', UserController.updatePassword)

//for delete user
//assumption -- delete user just for SuperUser
router.delete('/user/:id', UserController.deleteUser)

//for findOne User
router.get('/user/:id', UserController.findOne)

module.exports = router
