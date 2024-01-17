import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query{
        hello: String
        welcome: String
    }
`);
export default schema;
