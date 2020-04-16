const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const speakeasy = require('speakeasy')
const nodemailer = require('nodemailer')

class UserController {
  static findOne(req, res, next) {
    const id = +req.params.id
    User.findOne({ where: { id } })
      .then((result) => {
        res.status(200).json({
          id: result.id,
          email: result.email,
          username: result.username,
        })
      })
      .catch((err) => {
        next(err)
      })
  }

  static register(req, res, next) {
    const { email, password, username } = req.body
    User.create({ email, password, username })
      .then((result) => {
        let payload = {
          email: result.email,
        }
        let access_token = jwt.sign(payload, process.env.SECRET)
        res.status(201).json({ access_token, msg: 'register successfully' })
      })
      .catch((err) => {
        next(err)
      })
  }

  static loginPassword(req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: { email },
    })
      .then((data) => {
        if (data) {
          let verified = bcrypt.compareSync(password, data.password)
          if (verified) {
            let payload = {
              id: data.id,
              email: data.email,
            }
            let access_token = jwt.sign(payload, process.env.SECRET)
            res.status(200).json({ access_token, msg: 'login successfully' })
          } else {
            next({
              msg: 'login failed',
              errors: 'invalid email or password',
            })
          }
        } else {
          next({
            msg: 'login failed',
            errors: 'invalid email or password',
          })
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static deleteUser(req, res, next) {
    let id = +req.params.id
    User.destroy({
      where: { id },
    })
      .then((result) => {
        res.status(200).json({ result, msg: 'success delete user' })
      })
      .catch((err) => {
        next(err)
      })
  }

  static updatePassword(req, res, next) {
    let id = +req.params.id
    let { password, new_password } = req.body
    User.findOne({
      where: { id },
    })
      .then((data) => {
        if (data) {
          let verified = bcrypt.compareSync(password, data.password)
          if (verified) {
            new_password = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10))
            return User.update({ password: new_password }, { where: { id } })
          } else {
            next({
              msg: 'change password failed',
              errors: 'invalid email or password',
            })
          }
        } else {
          next({
            msg: 'change password failed',
            errors: 'invalid email or password',
          })
        }
      })
      .then((result) => {
        res.status(200).json({ result, msg: 'success change password' })
      })
      .catch((err) => {
        next(err)
      })
  }

  static getOTP(req, res, next) {
    let { email } = req.body
    let configMail, transporter, emailTarget, mail
    configMail = {
      service: 'gmail',
      auth: {
        user: 'awarungq@gmail.com',
        pass: 'admin_warung123',
      },
    }
    User.findOne({ where: { email } })
      .then(async (result) => {
        if (result) {
          transporter = await nodemailer.createTransport(configMail)
          var token = speakeasy.totp({
            secret: email,
            encoding: 'base32',
          })
          emailTarget = email
          mail = {
            to: emailTarget,
            from: 'admin Warung Q',
            subject: `Authentication User`,
            html: `your OTP code is ${token}`,
          }
          transporter.sendMail(mail)
          res.status(200).json({ msg: 'ITP code has send, check your email' })
        } else {
          next({
            msg: 'send OTP failed',
            errors: 'email not registered',
          })
        }
      })
      .catch((err) => next(err))
  }

  static loginOTP(req, res, next) {
    let { otp, email } = req.body
    var verified = speakeasy.totp.verify({
      secret: email,
      encoding: 'base32',
      token: otp,
      window: 6,
    })
    if (verified) {
      let payload = {
        email,
      }
      let access_token = jwt.sign(payload, process.env.SECRET)
      res.status(200).json({ access_token, msg: 'login successfullly' })
    } else {
      next({
        msg: 'login failed',
        errors: 'wrong ITP code',
      })
    }
  }
}

module.exports = UserController
