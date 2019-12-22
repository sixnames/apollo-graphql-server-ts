import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import connect from "./database/connect";

const {
  MDB_USER,
  MDB_PASS,
  MDB_NAME,
} = process.env;

// Hard code some data to server over the GraphQL endpoint
const cards = [
  {
    title: 'Card one title',
    author: 'J.K. Rowling',
    body: 'This is the first card!',
  },
  {
    title: 'Card two title',
    author: 'Michael Crichton',
    body: 'This is the second card!',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    cards: () => cards,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(async ({ url }: { url: string }) => {
  await connect({db: `mongodb+srv://${MDB_USER}:${MDB_PASS}@cluster0-mds6x.mongodb.net/${MDB_NAME}`});
  console.log(`🚀  Server ready at ${url}`);
});
