var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}
console.log(bestCustomer)
console.log(setBestCustomer())

function overwriteBestCustomer(params) {
  return (bestCustomer = 'maybe bob')
}
console.log(bestCustomer)

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'Bob'
  leastFavoriteCustomer = 'bob'
}
console.log(changeLeastFavoriteCustomer())
