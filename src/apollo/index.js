const {
    ApolloServer,
    gql
} = require('apollo-server');
const mongoose = require('mongoose');
const typeDef = require('./typeDef');
const resolver = require('./resolver');
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/dummy0`, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('db connection is okay');
    }
});

const server = new ApolloServer({
    typeDefs: typeDef,
    resolvers: resolver
});
server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});