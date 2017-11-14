let store = {customers: [], deliveries: [], employers: [], meals: []}

let customerId = 0

class Customer {
  constructor(name, employer) {
    this.id = ++customerId
    this.name = name

    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id
    })
  }

  meals() {
    return this.deliveries().filter(delivery => {
      return this.meal()
    })
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

let deliveryId = 0

class Delivery {
  constructor(meal, customer) {
    this.id = ++deliveryId
    if(meal) {
      this.mealId = meal.id
    }
    if(customer) {
      this.customerId = customer.id
    }

    store.deliveries.push(this)
  }

  meal() {
    return store.meals.find(meal => {
      return meal.id === this.mealId
    })
  }
}

let employerId = 0

class Employer {
  constructor(name) {
    this.id = ++employerId
    this.name = name

    store.employers.push(this)
  }
}
