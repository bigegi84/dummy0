const {
  gql
} = require('apollo-server');

module.exports = gql `
  type User {
    _id: String
    name: String
    email: String
  }
  type Query {
    user: [User]
  }
  type Mutation {
    createUser(name:String,email:String):User
    updateUser(_id:String,name:String,email:String):User
    deleteUser(_id:String):User
 }
`;