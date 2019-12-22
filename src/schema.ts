import { gql } from 'apollo-server'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Card" type defines the queryable fields for every card in our data source.
  type Card {
    title: String
    author: String
    body: String
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "cards" query returns an array of zero or more Cards (defined above).
  type Query {
    cards: [Card]
  }
`;

export default typeDefs;
