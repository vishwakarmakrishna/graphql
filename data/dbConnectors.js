import mongoose from "mongoose";

// Mongo connection
require("dotenv").config();

mongoose.Promise = global.Promise;
// Replace the connection string with your MongoDB Atlas connection string

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

const widgetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  inventory: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  stores: {
    type: Array,
  },
});
const Widgets = mongoose.model("widgets", widgetSchema);
// MongoDB models
const ProductModel = mongoose.model("Product", {
  name: String,
  description: String,
  price: Number,
  soldout: String,
  inventory: Number,
  stores: [{ store: String }],
});
export { Widgets, ProductModel };
