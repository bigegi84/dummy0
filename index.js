const express = require('express');
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./src/schema');
const mongoose = require('mongoose');
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

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log('server running at port', port)
});