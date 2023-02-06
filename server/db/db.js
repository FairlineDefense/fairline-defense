const {Sequelize} = require('sequelize')

const dbUrl =
  process.env.DATABASE_URL ||
  process.env.DOCKER_DATABASE_URL ||
  'postgres://localhost:5432/fairline'

const config = process.env.DATABASE_URL
  ? {
      logging: false,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true
        }
      }
    }
  : {
      logging: false
    }

const db = new Sequelize(dbUrl, config)

module.exports = db
