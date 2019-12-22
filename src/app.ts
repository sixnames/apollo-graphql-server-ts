import { ApolloServer, PubSub } from 'apollo-server'
import typeDefs from './schema'
import connect from "./database/connect";
import resolvers from "./resolvers";

const {
  MDB_USER,
  MDB_PASS,
  MDB_NAME,
} = process.env;

export const pubsub = new PubSub();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(async ({ url }: { url: string }) => {
  await connect({db: `mongodb+srv://${MDB_USER}:${MDB_PASS}@cluster0-mds6x.mongodb.net/${MDB_NAME}`});
  console.log(`🚀  Server ready at ${url}`);
});
