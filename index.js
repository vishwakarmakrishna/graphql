import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = {
  hello: () => "hi im krishna",
  welcome: () => "welcome to graphql",
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
