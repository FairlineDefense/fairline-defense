const priceString = price => {
  let val = price / 100
  return `$ ${val}`
}

module.exports = priceString
