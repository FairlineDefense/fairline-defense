'use strict'

const db = require('../server/db')
const {User, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jeffreywood.dev@gmail.com',
      password: 'fakePassword123!',
      phone: '123-456-7890',
      firstName: 'Jeffrey',
      lastName: 'Wood',
      streetAddress: '123 5th Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10012',
      customerId: 'cus_MgDPAElk6VULUe',
      orderId: 1
    })
  ])
  const orders = await Promise.all([
    Order.create({
      id: 1,
      orderId: 'sub_1LwuHrIvvF6ba6jU5ulM4hkv',
      customerId: 'cus_MgDPAElk6VULUe',
      price: 'price_1LrnW0IvvF6ba6jUlHTzjnlt',
      product: 'prod_MazUmO6Dj2hOCR',
      interval: 'month',
      paidAt: '1666719156',
      amountDue: '1900',
      amountPaid: '1900',
      amountRemaining: '0',
      invoicePDF:
        'https://pay.stripe.com/invoice/acct_1Kv7G0IvvF6ba6jU/test_YWNjdF8xS3Y3RzBJdnZGNmJhNmpVLF9NZ0RQMmdEdUxwaTRINmQ2TEI1MUQ4WUZyVFZuNUlmLDU3MjU5OTU30200Ifh50QKP/pdf?s=ap',
      periodEnd: '1669397532',
      periodStart: '1666719132',
      status: 'paid',
      createdAt: '2022-10-22T14:30:38.351Z',
      updatedAt: '2022-10-22T14:30:38.401Z',
      userId: 1
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
