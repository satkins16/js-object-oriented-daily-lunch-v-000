let store = {customers: [], deliveries: [], employers: [], meals: []}

let customerId = 0

class Customer {
  constructor(name, employer) {
    this.id = ++customerId
    this.name = name

    store.customers.push(this)
  }
}
