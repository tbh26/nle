import { ApolloServer } from 'apollo-server-express';
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import express from 'express';
import http from 'http';

// export async function startApolloServer(typeDefs: TypeSource, resolvers: IResolvers<any, any, Record<string, any>, any>) {
export async function startApolloServer(typeDefs, resolvers, port = 6543) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer}),
            ApolloServerPluginLandingPageLocalDefault({embed: true}),
        ],
    });
    await server.start();
    server.applyMiddleware({app, path: '/api/graphql'});
    await new Promise<void>(resolve => httpServer.listen({port}, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
