const {Sequelize} = require('sequelize')

const dbUrl =
  process.env.DATABASE_URL ||
  process.env.DOCKER_DATABASE_URL ||
  'postgres://localhost:5432/postgres'

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
    "username": "postgres",
    "password": "fabricio0!",
    "database": "postgres",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres",
    
    }

const db = new Sequelize(config)

module.exports = db
