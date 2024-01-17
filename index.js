import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = {
  product: () => {
    return {
      id: 34234,
      name: "Mobile App",
      desciption: "We will be using flutter for mobile app development.",
      price: 200000,
      soldout: false,
      stores: [
        {
          store: "india",
        },
        {
          store: "usa",
        },
      ],
    };
  },
};

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
