const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    orderId : {
        type: Sequelize.STRING,
    },
    customerId: {
    type: Sequelize.STRING,
    },
    plan: {
        type: Sequelize.STRING,
    },
    product: {
        type: Sequelize.STRING
    },
    interval: {
        type: Sequelize.STRING
    },
    paidAt: {
        type: Sequelize.STRING,
        },
    amountDue: {
        type: Sequelize.STRING,
    },
    amountPaid: {
        type: Sequelize.STRING,
    },
    amountRemaining: {
        type: Sequelize.STRING,
    },
    invoicePDF: {
        type: Sequelize.STRING,
    },
    periodEnd: {
            type: Sequelize.STRING,
    },
    periodStart: {
        type: Sequelize.STRING,
},
periodEnd: {
    type: Sequelize.STRING,
},
status: {
    type: Sequelize.STRING,
}
    }
)

module.exports = Order
