import { ProductModel } from "./dbConnectors";
import { reject } from "lodash";
import mongoose from "mongoose"; // Import mongoose

const resolvers = {
  getProduct: async ({ id }) => {
    try {
      const objectId = new mongoose.Types.ObjectId(id); // Convert id to ObjectId

      const product = await ProductModel.findById(objectId);
      return product;
    } catch (err) {
      console.error(err);
      // Handle the error as needed, e.g., return an error response
      throw new Error(err);
    }
  },
  getAllProduct: async () => {
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      throw new Error("Error fetching products");
    }
  },
  createProduct: async ({ input }) => {
    try {
      const product = new ProductModel(input);
      await product.save();
      return product;
    } catch (error) {
      throw new Error("Error creating product");
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      const objectId = new mongoose.Types.ObjectId(id);
      const deletedProduct = await ProductModel.findByIdAndDelete(objectId);
      if (!deletedProduct) {
        throw new Error("Product not found");
      }
      return deletedProduct;
    } catch (error) {
      throw new Error("Error deleting product");
    }
  },

  updateProduct: async ({ id, input }) => {
    try {
      const objectId = new mongoose.Types.ObjectId(id);
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        objectId,
        { $set: input },
        { new: true }
      );

      if (!updatedProduct) {
        throw new Error("Product not found");
      }

      return updatedProduct;
    } catch (error) {
      throw new Error("Error updating product");
    }
  },
};
export default resolvers;
