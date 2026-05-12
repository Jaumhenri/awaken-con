export class Ticket {
  constructor({ id, name, description, price, installments, features, featured = false }) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.installments = installments
    this.features = features
    this.featured = featured
  }
}
