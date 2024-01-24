import mongoose from "mongoose";

// Mongo connection
require("dotenv").config();

mongoose.Promise = global.Promise;
// Replace the connection string with your MongoDB Atlas connection string

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

// MongoDB models
const ProductModel = mongoose.model("Product", {
  name: String,
  description: String,
  price: Number,
  soldout: String,
  inventory: Number,
  stores: [{ store: String }],
});
export { ProductModel };
