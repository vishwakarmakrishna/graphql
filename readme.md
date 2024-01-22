# GraphQL Project

This project implements a GraphQL server using Node.js. It includes functionality for querying and mutating product data. 

## Usage

To access the GraphQL endpoint, visit [http://localhost:8080/graphql](http://localhost:8080/graphql) in your browser or any GraphQL client.

## Project Structure

- **index.js:** This file contains the server setup and configuration. The GraphQL server is created using Express and is hosted at [http://localhost:8080](http://localhost:8080).

- **schema.js:** The GraphQL schema is defined in this file. It includes types for Product and Store, along with queries and mutations.

- **resolvers.js:** Resolvers are functions that handle the logic for the defined types and queries in the schema. This file contains the resolver functions for the project.

## Queries

### getProduct(id: ID)

Query to retrieve product details by providing the product ID.

```graphql
query {
  getProduct(id: "your_product_id") {
    id
    name
    description
    inventory
    price
    soldout
    stores {
      store
    }
  }
}
```

### getAllProduct

Query to retrieve details of all products in the database.

```graphql
query {
  getAllProduct {
    id
    name
    description
    inventory
    price
    soldout
    stores {
      store
    }
  }
}
```

## Mutation

### createProduct(input: ProductInput)

Mutation to create a new product by providing the product details as input in JSON format.

```graphql
mutation {
  createProduct(input: {
    name: "New Product"
    description: "Product description"
    price: 100.00
    soldout: ONSALE
    inventory: 100
    stores: [
      { store: "Store1" },
      { store: "Store2" }
    ]
  }) {
    id
    name
    description
    price
    inventory
    soldout
    stores {
      store
    }
  }
}

```
