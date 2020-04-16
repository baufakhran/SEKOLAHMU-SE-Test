'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = require('sequelize')
  const bcrypt = require('bcryptjs')

  class User extends Model {
    static associate(models) {}
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'invalid email address format',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6],
            msg: 'password must be at least 6 characters',
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'username cannot be null',
          },
          notEmpty: {
            args: true,
            msg: 'username cannot be empty',
          },
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user, options) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        },
        beforeUpdate: (user, options) => {
          console.log(user)
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        },
      },
    }
  )

  return User
}
