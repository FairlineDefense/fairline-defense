const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  membershipNumber: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  security: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  military: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  veteran: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  lawEnforcement: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  alternatePhone: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  apartmentNumber: {
    type: Sequelize.STRING,
  },
  streetAddress: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  zipCode: {
    type: Sequelize.STRING,
  },
  emergencyContactName: {
    type: Sequelize.STRING,
  },
  emergencyContactPhone: {
    type: Sequelize.STRING,
  },
  emailVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  phoneVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  planActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  addSpouse: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  customerId: {
    type: Sequelize.STRING,
    unique: true,
  },
  emailReminders: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  emailInsider: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  emailNews: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  emailPromotions: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  accountSuspended: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accountFlagged: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accountWatchList: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  promotion: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  staff: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}
const setMembershipNumber = async user => {
  const makeNumber = () => {
    return Math.floor(100000000 + Math.random() * 900000000);
  }
  let membershipNumber = makeNumber()

  // while(!await User.findOne({where:{membershipNumber: membershipNumber}})) {
  //   membershipNumber = makeNumber()
  // }
  user.membershipNumber = String(membershipNumber)
  console.log(membershipNumber)
}

User.beforeCreate(setMembershipNumber)
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
User.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})
