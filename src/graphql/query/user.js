const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'UserType',
    description: "This represent an User",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLString
        }
    })
});