const user = require('../model/user')

module.exports = {
    Query: {
        user: () => {
            return user.find({});
        },
    },
    Mutation: {
        createUser: (root, param) => {
            const uModel = new user(param);
            return uModel.save();
        },
        updateUser: (root, param) => {
            return user.findByIdAndUpdate(param._id, {
                name: param.name,
                email: param.email
            }, {
                new: true
            })
        },
        deleteUser: (root, param) => {
            return user.findByIdAndRemove(param._id)
        }
    }
};