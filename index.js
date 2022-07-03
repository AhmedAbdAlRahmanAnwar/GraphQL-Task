require("dotenv/config");
const { ApolloServer, gql } = require('apollo-server');
const PostDataSource = require("./datasource/post");
const CommentDataSource = require("./datasource/comment");
const resolvers = require("./resolvers/index");
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connected successfully");
        server.listen(7000).then(({ url }) => {
            console.log(`Server ready at ${url}`);
        });
    })
    .catch(error => console.log("DB connection error " + error));

const schemaData = fs.readFileSync(path.join(__dirname, 'schema.graphql'),"utf-8")
const typeDefs = gql(schemaData);


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources(){
        return{
            post : new PostDataSource(),
            comment : new CommentDataSource(),
        }
    }
});