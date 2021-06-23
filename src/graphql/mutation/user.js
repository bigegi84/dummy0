var {
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
var UserType = require('../query/user');
var User = require('../../model/user')

const addUser = {
    type: UserType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            name: 'email',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, params) {
        const uModel = new User(params);
        const newUser = await uModel.save();
        if (!newUser) {
            throw new Error('Error')
        }
        return newUser
    }
}

const updateUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        email: {
            name: 'email',
            type: GraphQLString
        }
    },
    resolve: async function (root, param) {
        let updateUser = {};
        if (param.name) {
            updateUser.name = param.name
        }
        if (param.email) {
            updateUser.email = param.email
        }
        const uUser = await User.findByIdAndUpdate(param._id, updateUser, {
            new: true
        })
        console.log(uUser)
        if (!uUser) {
            throw new Error('Error')
        }
        return uUser
    }
}

const deleteUser = {
    type: UserType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
        const deleteUser = await User.findByIdAndRemove(param._id)
        if (!deleteUser) {
            throw new Error('Error');
        }
        return deleteUser
    }
}
module.exports = {
    addUser,
    updateUser,
    deleteUser
}