class Product {
  constructor(id, { name, description, inventory, price, soldout, stores }) {
    this.id = id;
    this.name = name;
    this.inventory = inventory;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const resolvers = {
  getProduct: ({ id }) => {
    return new Product(id, productDatabase[id]);
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex");
    productDatabase[id] = input;
    return new Product(id, input);
  },
};
export default resolvers;