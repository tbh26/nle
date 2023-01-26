import { startApolloServer } from './server';
import { resolvers} from './resolvers';
import { readFileSync } from 'fs';
const typeDefs = readFileSync('./graphql/schema.graphql', 'utf8');

//import { gql } from 'apollo-server-core';
// const typeDefs = gql`
//     type Query {
//         hello: String
//     }
// `;

console.log('typeDefs: ', typeDefs);

startApolloServer(typeDefs, resolvers, 9876)
    .then(() => {
        console.debug('started apollo (express) server ');
    }).catch((e) => {
        if (e) {
            console.debug('apollo (express) server failed to start ', e);
        } else {
            console.debug('apollo (express) server failed to start ');
        }
});
