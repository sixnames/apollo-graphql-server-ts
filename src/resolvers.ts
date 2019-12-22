import {
  getAllCards,
  GetAllCardsInput,
  createCard,
  CreateCardInput,
} from './controllers/card.controller';
import {pubsub} from './app';
import {CARD_CREATED} from './config';

const resolvers = {
  Query: {
    cards: (_: null, { input }: { input: GetAllCardsInput }) =>
      getAllCards({ ...input }),
  },
  Mutation: {
    CreateCard: (_: null, { input }: { input: CreateCardInput }) =>
      createCard({ ...input }),
  },
  Subscription: {
    CardCreated: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([CARD_CREATED]),
    },
  },
};

export default resolvers;
