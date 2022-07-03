const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');


const postSchema = fs.readFileSync(path.join(__dirname, 'schema.graphql'),"utf-8")
const typeDefs = gql(postSchema);


const posts = [
    {
        id:1,
        title: 'The Awakening',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
    },
    {
        id:2,
        title: 'City of Glass',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
    },
    {
        id:3,
        title: 'Glass Doors',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
    },
];


const resolvers = {
    Query: {
        post: (_,{id}) => {
            return posts.find(post => post.id == id);
        },
        posts: (_) => {
            return posts;
        },
    },
    Mutation:{
        createPost: (_,{id,title,text}) => {
            const newPost = {id,title,text};
            posts.push(newPost);
            return newPost;
        },
        deletePost: (_,{id}) => {
            const index = posts.findIndex(post => post.id == id);
            posts.splice(index, 1);
            return posts
        },
        updatePost: (_,{id,title,text}) => {
            const post = posts.find(post => post.id == id);
            post.title = title;
            post.text = text;
            return post;
        }
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});