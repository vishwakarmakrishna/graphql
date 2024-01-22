import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

class Product {
  constructor(id, { name, desciption, price, soldout, stores }) {
    this.id = id;
    this.name = name;
    this.desciption = desciption;
    this.price = price;
    this.soldout = soldout;
    this.stores = stores;
  }
}

const productDatabase = {};

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8080, () => {
  console.log("Running server on localhost:8080");
});
