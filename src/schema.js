const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');
const mutation = require('./graphql/mutation/index')
const BlogQueryRootType = require('./graphql/query/index')

const DummyAppSchema = new GraphQLSchema({
    query: BlogQueryRootType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
});

module.exports = DummyAppSchema;