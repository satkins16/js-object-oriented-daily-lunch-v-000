let store = {customers: [], deliveries: [], employers: [], meals: []}

let customerId = 0

class Customer {
  constructor(name, employer) {
    this.id = ++customerId
    this.name = name

    store.customers.push(this)
  }
}

let mealId = 0

class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price

    store.meals.push(this)
  }
}

let customerId = 0

class Delivery {
  constructor(meal, customer) {
    this.mealId = meal.id
    this.customerId = customer.id

    store.deliveries.push(this)
  }
}
