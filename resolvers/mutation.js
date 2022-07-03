const Mutation = {
    createPost(_,data,{dataSources}){
        return dataSources.post.create(data)
    },
    deletePost(_,{id},{dataSources}){
        return dataSources.post.delete(id);
    },
    updatePost(_,{id,content},{dataSources}){
        return dataSources.post.update(id,content);
    }
}

module.exports = Mutation;