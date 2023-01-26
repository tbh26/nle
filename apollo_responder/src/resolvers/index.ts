export const resolvers = {
    Query: {
        hello: () => {
            return {message: 'Hello graphql world.'};
        },
    }
}
