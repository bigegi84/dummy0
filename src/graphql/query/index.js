const {
    GraphQLList,
    GraphQLObjectType
} = require('graphql');
const user = require('../../model/user')
const UserType = require('./user')

const DummyQueryRootType = new GraphQLObjectType({
    name: 'DummyAppSchema',
    description: "Dummy Application Schema Query Root",
    fields: () => ({
        user: {
            type: new GraphQLList(UserType),
            description: "List of all User",
            resolve: async function () {
                return await user.find({}, (err, auth) => {});
            }
        },
    })
});

module.exports = DummyQueryRootType