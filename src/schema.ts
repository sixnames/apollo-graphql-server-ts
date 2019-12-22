import { gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Card" type defines the queryable fields for every card in our data source.
  type Card {
    _id: ID!
    title: String
    author: String
    body: String
  }
  
  type Query {
    cards: [Card]
  }
  
  input CreateCardInput {
    title: String
    author: String
    body: String
  }
  
  type Mutation {
    CreateCard(input: CreateCardInput): Card
  }
  
  type Subscription {
    CardCreated: Card
  }
`;

export default typeDefs;
