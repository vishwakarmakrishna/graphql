import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolvers from "./data/resolvers";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

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
