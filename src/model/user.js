const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('user', user);